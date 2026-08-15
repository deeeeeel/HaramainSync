"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

export function TimeFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  const currentRange = searchParams.get("range") || "this-year";

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("range", e.target.value);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <select 
      value={currentRange}
      onChange={handleChange}
      className="bg-slate-50 border border-slate-200 text-sm rounded-lg px-3 py-2 text-slate-700 outline-none focus:ring-2 ring-yellow-400/50"
    >
      <option value="this-year">Tahun Ini</option>
      <option value="6m">6 Bulan Terakhir</option>
      <option value="last-year">Tahun Lalu</option>
    </select>
  );
}
