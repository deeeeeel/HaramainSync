import { ReferralLink } from "@/components/agent/ReferralLink";
import { AgentKPICards } from "@/components/agent/AgentKPICards";
import { ActivePipelineTable } from "@/components/agent/ActivePipelineTable";

export default function AgentDashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Ringkasan Kinerja</h1>
        <p className="text-slate-500 mt-1">Pantau pipeline jamaah dan komisi Anda hari ini.</p>
      </div>

      <ReferralLink />
      <AgentKPICards />
      <ActivePipelineTable />
    </div>
  );
}
