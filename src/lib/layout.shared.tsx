import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: "Vandrite Docs",
      url: "/",
    },
    links: [
      {
        text: "Website",
        url: "https://vandrite.com",
      },
      {
        text: "GitHub",
        url: "https://github.com/vandrite",
      },
    ],
    githubUrl: "https://github.com/vandrite",
  };
}
