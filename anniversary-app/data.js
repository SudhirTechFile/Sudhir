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
  title: "", // intentionally blank — no on-screen title for this clip
  tag: "OURFLIX ORIGINAL",
  description:
    "This is the story of my proposal from exactly one year ago. 🎡✨ I brought the most beautiful girl in the world to the tallest observation wheel, Ain Dubai. 🗺️❤️ She really didn't know that I was going to propose to her with a letter. 📜🤫 I just grabbed her hand 🤝 and passed her this letter and everything you can see in this video is how she went from being my girlfriend into my life's beautiful joy of the happiest life forever. 💖💍👩‍❤️‍👨 There are a lot of promises and lifelong commitments I've written in that letter, 📝🔒 and everything can be felt through this video, again and again. 🔄🥺 It truly feels like a once-in-a-lifetime moment. 🕊️✨",
  match: 100,
  year: 2025,
  rating: "LVR-Only",
  tags: ["Romantic", "Milestone", "Engagement"],
  video: "media/videos/proposal.mp4",
  poster: "media/photos/proposal.jpg",
  aspect: "540/960",
};

// ---------------------------------------------------------------------------
// ROW 1 — TRENDING NOW (Our Favorite Videos)
// ---------------------------------------------------------------------------
const VIDEOS = [
  {
    id: "before-met-talk",
    title: "", // intentionally blank — no on-screen title for this clip
    thumbnail: "media/photos/before-met-talk.jpg",
    video: "media/videos/before-met-talk.mp4",
    year: 2024,
    match: 100,
    rating: "LVR-Only",
    duration: "0m 38s",
    tags: ["Long Distance", "Romantic"],
    aspect: "444/960",
    description:
      "📞 Always fill with love talking 24/7 from London to Dubai. 🇬🇧✈️🇦🇪 You are the only love and support 💕 that really fill me during my emptiness. 🫂 You really complete me my dear with pure heart soul ✨ Such a loving caring and always chasing on this relationship. 🏃‍♂️❤️ We are getting closer to closer to each other….. ⚡️💞",
  },
  {
    id: "first-met-welcome",
    title: "",
    thumbnail: "media/photos/first-met-welcome.jpg",
    video: "media/videos/first-met-welcome.mp4",
    year: 2024,
    match: 100,
    rating: "LVR-Only",
    duration: "0m 43s",
    tags: ["First Meeting", "Romantic", "Wholesome"],
    aspect: "540/960",
    description:
      "🤵‍♂️ A man is nervously waiting for his girl, 💓 Holding a bunch of rose bouquet 💐 and smiling towards her when He saw the beautiful Gorgeous A stunning ladies wearing in the black dress outfit at DXB-3, 🖤✈️ Nervously and Shy at the same time 🙈 run towards her handover the rose bouquet 💐 and welcome her with hand decor of rose Patels. 🌹✨",
  },
  {
    id: "count-dates",
    title: "",
    thumbnail: "media/photos/count-dates.jpg",
    video: "media/videos/count-dates.mp4",
    year: 2024,
    match: 99,
    rating: "LVR-Only",
    duration: "0m 20s",
    tags: ["Romantic", "Adventure"],
    aspect: "540/960",
    description:
      "🗓️ I counted days, I counted miles 🛣️ To see you there, to see you there 👀 It's been a long time coming, but ⏳ It's you and me, that's my whole world 🌍 They whisper in the hallway, \"She's 👥 a best, best love girl\" (Okay) 👑 The whole universe is rolling fake dice 🎲 You play love life, you win then best prizes 🏆❤️ It's you and me, there's nothing like this ♾️ Miss Verma and The Love Princess 👸❤️👸",
  },
  {
    id: "mine-cinderella",
    title: "",
    thumbnail: "media/photos/mine-cinderella.jpg",
    video: "media/videos/mine-cinderella.mp4",
    year: 2025,
    match: 98,
    rating: "LVR-Only",
    duration: "0m 17s",
    tags: ["Fairytale", "Sweet"],
    aspect: "540/960",
    // 🔧 PLACEHOLDER — write your own caption for this one whenever you're ready
    description:
      "👑 From watching Cinderella's fairytale as a kid to living my own real one with you. ✨ Some stories really do come true. 💫🏰❤️",
  },
  {
    id: "tiktok",
    title: "",
    thumbnail: "media/photos/tiktok.jpg",
    video: "media/videos/tiktok.mp4",
    year: 2025,
    match: 98,
    rating: "LVR-Only",
    duration: "0m 36s",
    tags: ["Fun", "Candid"],
    aspect: "542/960",
    description:
      "📱 It is one of first tik tok of my life with the most amazing person. 🥰 There are a lot of shooting content together left for the future. 🎬📸 Dyingly missing 🥺 and waiting for you to come over here and shoot more Tik Tok content, fun content together like this. ✨ Can't get over this beautiful sweet memories. 🍭❤️",
  },
  {
    id: "singinlove",
    title: "",
    thumbnail: "media/photos/singinlove.jpg",
    video: "media/videos/singinlove.mp4",
    year: 2025,
    match: 100,
    rating: "LVR-Only",
    duration: "0m 41s",
    tags: ["Romantic", "Cuddles", "Wholesome"],
    aspect: "540/960",
    description:
      "🎶 One of the cutest cuddle in making love into my arm, 🫂 feel you and hold you tide 🔒 that I will be with you lifetime coz you got all my love……. 💖♾️",
  },
  {
    id: "cutecute",
    title: "",
    thumbnail: "media/photos/cutecute.jpg",
    video: "media/videos/cutecute.mp4",
    year: 2026,
    match: 100,
    rating: "LVR-Only",
    duration: "1m 02s",
    tags: ["Romantic", "Milestone"],
    aspect: "540/960",
    description:
      "💖 The best part of the life is hearing of you saying \"I love you Sudhir\". 🥰 This is one of the most memorable and cute romanticizing video of our life till now. 👩‍❤️‍👨✨ A lot more fun and Love is coming in the future. 🌟 Can't wait Make a lot of memory again and again. 🔄📸 I can even believe that this is almost a year now. 🗓️💞",
  },
  {
    id: "ourmoment",
    title: "",
    thumbnail: "media/photos/ourmoment.jpg",
    video: "media/videos/ourmoment.mp4",
    year: 2025,
    match: 99,
    rating: "LVR-Only",
    duration: "0m 51s",
    tags: ["Romantic", "Date Night"],
    aspect: "540/960",
    description:
      "💞 It is our moment where all the background lighting affect ✨ Sure the pure showering of love on us. 🌧️❤️ I love you Infinity ♾️ I love you more than anything 🌎 I love you till the end 🏁 I love you on everything. 💘",
  },
  {
    id: "endless-desert",
    title: "",
    thumbnail: "media/photos/endless-desert.jpg",
    video: "media/videos/endless-desert.mp4",
    year: 2025,
    match: 97,
    rating: "LVR-Only",
    duration: "0m 38s",
    tags: ["Adventure", "Travel"],
    aspect: "1706/960",
    description:
      "🏜️ Come here and again let's go lost into the desert again, 🌵 joy with the endless fun ride 🏎️💨 with your tide hug 🫂 and enjoying the beautiful scenery in the middle of desert. 🌅💛",
  },
  // 🔧 4 more videos to come — copy the shape above for each new one.
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
