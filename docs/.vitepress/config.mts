import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Code Pai Rueay",
  // description: "A VitePress Site",
  head: [
    // ตรวจสอบว่าไฟล์ CR.svg อยู่ใน docs/public/CR.svg
    ["link", { rel: "icon", href: "/logo-back.png" }],
  ],
  themeConfig: {
    logo: "/logo-back.png",
    siteTitle: "Code Pai Rueay",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Blogs",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
