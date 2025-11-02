import { motion } from 'framer-motion'
import { BadgeCheck, MapPin, Users } from 'lucide-react'

export default function DashboardHero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 via-cyan-400/10 to-blue-500/20 blur-2xl" aria-hidden />

      <div className="relative rounded-3xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 backdrop-blur-xl p-6 sm:p-8 shadow-lg">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-500">Welcome back,</span>
              <span className="ml-2 text-neutral-900 dark:text-white">Player</span>
            </h1>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300 max-w-2xl">
              Find a match, host your own, and grow your football community. Everything is designed to be fast, fluid, and delightful.
            </p>

            {/* Quick stats */}
            <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-3">
              <Stat icon={<Users size={18} />} label="Players met" value="128" />
              <Stat icon={<BadgeCheck size={18} />} label="Games played" value="47" />
              <Stat icon={<MapPin size={18} />} label="Venues saved" value="12" className="hidden sm:flex" />
            </div>
          </motion.div>

          {/* Promo card */}
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }} className="w-full lg:w-auto">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-5 shadow-xl">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/15 blur-2xl" aria-hidden />
              <p className="text-sm opacity-90">New</p>
              <h3 className="mt-1 text-lg font-bold">Weekend Blitz Tournaments</h3>
              <p className="mt-1 text-sm opacity-90">Join ranked 7v7 brackets in your city.</p>
              <button className="mt-4 inline-flex items-center gap-2 rounded-xl bg-white/15 px-4 py-2 text-white backdrop-blur-sm hover:bg-white/20 transition-colors">
                Learn more
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Stat({ icon, label, value, className = '' }) {
  return (
    <div className={`items-center gap-3 rounded-xl border border-black/5 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 backdrop-blur px-4 py-3 shadow ${className}`}>
      <div className="flex items-center gap-3">
        <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-emerald-400 to-teal-500 text-white shadow-inner">
          {icon}
        </div>
        <div>
          <div className="text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-400">{label}</div>
          <div className="text-lg font-bold text-neutral-900 dark:text-white">{value}</div>
        </div>
      </div>
    </div>
  )
}
