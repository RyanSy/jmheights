# JM Heights — Next.js Website

A full-stack Next.js website built for JM Heights, featuring:

- 🎨 **Sleek design** — blue, orange & white color scheme with bold industrial aesthetic
- 📬 **Contact form** — Resend API integration with multiple anti-spam layers
- ⭐ **Google Reviews** — Live reviews via Google Places API with fallback content
- 📝 **Blog** — Full blog with listing, detail pages, and 5 sample posts included
- 🖼️ **Gallery** — Filterable photo & video gallery with lightbox viewer
- 🗺️ **Sitemap** — Auto-generated `sitemap.xml` + `robots.txt`
- ☁️ **Cloudflare Pages** ready — configured for edge deployment

---

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

```bash
cp .env.example .env.local
```

Edit `.env.local` and fill in:

| Variable | Description | Where to get it |
|---|---|---|
| `RESEND_API_KEY` | For sending contact form emails | [resend.com](https://resend.com) |
| `CONTACT_EMAIL_TO` | Where to send form submissions | Your email |
| `CONTACT_EMAIL_FROM` | Sender address (must be verified domain) | Resend dashboard |
| `GOOGLE_PLACES_API_KEY` | For fetching Google Reviews | [Google Cloud Console](https://console.cloud.google.com) |
| `GOOGLE_PLACE_ID` | Your Google Business Place ID | [Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id) |
| `NEXT_PUBLIC_SITE_URL` | Your production URL | e.g. `https://jmheights.com` |

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Customization

### Business Information

Update your business details in these files:

| File | What to change |
|---|---|
| `components/Navbar.tsx` | Phone number, logo text |
| `components/Footer.tsx` | Phone, email, address, social links, hours |
| `components/sections/CTASection.tsx` | Phone number |
| `components/sections/ContactSection.tsx` | Contact details |
| `app/layout.tsx` | SEO metadata, keywords |

### Services

Edit `data/services.ts` to update your service offerings, descriptions, and features.

### Gallery

Edit `data/gallery-items.ts` to add your project photos and videos:

```ts
{
  id: "unique-id",
  type: "image",           // or "video"
  src: "/images/gallery/my-project.jpg",  // or Unsplash URL
  alt: "Description for accessibility",
  category: "roofing",    // roofing | gutters | siding | painting
  title: "Project Name",
  description: "Brief description",
  // For videos:
  videoId: "YOUTUBE_VIDEO_ID",
  thumbnail: "/images/gallery/video-thumb.jpg",
}
```

Upload images to `public/images/gallery/`.

### Blog Posts

Add new blog posts in `data/blog-posts.ts`:

```ts
{
  slug: "your-post-url-slug",
  title: "Your Post Title",
  excerpt: "Brief description for listing pages...",
  content: `<p>Your HTML content here...</p>`,
  date: "2025-01-15",
  author: "Author Name",
  category: "Roofing Tips",
  image: "https://your-image-url.com/image.jpg",
  readTime: 5,
}
```

---

## Deployment to Cloudflare Pages

### Option A: GitHub Integration (Recommended)

1. Push this project to a GitHub repository
2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com) → Pages → Create application
3. Connect your GitHub repository
4. Set build configuration:
   - **Framework preset**: Next.js
   - **Build command**: `npx @cloudflare/next-on-pages`
   - **Build output directory**: `.vercel/output/static`
   - **Node.js version**: `18` or higher
5. Add environment variables in Settings → Environment Variables
6. Deploy!

### Option B: CLI Deploy

```bash
# Build for Cloudflare Pages
npm run pages:build

# Deploy (requires Wrangler login)
npx wrangler login
npm run deploy
```

### Environment Variables in Cloudflare

Add these in **Cloudflare Dashboard → Pages → Your Project → Settings → Environment Variables**:

- `RESEND_API_KEY`
- `CONTACT_EMAIL_TO`
- `CONTACT_EMAIL_FROM`
- `GOOGLE_PLACES_API_KEY`
- `GOOGLE_PLACE_ID`
- `NEXT_PUBLIC_SITE_URL`

---

## Google Reviews Setup

1. Enable the **Places API** in [Google Cloud Console](https://console.cloud.google.com)
2. Create an API key with **Places API** enabled
3. Find your Place ID:
   - Go to [Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id)
   - Search for your business
   - Copy the Place ID (starts with `ChIJ...`)
4. Add both to your environment variables
5. The reviews are cached for 1 hour automatically

If the API isn't configured, the site shows 6 high-quality example reviews instead.

---

## Resend Email Setup

1. Create account at [resend.com](https://resend.com)
2. Add and verify your sending domain
3. Create an API key
4. Set `CONTACT_EMAIL_FROM` to an address at your verified domain
5. Set `CONTACT_EMAIL_TO` to where you want to receive submissions

---

## Anti-Spam Features

The contact form includes:

1. **Honeypot field** — Hidden field invisible to humans; bots fill it and get silently blocked
2. **Time-based check** — Form must be visible for 3+ seconds before submission
3. **Math CAPTCHA** — Simple arithmetic question (regenerates on each load)
4. **Server-side rate limiting** — Max 5 submissions per IP per hour
5. **Input sanitization** — All inputs cleaned server-side

---

## Project Structure

```
jmheights/
├── app/
│   ├── layout.tsx           # Root layout, fonts, metadata
│   ├── page.tsx             # Home/landing page
│   ├── globals.css          # Global styles, CSS variables
│   ├── sitemap.ts           # Auto-generated sitemap.xml
│   ├── robots.ts            # robots.txt
│   ├── blog/
│   │   ├── page.tsx         # Blog listing
│   │   └── [slug]/page.tsx  # Blog post detail
│   ├── gallery/
│   │   └── page.tsx         # Photo & video gallery
│   ├── contact/
│   │   └── page.tsx         # Contact page
│   └── api/
│       ├── contact/route.ts # Contact form (edge)
│       └── reviews/route.ts # Google Reviews (edge)
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ReviewsSection.tsx
│   │   ├── CTASection.tsx
│   │   ├── BlogPreview.tsx
│   │   └── ContactSection.tsx
│   └── ui/
│       └── ContactForm.tsx
├── data/
│   ├── blog-posts.ts        # All blog content
│   ├── gallery-items.ts     # Gallery photos/videos
│   └── services.ts          # Services data
├── types/
│   └── index.ts             # TypeScript types
├── wrangler.toml            # Cloudflare config
├── next.config.mjs
├── tailwind.config.ts
└── .env.example
```
