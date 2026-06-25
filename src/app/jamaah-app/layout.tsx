"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Map, Calendar, User } from "lucide-react";

export default function JamaahLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const navItems = [
    { name: "Beranda", icon: Home, href: "/jamaah-app" },
    { name: "Panduan", icon: Map, href: "/jamaah-app/panduan" },
    { name: "Jadwal", icon: Calendar, href: "/jamaah-app/jadwal" },
    { name: "Profil", icon: User, href: "/jamaah-app/profil" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 font-sans">
      {/* Mobile Device Mockup Container */}
      <div className="w-full max-w-[400px] h-[850px] bg-slate-50 rounded-[3rem] shadow-2xl border-[12px] border-slate-900 relative overflow-hidden flex flex-col">
        
        {/* Dynamic Island / Notch Mockup */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-slate-900 rounded-b-3xl z-50"></div>

        {/* Content Area */}
        <div className="flex-1 overflow-hidden flex flex-col relative w-full h-full">
           {children}
        </div>

        {/* Bottom Navigation */}
        <div className="bg-white border-t border-slate-100 px-6 py-4 flex justify-between pb-8 shrink-0 relative z-50 shadow-[0_-10px_20px_rgba(0,0,0,0.02)]">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.name} href={item.href} className="flex flex-col items-center gap-1 w-16">
                <item.icon className={`w-6 h-6 transition-colors ${isActive ? 'text-emerald-600' : 'text-slate-400'}`} />
                <span className={`text-[10px] transition-colors ${isActive ? 'font-bold text-emerald-600' : 'font-medium text-slate-400'}`}>
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>

      </div>
    </div>
  );
}
