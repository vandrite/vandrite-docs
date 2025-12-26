import { RootProvider } from "fumadocs-ui/provider/next";
import "./global.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Vandrite Documentation",
    template: "%s | Vandrite Docs",
  },
  description:
    "Official documentation for Vandrite. Learn how to use Vandrite to organize your studies and ideas, or build powerful plugins to extend its functionality.",
  metadataBase: new URL("https://docs.vandrite.com"),
  keywords: [
    "Vandrite",
    "documentation",
    "plugin development",
    "note-taking",
    "markdown",
    "kanban",
    "journal",
  ],
  authors: [{ name: "Vandrite Team" }],
  creator: "Vandrite",
  publisher: "Vandrite",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://docs.vandrite.com",
    siteName: "Vandrite Documentation",
    title: "Vandrite Documentation",
    description:
      "Official documentation for Vandrite. Learn how to use Vandrite to organize your studies and ideas, or build powerful plugins.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vandrite Documentation",
    description:
      "Official documentation for Vandrite. Learn how to use Vandrite to organize your studies and ideas, or build powerful plugins.",
    creator: "@vandrite",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
