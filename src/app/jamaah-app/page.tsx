import { 
  MapPin, 
  Volume2, 
  Map, 
  PlayCircle, 
  RefreshCcw, 
  Home, 
  Calendar, 
  User,
  ChevronRight,
  ArrowLeft
} from "lucide-react";
import Link from "next/link";

export default function JamaahApp() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 font-sans">
      
      {/* Mobile Device Mockup Container */}
      <div className="w-full max-w-[400px] h-[850px] bg-slate-50 rounded-[3rem] shadow-2xl border-[12px] border-slate-900 relative overflow-hidden flex flex-col">
        
        {/* Dynamic Island / Notch Mockup */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-slate-900 rounded-b-3xl z-50"></div>

        {/* App Header */}
        <div className="bg-emerald-600 text-white pt-12 pb-6 px-6 rounded-b-3xl shadow-md shrink-0 relative">
          <Link href="/" className="absolute top-12 right-6 text-emerald-200 hover:text-white">
            <span className="text-xs font-bold bg-emerald-700 px-2 py-1 rounded">EXIT TO PORTAL</span>
          </Link>
          <p className="text-emerald-100 text-sm">Assalamu'alaikum,</p>
          <h1 className="text-2xl font-bold mb-4">H. Ahmad Zainuddin</h1>
          
          <div className="flex items-center gap-2 text-sm bg-emerald-700/50 w-fit px-3 py-1.5 rounded-full border border-emerald-500/30">
            <MapPin className="w-4 h-4 text-emerald-300" />
            <span>Makkah Al-Mukarramah</span>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto pb-24 px-5 pt-6 space-y-6">
          
          {/* Info Kamar & Bus */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex gap-4">
            <div className="flex-1 text-center border-r border-slate-100">
              <p className="text-xs text-slate-500 mb-1">Hotel & Kamar</p>
              <p className="font-bold text-slate-800">Dar Al Tawhid (402)</p>
            </div>
            <div className="flex-1 text-center">
              <p className="text-xs text-slate-500 mb-1">Bus Rombongan</p>
              <p className="font-bold text-slate-800">BUS-A1 (Ust. Khalid)</p>
            </div>
          </div>

          {/* Panduan Ibadah Pintar (Location Based) */}
          <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl p-5 shadow-lg text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-20">
              <MapPin className="w-16 h-16" />
            </div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
              <p className="text-xs font-bold uppercase tracking-wider text-amber-100">Deteksi GPS Pintar</p>
            </div>
            <h3 className="text-lg font-bold mb-1">Anda Memasuki Miqat</h3>
            <p className="text-sm text-amber-100 mb-4 line-clamp-2">Lokasi Yalamlam terdeteksi. Silakan berniat ihram dan membaca Talbiyah.</p>
            <button className="flex items-center justify-center gap-2 w-full bg-white text-amber-600 rounded-xl py-3 font-bold shadow-sm active:scale-95 transition-all">
              <Volume2 className="w-5 h-5" />
              Putar Audio Niat & Talbiyah
            </button>
          </div>

          {/* Tawaf & Sa'i Counter */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-slate-800">Digital Counter Tawaf</h3>
              <RefreshCcw className="w-4 h-4 text-slate-400" />
            </div>
            <div className="flex items-center justify-between">
              <div className="w-24 h-24 rounded-full border-4 border-emerald-100 flex items-center justify-center relative">
                {/* SVG Progress Circle Mockup */}
                <svg className="absolute inset-0 w-full h-full -rotate-90">
                  <circle cx="48" cy="48" r="44" fill="none" stroke="#10b981" strokeWidth="4" strokeDasharray="276" strokeDashoffset="158" className="transition-all duration-500" />
                </svg>
                <div className="text-center relative z-10">
                  <p className="text-3xl font-bold text-emerald-600 leading-none">3</p>
                  <p className="text-[10px] text-slate-400 font-medium">dari 7</p>
                </div>
              </div>
              <button className="w-32 h-16 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-2xl flex items-center justify-center text-3xl font-bold active:bg-emerald-100 transition-colors shadow-sm">
                +1
              </button>
            </div>
          </div>

          {/* Digital Itinerary */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-slate-800">Itinerary Hari Ini</h3>
              <Link href="#" className="text-xs font-bold text-emerald-600 flex items-center">
                Lihat Semua <ChevronRight className="w-3 h-3" />
              </Link>
            </div>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 ring-4 ring-emerald-50"></div>
                  <div className="w-0.5 h-full bg-slate-100 mt-1"></div>
                </div>
                <div className="pb-4">
                  <p className="text-xs font-bold text-emerald-600 mb-0.5">04:30 AST</p>
                  <p className="text-sm font-bold text-slate-800">Shalat Subuh Berjamaah</p>
                  <p className="text-xs text-slate-500">Masjidil Haram</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-slate-300 ring-4 ring-slate-50"></div>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 mb-0.5">08:00 AST</p>
                  <p className="text-sm font-bold text-slate-800">Ziarah Kota Makkah</p>
                  <p className="text-xs text-slate-500">Kumpul di Lobi Hotel</p>
                </div>
              </div>
            </div>
          </div>

          {/* Video Manasik On-Demand */}
          <div className="bg-slate-900 rounded-2xl p-5 shadow-lg text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1565552643982-2e5f5f74cb9a?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-8">
                <PlayCircle className="w-4 h-4 text-yellow-400" />
                <p className="text-xs font-bold text-yellow-400 uppercase tracking-wider">Manasik On-Demand</p>
              </div>
              <h3 className="text-xl font-bold mb-1">Tata Cara Sa'i</h3>
              <p className="text-sm text-slate-300 mb-4 line-clamp-2">Tonton panduan lengkap melaksanakan Sa'i dari Safa ke Marwah bersama Ust. Adi Hidayat.</p>
              <button className="w-12 h-12 bg-yellow-400 text-slate-900 rounded-full flex items-center justify-center pl-1 hover:scale-105 transition-transform shadow-lg">
                <PlayCircle className="w-6 h-6" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Navigation */}
        <div className="absolute bottom-0 w-full bg-white border-t border-slate-100 px-6 py-4 flex justify-between pb-8">
          <button className="flex flex-col items-center gap-1 text-emerald-600">
            <Home className="w-6 h-6" />
            <span className="text-[10px] font-bold">Beranda</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-slate-400 hover:text-emerald-600 transition-colors">
            <Map className="w-6 h-6" />
            <span className="text-[10px] font-medium">Panduan</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-slate-400 hover:text-emerald-600 transition-colors">
            <Calendar className="w-6 h-6" />
            <span className="text-[10px] font-medium">Jadwal</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-slate-400 hover:text-emerald-600 transition-colors">
            <User className="w-6 h-6" />
            <span className="text-[10px] font-medium">Profil</span>
          </button>
        </div>

      </div>
    </div>
  );
}
