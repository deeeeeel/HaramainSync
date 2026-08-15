import { Loader2 } from "lucide-react";

export default function AgentLoading() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center h-full w-full py-20">
      <Loader2 className="w-10 h-10 text-emerald-500 animate-spin mb-4" />
      <p className="text-slate-500 font-medium">Memuat data...</p>
    </div>
  );
}
