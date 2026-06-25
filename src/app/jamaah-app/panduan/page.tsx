import { PlayCircle, FileText, Search, Headphones, ChevronRight } from "lucide-react";

const doaList = [
  { title: "Doa Memasuki Kota Makkah", category: "Umroh", type: "audio" },
  { title: "Doa Melihat Ka'bah", category: "Umroh", type: "text" },
  { title: "Niat Ihram & Talbiyah", category: "Wajib", type: "audio" },
  { title: "Doa Minum Air Zam-Zam", category: "Sunnah", type: "text" },
];

export default function PanduanPage() {
  return (
    <div className="flex-1 overflow-y-auto flex flex-col bg-slate-50">
      <div className="bg-emerald-600 text-white pt-12 pb-6 px-6 rounded-b-3xl shadow-md shrink-0">
        <h1 className="text-2xl font-bold mb-1">Panduan Ibadah</h1>
        <p className="text-emerald-100 text-sm">Doa, Tata Cara, & Video Manasik</p>
      </div>

      <div className="px-5 py-6 space-y-6">
        <div className="flex items-center bg-white rounded-xl px-4 py-3 shadow-sm border border-slate-100 focus-within:ring-2 ring-emerald-500/50">
          <Search className="w-5 h-5 text-slate-400 mr-3" />
          <input 
            type="text" 
            placeholder="Cari doa atau materi..." 
            className="bg-transparent border-none outline-none w-full text-sm text-slate-800 placeholder-slate-400"
          />
        </div>

        <div>
          <h3 className="font-bold text-slate-800 mb-3">Manasik Video (Populer)</h3>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x hide-scrollbar">
            <div className="min-w-[240px] bg-slate-900 rounded-2xl p-4 shadow-sm text-white relative snap-center h-32 flex flex-col justify-end">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1565552643982-2e5f5f74cb9a?q=80&w=400&auto=format&fit=crop')] bg-cover bg-center opacity-40 rounded-2xl"></div>
              <div className="relative z-10">
                <p className="font-bold mb-1">Tata Cara Tawaf</p>
                <p className="text-xs text-slate-300">Ust. Khalid Basalamah</p>
              </div>
              <PlayCircle className="absolute top-4 right-4 w-6 h-6 text-white opacity-80" />
            </div>
            <div className="min-w-[240px] bg-slate-900 rounded-2xl p-4 shadow-sm text-white relative snap-center h-32 flex flex-col justify-end">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1591414443274-135e5d3fc35a?q=80&w=400&auto=format&fit=crop')] bg-cover bg-center opacity-40 rounded-2xl"></div>
              <div className="relative z-10">
                <p className="font-bold mb-1">Tata Cara Sa'i</p>
                <p className="text-xs text-slate-300">Ust. Adi Hidayat</p>
              </div>
              <PlayCircle className="absolute top-4 right-4 w-6 h-6 text-white opacity-80" />
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-slate-800 mb-3">Kumpulan Doa Pilihan</h3>
          <div className="space-y-3">
            {doaList.map((doa, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center justify-between active:scale-95 transition-transform cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${doa.type === 'audio' ? 'bg-amber-100 text-amber-600' : 'bg-emerald-100 text-emerald-600'}`}>
                    {doa.type === 'audio' ? <Headphones className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 text-sm mb-0.5">{doa.title}</p>
                    <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">{doa.category}</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
