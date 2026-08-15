import type { Metadata } from "next";
import { AgentSidebar } from "@/components/layout/AgentSidebar";
import { AgentHeader } from "@/components/layout/AgentHeader";

export const metadata: Metadata = {
  title: "Agent Portal | HaramainSync",
  description: "Portal B2B untuk Agen Travel Umroh & Haji.",
};

export default function AgentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-[100dvh] flex overflow-hidden bg-slate-50 text-slate-900 font-sans">
      <AgentSidebar />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <AgentHeader />
        <main className="flex-1 overflow-y-auto p-8 flex flex-col">
          <div className="flex-1 max-w-7xl mx-auto w-full space-y-8">
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
