import { Package, Plus, Edit2, Trash2 } from "lucide-react";

const mockPackages = [
  { id: "PKG-01", name: "Umroh Plus Turki Bintang 5", date: "15 Sep 2026", duration: "12 Hari", maskapai: "Saudia Airlines", seat: "40", maxSeat: "45", price: "Rp 35.500.000", status: "Aktif" },
  { id: "PKG-02", name: "Umroh Reguler Quad", date: "20 Sep 2026", duration: "9 Hari", maskapai: "Garuda Indonesia", seat: "90", maxSeat: "90", price: "Rp 28.000.000", status: "Penuh" },
  { id: "PKG-03", name: "Umroh VIP Platinum", date: "05 Okt 2026", duration: "9 Hari", maskapai: "Emirates", seat: "12", maxSeat: "20", price: "Rp 42.000.000", status: "Aktif" },
  { id: "PKG-04", name: "Haji Khusus (Furoda)", date: "12 Mei 2027", duration: "25 Hari", maskapai: "Qatar Airways", seat: "5", maxSeat: "30", price: "USD 18.500", status: "Pendaftaran" },
];

export default function ManajemenPaket() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight font-serif">Manajemen Paket</h1>
          <p className="text-slate-500 mt-1">Kelola ketersediaan paket, seat maskapai, dan kamar hotel.</p>
        </div>
        <button className="flex items-center gap-2 bg-[#d4af37] hover:bg-[#c5a030] text-white px-4 py-2 rounded-lg font-medium transition-all active:scale-95 shadow-sm">
          <Plus className="w-5 h-5" />
          Buat Paket Baru
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200/60 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider border-b border-slate-100">
              <th className="p-4 font-medium">Info Paket</th>
              <th className="p-4 font-medium">Keberangkatan</th>
              <th className="p-4 font-medium">Maskapai</th>
              <th className="p-4 font-medium text-center">Kuota</th>
              <th className="p-4 font-medium">Harga Dasar</th>
              <th className="p-4 font-medium text-center">Status</th>
              <th className="p-4 font-medium text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm">
            {mockPackages.map((pkg) => (
              <tr key={pkg.id} className="hover:bg-slate-50 transition-colors">
                <td className="p-4">
                  <p className="font-semibold text-slate-900">{pkg.name}</p>
                  <p className="text-xs text-slate-500">{pkg.id} &bull; {pkg.duration}</p>
                </td>
                <td className="p-4 font-medium text-slate-700">{pkg.date}</td>
                <td className="p-4 text-slate-600">{pkg.maskapai}</td>
                <td className="p-4 text-center">
                  <span className="font-semibold text-slate-900">{pkg.seat}</span>
                  <span className="text-slate-400 mx-1">/</span>
                  <span className="text-slate-500">{pkg.maxSeat}</span>
                </td>
                <td className="p-4 font-medium text-slate-700">{pkg.price}</td>
                <td className="p-4 text-center">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full border ${
                    pkg.status === 'Penuh' ? 'bg-emerald-50 text-emerald-600 border-emerald-200' : 
                    pkg.status === 'Aktif' ? 'bg-blue-50 text-blue-600 border-blue-200' :
                    'bg-amber-50 text-amber-600 border-amber-200'
                  }`}>
                    {pkg.status}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
