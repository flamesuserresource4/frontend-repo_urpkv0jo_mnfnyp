import Navbar from './components/Navbar'
import DashboardHero from './components/DashboardHero'
import QuickActions from './components/QuickActions'
import GamesPreview from './components/GamesPreview'

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(80%_60%_at_50%_-10%,rgba(16,185,129,0.25),rgba(59,130,246,0.15)_40%,transparent_70%)] dark:bg-[radial-gradient(80%_60%_at_50%_-10%,rgba(16,185,129,0.18),rgba(59,130,246,0.12)_40%,transparent_70%)] text-neutral-900 dark:text-white">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <DashboardHero />

        <div className="mt-6 sm:mt-8">
          <QuickActions />
        </div>

        <div className="mt-6 sm:mt-8">
          <GamesPreview />
        </div>
      </main>

      <footer className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-neutral-600 dark:text-neutral-400">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            © {new Date().getFullYear()} WeFootballin'. Built for the beautiful game.
          </p>
          <div className="inline-flex items-center gap-4">
            <a className="hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors" href="#">Privacy</a>
            <a className="hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors" href="#">Terms</a>
            <a className="hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors" href="#">Support</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
