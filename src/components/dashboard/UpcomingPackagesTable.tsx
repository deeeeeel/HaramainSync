const packages = [
  {
    id: "PKG-001",
    name: "Umroh Plus Turki (Bintang 5)",
    date: "12 Ags 2026",
    totalSeats: 45,
    bookedSeats: 42,
    status: "Hampir Penuh",
    statusColor: "text-amber-600 bg-amber-50 border-amber-200",
  },
  {
    id: "PKG-002",
    name: "Umroh Reguler (Quad Room)",
    date: "18 Ags 2026",
    totalSeats: 90,
    bookedSeats: 90,
    status: "Penuh (Manifest Ready)",
    statusColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
  },
  {
    id: "PKG-003",
    name: "Umroh VIP Platinum",
    date: "05 Sep 2026",
    totalSeats: 20,
    bookedSeats: 8,
    status: "Tersedia",
    statusColor: "text-blue-600 bg-blue-50 border-blue-200",
  },
];

export function UpcomingPackagesTable() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="p-6 border-b border-slate-100 flex justify-between items-center">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Status Kuota Paket Terdekat</h2>
          <p className="text-sm text-slate-500">Pantauan sisa seat maskapai & kamar hotel</p>
        </div>
        <button className="text-sm font-medium text-slate-900 bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-lg transition-colors active:scale-95">
          Lihat Semua
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
              <th className="p-4 font-medium">Nama Paket</th>
              <th className="p-4 font-medium">Tgl Berangkat</th>
              <th className="p-4 font-medium text-center">Sisa Seat</th>
              <th className="p-4 font-medium">Status</th>
              <th className="p-4 font-medium text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm">
            {packages.map((pkg) => (
              <tr key={pkg.id} className="hover:bg-slate-50 transition-colors group">
                <td className="p-4">
                  <p className="font-semibold text-slate-800">{pkg.name}</p>
                  <p className="text-xs text-slate-500">{pkg.id}</p>
                </td>
                <td className="p-4 text-slate-600">{pkg.date}</td>
                <td className="p-4 text-center">
                  <div className="inline-flex items-center justify-center">
                    <span className="font-bold text-slate-800">{pkg.totalSeats - pkg.bookedSeats}</span>
                    <span className="text-slate-400 mx-1">/</span>
                    <span className="text-slate-500">{pkg.totalSeats}</span>
                  </div>
                  <div className="w-24 h-1.5 bg-slate-200 rounded-full mt-2 mx-auto overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${
                        (pkg.bookedSeats/pkg.totalSeats) >= 1 ? 'bg-emerald-500' 
                        : (pkg.bookedSeats/pkg.totalSeats) > 0.8 ? 'bg-amber-500' 
                        : 'bg-blue-500'
                      }`}
                      style={{ width: `${(pkg.bookedSeats/pkg.totalSeats) * 100}%` }}
                    ></div>
                  </div>
                </td>
                <td className="p-4">
                  <span className={`px-2.5 py-1 text-xs font-medium rounded-full border ${pkg.statusColor}`}>
                    {pkg.status}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <button className="text-slate-400 hover:text-slate-900 font-medium text-sm transition-colors opacity-0 group-hover:opacity-100">
                    Detail &rarr;
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
