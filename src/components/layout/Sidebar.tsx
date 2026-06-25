"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Package, 
  Users, 
  DollarSign, 
  Map, 
  Globe, 
  ShieldAlert,
  LogOut,
  Settings
} from "lucide-react";

const menuItems = [
  { name: "Dasbor", icon: LayoutDashboard, href: "/dashboard" },
  { name: "Manajemen Paket", icon: Package, href: "/manajemen-paket" },
  { name: "Data Jamaah", icon: Users, href: "/data-jamaah" },
  { name: "Keuangan", icon: DollarSign, href: "/keuangan" },
  { name: "Live Tracking", icon: Map, href: "/live-tracking" },
  { name: "GEOINT Map", icon: Globe, href: "/geoint-map" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col h-full shrink-0 shadow-xl z-20">
      <Link href="/" className="p-6 flex items-center gap-3 hover:opacity-80 transition-opacity">
        <div className="w-8 h-8 rounded-lg bg-yellow-400 flex items-center justify-center shrink-0">
          <Globe className="w-5 h-5 text-slate-900" />
        </div>
        <div className="font-bold text-white text-lg leading-tight">
          Executive
          <span className="block text-yellow-400 text-sm font-normal">Command Center</span>
        </div>
      </Link>

      <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all active:scale-95 ${
                isActive 
                  ? "bg-slate-800 text-yellow-400 font-medium" 
                  : "hover:bg-slate-800 hover:text-white"
              }`}
            >
              <item.icon className="w-5 h-5" />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-800">
        <button className="flex w-full items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white transition-all active:scale-95">
          <Settings className="w-5 h-5" />
          Pengaturan
        </button>
        <button className="flex w-full items-center gap-3 px-3 py-2.5 rounded-lg text-red-400 hover:bg-slate-800 hover:text-red-300 transition-all active:scale-95 mt-1">
          <LogOut className="w-5 h-5" />
          Keluar
        </button>
      </div>
    </aside>
  );
}
