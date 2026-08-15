"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Command, 
  Fingerprint, 
  Landmark, 
  FolderKanban,
  LogOut,
  Settings,
  Earth
} from "lucide-react";

const menuItems = [
  { name: "Dasbor", icon: Command, href: "/agent" },
  { name: "Jamaah Saya", icon: Fingerprint, href: "/agent/jamaah" },
  { name: "Pencairan Komisi", icon: Landmark, href: "/agent/komisi" },
  { name: "Marketing Kit", icon: FolderKanban, href: "/agent/marketing" },
];

export function AgentSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-[#022c22] text-emerald-100/70 flex flex-col h-full shrink-0 shadow-xl z-20 border-r border-[#d4af37]/10">
      <Link href="/agent" className="p-6 flex items-center gap-3 hover:opacity-80 transition-opacity">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#d4af37] to-yellow-600 flex items-center justify-center shrink-0">
          <Earth className="w-5 h-5 text-white" />
        </div>
        <div className="font-bold text-white text-lg leading-tight font-serif">
          HaramainSync
          <span className="block text-[#d4af37] text-sm font-sans font-normal tracking-wide">Agent Portal</span>
        </div>
      </Link>

      <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
        {menuItems.map((item) => {
          // Exact match for /agent, partial match for sub-routes
          const isActive = item.href === "/agent" 
            ? pathname === "/agent" 
            : pathname.startsWith(item.href);

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all active:scale-95 ${
                isActive 
                  ? "bg-[#064e3b] text-[#d4af37] font-medium border border-[#d4af37]/20 shadow-sm" 
                  : "hover:bg-[#064e3b]/50 hover:text-white"
              }`}
            >
              <item.icon className="w-5 h-5" />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-[#d4af37]/10">
        <button className="flex w-full items-center gap-3 px-3 py-2.5 rounded-lg text-emerald-100/70 hover:bg-[#064e3b]/50 hover:text-white transition-all active:scale-95">
          <Settings className="w-5 h-5" />
          Pengaturan
        </button>
        <button className="flex w-full items-center gap-3 px-3 py-2.5 rounded-lg text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all active:scale-95 mt-1">
          <LogOut className="w-5 h-5" />
          Keluar
        </button>
      </div>
    </aside>
  );
}
