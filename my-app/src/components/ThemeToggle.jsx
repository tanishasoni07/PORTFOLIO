import { MoonStar, SunMedium } from 'lucide-react'

const ThemeToggle = ({ theme, onToggle }) => {
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={onToggle}
      className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-theme bg-surface px-4 py-2 text-sm font-semibold text-theme shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <span className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-cyan-300/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="relative flex items-center gap-2">
        {isDark ? <SunMedium size={16} /> : <MoonStar size={16} />}
        {isDark ? 'Light' : 'Dark'}
      </span>
    </button>
  )
}

export default ThemeToggle
