"use client";

import { useEffect } from "react";
import { AlertCircle } from "lucide-react";

export default function AgentError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex-1 flex flex-col items-center justify-center h-full w-full py-20 text-center">
      <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
      <h2 className="text-xl font-bold text-slate-800 mb-2">Terjadi Kesalahan</h2>
      <p className="text-slate-500 max-w-md mx-auto mb-6">
        Maaf, kami mengalami masalah saat memuat halaman ini. Silakan coba lagi.
      </p>
      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium"
      >
        Coba Lagi
      </button>
    </div>
  );
}
