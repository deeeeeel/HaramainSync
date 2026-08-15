"use client";

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TimeFilter } from './TimeFilter';

interface DashboardChartsProps {
  data: Array<{
    name: string;
    idr: number;
    usd: number;
    sar: number;
  }>;
}

export function DashboardCharts({ data }: DashboardChartsProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200/60 mb-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-lg font-bold text-slate-900 font-serif">Tren Pendapatan & Pendaftaran</h2>
          <p className="text-sm text-slate-500">Multi-currency (IDR, USD, SAR) dalam jutaan rupiah (ekuivalen)</p>
        </div>
        <TimeFilter />
      </div>
      
      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorIdr" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#d4af37" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#d4af37" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorUsd" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#064e3b" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#064e3b" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="name" stroke="#cbd5e1" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#cbd5e1" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `Rp${value}M`} />
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <Tooltip 
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              itemStyle={{ fontSize: '14px', fontWeight: 500 }}
            />
            <Area type="monotone" dataKey="idr" name="IDR (Ekuivalen)" stroke="#d4af37" strokeWidth={3} fillOpacity={1} fill="url(#colorIdr)" />
            <Area type="monotone" dataKey="usd" name="USD (Ekuivalen)" stroke="#064e3b" strokeWidth={3} fillOpacity={1} fill="url(#colorUsd)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
