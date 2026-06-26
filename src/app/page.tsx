import Link from "next/link";
import Image from "next/image";
import { LayoutDashboard, Package, DollarSign, Smartphone, Map } from "lucide-react";

const portalModules = [
  {
    id: "owner",
    title: "Owner Dashboard",
    desc: "Executive Command Center & KPI",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "from-blue-500 to-blue-600",
    shadow: "shadow-blue-500/20",
  },
  {
    id: "admin",
    title: "Admin Operasional",
    desc: "Manajemen Paket & Data Jamaah",
    icon: Package,
    href: "/manajemen-paket",
    color: "from-fuchsia-500 to-fuchsia-600",
    shadow: "shadow-fuchsia-500/20",
  },
  {
    id: "finance",
    title: "Finance & Billing",
    desc: "Arus Kas & Pembayaran Vendor",
    icon: DollarSign,
    href: "/keuangan",
    color: "from-emerald-500 to-emerald-600",
    shadow: "shadow-emerald-500/20",
  },
  {
    id: "jamaah",
    title: "Jamaah Super App",
    desc: "Panduan Ibadah & Itinerary (Modul 2)",
    icon: Smartphone,
    href: "/jamaah-app",
    color: "from-amber-500 to-amber-600",
    shadow: "shadow-amber-500/20",
  },
  {
    id: "mutawwif",
    title: "Mutawwif Tracking",
    desc: "Live Tracking & Geofencing (Modul 3)",
    icon: Map,
    href: "/live-tracking",
    color: "from-yellow-400 to-yellow-500",
    shadow: "shadow-yellow-500/20",
  },
];

export default function PortalPage() {
  return (
    <div className="min-h-full flex flex-col items-center justify-center p-6 relative overflow-hidden bg-slate-950">
      {/* Background Photo */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image 
          src="/haramain.png" 
          alt="Haramain Background" 
          fill 
          className="object-cover opacity-40 contrast-125 saturate-50"
          priority
        />
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-slate-950/70"></div>
      </div>

      {/* Background gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/20 blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-900/20 blur-[120px] pointer-events-none z-0"></div>

      <div className="text-center mb-16 relative z-10">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-500 mb-6 shadow-[0_0_30px_rgba(250,204,21,0.3)] overflow-hidden relative">
          <div className="relative w-10 h-10">
            <Image src="/kaaba.png" alt="Kaaba Icon" fill className="object-contain" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
          Haramain<span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-emerald-400">Sync</span>
        </h1>
        <p className="text-slate-400 max-w-lg mx-auto text-sm md:text-base leading-relaxed">
          Orkestrasi Manajemen Umroh & Haji, Tersinkronisasi Real-Time.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto relative z-10">
        {portalModules.map((mod) => (
          <Link href={mod.href} key={mod.id} className="group">
            <div className={`bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 h-full flex flex-col transition-all duration-300 hover:scale-105 hover:bg-slate-800 hover:border-slate-700 shadow-xl hover:${mod.shadow}`}>
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${mod.color} flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all`}>
                <mod.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">{mod.title}</h3>
              <p className="text-xs text-slate-400 flex-1 leading-relaxed">{mod.desc}</p>
              
              <div className="mt-6 flex items-center text-xs font-bold text-slate-500 group-hover:text-white transition-colors uppercase tracking-wider">
                Enter Module <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-24 text-center relative z-10">
        <p className="text-xs text-slate-600">
          Digitalisasi Menyeluruh Travel Umroh & Haji &bull; <a href="https://studiosatuakun.id/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition-colors">PT Studio Satu Akun</a>
        </p>
      </div>
    </div>
  );
}
