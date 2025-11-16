import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import Navigation from "@/components/Navigation";
import NavigationLoading from "@/components/NavigationLoading";
import { getSeriesSEO } from "@/src/data/seo";

const seoData = getSeriesSEO();

export const metadata: Metadata = {
  title: {
    default: seoData.metaTitle,
    template: `%s | Rediscover Series`,
  },
  description: seoData.metaDescription,
  keywords: seoData.keywords.join(', '),
  openGraph: {
    title: seoData.ogTitle,
    description: seoData.ogDescription,
    type: 'website',
    siteName: "Rediscover Series",
  },
  twitter: {
    card: 'summary_large_image',
    title: seoData.twitterTitle,
    description: seoData.twitterDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navigation />
        <Suspense fallback={null}>
          <NavigationLoading />
        </Suspense>
        <main>{children}</main>
      </body>
    </html>
  );
}

