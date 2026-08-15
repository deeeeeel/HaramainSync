"use client";

import { useState } from "react";
import { AlertTriangle, X, MapPin, HeartPulse, HelpCircle, Loader2 } from "lucide-react";
import { sendSOSEmergency } from "@/app/actions/sos";

export function SOSDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const emergencyOptions = [
    { id: "Tersesat", icon: MapPin, label: "Tersesat", desc: "Kehilangan arah kembali ke hotel/rombongan" },
    { id: "Sakit", icon: HeartPulse, label: "Sakit / Medis", desc: "Butuh penanganan medis segera" },
    { id: "Lainnya", icon: HelpCircle, label: "Lainnya", desc: "Keadaan darurat lainnya" },
  ];

  const handleSendSOS = async () => {
    if (!selectedType) return;
    
    setIsSubmitting(true);
    try {
      await sendSOSEmergency(selectedType);
      setSuccess(true);
      setTimeout(() => {
        setIsOpen(false);
        setSuccess(false);
        setSelectedType(null);
      }, 3000);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 w-16 h-16 bg-red-600 text-white rounded-full shadow-[0_0_20px_rgba(220,38,38,0.6)] flex flex-col items-center justify-center animate-[pulse_2s_ease-in-out_infinite] hover:scale-105 transition-transform"
      >
        <AlertTriangle className="w-7 h-7 mb-0.5" />
        <span className="text-[10px] font-bold">SOS</span>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 transition-opacity"
          onClick={() => !isSubmitting && setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div className={`fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-3xl transition-transform duration-300 ease-out transform ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Bantuan Darurat (SOS)</h2>
              <p className="text-sm text-slate-500 mt-1">Pilih jenis kondisi darurat Anda saat ini.</p>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              disabled={isSubmitting}
              className="p-2 bg-slate-100 rounded-full text-slate-500 hover:bg-slate-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {success ? (
            <div className="py-8 text-center flex flex-col items-center animate-in fade-in zoom-in duration-300">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <AlertTriangle className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">SOS Berhasil Dikirim!</h3>
              <p className="text-slate-600 text-sm">Sinyal darurat Anda beserta lokasi GPS telah dikirim ke Mutawwif. Bantuan akan segera datang, mohon tetap di tempat dan tenang.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {emergencyOptions.map((opt) => (
                <div 
                  key={opt.id}
                  onClick={() => setSelectedType(opt.id)}
                  className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    selectedType === opt.id 
                      ? 'border-red-500 bg-red-50' 
                      : 'border-slate-100 bg-white hover:border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${
                    selectedType === opt.id ? 'bg-red-500 text-white' : 'bg-slate-100 text-slate-600'
                  }`}>
                    <opt.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{opt.label}</h4>
                    <p className="text-xs text-slate-500">{opt.desc}</p>
                  </div>
                </div>
              ))}

              <button 
                onClick={handleSendSOS}
                disabled={!selectedType || isSubmitting}
                className="w-full mt-6 py-4 bg-red-600 text-white font-bold rounded-xl shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-red-700 transition-colors flex justify-center items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Mengirim SOS...
                  </>
                ) : (
                  "KIRIM BANTUAN SEKARANG"
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
