import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://rudus.pages.dev",
  scopedStyleStrategy: "where",
  integrations: [
    starlight({
      title: "Rudus",
      description: "Parser combinator library for TypeScript.",
      editLink: {
        baseUrl: "https://github.com/Bikossor/Rudus",
      },
      lastUpdated: true,
      customCss: ["./src/styles/custom.css"],
      logo: {
        src: "./src/assets/Rudus-Logo.svg",
        alt: "Rudus",
      },
      favicon: "./public/favicon.svg",
      social: {
        github: "https://github.com/Bikossor/Rudus",
        stackOverflow: "https://stackoverflow.com/questions/tagged/Rudus",
      },
      sidebar: [
        {
          label: "Introduction",
          link: "/intro",
        },
        {
          label: "Getting Started",
          autogenerate: { directory: "getting-started" },
        },
        {
          label: "API Reference",
          autogenerate: { directory: "api" },
        },
      ],
    }),
  ],
});
