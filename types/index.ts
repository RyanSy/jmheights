export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  image: string;
  readTime: number;
}

export interface GalleryItem {
  id: string;
  type: "image" | "video";
  src: string;
  thumbnail?: string;
  alt: string;
  category: string;
  title?: string;
  description?: string;
  videoId?: string;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export interface Review {
  author_name: string;
  rating: number;
  text: string;
  time: number;
  profile_photo_url: string;
  relative_time_description?: string;
}

export interface GooglePlacesResponse {
  result: {
    reviews: Review[];
    rating: number;
    user_ratings_total: number;
    name: string;
  };
  status: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  website: string;
  formLoadTime: number;
  mathAnswer: number;
  mathQuestion: string;
}
