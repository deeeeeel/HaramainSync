import { Users, Search, Filter, MoreVertical, FileText } from "lucide-react";

const mockJamaah = [
  { id: "JM-1001", name: "Ahmad Zainuddin", nik: "3201012345678901", package: "Umroh Plus Turki", phone: "0812-3456-7890", payment: "Lunas", visa: "Approved" },
  { id: "JM-1002", name: "Siti Aminah", nik: "3201012345678902", package: "Umroh Reguler Quad", phone: "0812-3456-7891", payment: "DP 50%", visa: "Proses" },
  { id: "JM-1003", name: "Budi Santoso", nik: "3201012345678903", package: "Umroh VIP Platinum", phone: "0812-3456-7892", payment: "Belum Bayar", visa: "Menunggu" },
  { id: "JM-1004", name: "Nurul Huda", nik: "3201012345678904", package: "Haji Khusus (Furoda)", phone: "0812-3456-7893", payment: "Lunas", visa: "Approved" },
  { id: "JM-1005", name: "Hasan Basri", nik: "3201012345678905", package: "Umroh Reguler Quad", phone: "0812-3456-7894", payment: "Pelunasan", visa: "Proses" },
];

export default function DataJamaah() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight font-serif">Data Jamaah</h1>
          <p className="text-slate-500 mt-1">Database seluruh jamaah aktif, status pembayaran, dan visa.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-white border border-slate-200 text-slate-600 px-4 py-2 rounded-lg font-medium transition-all hover:bg-slate-50">
            <Filter className="w-4 h-4" />
            Filter
          </button>
          <button className="flex items-center gap-2 bg-[#d4af37] hover:bg-[#c5a030] text-white px-4 py-2 rounded-lg font-medium transition-all active:scale-95 shadow-sm">
            Export Data
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200/60 overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center bg-slate-50 rounded-lg px-4 py-2 w-full max-w-md focus-within:ring-2 ring-emerald-500/20 transition-all border border-slate-200">
            <Search className="w-4 h-4 text-slate-400 mr-2" />
            <input 
              type="text" 
              placeholder="Cari nama, NIK, atau nomor porsi..." 
              className="bg-transparent border-none outline-none w-full text-sm text-slate-700 placeholder-slate-400"
            />
          </div>
          <button className="text-sm font-medium text-emerald-600 hover:text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-4 py-2 rounded-lg transition-colors flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Sync SISKOPATUH
          </button>
        </div>
        
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider border-b border-slate-100">
              <th className="p-4 font-medium">Data Diri</th>
              <th className="p-4 font-medium">Paket Dipilih</th>
              <th className="p-4 font-medium">Kontak</th>
              <th className="p-4 font-medium text-center">Status Bayar</th>
              <th className="p-4 font-medium text-center">Status Visa</th>
              <th className="p-4 font-medium"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm">
            {mockJamaah.map((jam) => (
              <tr key={jam.id} className="hover:bg-slate-50 transition-colors">
                <td className="p-4">
                  <p className="font-bold text-slate-900">{jam.name}</p>
                  <p className="text-xs text-slate-500">NIK: {jam.nik} &bull; {jam.id}</p>
                </td>
                <td className="p-4 font-medium text-slate-700">{jam.package}</td>
                <td className="p-4 text-slate-600">{jam.phone}</td>
                <td className="p-4 text-center">
                  <span className={`px-2.5 py-1 text-xs font-medium rounded-full ${
                    jam.payment === 'Lunas' ? 'bg-emerald-100 text-emerald-700' :
                    jam.payment.includes('DP') || jam.payment === 'Pelunasan' ? 'bg-blue-100 text-blue-700' :
                    'bg-rose-100 text-rose-700'
                  }`}>
                    {jam.payment}
                  </span>
                </td>
                <td className="p-4 text-center">
                  <span className={`px-2.5 py-1 text-xs font-medium rounded-full border ${
                    jam.visa === 'Approved' ? 'bg-emerald-50 text-emerald-600 border-emerald-200' :
                    jam.visa === 'Proses' ? 'bg-amber-50 text-amber-600 border-amber-200' :
                    'bg-slate-100 text-slate-600 border-slate-200'
                  }`}>
                    {jam.visa}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <button className="text-slate-400 hover:text-slate-800">
                    <MoreVertical className="w-5 h-5" />
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
