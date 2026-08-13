import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { SITE_DATA } from "@/data/siteData";
import { JsonLd } from "@/components/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0F3D2E",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: `${SITE_DATA.personal.name} | ${SITE_DATA.personal.title} — Growth Strategy`,
  description: SITE_DATA.personal.heroHeadline,
  keywords: [
    "Yawar Abbas",
    "SEO Specialist Pakistan",
    "SEO Specialist",
    "SEO Consultant",
    "SEO Services",
    "Technical SEO",
    "On-Page SEO",
    "Off-Page SEO",
    "SEO Strategy",
    "SEO Content Strategy",
    "AI Search Optimization",
    "Generative Engine Optimization",
    "GEO",
    "SEO for SaaS",
    "SEO for Startups",
    "Punjab Pakistan SEO"
  ],
  authors: [{ name: SITE_DATA.personal.name }],
  creator: SITE_DATA.personal.name,
  metadataBase: new URL("https://yawarabbas.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/images/yawar-abbas.jpg",
    apple: "/images/yawar-abbas.jpg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yawarabbas.com",
    title: `${SITE_DATA.personal.name} | ${SITE_DATA.personal.title}`,
    description: SITE_DATA.personal.heroHeadline,
    siteName: `${SITE_DATA.personal.name} Portfolio`,
    images: [
      {
        url: "/images/yawar-abbas.jpg",
        width: 800,
        height: 1000,
        alt: `${SITE_DATA.personal.name} - ${SITE_DATA.personal.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_DATA.personal.name} | ${SITE_DATA.personal.title}`,
    description: SITE_DATA.personal.heroHeadline,
    images: ["/images/yawar-abbas.jpg"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${outfit.variable}`}>
      <head>
        <JsonLd />
      </head>
      <body className="font-sans bg-white text-gray-900 selection:bg-brand-mint selection:text-brand-deep">
        {children}
      </body>
    </html>
  );
}
