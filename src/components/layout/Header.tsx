import { Bell, Search, User } from "lucide-react";

export function Header() {
  return (
    <header className="bg-white border-b border-slate-200 h-16 flex items-center justify-between px-8 shrink-0 z-10 sticky top-0">
      <div className="flex items-center bg-slate-100 rounded-lg px-4 py-2 w-96 focus-within:ring-2 ring-emerald-500/20 transition-all">
        <Search className="w-4 h-4 text-slate-400 mr-2" />
        <input 
          type="text" 
          placeholder="Cari jamaah, paket, atau invoice..." 
          className="bg-transparent border-none outline-none w-full text-sm text-slate-700 placeholder-slate-400"
        />
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4">
          <button className="relative text-slate-400 hover:text-slate-600 transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
          </button>
          
          <div className="h-6 w-px bg-slate-200"></div>
          
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="text-right hidden md:block">
              <p className="text-sm font-semibold text-slate-700 group-hover:text-slate-900 transition-colors font-serif">H. Ahmad</p>
              <p className="text-xs text-[#d4af37] font-medium">Direktur Utama</p>
            </div>
            <div className="w-9 h-9 rounded-lg bg-slate-200 flex items-center justify-center text-slate-600 border-2 border-transparent group-hover:border-[#d4af37] transition-all">
              <User className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
