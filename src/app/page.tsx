import { KPICards } from "@/components/dashboard/KPICards";
import { DashboardCharts } from "@/components/dashboard/DashboardCharts";
import { UpcomingPackagesTable } from "@/components/dashboard/UpcomingPackagesTable";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto space-y-2">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Executive Summary</h1>
        <p className="text-slate-500 mt-1">Pantau seluruh indikator performa utama hari ini.</p>
      </div>

      <KPICards />
      <DashboardCharts />
      <UpcomingPackagesTable />
    </div>
  );
}
