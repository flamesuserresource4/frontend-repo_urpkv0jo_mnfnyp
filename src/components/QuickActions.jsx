import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, MapPin, Plus, Search } from 'lucide-react'

export default function QuickActions() {
  const [toast, setToast] = useState(null)

  const showToast = (message, tone = 'success') => {
    setToast({ message, tone })
    setTimeout(() => setToast(null), 2200)
  }

  return (
    <section className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ActionCard
          title="Host a Game"
          description="Create a match, set the rules, invite players."
          icon={<Plus size={18} />}
          gradient="from-orange-400 to-rose-500"
          onClick={() => showToast('Host Game flow coming up!')}
        />
        <ActionCard
          title="Find Games"
          description="Discover matches nearby that fit your vibe."
          icon={<Search size={18} />}
          gradient="from-emerald-400 to-cyan-500"
          onClick={() => showToast('Opening discovery...')}
        />
      </div>

      {/* Mini info row */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
        <InfoPill icon={<MapPin size={16} />} text="Auto-location enabled" />
        <InfoPill icon={<Calendar size={16} />} text="Tonight: 12 games near you" />
        <InfoPill icon={<Search size={16} />} text="Pro tip: Use filters to refine" className="hidden sm:flex" />
      </div>

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            className={`fixed bottom-5 left-1/2 -translate-x-1/2 z-50 rounded-xl px-4 py-3 text-sm font-medium shadow-lg backdrop-blur border ${
              toast.tone === 'success'
                ? 'bg-emerald-500/90 text-white border-emerald-300/30'
                : 'bg-rose-500/90 text-white border-rose-300/30'
            }`}
            role="status"
            aria-live="polite"
          >
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

function ActionCard({ title, description, icon, gradient, onClick }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className="relative overflow-hidden rounded-2xl p-[1px] text-left group"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-80 blur-sm`} aria-hidden />
      <div className="relative rounded-[15px] bg-white/70 dark:bg-neutral-900/70 backdrop-blur-xl border border-black/5 dark:border-white/10 p-5 sm:p-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-lg bg-black/5 dark:bg-white/10 px-3 py-1 text-xs font-semibold text-neutral-700 dark:text-neutral-200">
              <span className="opacity-80">{icon}</span>
              <span>Quick Action</span>
            </div>
            <h3 className="mt-3 text-xl font-bold text-neutral-900 dark:text-white">{title}</h3>
            <p className="mt-1 text-neutral-600 dark:text-neutral-300">{description}</p>
          </div>
          <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-white/50 to-white/10 dark:from-white/10 dark:to-white/5 border border-white/20 grid place-items-center shadow-inner">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-white/80 to-white/30" />
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/5 to-transparent" />
      </div>
    </motion.button>
  )
}

function InfoPill({ icon, text, className = '' }) {
  return (
    <div className={`inline-flex items-center gap-2 rounded-full border border-black/5 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 backdrop-blur px-3 py-2 text-xs text-neutral-700 dark:text-neutral-300 ${className}`}>
      <span className="opacity-80">{icon}</span>
      <span className="font-medium">{text}</span>
    </div>
  )
}
