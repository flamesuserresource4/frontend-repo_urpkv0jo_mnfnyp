import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Clock, MapPin, Users, Check } from 'lucide-react'

const mockGames = [
  {
    id: 'g1',
    type: '7v7',
    date: 'Today',
    time: '7:30 PM',
    location: 'Greenwood Park',
    distance: '3.2 km',
    spots: { filled: 8, total: 14 },
    level: 'All Levels',
  },
  {
    id: 'g2',
    type: '5v5',
    date: 'Tomorrow',
    time: '6:00 PM',
    location: 'Riverside Turf',
    distance: '5.1 km',
    spots: { filled: 6, total: 10 },
    level: 'Intermediate',
  },
  {
    id: 'g3',
    type: '11v11',
    date: 'Fri',
    time: '8:15 PM',
    location: 'City Stadium B',
    distance: '8.4 km',
    spots: { filled: 18, total: 22 },
    level: 'Advanced',
  },
]

export default function GamesPreview() {
  const [loading, setLoading] = useState(true)
  const [games, setGames] = useState([])
  const [joined, setJoined] = useState({})
  const [toast, setToast] = useState(null)

  useEffect(() => {
    const t = setTimeout(() => {
      setGames(mockGames)
      setLoading(false)
    }, 900)
    return () => clearTimeout(t)
  }, [])

  const joinGame = (id) => {
    setJoined((prev) => ({ ...prev, [id]: true }))
    setToast('Successfully joined!')
    setTimeout(() => setToast(null), 2200)
  }

  return (
    <section>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-bold text-neutral-900 dark:text-white">Upcoming near you</h2>
        <button className="text-sm font-medium text-emerald-600 hover:text-emerald-500 transition-colors">View all</button>
      </div>

      <div className="relative">
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {loading
            ? Array.from({ length: 3 }).map((_, i) => <SkeletonCard key={i} />)
            : games.map((g, idx) => (
                <motion.div
                  key={g.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.04 }}
                  className="rounded-2xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 backdrop-blur-xl p-4 shadow hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between">
                    <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500 text-white text-xs font-semibold px-3 py-1 shadow">
                      {g.type}
                    </span>
                    <span className="text-xs text-neutral-500 dark:text-neutral-400">{g.level}</span>
                  </div>

                  <div className="mt-3 space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
                      <Clock size={16} className="opacity-80" />
                      <span className="font-medium">{g.date}</span>
                      <span className="opacity-70">•</span>
                      <span>{g.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
                      <MapPin size={16} className="opacity-80" />
                      <span className="font-medium">{g.location}</span>
                      <span className="opacity-70">•</span>
                      <span>{g.distance}</span>
                    </div>
                    <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
                      <Users size={16} className="opacity-80" />
                      <div className="w-full bg-black/5 dark:bg-white/10 rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-emerald-400 to-cyan-500"
                          style={{ width: `${Math.min(100, (g.spots.filled / g.spots.total) * 100)}%` }}
                        />
                      </div>
                      <span className="text-xs whitespace-nowrap">{g.spots.filled}/{g.spots.total}</span>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <button
                      onClick={() => joinGame(g.id)}
                      disabled={!!joined[g.id]}
                      className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                        joined[g.id]
                          ? 'bg-emerald-500 text-white hover:bg-emerald-500/90 focus-visible:ring-emerald-500'
                          : 'bg-neutral-900 text-white hover:bg-neutral-800 focus-visible:ring-neutral-900 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100'
                      }`}
                      aria-live="polite"
                    >
                      {joined[g.id] ? (
                        <>
                          <Check size={16} /> Joined
                        </>
                      ) : (
                        'Join Game'
                      )}
                    </button>

                    <button className="text-sm font-medium text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition-colors">
                      Details
                    </button>
                  </div>
                </motion.div>
              ))}
        </div>

        <AnimatePresence>
          {toast && (
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 rounded-xl px-4 py-3 text-sm font-medium shadow-lg backdrop-blur border bg-emerald-500/90 text-white border-emerald-300/30"
            >
              {toast}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

function SkeletonCard() {
  return (
    <div className="rounded-2xl border border-black/5 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-xl p-4 shadow">
      <div className="h-5 w-20 rounded bg-black/10 dark:bg-white/10 animate-pulse" />
      <div className="mt-3 space-y-2">
        <div className="h-4 w-48 rounded bg-black/10 dark:bg-white/10 animate-pulse" />
        <div className="h-4 w-40 rounded bg-black/10 dark:bg-white/10 animate-pulse" />
        <div className="h-2 w-full rounded bg-black/10 dark:bg-white/10 animate-pulse" />
      </div>
      <div className="mt-4 h-9 w-28 rounded-lg bg-black/10 dark:bg-white/10 animate-pulse" />
    </div>
  )
}
