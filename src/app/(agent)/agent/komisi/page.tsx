import { Wallet, ArrowUpRight, ArrowDownRight, Clock, Download } from "lucide-react";

export default function PencairanKomisiPage() {
  const riwayatPenarikan = [
    { id: "WD-001", tgl: "10 Ags 2026", nominal: "Rp 3.000.000", status: "BERHASIL", badge: "bg-emerald-100 text-emerald-700" },
    { id: "WD-002", tgl: "15 Jul 2026", nominal: "Rp 4.500.000", status: "BERHASIL", badge: "bg-emerald-100 text-emerald-700" },
    { id: "WD-003", tgl: "20 Jun 2026", nominal: "Rp 1.500.000", status: "BERHASIL", badge: "bg-emerald-100 text-emerald-700" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Pencairan Komisi</h1>
        <p className="text-slate-500 mt-1">Pantau saldo dan tarik komisi Anda ke rekening bank terdaftar.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <Wallet className="w-5 h-5 text-emerald-400" />
              <p className="text-slate-300 font-medium">Saldo Aktif Tersedia</p>
            </div>
            <h2 className="text-4xl font-extrabold mb-6">Rp 12.500.000</h2>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg flex items-center justify-center gap-2 flex-1 max-w-[200px]">
                <ArrowUpRight className="w-5 h-5" />
                Tarik Dana
              </button>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 flex-1 border border-white/10">
                <p className="text-xs text-slate-400 mb-1">Rekening Tujuan</p>
                <div className="flex justify-between items-center">
                  <p className="text-sm font-bold">BCA - 8123xxxxxx</p>
                  <button className="text-xs text-emerald-400 font-medium hover:text-emerald-300">Ubah</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200/50 flex flex-col justify-center shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
              <Clock className="w-5 h-5 text-amber-600" />
            </div>
            <p className="text-amber-800 font-bold">Komisi Tertunda</p>
          </div>
          <h3 className="text-3xl font-extrabold text-amber-600 mb-2">Rp 4.500.000</h3>
          <p className="text-sm text-amber-700/80 leading-relaxed">
            Dari 3 jamaah (DP). Dana akan cair ke saldo aktif setelah jamaah melunasi pembayaran H-30.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="px-6 py-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
          <h3 className="font-bold text-slate-800">Riwayat Pencairan</h3>
          <button className="text-sm font-medium text-slate-600 hover:text-slate-900 flex items-center gap-2">
            <Download className="w-4 h-4" /> Download Laporan
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-slate-500 bg-slate-50 uppercase">
              <tr>
                <th className="px-6 py-4 font-medium">ID Transaksi</th>
                <th className="px-6 py-4 font-medium">Tanggal</th>
                <th className="px-6 py-4 font-medium">Nominal</th>
                <th className="px-6 py-4 font-medium">Tujuan</th>
                <th className="px-6 py-4 font-medium text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {riwayatPenarikan.map((item, index) => (
                <tr key={index} className="hover:bg-slate-50/80 transition-colors">
                  <td className="px-6 py-4 font-medium text-slate-600">{item.id}</td>
                  <td className="px-6 py-4 text-slate-600">{item.tgl}</td>
                  <td className="px-6 py-4 font-bold text-slate-800">{item.nominal}</td>
                  <td className="px-6 py-4 text-slate-600">BCA - A/n Budi Santoso</td>
                  <td className="px-6 py-4 text-right">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${item.badge}`}>
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
