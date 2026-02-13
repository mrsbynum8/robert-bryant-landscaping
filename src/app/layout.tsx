import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google"; // Brand fonts
import { Chatbot } from "@/components/layout/Chatbot";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-heading",
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Robert Bryant Landscaping | Premier Atlanta Landscaping Services",
  description: "Atlanta's trusted landscaping crew. Lawn care, hardscaping, sod installation, and landscape design across Marietta, Acworth, Kennesaw, and Woodstock. Free estimates — just honest pricing.",
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LandscapingAndGardeningBusiness",
    "name": "Robert Bryant Landscaping",
    "image": "https://robertbryantlandscaping.com/images/hero.jpg",
    "telephone": "+1-706-710-4494",
    "url": "https://robertbryantlandscaping.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Serving North Georgia",
      "addressLocality": "Marietta",
      "addressRegion": "GA",
      "postalCode": "30060",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 33.9526,
      "longitude": -84.5499
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "priceRange": "$$"
  };

  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${lato.variable} antialiased font-sans`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Chatbot />
      </body>
    </html>
  );
}
