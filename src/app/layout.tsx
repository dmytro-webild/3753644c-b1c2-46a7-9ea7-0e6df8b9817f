import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Figtree } from "next/font/google";



export const metadata: Metadata = {
  title: 'Spicy Dragon Restaurant - Authentic Asian Cuisine',
  description: 'Experience authentic Chinese, Asian, and Seafood flavors at Spicy Dragon Restaurant in Bhayandar East. Online ordering, table reservations, and family dining in a luxurious setting.',
  keywords: ["Spicy Dragon, Chinese restaurant, Asian food, Seafood, Noodles, Fried Rice, Starters, Soups, Family Dining, Bhayandar East, Maharashtra, India, online order, table reservation, premium restaurant, luxury dining, authentic flavors"],
  openGraph: {
    "title": "Spicy Dragon Restaurant - Authentic Asian Cuisine",
    "description": "Experience authentic Chinese, Asian, and Seafood flavors at Spicy Dragon Restaurant in Bhayandar East. Online ordering, table reservations, and family dining in a luxurious setting.",
    "url": "https://www.spicydragon.com",
    "siteName": "Spicy Dragon Restaurant",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/crepe-rolls-russian-blinchik-served-with-tartar-sauce_114579-2431.jpg",
        "alt": "High-quality Chinese food photography"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Spicy Dragon Restaurant - Authentic Asian Cuisine",
    "description": "Experience authentic Chinese, Asian, and Seafood flavors at Spicy Dragon Restaurant in Bhayandar East. Online ordering, table reservations, and family dining in a luxurious setting.",
    "images": [
      "http://img.b2bpic.net/free-photo/crepe-rolls-russian-blinchik-served-with-tartar-sauce_114579-2431.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${figtree.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
