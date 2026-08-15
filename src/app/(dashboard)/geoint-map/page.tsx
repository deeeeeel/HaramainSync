import { Globe, Crosshair, Radar, AlertCircle } from "lucide-react";

const mockHotspots = [
  { id: "HS-1", location: "Sektor Masjidil Haram", risk: "Tinggi", desc: "Kepadatan jamaah > 80% di area perluasan King Abdullah", time: "Baru Saja" },
  { id: "HS-2", location: "Terminal Syib Amir", risk: "Sedang", desc: "Antrean bus memanjang > 200m", time: "5m lalu" },
  { id: "HS-3", location: "Jalur Tawaf (Lantai Dasar)", risk: "Tinggi", desc: "Potensi resiko jamaah lansia terdesak", time: "12m lalu" },
];

export default function GeointMap() {
  return (
    <div className="max-w-7xl mx-auto space-y-6 h-[calc(100vh-12rem)] flex flex-col">
      <div className="flex justify-between items-center mb-4 shrink-0">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight font-serif">GEOINT Map (Modul 4)</h1>
          <p className="text-slate-500 mt-1">Pemetaan intelijen geospasial untuk pantauan fisik & konsentrasi massa.</p>
        </div>
        <div className="flex items-center gap-3">
          <select className="bg-[#022c22] text-[#d4af37] text-sm rounded-lg px-4 py-2 font-medium border border-[#d4af37]/20 outline-none shadow-sm">
            <option>CartoDB Dark Matter</option>
            <option>OSM Satellite</option>
            <option>Topographic</option>
          </select>
        </div>
      </div>

      <div className="flex-1 flex gap-6 overflow-hidden">
        {/* Map Area */}
        <div className="flex-1 bg-[#022c22] rounded-xl border border-[#064e3b] relative overflow-hidden flex items-center justify-center shadow-inner">
          {/* Dark Map Background */}
          <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=21.4225,39.8262&zoom=14&size=800x800&maptype=roadmap&style=feature:all|element:all|color:0x000000|lightness:-80')] bg-cover bg-center opacity-60"></div>
          
          <div className="absolute top-1/2 left-1/2 w-64 h-64 border border-rose-500/30 rounded-full animate-ping opacity-20"></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 border border-rose-500/50 rounded-full animate-ping opacity-40"></div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-rose-500 flex flex-col items-center">
            <Crosshair className="w-10 h-10 drop-shadow-[0_0_10px_rgba(244,63,94,0.8)]" />
          </div>

          <div className="relative z-10 bg-slate-800/80 backdrop-blur-md p-6 rounded-2xl shadow-2xl text-center max-w-sm mx-4 border border-slate-700 mt-64">
            <h3 className="text-lg font-bold text-white mb-2">Simulasi Intelijen</h3>
            <p className="text-slate-400 text-sm">Integrasi API Geospasial dengan analitik heatmap akan diaktifkan di fase selanjutnya.</p>
          </div>
        </div>

        {/* Sidebar Intel */}
        <div className="w-80 bg-[#022c22] border border-[#064e3b] rounded-xl flex flex-col shrink-0 shadow-lg overflow-hidden text-emerald-100/70">
          <div className="p-4 border-b border-[#064e3b] bg-black/20 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Radar className="w-5 h-5 text-[#d4af37]" />
              <h3 className="font-bold text-white font-serif">Log Titik Panas</h3>
            </div>
            <span className="text-xs bg-rose-500/20 text-rose-400 px-2 py-1 rounded font-bold">LIVE</span>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {mockHotspots.map((spot, idx) => (
              <div key={idx} className="p-4 rounded-xl border border-[#064e3b] bg-[#064e3b]/30 relative overflow-hidden">
                <div className={`absolute top-0 left-0 w-1 h-full ${spot.risk === 'Tinggi' ? 'bg-rose-500' : 'bg-[#d4af37]'}`}></div>
                <div className="flex justify-between items-start mb-2 pl-2">
                  <h4 className="font-bold text-white text-sm">{spot.location}</h4>
                  <span className="text-[10px] text-emerald-200/50 font-mono">{spot.time}</span>
                </div>
                <p className="text-xs text-emerald-100/60 mb-2 pl-2">{spot.desc}</p>
                <div className="pl-2">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
                    spot.risk === 'Tinggi' ? 'bg-rose-500/20 text-rose-400' : 'bg-amber-500/20 text-amber-400'
                  }`}>
                    Risk: {spot.risk}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
