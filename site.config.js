const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Henry",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Backend dev ops",
    bio: "I have a strong background in DDD and MSA, and I'm constantly open to adopting new skills and methodologies.",
    email: "dogfootmaster@gmail.com",
    linkedin: "jongsang-han",
    github: "bnjjong",
    instagram: "bnjjong",
  },
  projects: [
    {
      name: `morethan-log`,
      href: "https://morethan-e284f5l2i-bnjjongs-projects.vercel.app/",
    },
  ],
  // blog setting (required)
  blog: {
    title: "df.henry's blog",
    description: "Share my dev knowledge.",
    theme: "dark"
  },

  // CONFIG configration (required)
  link: "https://morethan-log.vercel.app",
  since: 2022, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "bnjjong/morethan-log",
      "issue-term": "og:title",
      label: "💬 Comments",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
