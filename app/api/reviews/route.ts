export const runtime = "edge";

import type { NextRequest } from "next/server";

// ─── Types ────────────────────────────────────────────────────────────────────

type StarRating = "ONE" | "TWO" | "THREE" | "FOUR" | "FIVE" | "STAR_RATING_UNSPECIFIED";

interface GBPReviewer {
  profilePhotoUrl?: string;
  displayName?: string;
  isAnonymous?: boolean;
}

interface GBPReview {
  name: string;
  reviewId: string;
  reviewer: GBPReviewer;
  starRating: StarRating;
  comment?: string;
  createTime: string;
  updateTime: string;
}

interface GBPReviewsResponse {
  reviews?: GBPReview[];
  averageRating?: number;
  totalReviewCount?: number;
  nextPageToken?: string;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

const STAR_RATING_MAP: Record<StarRating, number> = {
  FIVE: 5,
  FOUR: 4,
  THREE: 3,
  TWO: 2,
  ONE: 1,
  STAR_RATING_UNSPECIFIED: 0,
};

function starRatingToNumber(rating: StarRating): number {
  return STAR_RATING_MAP[rating] ?? 0;
}

function formatRelativeTime(isoString: string): string {
  const diffMs = Date.now() - new Date(isoString).getTime();
  const diffDays = Math.floor(diffMs / 86_400_000);

  if (diffDays === 0) return "today";
  if (diffDays === 1) return "1 day ago";
  if (diffDays < 7) return `${diffDays} days ago`;

  const weeks = Math.floor(diffDays / 7);
  if (diffDays < 30) return `${weeks} week${weeks !== 1 ? "s" : ""} ago`;

  const months = Math.floor(diffDays / 30);
  if (diffDays < 365) return `${months} month${months !== 1 ? "s" : ""} ago`;

  const years = Math.floor(diffDays / 365);
  return `${years} year${years !== 1 ? "s" : ""} ago`;
}

// ─── Auth — exchange refresh token for a short-lived access token ─────────────

async function fetchAccessToken(
  clientId: string,
  clientSecret: string,
  refreshToken: string
): Promise<string> {
  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      refresh_token: refreshToken,
      grant_type: "refresh_token",
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Token refresh failed (${res.status}): ${body}`);
  }

  const { access_token } = await res.json();
  return access_token as string;
}

// ─── Route Handler ────────────────────────────────────────────────────────────

export async function GET(_request: NextRequest) {
  const clientId = process.env.GOOGLE_OAUTH_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_OAUTH_CLIENT_SECRET;
  const refreshToken = process.env.GOOGLE_OAUTH_REFRESH_TOKEN;
  // e.g. "accounts/123456789"
  const accountId = process.env.GOOGLE_BUSINESS_ACCOUNT_ID;
  // e.g. "locations/987654321"
  const locationId = process.env.GOOGLE_BUSINESS_LOCATION_ID;

  if (!clientId || !clientSecret || !refreshToken || !accountId || !locationId) {
    return Response.json(
      {
        error: "Google Business Profile API not configured",
        reviews: [],
        rating: 4.9,
        totalReviews: 0,
      },
      { status: 200 }
    );
  }

  try {
    const accessToken = await fetchAccessToken(clientId, clientSecret, refreshToken);

    // Business Profile API v4 — newest reviews first, up to 50 per page
    const url =
      `https://mybusiness.googleapis.com/v4/${accountId}/${locationId}/reviews` +
      `?pageSize=50&orderBy=updateTime+desc`;

    const response = await fetch(url, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    if (!response.ok) {
      const body = await response.text();
      throw new Error(`Business Profile API error (${response.status}): ${body}`);
    }

    const data: GBPReviewsResponse = await response.json();

    const reviews = (data.reviews ?? []).map((review) => ({
      author_name: review.reviewer?.displayName ?? "Anonymous",
      rating: starRatingToNumber(review.starRating),
      text: review.comment ?? "",
      time: new Date(review.createTime).getTime() / 1000,
      profile_photo_url: review.reviewer?.profilePhotoUrl ?? "",
      relative_time_description: formatRelativeTime(review.createTime),
    }));

    return Response.json(
      {
        reviews,
        rating: data.averageRating ?? 0,
        totalReviews: data.totalReviewCount ?? 0,
      },
      {
        headers: {
          // Cache at the CDN edge for 1 hour; serve stale for up to 2 hours
          // while revalidation happens in the background.
          "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=7200",
        },
      }
    );
  } catch (error) {
    console.error("Error fetching Google Business Profile reviews:", error);
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