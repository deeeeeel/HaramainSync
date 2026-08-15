import { KPICards } from "@/components/dashboard/KPICards";
import { DashboardCharts } from "@/components/dashboard/DashboardCharts";
import { UpcomingPackagesTable } from "@/components/dashboard/UpcomingPackagesTable";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const params = await searchParams;
  const range = params.range || "this-year";

  let chartData = [];
  if (range === "6m") {
    chartData = [
      { name: 'Jul', idr: 1500, usd: 500, sar: 900 },
      { name: 'Agu', idr: 1800, usd: 600, sar: 1100 },
      { name: 'Sep', idr: 2100, usd: 700, sar: 1300 },
      { name: 'Okt', idr: 1900, usd: 650, sar: 1200 },
      { name: 'Nov', idr: 2500, usd: 850, sar: 1600 },
      { name: 'Des', idr: 3000, usd: 1000, sar: 1900 },
    ];
  } else if (range === "last-year") {
    chartData = [
      { name: '2025 Q1', idr: 4500, usd: 1500, sar: 2500 },
      { name: '2025 Q2', idr: 5200, usd: 1800, sar: 2800 },
      { name: '2025 Q3', idr: 4800, usd: 1600, sar: 2600 },
      { name: '2025 Q4', idr: 6100, usd: 2100, sar: 3400 },
    ];
  } else {
    // "this-year" default
    chartData = [
      { name: 'Jan', idr: 1200, usd: 400, sar: 800 },
      { name: 'Feb', idr: 1900, usd: 600, sar: 1200 },
      { name: 'Mar', idr: 1500, usd: 550, sar: 900 },
      { name: 'Apr', idr: 2800, usd: 900, sar: 1800 },
      { name: 'Mei', idr: 2200, usd: 800, sar: 1400 },
      { name: 'Jun', idr: 3400, usd: 1200, sar: 2100 },
    ];
  }

  return (
    <div className="max-w-7xl mx-auto space-y-2">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Executive Summary</h1>
        <p className="text-slate-500 mt-1">Pantau seluruh indikator performa utama hari ini.</p>
      </div>

      <KPICards />
      <DashboardCharts data={chartData} />
      <UpcomingPackagesTable />
    </div>
  );
}
