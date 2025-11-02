import { useState } from 'react'
import { Bell, Calendar, Home, Plus, Search, User } from 'lucide-react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 dark:bg-neutral-900/70 border-b border-black/5 dark:border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-emerald-400 via-teal-400 to-blue-500 shadow-lg shadow-emerald-500/20 grid place-items-center text-white font-black">WF</div>
            <span className="text-lg sm:text-xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500">
              WeFootballin'
            </span>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-2 text-sm">
            <NavLink icon={<Home size={16} />} label="Dashboard" />
            <NavLink icon={<Search size={16} />} label="Find Games" />
            <NavLink icon={<Calendar size={16} />} label="My Games" />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-orange-400 to-rose-500 text-white font-semibold shadow hover:shadow-lg transition-shadow duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-500">
              <Plus size={16} /> Host Game
            </button>
            <button className="relative p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors" aria-label="Notifications">
              <span className="absolute -top-0.5 -right-0.5 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-white dark:ring-neutral-900"></span>
              <Bell size={20} className="text-neutral-700 dark:text-neutral-300" />
            </button>
            <button className="inline-flex md:hidden p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
              <User size={20} className="text-neutral-700 dark:text-neutral-300" />
            </button>
            <div className="hidden md:flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-400 to-blue-600" />
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden grid grid-cols-3 gap-2 pb-3">
            <button className="flex items-center justify-center gap-2 py-2 rounded-lg bg-black/5 dark:bg-white/10 text-sm font-medium">
              <Home size={16} /> Dashboard
            </button>
            <button className="flex items-center justify-center gap-2 py-2 rounded-lg bg-black/5 dark:bg-white/10 text-sm font-medium">
              <Search size={16} /> Find Games
            </button>
            <button className="flex items-center justify-center gap-2 py-2 rounded-lg bg-black/5 dark:bg-white/10 text-sm font-medium">
              <Calendar size={16} /> My Games
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}

function NavLink({ icon, label }) {
  return (
    <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-neutral-700 dark:text-neutral-300 hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
      <span className="opacity-80">{icon}</span>
      <span className="font-medium">{label}</span>
    </button>
  )
}
