import { MapPin, Clock, CalendarDays, Bus } from "lucide-react";

const itineraryData = [
  {
    day: "Hari 1",
    date: "15 Sep 2026",
    location: "Jakarta - Jeddah",
    events: [
      { time: "09:00 WIB", title: "Kumpul di Bandara Soetta (T3)", desc: "Briefing dan pembagian passport", type: "info" },
      { time: "13:30 WIB", title: "Penerbangan SV819 ke Jeddah", desc: "Durasi ~9 Jam. Ambil miqat di atas Yalamlam", type: "travel" },
      { time: "19:20 AST", title: "Tiba di Bandara King Abdul Aziz", desc: "Proses imigrasi dan pengambilan bagasi", type: "info" },
    ]
  },
  {
    day: "Hari 2",
    date: "16 Sep 2026",
    location: "Makkah Al-Mukarramah",
    events: [
      { time: "02:00 AST", title: "Check-in Hotel Dar Al Tawhid", desc: "Istirahat sejenak dan pembagian kamar", type: "info" },
      { time: "04:30 AST", title: "Pelaksanaan Umroh Wajib", desc: "Tawaf, Sa'i, dan Tahallul bersama Mutawwif", type: "ibadah" },
      { time: "12:00 AST", title: "Shalat Dzuhur Berjamaah", desc: "Bebas di Masjidil Haram", type: "ibadah" },
    ]
  }
];

export default function JadwalPage() {
  return (
    <div className="flex-1 overflow-y-auto flex flex-col bg-slate-50">
      <div className="bg-emerald-600 text-white pt-12 pb-6 px-6 rounded-b-3xl shadow-md shrink-0 flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold mb-1">Itinerary</h1>
          <p className="text-emerald-100 text-sm">Umroh Plus Turki (12 Hari)</p>
        </div>
        <div className="bg-white/20 p-2 rounded-xl backdrop-blur-sm">
          <CalendarDays className="w-6 h-6 text-white" />
        </div>
      </div>

      <div className="px-5 py-6 space-y-8">
        {itineraryData.map((dayData, idx) => (
          <div key={idx}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-slate-800 text-lg">{dayData.day} <span className="text-sm font-medium text-slate-500 ml-2">{dayData.date}</span></h2>
              <div className="flex items-center gap-1 text-xs font-bold text-amber-600 bg-amber-100 px-2 py-1 rounded">
                <MapPin className="w-3 h-3" />
                {dayData.location}
              </div>
            </div>

            <div className="space-y-4 pl-2">
              {dayData.events.map((ev, eIdx) => (
                <div key={eIdx} className="flex gap-4 relative">
                  <div className="flex flex-col items-center">
                    <div className={`w-3 h-3 rounded-full mt-1 ${
                      ev.type === 'ibadah' ? 'bg-emerald-500 ring-4 ring-emerald-100' :
                      ev.type === 'travel' ? 'bg-amber-500 ring-4 ring-amber-100' :
                      'bg-blue-500 ring-4 ring-blue-100'
                    }`}></div>
                    {eIdx !== dayData.events.length - 1 && (
                      <div className="w-0.5 h-full bg-slate-200 mt-2"></div>
                    )}
                  </div>
                  <div className="pb-4 flex-1">
                    <div className="flex items-center gap-1 mb-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      <p className="text-xs font-bold text-slate-500">{ev.time}</p>
                    </div>
                    <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100">
                      <p className="text-sm font-bold text-slate-800">{ev.title}</p>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">{ev.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
