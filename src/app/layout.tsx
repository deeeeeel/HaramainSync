import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portal Akses | Travel Umroh & Haji",
  description: "Sistem Terintegrasi Digitalisasi Travel Umroh & Haji.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} h-full antialiased`}>
      <body className="h-full font-sans text-slate-100 bg-slate-950">
        {children}
      </body>
    </html>
  );
}
