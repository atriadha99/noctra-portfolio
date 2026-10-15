'use client';

import { useStreamingStore } from '@/store/streamingStore';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, X } from 'lucide-react';

export default function StreamingToast() {
  const { toast, hideToast } = useStreamingStore();

  return (
    <div className="fixed bottom-6 right-6 z-50 pointer-events-none">
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-xl bg-zinc-900/95 border border-white/20 text-white shadow-2xl backdrop-blur-md max-w-sm"
          >
            <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center shrink-0 text-blue-400">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <p className="text-xs font-mono text-zinc-200 leading-snug flex-1">
              {toast.message}
            </p>
            <button
              onClick={hideToast}
              aria-label="Close notification"
              className="text-zinc-500 hover:text-white transition-colors p-1"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
