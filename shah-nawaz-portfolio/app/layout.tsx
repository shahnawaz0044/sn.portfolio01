import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://shahnawaz-portfolio.vercel.app";
const title = "Shah Nawaz | Digital Marketer & Researcher — SEO, GEO & AI Marketing";
const description =
  "Shah Nawaz is a Digital Marketer & Researcher specializing in SEO, GEO, AEO, AI Marketing, Google Business Optimization, and Social Media Marketing. Building digital growth strategies through research, technology, and creativity.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Shah Nawaz",
    "Digital Marketer",
    "SEO Specialist",
    "GEO",
    "Generative Engine Optimization",
    "AEO",
    "Answer Engine Optimization",
    "AI Marketing",
    "Google Business Optimization",
    "Social Media Marketing",
    "AI Graphic Design",
    "Digital Marketing Research",
  ],
  authors: [{ name: "Shah Nawaz" }],
  creator: "Shah Nawaz",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Shah Nawaz",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Shah Nawaz — Digital Marketer & Researcher",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="font-body antialiased bg-ink-950 text-bone-100 selection:bg-signal/30">
        {children}
      </body>
    </html>
  );
}
