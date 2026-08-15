"use client";

import { useState } from "react";
import { FolderDown, CalendarDays, MapPinned, Loader2, CheckCircle2 } from "lucide-react";

interface MarketingPackageCardProps {
  id: string;
  name: string;
  destination: string;
  departureDate: string;
  price: string;
  imageUrl: string;
}

export function MarketingPackageCard({
  name,
  destination,
  departureDate,
  price,
  imageUrl,
}: MarketingPackageCardProps) {
  const [isDownloading, setIsDownloading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    
    // Simulate generation of watermarked PDF/Image
    setTimeout(() => {
      setIsDownloading(false);
      setShowToast(true);
      
      // Hide toast after 3 seconds
      setTimeout(() => setShowToast(false), 3000);
    }, 2000);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200/60 overflow-hidden flex flex-col relative group">
      
      {/* Simulated Toast Notification */}
      {showToast && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 bg-[#022c22] text-[#d4af37] px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 shadow-lg animate-in fade-in slide-in-from-top-4 border border-[#d4af37]/20">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          Brosur dengan nama Anda siap diunduh!
        </div>
      )}

      <div className="h-48 relative overflow-hidden bg-slate-100">
        <div 
          className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h3 className="text-lg font-bold line-clamp-1 font-serif">{name}</h3>
        </div>
      </div>
      
      <div className="p-5 flex-1 flex flex-col">
        <div className="space-y-3 mb-6 flex-1">
          <div className="flex items-center gap-2 text-slate-600 text-sm">
            <MapPinned className="w-4 h-4 text-emerald-500 shrink-0" />
            <span className="line-clamp-1">{destination}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-600 text-sm">
            <CalendarDays className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>{departureDate}</span>
          </div>
          <div className="pt-2">
            <p className="text-xs text-slate-400 mb-1">Harga mulai</p>
            <p className="text-lg font-bold text-emerald-600">{price}</p>
          </div>
        </div>
        
        <button 
          onClick={handleDownload}
          disabled={isDownloading}
          className="w-full flex items-center justify-center gap-2 bg-[#064e3b] hover:bg-[#022c22] text-[#d4af37] py-3 rounded-xl font-bold transition-all disabled:opacity-70 disabled:cursor-not-allowed active:scale-95 shadow-sm border border-[#d4af37]/20"
        >
          {isDownloading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin text-emerald-400" />
              Menyiapkan Brosur...
            </>
          ) : (
            <>
              <FolderDown className="w-5 h-5 text-[#d4af37]" />
              Download Brosur
            </>
          )}
        </button>
      </div>
    </div>
  );
}
