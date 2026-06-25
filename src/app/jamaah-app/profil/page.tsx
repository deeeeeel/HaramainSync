import { User, QrCode, CreditCard, ShieldCheck, LogOut, ChevronRight } from "lucide-react";

export default function ProfilPage() {
  return (
    <div className="flex-1 overflow-y-auto flex flex-col bg-slate-50">
      <div className="bg-emerald-600 text-white pt-12 pb-24 px-6 shrink-0 relative">
        <h1 className="text-xl font-bold text-center">Profil Jamaah</h1>
      </div>

      <div className="px-5 pb-6 -mt-16 relative z-10 flex flex-col gap-6">
        
        {/* Profile Card & QR */}
        <div className="bg-white rounded-3xl p-6 shadow-md border border-slate-100 text-center relative">
          <div className="w-24 h-24 bg-slate-200 rounded-full mx-auto -mt-16 border-4 border-white shadow-sm overflow-hidden">
            <img src="https://ui-avatars.com/api/?name=Ahmad+Zainuddin&background=10b981&color=fff&size=150" alt="Avatar" />
          </div>
          <h2 className="text-xl font-bold text-slate-800 mt-3">H. Ahmad Zainuddin</h2>
          <p className="text-sm text-slate-500">NIK: 3201012345678901</p>

          <div className="mt-6 flex flex-col items-center border-t border-slate-100 pt-6">
            <div className="p-2 bg-white rounded-xl shadow-sm border border-slate-100 mb-3">
              <QrCode className="w-32 h-32 text-slate-800" />
            </div>
            <p className="text-xs text-slate-500 max-w-[200px]">Tunjukkan QR Code ini kepada Mutawwif untuk absensi rombongan.</p>
          </div>
        </div>

        {/* Menu Items */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-4 border-b border-slate-100 flex items-center justify-between active:bg-slate-50 cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-slate-800 text-sm">Dokumen & Visa</p>
                <p className="text-xs text-slate-500">Passport, Visa Approved</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-400" />
          </div>
          
          <div className="p-4 flex items-center justify-between active:bg-slate-50 cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center">
                <CreditCard className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-slate-800 text-sm">Informasi Pembayaran</p>
                <p className="text-xs text-emerald-600 font-medium">Status: LUNAS</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-400" />
          </div>
        </div>

        <button className="flex items-center justify-center gap-2 w-full bg-rose-50 text-rose-600 rounded-2xl py-4 font-bold shadow-sm active:bg-rose-100 transition-colors border border-rose-100">
          <LogOut className="w-5 h-5" />
          Keluar Aplikasi
        </button>

      </div>
    </div>
  );
}
