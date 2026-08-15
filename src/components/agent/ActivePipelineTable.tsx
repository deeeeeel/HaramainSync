import { MessageCircle } from "lucide-react";

export function ActivePipelineTable() {
  const pipelines = [
    { name: "Ahmad Fauzi", paket: "Umroh Reguler (Okt 2026)", status: "LUNAS", komisi: "Rp 1.500.000", badgeColor: "bg-emerald-100 text-emerald-700" },
    { name: "Siti Aminah", paket: "Umroh Reguler (Okt 2026)", status: "DP", komisi: "Rp 1.500.000", badgeColor: "bg-amber-100 text-amber-700" },
    { name: "Bapak Widodo & Istri", paket: "Umroh Plus Turki (Des 2026)", status: "LEAD", komisi: "Rp 4.000.000", badgeColor: "bg-blue-100 text-blue-700" },
    { name: "Keluarga H. Rahman", paket: "Umroh VIP (Nov 2026)", status: "DP", komisi: "Rp 3.000.000", badgeColor: "bg-amber-100 text-amber-700" },
    { name: "Dewi Lestari", paket: "Umroh Reguler (Okt 2026)", status: "LUNAS", komisi: "Rp 1.500.000", badgeColor: "bg-emerald-100 text-emerald-700" },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200/60 overflow-hidden">
      <div className="px-6 py-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
        <h3 className="font-bold text-slate-900 font-serif">Pipeline Aktif (5 Terakhir)</h3>
        <button className="text-sm font-medium text-emerald-600 hover:text-emerald-700">Lihat Semua</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-slate-500 bg-slate-50 uppercase">
            <tr>
              <th className="px-6 py-4 font-medium">Nama Jamaah</th>
              <th className="px-6 py-4 font-medium">Paket</th>
              <th className="px-6 py-4 font-medium">Status Bayar</th>
              <th className="px-6 py-4 font-medium">Estimasi Komisi</th>
              <th className="px-6 py-4 font-medium text-center">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {pipelines.map((item, index) => (
              <tr key={index} className="hover:bg-slate-50/80 transition-colors">
                <td className="px-6 py-4 font-medium text-slate-900">{item.name}</td>
                <td className="px-6 py-4 text-slate-600">{item.paket}</td>
                <td className="px-6 py-4">
                  <span className={`px-2.5 py-1 rounded-md text-xs font-bold ${item.badgeColor}`}>
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-4 font-semibold text-slate-900">{item.komisi}</td>
                <td className="px-6 py-4 text-center">
                  <button className="inline-flex items-center justify-center gap-2 px-3 py-1.5 bg-green-50 text-green-600 hover:bg-green-100 border border-green-200 rounded-lg text-xs font-bold transition-colors">
                    <MessageCircle className="w-4 h-4" />
                    Follow Up WA
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
