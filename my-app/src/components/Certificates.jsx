import { useEffect, useState } from 'react'
import {
  Calendar,
  ShieldCheck,
  Award,
  ExternalLink,
  X
} from 'lucide-react'

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null)

  const certifications = [
    {
      id: 1,
      title: 'TCS MasterCraft DataPlus Overview Course',
      issuer: 'TCS MasterCraft Academy',
      date: '2026',
      link: '/certificates/tcs-certificate%20.pdf',
      desc: 'Successfully completed the DataPlus Overview Course and received a Certificate of Appreciation.'
    },
    {
      id: 2,
      title: 'HTML5, Python & Flask Framework',
      issuer: 'Udemy',
      date: '2026',
      link: '/certificates/udemy-flask%20.pdf',
      desc: 'Covered HTML5, Python, Flask framework, and web application development.'
    },
    {
      id: 3,
      title: 'HTML and CSS for Beginners',
      issuer: 'Udemy',
      date: '2025',
      link: '/certificates/udemy-html-css%20.pdf',
      desc: 'Learned HTML5, CSS3, responsive layouts, forms, and modern web design concepts.'
    },
    {
      id: 4,
      title: 'Fundamentals of Python Programming',
      issuer: 'Udemy',
      date: '2025',
      link: '/certificates/udemy-python%20.pdf',
      desc: 'Learned Python fundamentals including variables, loops, functions, and problem-solving techniques.'
    }
  ]

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedCertificate(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <>
      <section className="text-theme py-20" id="certificates">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="mb-16">
            <p className="text-primary text-sm uppercase tracking-widest mb-2 font-semibold">
              Achievements
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold text-theme">
              Certifications.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                data-aos="zoom-in"
                className="group relative glass-panel rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
              >
                <div className="absolute -top-4 -right-4 bg-primary p-3 rounded-xl shadow-lg shadow-primary/20 animate-float-medium">
                  <Award size={20} className="text-white" />
                </div>

                <div className="mb-4 flex flex-wrap gap-4 text-xs text-theme-muted">
                  <span className="flex items-center gap-1">
                    <ShieldCheck size={14} className="text-primary" />
                    {cert.issuer}
                  </span>

                  <span className="flex items-center gap-1">
                    <Calendar size={14} className="text-primary" />
                    {cert.date}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors text-theme">
                  {cert.title}
                </h3>

                <p className="text-theme-muted text-sm mb-6">
                  {cert.desc}
                </p>

                <button
                  type="button"
                  onClick={() => setSelectedCertificate(cert)}
                  className="text-primary font-semibold flex items-center gap-2 hover:underline"
                >
                  View Certificate
                  <ExternalLink size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedCertificate && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-md"
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-3xl glass-panel-strong"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-theme/40 px-4 py-3 sm:px-6">
              <div>
                <h3 className="text-lg font-bold text-theme">
                  {selectedCertificate.title}
                </h3>
                <p className="text-sm text-theme-muted">
                  {selectedCertificate.issuer}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={selectedCertificate.link}
                  target="_blank"
                  rel="noreferrer"
                  className="hidden sm:inline-flex items-center gap-2 rounded-full border border-theme bg-surface px-4 py-2 text-sm font-semibold text-theme transition hover:border-primary/60"
                >
                  Open in new tab
                </a>

                <button
                  type="button"
                  onClick={() => setSelectedCertificate(null)}
                  className="rounded-full p-2 text-theme-muted transition-colors hover:bg-white/10 hover:text-theme"
                  aria-label="Close certificate preview"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            <div className="h-[75vh] bg-[color:var(--app-bg)]">
              <iframe
                src={selectedCertificate.link}
                title={selectedCertificate.title}
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Certificates
