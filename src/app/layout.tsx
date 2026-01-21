import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jaison Jacob | CTO-in-Transition",
  description:
    "Technology and program leader driving digital transformation across AI, ERP, cloud platforms, and enterprise delivery.",
  openGraph: {
    title: "Jaison Jacob | CTO-in-Transition",
    description:
      "Technology and program leader driving digital transformation across AI, ERP, cloud platforms, and enterprise delivery.",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
