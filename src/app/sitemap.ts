import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://docs.vandrite.com";

  // Static pages
  const staticPages = [
    "",
    "/docs",
    "/docs/users",
    "/docs/users/getting-started",
    "/docs/users/features",
    "/docs/users/settings",
    "/docs/plugins",
    "/docs/plugins/getting-started",
    "/docs/plugins/manifest",
    "/docs/plugins/settings",
    "/docs/plugins/api",
    "/docs/plugins/api/commands",
    "/docs/plugins/api/events",
    "/docs/plugins/api/vault",
    "/docs/plugins/api/modals",
    "/docs/plugins/api/hotkeys",
    "/docs/plugins/api/editor",
    "/docs/plugins/api/theme",
  ];

  return staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : path === "/docs" ? 0.9 : 0.8,
  }));
}
