import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const Header = ({ theme, onToggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { name: 'Home', href: '#top' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
  ]

  const scrollToSection = (href) => {
    setIsMenuOpen(false)

    document.querySelector(href)?.scrollIntoView({
      behavior: 'smooth'
    })
  }

  return (
    <header className="relative z-50 px-4 sm:px-6 py-5">
      <div className="max-w-7xl mx-auto flex justify-between items-center gap-4 glass-panel rounded-3xl px-4 sm:px-6 py-4">
        <div
          className="flex flex-col leading-none cursor-pointer"
          onClick={() => scrollToSection('#top')}
        >
          <span className="text-theme text-lg sm:text-xl font-black tracking-[0.28em] uppercase">
            Tanisha Soni
          </span>
          <span className="text-primary text-xs sm:text-sm font-semibold tracking-[0.24em] uppercase mt-1">
            Frontend Developer
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-4 lg:gap-8">
          <ul className="flex gap-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => scrollToSection(item.href)}
                  className="text-theme-muted hover:text-theme text-base font-medium transition-all hover:-translate-y-0.5"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => scrollToSection('#contact')}
            className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full text-base font-semibold transition-all shadow-lg shadow-primary/20 hover:shadow-primary/30"
          >
            Hire Me
          </button>

          <ThemeToggle
            theme={theme}
            onToggle={onToggleTheme}
          />
        </nav>

        <button
          className="md:hidden text-theme"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Open menu"
        >
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />

          <div className="fixed top-0 right-0 h-full w-80 glass-panel-strong p-8 md:hidden z-50">
            <button
              className="text-theme text-3xl mb-10"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={28} />
            </button>

            <ul className="flex flex-col gap-8">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-theme text-xl font-semibold hover:text-primary transition-all"
                  >
                    {item.name}
                  </button>
                </li>
              ))}

              <li className="pt-6">
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="w-full bg-primary text-white py-4 rounded-xl text-lg font-bold"
                >
                  Hire Me
                </button>
              </li>

              <li className="pt-2">
                <ThemeToggle
                  theme={theme}
                  onToggle={onToggleTheme}
                />
              </li>
            </ul>
          </div>
        </>
      )}
    </header>
  )
}

export default Header
