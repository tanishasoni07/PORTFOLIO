import React, { useEffect, useState } from 'react'
import AOS from'aos'
import 'aos/dist/aos.css'
import Header from'./components/Header'
import HeroSection from './components/HeroSection'
import Education from './components/Education'
import ProjectsSection from './components/ProjectsSection'
import Certificates from './components/Certificates'
import AboutSection from './components/AboutSection'
import Experience from './components/Experience'
import ContactSection from './components/ContactSection'
import PointerEffects from './components/PointerEffects'

const App = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') {
      return 'dark'
    }

    const savedTheme = window.localStorage.getItem('portfolio-theme')
    if (savedTheme) {
      return savedTheme
    }

    return window.matchMedia('(prefers-color-scheme: light)').matches
      ? 'light'
      : 'dark'
  })

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    })
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  return (
    <div id="top" className='bg-app text-theme min-h-screen relative overflow-hidden'>
      <PointerEffects />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] overflow-hidden">
        <div className="absolute left-[-10%] top-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-float-slow" />
        <div className="absolute right-[-6%] top-24 h-80 w-80 rounded-full bg-cyan-300/15 blur-3xl animate-glow-pulse" />
        <div className="absolute inset-x-1/3 top-24 h-56 rounded-full bg-gradient-to-r from-primary/20 via-transparent to-cyan-200/15 blur-3xl animate-aurora" />
      </div>

      <Header
        theme={theme}
        onToggleTheme={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
      />
      <HeroSection />
      <Education />
      <ProjectsSection />
      <Certificates />
      <AboutSection />
      <Experience />
      <ContactSection />
    </div>
  )
}

export default App
