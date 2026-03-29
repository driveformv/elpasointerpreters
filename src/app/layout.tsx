import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "El Paso's Professional English-Spanish Interpreters | Book Now",
  description:
    "Professional English-Spanish and Spanish-English interpreters in El Paso, TX. Certified for legal, medical, and business settings. Same-day availability. Book today.",
  keywords: [
    "interpreter services El Paso TX",
    "Spanish interpreter El Paso",
    "English Spanish interpreter",
    "certified interpreter El Paso",
    "legal interpreter El Paso",
    "medical interpreter El Paso",
    "court interpreter El Paso TX",
    "USCIS interpreter El Paso",
    "translation services El Paso",
    "Fort Bliss interpreter",
    "Borderplex interpreter services",
    "immigration interpreter El Paso",
    "deposition interpreter El Paso TX",
  ],
  authors: [{ name: "El Paso Interpreters" }],
  openGraph: {
    title: "El Paso's Professional English-Spanish Interpreters | Book Now",
    description:
      "Professional English-Spanish and Spanish-English interpreters in El Paso, TX. Certified for legal, medical, and business settings. Same-day availability.",
    url: "https://elpasointerpreters.com",
    siteName: "El Paso Interpreters",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "El Paso's Professional English-Spanish Interpreters",
    description:
      "Certified interpreters for legal, medical, and business settings. Same-day availability across the border region.",
  },
  metadataBase: new URL("https://elpasointerpreters.com"),
  alternates: {
    canonical: "https://elpasointerpreters.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
