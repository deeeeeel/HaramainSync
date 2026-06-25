"use client";

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', idr: 1200, usd: 400, sar: 800 },
  { name: 'Feb', idr: 1900, usd: 600, sar: 1200 },
  { name: 'Mar', idr: 1500, usd: 550, sar: 900 },
  { name: 'Apr', idr: 2800, usd: 900, sar: 1800 },
  { name: 'Mei', idr: 2200, usd: 800, sar: 1400 },
  { name: 'Jun', idr: 3400, usd: 1200, sar: 2100 },
];

export function DashboardCharts() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 mb-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Tren Pendapatan & Pendaftaran</h2>
          <p className="text-sm text-slate-500">Multi-currency (IDR, USD, SAR) dalam jutaan rupiah (ekuivalen)</p>
        </div>
        <select className="bg-slate-50 border border-slate-200 text-sm rounded-lg px-3 py-2 text-slate-700 outline-none focus:ring-2 ring-yellow-400/50">
          <option>Tahun Ini</option>
          <option>6 Bulan Terakhir</option>
          <option>Tahun Lalu</option>
        </select>
      </div>
      
      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorIdr" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#facc15" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#facc15" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorUsd" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="name" stroke="#cbd5e1" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#cbd5e1" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `Rp${value}M`} />
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <Tooltip 
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              itemStyle={{ fontSize: '14px', fontWeight: 500 }}
            />
            <Area type="monotone" dataKey="idr" name="IDR (Ekuivalen)" stroke="#facc15" strokeWidth={3} fillOpacity={1} fill="url(#colorIdr)" />
            <Area type="monotone" dataKey="usd" name="USD (Ekuivalen)" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorUsd)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
