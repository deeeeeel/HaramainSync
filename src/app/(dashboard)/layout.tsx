import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Executive Command Center | HaramainSync",
  description: "Orkestrasi Manajemen Umroh & Haji, Tersinkronisasi Real-Time.",
};

import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-[100dvh] flex overflow-hidden bg-slate-50 text-slate-900 font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-8 flex flex-col">
          <div className="flex-1">
            {children}
          </div>
          <footer className="mt-8 text-center text-xs text-slate-500 pt-4 border-t border-slate-200">
            Digitalisasi Menyeluruh Travel Umroh & Haji &bull; <a href="https://studiosatuakun.id/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 transition-colors font-medium">PT Studio Satu Akun</a>
          </footer>
        </main>
      </div>
    </div>
  );
}
