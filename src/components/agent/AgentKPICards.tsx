import { WalletCards, Timer, BadgeCheck } from "lucide-react";

export function AgentKPICards() {
  const kpis = [
    {
      title: "Saldo Komisi",
      value: "Rp 12.500.000",
      description: "Tersedia untuk dicairkan",
      icon: WalletCards,
      color: "bg-emerald-500",
      lightColor: "bg-emerald-100",
      textColor: "text-emerald-600",
    },
    {
      title: "Komisi Pending",
      value: "Rp 4.500.000",
      description: "Dari jamaah belum lunas",
      icon: Timer,
      color: "bg-amber-500",
      lightColor: "bg-amber-100",
      textColor: "text-amber-600",
    },
    {
      title: "Total Closing",
      value: "8 Jamaah",
      description: "Terdaftar bulan ini",
      icon: BadgeCheck,
      color: "bg-blue-500",
      lightColor: "bg-blue-100",
      textColor: "text-blue-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {kpis.map((kpi, index) => (
        <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200/60 hover:border-emerald-500/30 transition-colors">
          <div className="flex justify-between items-start mb-4">
            <div className={`p-3 rounded-lg ${kpi.lightColor}`}>
              <kpi.icon className={`w-6 h-6 ${kpi.textColor}`} />
            </div>
          </div>
          <div>
            <p className="text-slate-500 text-sm font-medium mb-1 font-serif">{kpi.title}</p>
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight">{kpi.value}</h3>
            <p className="text-xs text-slate-400 mt-2">{kpi.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
