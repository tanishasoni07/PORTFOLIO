import React, { useState } from 'react'
import hero from '../assets/hero.png'
import { Download, Sparkles, ArrowRight } from 'lucide-react'

const HeroSection = () => {
  const [showContact, setShowContact] = useState(false)

  return (
    <section className="relative w-full pt-8" data-aos="zoom-in-up">
      <div className="absolute inset-x-0 top-0 h-64 overflow-hidden pointer-events-none">
        <div className="absolute left-0 top-8 h-24 w-2/3 bg-linear-to-br from-primary/30 via-cyan-300/20 to-transparent blur-3xl animate-aurora" />
        <div className="absolute right-0 top-16 h-20 w-3/4 bg-linear-to-r from-cyan-300/25 to-primary/20 blur-3xl animate-glow-pulse" />
      </div>

      <div className="w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-5xl lg:max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-10 relative pt-20 lg:max-w-none max-w-2xl md:max-w-3xl mx-auto">
          <div className="lg:py-6">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-theme bg-surface px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-theme-muted shadow-lg">
                <Sparkles size={14} className="text-primary" />
                Frontend Developer Resume
              </div>

              <h1 className="pt-6 text-theme font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
                Tanisha Soni
                <span className="block mt-4 text-2xl md:text-3xl lg:text-4xl font-semibold text-theme-muted">
                  Frontend Developer | CSE Student
                </span>
              </h1>

              <p className="text-theme-muted pt-8 text-center lg:text-left mx-auto max-w-xl text-lg leading-relaxed">
                I am a Computer Science Engineering student focused on frontend
                development, responsive UI design, and building modern web
                experiences with React, Tailwind CSS, JavaScript, HTML, and CSS.
                I enjoy turning ideas into clean interfaces that are practical,
                accessible, and visually polished.
              </p>

              <div className="flex items-center gap-3 pt-9 flex-col sm:flex-row lg:mx-0">
                <button
                  onClick={() => setShowContact(!showContact)}
                  className="relative group w-full sm:w-max flex justify-center overflow-hidden rounded-full px-6 md:px-7 py-3 text-white shadow-lg shadow-primary/25"
                >
                  <span className="absolute inset-0 rounded-full bg-primary transition-transform duration-300 group-hover:scale-105" />
                  <span className="relative flex items-center justify-center gap-2">
                    Contact Me
                    <ArrowRight size={16} />
                  </span>
                </button>

                {showContact && (
                  <div className="glass-panel mt-4 rounded-2xl p-4 text-theme w-full sm:w-auto">
                    <a
                      href="mailto:sonitanisha0107@gmail.com?subject=Portfolio Inquiry"
                      className="text-primary underline hover:opacity-80"
                    >
                      sonitanisha0107@gmail.com
                    </a>
                  </div>
                )}

                <a
                  href="/resume.pdf"
                  download="Tanisha_Soni_Resume.pdf"
                  className="group inline-flex w-full sm:w-max items-center justify-center gap-2 rounded-full border border-theme bg-surface px-6 md:px-7 py-3 text-theme font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60"
                >
                  <Download size={18} className="text-primary" />
                  Download Resume
                </a>
              </div>
            </div>
          </div>

          <div className="lg:h-full md:flex">
            <div className="flex w-full h-96 min-h-96 lg:min-h-[none] lg:w-full lg:h-full items-center relative">
              <div className="absolute z-0 top-1/2 -translate-y-1/2 w-5/6 right-0 h-[calc(80%+20px)] bg-linear-to-r opacity-20 from-primary via-cyan-300 to-transparent blur-3xl animate-glow-pulse" />

              <div className="absolute -left-2 top-10 glass-panel rounded-2xl px-4 py-3 z-20 animate-float-slow">
                <p className="text-xs uppercase tracking-[0.3em] text-theme-muted">Specialty</p>
                <p className="text-sm font-semibold text-theme">UI, UX & Frontend</p>
              </div>

              <div className="absolute bottom-8 right-6 glass-panel rounded-2xl px-4 py-3 z-20 animate-float-medium">
                <p className="text-xs uppercase tracking-[0.3em] text-theme-muted">Focus</p>
                <p className="text-sm font-semibold text-theme">Responsive Interfaces</p>
              </div>

              <div className="absolute h-full z-10 p-2 -translate-y-1/2 top-1/2 lg:right-3 md:right-40 sm:right-16 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] border border-theme glass-panel overflow-hidden animate-float-medium">
                <img
                  src={hero}
                  alt="Tanisha Soni"
                  width="500"
                  height="auto"
                  loading="lazy"
                  className="w-full h-full rounded-[30%_70%_70%_30%/30%_30%_70%_70%] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
