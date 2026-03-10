export const runtime = "edge";

import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return Response.json(
      {
        error: "Google Places API not configured",
        reviews: [],
        rating: 4.9,
        totalReviews: 0,
      },
      { status: 200 }
    );
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total,name&key=${apiKey}&reviews_sort=newest`;

    const response = await fetch(url, {
      // Cache for 1 hour on Cloudflare CDN
      cf: {
        cacheTtl: 3600,
        cacheEverything: true,
      },
    } as RequestInit);

    if (!response.ok) {
      throw new Error(`Places API returned ${response.status}`);
    }

    const data = await response.json();

    if (data.status !== "OK") {
      console.error("Google Places API error:", data.status, data.error_message);
      return Response.json(
        {
          error: data.status,
          reviews: [],
          rating: 0,
          totalReviews: 0,
        },
        { status: 200 }
      );
    }

    const reviews = (data.result?.reviews || []).map(
      (review: {
        author_name: string;
        rating: number;
        text: string;
        time: number;
        profile_photo_url: string;
        relative_time_description: string;
      }) => ({
        author_name: review.author_name,
        rating: review.rating,
        text: review.text,
        time: review.time,
        profile_photo_url: review.profile_photo_url,
        relative_time_description: review.relative_time_description,
      })
    );

    return Response.json(
      {
        reviews,
        rating: data.result?.rating || 0,
        totalReviews: data.result?.user_ratings_total || 0,
        placeName: data.result?.name || "",
      },
      {
        headers: {
          "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=7200",
        },
      }
    );
  } catch (error) {
    console.error("Error fetching Google Reviews:", error);
    return Response.json(
      {
        error: "Failed to fetch reviews",
        reviews: [],
        rating: 0,
        totalReviews: 0,
      },
      { status: 200 }
    );
  }
}
