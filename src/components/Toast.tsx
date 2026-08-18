import React, { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, 3200);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-sm bg-[#0e0e0e] border border-white/20 shadow-2xl text-white font-mono text-xs animate-slideUp">
      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
      <span className="text-white/90">{message}</span>
      <button
        onClick={onClose}
        className="p-1 text-white/40 hover:text-white rounded hover:bg-white/10 ml-2"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
