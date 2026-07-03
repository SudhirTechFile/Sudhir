/* =========================================================================
   OURFLIX — DATA FILE
   -------------------------------------------------------------------------
   This is the ONLY file you should need to edit to make this your own.
   Swap every placeholder image/video URL below for your own files.

   HOW TO USE YOUR OWN MEDIA:
   1. Drop your video files into  media/videos/  and photos into media/photos/
   2. Change the "src" / "thumbnail" / "image" fields below to point at them,
      e.g.  src: "media/videos/beach-day.mp4"
            thumbnail: "media/photos/beach-day-cover.jpg"
   3. Edit the titles, descriptions, tags, years etc. to match your memories.

   Everything marked with 🔧 PLACEHOLDER is temporary demo content — replace
   it before sharing the final gift.
   ========================================================================= */

// ---------------------------------------------------------------------------
// SITE-WIDE SETTINGS
// ---------------------------------------------------------------------------
const SITE_CONFIG = {
  // The password required to enter the app.
  password: "6072025",

  // The name shown on the profile the user clicks to log in.
  profileName: "Our Story", // 🔧 PLACEHOLDER — e.g. "Sudhir & Ma"

  // Logo text in the top-left navbar.
  logoText: "OURFLIX", // 🔧 PLACEHOLDER — e.g. "MEMORIES"

  // Message shown in the big animated overlay right after a correct login.
  anniversaryMessage: "Happy 1 Year Anniversary! ❤️",
  anniversarySubMessage: "Here's to us, and everything still to come.",
};

// ---------------------------------------------------------------------------
// HERO / FEATURED BILLBOARD  (top of the Home tab)
// ---------------------------------------------------------------------------
const HERO = {
  title: "Us: A Love Story", // 🔧 PLACEHOLDER
  tag: "OURFLIX ORIGINAL",
  description:
    "One year ago, two people decided to become a story worth telling. This is the trailer for everything that came after — the laughs, the trips, the quiet nights, and the loud ones too.", // 🔧 PLACEHOLDER
  match: 100,
  year: 2026,
  rating: "LVR-Only",
  tags: ["Romantic", "Wholesome", "Real"],
  // 🔧 PLACEHOLDER — replace with your own couple video/photo
  video: "media/videos/hero.mp4",
  poster: "media/photos/hero.jpg",
};

// ---------------------------------------------------------------------------
// ROW 1 — TRENDING NOW (Our Favorite Videos)
// ---------------------------------------------------------------------------
const VIDEOS = [
  {
    id: "v1",
    title: "The Day We Met", // 🔧 PLACEHOLDER
    thumbnail: "media/photos/v1.jpg",
    video: "media/videos/v1.mp4",
    year: 2025,
    match: 99,
    rating: "LVR-Only",
    duration: "1m 12s",
    tags: ["Romantic", "First Date", "Nostalgic"],
    description:
      "Where it all began — the nervous laughs, the terrible jokes, and the moment we both knew this was different.", // 🔧 PLACEHOLDER
  },
  {
    id: "v2",
    title: "Weekend Getaway",
    thumbnail: "media/photos/v2.jpg",
    video: "media/videos/v2.mp4",
    year: 2025,
    match: 98,
    rating: "LVR-Only",
    duration: "2m 04s",
    tags: ["Adventure", "Travel", "Comedy"],
    description:
      "That impromptu road trip where we got lost twice and didn't mind at all.", // 🔧 PLACEHOLDER
  },
  {
    id: "v3",
    title: "Cooking Fails (Season 1)",
    thumbnail: "media/photos/v3.jpg",
    video: "media/videos/v3.mp4",
    year: 2025,
    match: 96,
    rating: "LVR-Only",
    duration: "0m 58s",
    tags: ["Comedy", "Wholesome"],
    description:
      "Proof that we should probably just order takeout, and that we'll laugh about it either way.", // 🔧 PLACEHOLDER
  },
  {
    id: "v4",
    title: "Late Night Talks",
    thumbnail: "media/photos/v4.jpg",
    video: "media/videos/v4.mp4",
    year: 2025,
    match: 100,
    rating: "LVR-Only",
    duration: "1m 30s",
    tags: ["Wholesome", "Real", "Romantic"],
    description:
      "The 2am conversations about everything and nothing that somehow became our favorite part of the day.", // 🔧 PLACEHOLDER
  },
  {
    id: "v5",
    title: "Dancing In The Kitchen",
    thumbnail: "media/photos/v5.jpg",
    video: "media/videos/v5.mp4",
    year: 2026,
    match: 97,
    rating: "LVR-Only",
    duration: "0m 45s",
    tags: ["Comedy", "Romantic"],
    description:
      "No music required, terrible rhythm optional, good mood guaranteed.", // 🔧 PLACEHOLDER
  },
];

