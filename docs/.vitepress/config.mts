import { defineConfig } from "vitepress";
import { generateSidebar } from "vitepress-sidebar";

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
      // { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: generateSidebar([
      {
        documentRootPath: "/docs",
        scanStartLevel: 1,
        collapseDepth: 1,
      },
    ]),

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
