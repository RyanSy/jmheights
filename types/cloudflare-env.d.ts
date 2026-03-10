// This file ensures TypeScript knows about Cloudflare Workers types
// when using @cloudflare/next-on-pages

export {};

declare global {
  interface CloudflareEnv {
    RESEND_API_KEY: string;
    CONTACT_EMAIL_TO: string;
    CONTACT_EMAIL_FROM: string;
    // GOOGLE_PLACES_API_KEY: string;
    // GOOGLE_PLACE_ID: string;
    NEXT_PUBLIC_SITE_URL: string;
    RATE_LIMIT_MAX: string;
    SPAM_MIN_SECONDS: string;
  }
}
