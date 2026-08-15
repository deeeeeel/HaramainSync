import { MarketingPackageCard } from "@/components/agent/MarketingPackageCard";

export default function AgentMarketingKitPage() {
  const packages = [
    {
      id: "pkg-1",
      name: "Umroh Reguler Bintang 4 (9 Hari)",
      destination: "Makkah & Madinah",
      departureDate: "15 Oktober 2026",
      price: "Rp 27.500.000",
      imageUrl: "https://images.unsplash.com/photo-1565552643982-2e5f5f74cb9a?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "pkg-2",
      name: "Umroh Plus Turki (12 Hari)",
      destination: "Makkah, Madinah, Istanbul",
      departureDate: "10 November 2026",
      price: "Rp 35.000.000",
      imageUrl: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "pkg-3",
      name: "Umroh Ramadhan Awal (14 Hari)",
      destination: "Makkah & Madinah",
      departureDate: "15 Februari 2027",
      price: "Rp 32.500.000",
      imageUrl: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "pkg-4",
      name: "Umroh VIP Bintang 5 (9 Hari)",
      destination: "Makkah (Zamzam Tower)",
      departureDate: "20 Desember 2026",
      price: "Rp 42.000.000",
      imageUrl: "https://images.unsplash.com/photo-1604085572504-a392ddf0d86a?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Marketing Kit</h1>
        <p className="text-slate-500 mt-1">Unduh brosur paket umroh yang sudah dimodifikasi dengan nama dan kontak Anda.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {packages.map((pkg) => (
          <MarketingPackageCard key={pkg.id} {...pkg} />
        ))}
      </div>
    </div>
  );
}
