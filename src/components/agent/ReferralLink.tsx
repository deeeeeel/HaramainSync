"use client";

import { useState } from "react";
import { Link2, Copy, Check, QrCode } from "lucide-react";

export function ReferralLink() {
  const [copied, setCopied] = useState(false);
  const dummyLink = "haramainsync.com/p/reguler?ref=AGN001";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(dummyLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Gagal menyalin ke clipboard", err);
    }
  };

  return (
    <div className="bg-gradient-to-r from-emerald-600 to-emerald-800 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8 opacity-10">
        <Link2 className="w-32 h-32" />
      </div>
      
      <div className="relative z-10">
        <h2 className="text-xl font-bold mb-2">Sebarkan Link Referral Anda</h2>
        <p className="text-emerald-100 mb-6 text-sm max-w-lg">
          Bagikan link ini ke calon jamaah. Setiap jamaah yang mendaftar melalui link ini akan otomatis masuk ke pipeline Anda.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <div className="flex-1 w-full bg-white/10 border border-white/20 rounded-xl flex items-center overflow-hidden backdrop-blur-sm">
            <div className="px-4 text-emerald-200">
              <Link2 className="w-5 h-5" />
            </div>
            <input 
              type="text" 
              readOnly 
              value={dummyLink}
              className="w-full bg-transparent border-none text-white py-3 pr-4 focus:outline-none focus:ring-0 text-sm font-medium"
            />
          </div>
          
          <div className="flex gap-2 w-full sm:w-auto">
            <button 
              onClick={handleCopy}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-slate-900 px-6 py-3 rounded-xl font-bold transition-all active:scale-95 shadow-sm"
            >
              {copied ? (
                <>
                  <Check className="w-5 h-5" />
                  Tersalin
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5" />
                  Salin Link
                </>
              )}
            </button>
            
            <button className="flex items-center justify-center bg-white/20 hover:bg-white/30 text-white p-3 rounded-xl transition-all active:scale-95 backdrop-blur-sm">
              <QrCode className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
