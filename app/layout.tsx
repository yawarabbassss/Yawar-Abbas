import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SITE_DATA } from "@/data/siteData";
import { JsonLd } from "@/components/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0B0C16",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: `${SITE_DATA.personal.name} | ${SITE_DATA.personal.title} — Digital Growth & SEO`,
  description: SITE_DATA.personal.heroHeadline,
  keywords: [
    "Yawar Abbas",
    "SEO Specialist",
    "SEO Consultant",
    "SEO Specialist Pakistan",
    "Digital Growth Strategist",
    "Technical SEO",
    "On-Page SEO",
    "Off-Page SEO",
    "Generative Engine Optimization",
    "GEO",
    "AI Search Optimization",
    "SaaS SEO",
    "eCommerce SEO",
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
    <html lang="en" className={`scroll-smooth ${inter.variable} ${plusJakarta.variable}`}>
      <head>
        <JsonLd />
      </head>
      <body className="font-sans bg-[#FAFAFC] text-gray-900 selection:bg-indigo-500 selection:text-white antialiased">
        {children}
      </body>
    </html>
  );
}
