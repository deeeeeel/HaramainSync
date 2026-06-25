import { MapPin, Navigation, Bus, Clock } from "lucide-react";

const mockBuses = [
  { id: "BUS-A1 (VIP)", driver: "Abdul Rahman", status: "Menuju Miqat", speed: "60 km/h", pax: "45", maxPax: "45", color: "text-blue-500", bg: "bg-blue-50" },
  { id: "BUS-A2 (Reguler)", driver: "Faisal", status: "Tiba di Hotel (Makkah)", speed: "0 km/h", pax: "45", maxPax: "45", color: "text-emerald-500", bg: "bg-emerald-50" },
  { id: "BUS-B1 (Plus Turki)", driver: "Muhammad Ali", status: "Ziarah Madinah", speed: "40 km/h", pax: "40", maxPax: "45", color: "text-amber-500", bg: "bg-amber-50" },
];

export default function LiveTracking() {
  return (
    <div className="max-w-7xl mx-auto space-y-6 h-[calc(100vh-12rem)] flex flex-col">
      <div className="flex justify-between items-center mb-4 shrink-0">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Live Tracking (Modul 3)</h1>
          <p className="text-slate-500 mt-1">Pemantauan lokasi rombongan dan mutawwif secara real-time.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wide">Sistem GPS Aktif</span>
          </div>
        </div>
      </div>

      <div className="flex-1 flex gap-6 overflow-hidden">
        {/* Sidebar list of buses */}
        <div className="w-80 bg-white border border-slate-200 rounded-xl flex flex-col shrink-0 shadow-sm overflow-hidden">
          <div className="p-4 border-b border-slate-100 bg-slate-50">
            <h3 className="font-bold text-slate-800">Armada Berjalan (3)</h3>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {mockBuses.map((bus, idx) => (
              <div key={idx} className={`p-4 rounded-xl border border-slate-100 cursor-pointer hover:border-blue-200 transition-all shadow-sm ${bus.bg}`}>
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                    <Bus className={`w-4 h-4 ${bus.color}`} />
                    <span className="font-bold text-slate-800 text-sm">{bus.id}</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-500">{bus.speed}</span>
                </div>
                <p className="text-xs text-slate-600 mb-3"><span className="font-medium">Driver:</span> {bus.driver}</p>
                <div className="flex justify-between items-center pt-3 border-t border-slate-200/50">
                  <span className="text-xs font-medium text-slate-700 bg-white/60 px-2 py-1 rounded">
                    {bus.status}
                  </span>
                  <span className="text-xs font-bold text-slate-700">Pax: {bus.pax}/{bus.maxPax}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Map Area */}
        <div className="flex-1 bg-slate-100 rounded-xl border border-slate-200 relative overflow-hidden flex items-center justify-center shadow-inner">
          <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=21.4225,39.8262&zoom=15&size=800x800&scale=2&maptype=roadmap&style=feature:all|element:labels.text.fill|color:0x333333&style=feature:all|element:labels.text.stroke|color:0xffffff&style=feature:water|element:geometry|color:0xe1e8ee')] bg-cover bg-center opacity-60"></div>
          
          <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
             <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)] border-2 border-white relative z-10">
               <Bus className="w-5 h-5" />
             </div>
             <div className="bg-white px-2 py-1 rounded text-xs font-bold shadow-md mt-1">BUS-A1</div>
          </div>
          
          <div className="absolute top-1/3 right-1/3 flex flex-col items-center">
             <div className="w-10 h-10 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.5)] border-2 border-white relative z-10">
               <Bus className="w-5 h-5" />
             </div>
             <div className="bg-white px-2 py-1 rounded text-xs font-bold shadow-md mt-1">BUS-A2</div>
          </div>

          <div className="relative z-20 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl text-center max-w-sm mx-4 border border-white/50 mt-48">
            <h3 className="text-lg font-bold text-slate-800 mb-2">Simulasi Interaktif</h3>
            <p className="text-slate-500 text-sm mb-4">Peta ini akan diganti dengan implementasi Google Maps / Mapbox yang sebenarnya di fase selanjutnya.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
