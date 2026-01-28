import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jaison Jacob | CTO-in-Transition | Digital Transformation Leader",
  description:
    "Technology and program leader driving digital transformation across AI, ERP, cloud platforms, and enterprise delivery.",
   keywords: [
    "Jaison Jacob",
    "CTO",
    "Digital Transformation",
    "AI Strategy",
    "ERP",
    "Program Management",
    "Project Management",
    "Portfolio Management",
    "Technology Leader",
    "Dubai CTO"
  ],
  openGraph: {
    title: "Jaison Jacob | CTO-in-Transition",
    description:
      "Technology and program leader driving digital transformation across AI, ERP, cloud platforms, and enterprise delivery.",
    url: "https://jacobjaison.com",
    siteName: "Jaison Jacob",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3ZW2B01BDT"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3ZW2B01BDT');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <Nav />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
