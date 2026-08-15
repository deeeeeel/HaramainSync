import Link from "next/link";
import Image from "next/image";
import { Command, Boxes, Landmark, Fingerprint, Radar, Network } from "lucide-react";

const portalModules = [
  {
    id: "owner",
    title: "Owner Dashboard",
    desc: "Executive Command Center & KPI",
    icon: Command,
    href: "/dashboard",
    color: "from-blue-500 to-blue-600",
    shadow: "shadow-blue-500/20",
  },
  {
    id: "admin",
    title: "Admin Operasional",
    desc: "Manajemen Paket & Data Jamaah",
    icon: Boxes,
    href: "/manajemen-paket",
    color: "from-fuchsia-500 to-fuchsia-600",
    shadow: "shadow-fuchsia-500/20",
  },
  {
    id: "finance",
    title: "Finance & Billing",
    desc: "Arus Kas & Pembayaran Vendor",
    icon: Landmark,
    href: "/keuangan",
    color: "from-emerald-500 to-emerald-600",
    shadow: "shadow-emerald-500/20",
  },
  {
    id: "jamaah",
    title: "Jamaah Super App",
    desc: "Panduan Ibadah & Itinerary",
    icon: Fingerprint,
    href: "/jamaah-app",
    color: "from-amber-500 to-amber-600",
    shadow: "shadow-amber-500/20",
  },
  {
    id: "mutawwif",
    title: "Mutawwif Tracking",
    desc: "Live Tracking & Geofencing",
    icon: Radar,
    href: "/live-tracking",
    color: "from-yellow-400 to-yellow-500",
    shadow: "shadow-yellow-500/20",
  },
  {
    id: "agent",
    title: "Agent Portal",
    desc: "Manajemen Kinerja & Komisi Agen",
    icon: Network,
    href: "/agent",
    color: "from-purple-500 to-purple-600",
    shadow: "shadow-purple-500/20",
  },
];

export default function PortalPage() {
  return (
    <div className="min-h-full flex flex-col items-center justify-center p-6 relative overflow-hidden bg-[#022c22]">
      {/* Background Photo */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image 
          src="/haramain.png" 
          alt="Haramain Background" 
          fill 
          className="object-cover opacity-40 contrast-125 saturate-50"
          priority
        />
        {/* Dark emerald overlay to ensure text readability */}
        <div className="absolute inset-0 bg-[#022c22]/85"></div>
      </div>

      {/* Background gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#d4af37]/10 blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-500/10 blur-[120px] pointer-events-none z-0"></div>

      <div className="text-center mb-16 relative z-10 flex flex-col items-center">
        <div className="relative w-20 h-20 mb-6 overflow-hidden rounded-xl shadow-[0_0_30px_rgba(212,175,55,0.2)]">
          <Image src="/kaaba.png" alt="Kaaba Icon" fill className="object-contain" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight font-serif">
          Haramain<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-yellow-200">Sync</span>
        </h1>
        <p className="text-emerald-100/70 max-w-lg mx-auto text-sm md:text-base leading-relaxed">
          Orkestrasi Manajemen Umroh & Haji, Tersinkronisasi Real-Time.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto relative z-10">
        {portalModules.map((mod) => (
          <Link href={mod.href} key={mod.id} className="group">
            <div className={`bg-[#064e3b]/40 backdrop-blur-xl border border-[#d4af37]/20 rounded-xl p-6 h-full flex flex-col transition-all duration-300 hover:bg-[#064e3b]/60 hover:border-[#d4af37]/50 shadow-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.15)]`}>
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${mod.color} flex items-center justify-center mb-6 shadow-md`}>
                <mod.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#d4af37] transition-colors font-serif">{mod.title}</h3>
              <p className="text-xs text-emerald-100/60 flex-1 leading-relaxed">{mod.desc}</p>
              
              <div className="mt-6 flex items-center text-xs font-bold text-slate-500 group-hover:text-white transition-colors uppercase tracking-wider">
                Enter Module <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-24 text-center relative z-10">
        <p className="text-xs text-[#d4af37]/60">
          Digitalisasi Menyeluruh Travel Umroh & Haji &bull; <a href="https://studiosatuakun.id/" target="_blank" rel="noopener noreferrer" className="hover:text-[#d4af37] transition-colors">PT Studio Satu Akun</a>
        </p>
      </div>
    </div>
  );
}
