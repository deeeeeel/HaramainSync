import { DollarSign, Download, CreditCard, ArrowUpRight, ArrowDownRight, FileText } from "lucide-react";

const recentTransactions = [
  { id: "INV-0912", date: "25 Jun 2026, 14:30", name: "Ahmad Zainuddin", desc: "Pelunasan Umroh Plus Turki", amount: "+ Rp 20.500.000", type: "in", status: "Success" },
  { id: "PAY-0103", date: "24 Jun 2026, 09:15", name: "Saudia Airlines", desc: "Deposit Booking Seat", amount: "- Rp 145.000.000", type: "out", status: "Success" },
  { id: "INV-0913", date: "24 Jun 2026, 16:45", name: "Siti Aminah", desc: "DP Umroh Reguler", amount: "+ Rp 10.000.000", type: "in", status: "Pending" },
  { id: "PAY-0104", date: "23 Jun 2026, 11:20", name: "Dar Al Tawhid Hotel", desc: "Pelunasan Hotel Makkah", amount: "- Rp 85.000.000", type: "out", status: "Success" },
  { id: "INV-0914", date: "22 Jun 2026, 10:00", name: "Budi Santoso", desc: "Pembayaran Paket VIP", amount: "+ Rp 42.000.000", type: "in", status: "Success" },
];

export default function Keuangan() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Dasbor Keuangan</h1>
          <p className="text-slate-500 mt-1">Pantau arus kas, invoice masuk, dan pembayaran mutawwif.</p>
        </div>
        <button className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-lg font-medium transition-all active:scale-95 shadow-sm">
          <Download className="w-4 h-4" />
          Unduh Laporan (PDF)
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-20">
            <DollarSign className="w-16 h-16 text-emerald-600" />
          </div>
          <h3 className="text-emerald-700 text-sm font-bold mb-1 uppercase tracking-wider">Kas Tersedia</h3>
          <p className="text-3xl font-bold text-emerald-900">Rp 4.250.000.000</p>
          <p className="text-emerald-600 text-sm mt-2 font-medium">+12.5% vs Bulan Lalu</p>
        </div>
        <div className="bg-amber-50 rounded-xl p-6 border border-amber-100 shadow-sm">
          <h3 className="text-amber-700 text-sm font-bold mb-1 uppercase tracking-wider">Piutang Jamaah</h3>
          <p className="text-3xl font-bold text-amber-900">Rp 1.200.000.000</p>
          <p className="text-amber-600 text-sm mt-2 font-medium">Dari 45 Jamaah belum lunas</p>
        </div>
        <div className="bg-rose-50 rounded-xl p-6 border border-rose-100 shadow-sm">
          <h3 className="text-rose-700 text-sm font-bold mb-1 uppercase tracking-wider">Hutang Vendor (LA/Hotel)</h3>
          <p className="text-3xl font-bold text-rose-900">Rp 850.000.000</p>
          <p className="text-rose-600 text-sm mt-2 font-medium">Jatuh tempo terdekat: 2 Hari</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden mt-8">
        <div className="p-5 border-b border-slate-100 bg-slate-50/50">
          <h3 className="text-lg font-bold text-slate-800">Transaksi Terbaru</h3>
        </div>
        <div className="divide-y divide-slate-100">
          {recentTransactions.map((trx) => (
            <div key={trx.id} className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  trx.type === 'in' ? 'bg-emerald-100 text-emerald-600' : 'bg-rose-100 text-rose-600'
                }`}>
                  {trx.type === 'in' ? <ArrowDownRight className="w-5 h-5" /> : <ArrowUpRight className="w-5 h-5" />}
                </div>
                <div>
                  <p className="font-bold text-slate-800">{trx.desc}</p>
                  <p className="text-xs text-slate-500">{trx.name} &bull; {trx.date} &bull; {trx.id}</p>
                </div>
              </div>
              <div className="text-right">
                <p className={`font-bold ${trx.type === 'in' ? 'text-emerald-600' : 'text-slate-800'}`}>
                  {trx.amount}
                </p>
                <span className={`text-xs font-medium ${trx.status === 'Success' ? 'text-emerald-500' : 'text-amber-500'}`}>
                  {trx.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
