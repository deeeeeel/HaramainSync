import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-inter", // Keep variable name so we don't have to change globals.css
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HaramainSync | Orkestrasi Manajemen Umroh & Haji",
  description: "Orkestrasi Manajemen Umroh & Haji, Tersinkronisasi Real-Time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${jakarta.variable} ${playfair.variable} h-full antialiased`}>
      <body className="h-full font-sans text-slate-800 bg-slate-50 selection:bg-emerald-500/30">
        {children}
      </body>
    </html>
  );
}