// ---------------------------------------------------------------------------
// ROW 2 — AWARD-WINNING PHOTOS
// ---------------------------------------------------------------------------
const PHOTOS = [
  {
    id: "p1",
    title: "First Selfie Together",
    image: "media/photos/p1.jpg",
    year: 2025,
    match: 100,
    rating: "LVR-Only",
    tags: ["Romantic", "Nostalgic"],
    description: "The very first photo of us. Bad lighting, perfect moment.", // 🔧 PLACEHOLDER
  },
  {
    id: "p2",
    title: "Beach Day",
    image: "media/photos/p2.jpg",
    year: 2025,
    match: 99,
    rating: "LVR-Only",
    tags: ["Adventure", "Travel"],
    description: "Sunburnt, sandy, and completely happy.", // 🔧 PLACEHOLDER
  },
  {
    id: "p3",
    title: "That Fancy Dinner",
    image: "media/photos/p3.jpg",
    year: 2025,
    match: 98,
    rating: "LVR-Only",
    tags: ["Romantic", "Special Occasion"],
    description: "We dressed up, ordered too much, and didn't regret a bite.", // 🔧 PLACEHOLDER
  },
  {
    id: "p4",
    title: "Silly Face Contest",
    image: "media/photos/p4.jpg",
    year: 2025,
    match: 95,
    rating: "LVR-Only",
    tags: ["Comedy", "Wholesome"],
    description: "Nobody won. Everybody lost. It was perfect.", // 🔧 PLACEHOLDER
  },
  {
    id: "p5",
    title: "Rainy Day Cuddles",
    image: "media/photos/p5.jpg",
    year: 2026,
    match: 100,
    rating: "LVR-Only",
    tags: ["Wholesome", "Romantic"],
    description: "Best plans are sometimes no plans at all.", // 🔧 PLACEHOLDER
  },
  {
    id: "p6",
    title: "Concert Night",
    image: "media/photos/p6.jpg",
    year: 2026,
    match: 97,
    rating: "LVR-Only",
    tags: ["Adventure", "Comedy"],
    description: "We didn't know the words but we sang them anyway.", // 🔧 PLACEHOLDER
  },
];

// ---------------------------------------------------------------------------
// ROW 3 — SPECIAL MILESTONES  (also powers the "Our Story" timeline)
// ---------------------------------------------------------------------------
const MILESTONES = [
  {
    id: "m1",
    title: "The First Hello",
    date: "July 2025", // 🔧 PLACEHOLDER
    image: "media/photos/m1.jpg",
    year: 2025,
    match: 100,
    rating: "LVR-Only",
    tags: ["Milestone", "Romantic"],
    description: "The conversation that started everything.", // 🔧 PLACEHOLDER
  },
  {
    id: "m2",
    title: "First 'I Love You'",
    date: "September 2025",
    image: "media/photos/m2.jpg",
    year: 2025,
    match: 100,
    rating: "LVR-Only",
    tags: ["Milestone", "Romantic"],
    description: "Three words, zero hesitation.", // 🔧 PLACEHOLDER
  },
  {
    id: "m3",
    title: "Meeting The Family",
    date: "December 2025",
    image: "media/photos/m3.jpg",
    year: 2025,
    match: 96,
    rating: "LVR-Only",
    tags: ["Milestone", "Comedy"],
    description: "Nervous laughs turned into a full family group chat.", // 🔧 PLACEHOLDER
  },
  {
    id: "m4",
    title: "One Year Together",
    date: "July 2026",
    image: "media/photos/m4.jpg",
    year: 2026,
    match: 100,
    rating: "LVR-Only",
    tags: ["Milestone", "Special Occasion"],
    description: "365 days down, forever to go.", // 🔧 PLACEHOLDER
  },
];

// ---------------------------------------------------------------------------
// "OUR STORY" TAB — free-form narrative sections (optional, edit freely)
// ---------------------------------------------------------------------------
const OUR_STORY = {
  intro:
    "Every great show has an origin story. Here's ours.", // 🔧 PLACEHOLDER
  // Uses MILESTONES above to build the timeline automatically.
};
