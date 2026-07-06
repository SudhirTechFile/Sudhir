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
  {
    id: "burj-khalifa",
    title: "",
    thumbnail: "media/photos/burj-khalifa.jpg",
    video: "media/videos/burj-khalifa.mp4",
    year: 2025,
    match: 100,
    rating: "LVR-Only",
    duration: "1m 29s",
    tags: ["Romantic", "Sightseeing"],
    aspect: "1280/960",
    description:
      "🏙️ We are expressing about our love and the how she is feeling after meeting with me ❤️ and going to the top the Burj Khalifa world tallest building. 🗼✨ Having a romantic and beautiful Peace of Mind 🧘‍♂️💖 and the time that we spent over and with this beautiful sweet memory talk. 🗣️💞",
  },
  {
    id: "dubai-diary",
    title: "",
    thumbnail: "media/photos/dubai-diary.jpg",
    video: "media/videos/dubai-diary.mp4",
    year: 2026,
    match: 100,
    rating: "LVR-Only",
    duration: "1m 03s",
    tags: ["Milestone", "Romantic"],
    aspect: "540/960",
    description:
      "💖 A memory love story collection from Dubai. ✨ This one year feel amazing with so many up and down 📈📉 but still we are being together 👩‍❤️‍👨 and brining so many things for the future. 🔮 Your are the love of my life 🥰 that bring so much love energy into our life ❤️‍🔥 and can't get over you all of those memory in our life. 📸 Niruu is the love of my life… 💍👩‍❤️‍💋‍👩",
  },
  {
    id: "emotional-talk",
    title: "",
    thumbnail: "media/photos/emotional-talk.jpg",
    video: "media/videos/emotional-talk.mp4",
    year: 2025,
    match: 100,
    rating: "LVR-Only",
    duration: "2m 45s",
    tags: ["Romantic", "Real"],
    aspect: "1706/960",
    description:
      "🥺 It is one of the cutest love moment of our days. ❤️ I am saying so so sorry 🙇‍♂️ and kissing you every where, 💋 bring you the best date night turn into emotional days 🌙✨ and such a love bonding moment. 🤝💞 I am really sorry for that I can't wait Hold you kiss and make you feel you are really mine 🫂💋 and I won't let you go anywhere babby. 🙅‍♂️❤️ It is also become once in life time curtness love emotional talk of ours love story. 📖❤️",
  },
  {
    id: "all-yours-niruu",
    title: "",
    thumbnail: "media/photos/all-yours-niruu.jpg",
    video: "media/videos/all-yours-niruu.mp4",
    year: 2025,
    match: 100,
    rating: "LVR-Only",
    duration: "0m 38s",
    tags: ["Romantic", "Love Notes"],
    aspect: "540/960",
    description:
      "💋 Love notes moment of us where kissing and loving isn't get enough for us. 💋 Missing you more than anything babby. 🥺 Come to me soon…….. ✈️❤️",
  },
  {
    id: "all-celebrating",
    title: "",
    thumbnail: "media/photos/all-celebrating.jpg",
    video: "media/videos/all-celebrating.mp4",
    year: 2026,
    match: 100,
    rating: "LVR-Only",
    duration: "4m 24s",
    tags: ["Milestone", "Romantic"],
    aspect: "540/960",
    description:
      "This is the diary of whatever we have celebrating so far till now. 📖❤️ You are my life goal milestone 🏆 That will drive our life to chase on each other day by day. 🏃‍♂️💞 The love is getting deeper into deeper 🌊💘 and I can make a lot of effort and a lot of workload for us to build a very great future. 🏗️🔮 Just be with me and keep celebrating the every single moment 🥂 and every highest and low together 📈📉 so we will be make it on for the future. 🫂✨ I really love you so much 🥰 and can't wait to hug you again. 🫂❤️",
  },
  {
    id: "desi-girl",
    title: "",
    thumbnail: "media/photos/desi-girl.jpg",
    video: "media/videos/desi-girl.mp4",
    year: 2025,
    match: 100,
    rating: "LVR-Only",
    duration: "0m 09s",
    tags: ["Romantic", "Traditional"],
    aspect: "540/960",
    description:
      "👑 My Queen is showing off the love Hennah 🌿✨ that is way beyond beautiful with Indian look. 🇮🇳💃 You are beauty make me blush 😳💕 and take my breath away 🫁❤️ and always loving you is not getting over enough. ♾️💋 Let's have a Indian look together in future 👩‍❤️‍👨🥻 and make cute video like this more 🎬💖 so that I can add it up into ourflix diary. 📺🎞️",
  },
  {
    id: "sunflower",
    title: "",
    thumbnail: "media/photos/sunflower.jpg",
    video: "media/videos/sunflower.mp4",
    year: 2026,
    match: 100,
    rating: "LVR-Only",
    duration: "0m 09s",
    tags: ["Romantic", "Sweet"],
    aspect: "540/960",
    description:
      "🌻 The theory of sunflower is you already know that, 💛 You are the way beyond of the love ✨ and Even though I will be far away 🛣️✈️ you will always be my sunshine ☀️ and you'll always be my love. 👑💞 Always being with you and loving you 🥰 I'll coming to you very soon ⏳✈️ or we are going to be together very soon 👩‍❤️‍👨 with that promise this flower is bring you a anniversary blessing. 🌻💍✨",
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
