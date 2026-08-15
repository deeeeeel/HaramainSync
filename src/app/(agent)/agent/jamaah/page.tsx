import { Search, Plus, Filter, MessageCircle } from "lucide-react";

export default function JamaahSayaPage() {
  const jamaahList = [
    { name: "Ahmad Fauzi", hp: "081234567890", paket: "Umroh Reguler (Okt 2026)", tglDaftar: "12 Ags 2026", status: "LUNAS", badgeColor: "bg-emerald-100 text-emerald-700" },
    { name: "Siti Aminah", hp: "081298765432", paket: "Umroh Reguler (Okt 2026)", tglDaftar: "10 Ags 2026", status: "DP", badgeColor: "bg-amber-100 text-amber-700" },
    { name: "Bapak Widodo & Istri", hp: "081345678912", paket: "Umroh Plus Turki (Des 2026)", tglDaftar: "05 Ags 2026", status: "LEAD", badgeColor: "bg-blue-100 text-blue-700" },
    { name: "Keluarga H. Rahman", hp: "085612345678", paket: "Umroh VIP (Nov 2026)", tglDaftar: "28 Jul 2026", status: "DP", badgeColor: "bg-amber-100 text-amber-700" },
    { name: "Dewi Lestari", hp: "089876543210", paket: "Umroh Reguler (Okt 2026)", tglDaftar: "25 Jul 2026", status: "LUNAS", badgeColor: "bg-emerald-100 text-emerald-700" },
    { name: "Fajar Maulana", hp: "081112223333", paket: "Umroh Ramadhan (Feb 2027)", tglDaftar: "15 Jul 2026", status: "LEAD", badgeColor: "bg-blue-100 text-blue-700" },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Jamaah Saya</h1>
          <p className="text-slate-500 mt-1">Kelola daftar calon jamaah dan jamaah yang sudah terdaftar.</p>
        </div>
        <button className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
          <Plus className="w-5 h-5" />
          Tambah Jamaah (Lead)
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex flex-col sm:flex-row gap-4 items-center justify-between bg-slate-50/50">
          <div className="relative w-full sm:w-96">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Cari nama atau nomor HP..." 
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 ring-emerald-500/20 focus:border-emerald-500"
            />
          </div>
          <button className="flex items-center gap-2 border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors w-full sm:w-auto">
            <Filter className="w-4 h-4" />
            Filter Status
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-slate-500 bg-slate-50 uppercase">
              <tr>
                <th className="px-6 py-4 font-medium">Nama & Kontak</th>
                <th className="px-6 py-4 font-medium">Paket Dipilih</th>
                <th className="px-6 py-4 font-medium">Tgl Daftar</th>
                <th className="px-6 py-4 font-medium">Status Bayar</th>
                <th className="px-6 py-4 font-medium text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {jamaahList.map((item, index) => (
                <tr key={index} className="hover:bg-slate-50/80 transition-colors">
                  <td className="px-6 py-4">
                    <p className="font-bold text-slate-800">{item.name}</p>
                    <p className="text-xs text-slate-500">{item.hp}</p>
                  </td>
                  <td className="px-6 py-4 text-slate-600">{item.paket}</td>
                  <td className="px-6 py-4 text-slate-600">{item.tglDaftar}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${item.badgeColor}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="inline-flex items-center justify-center gap-2 px-3 py-1.5 bg-green-50 text-green-600 hover:bg-green-100 border border-green-200 rounded-lg text-xs font-bold transition-colors">
                      <MessageCircle className="w-4 h-4" />
                      Chat WA
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between text-sm text-slate-500">
          <p>Menampilkan 1 hingga 6 dari 6 entri</p>
          <div className="flex gap-1">
            <button className="px-3 py-1 border border-slate-200 rounded bg-white hover:bg-slate-50 text-slate-400 cursor-not-allowed">Sebel</button>
            <button className="px-3 py-1 border border-emerald-500 bg-emerald-50 text-emerald-600 rounded font-medium">1</button>
            <button className="px-3 py-1 border border-slate-200 rounded bg-white hover:bg-slate-50 text-slate-400 cursor-not-allowed">Lanjut</button>
          </div>
        </div>
      </div>
    </div>
  );
}
