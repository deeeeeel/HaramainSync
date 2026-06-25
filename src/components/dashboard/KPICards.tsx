import { Users, TrendingUp, FileText, PlaneTakeoff } from "lucide-react";

const kpiData = [
  {
    title: "Total Jamaah Aktif",
    value: "1,248",
    change: "+12%",
    isPositive: true,
    icon: Users,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    title: "Pendapatan (Bulan Ini)",
    value: "Rp 4.2M",
    change: "+8.5%",
    isPositive: true,
    icon: TrendingUp,
    color: "text-emerald-600",
    bgColor: "bg-emerald-100",
  },
  {
    title: "Visa Dalam Proses",
    value: "342",
    change: "18 Perlu Tindakan",
    isPositive: false,
    icon: FileText,
    color: "text-amber-600",
    bgColor: "bg-amber-100",
  },
  {
    title: "Paket Berjalan",
    value: "8",
    change: "2 Berangkat Minggu Ini",
    isPositive: true,
    icon: PlaneTakeoff,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
];

export function KPICards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {kpiData.map((item, index) => (
        <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <div className={`p-3 rounded-lg ${item.bgColor}`}>
              <item.icon className={`w-6 h-6 ${item.color}`} />
            </div>
            <span className={`text-sm font-medium px-2.5 py-1 rounded-full ${
              item.isPositive ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'
            }`}>
              {item.change}
            </span>
          </div>
          <h3 className="text-slate-500 text-sm font-medium mb-1">{item.title}</h3>
          <p className="text-2xl font-bold text-slate-800">{item.value}</p>
        </div>
      ))}
    </div>
  );
}
