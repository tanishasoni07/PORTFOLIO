import React from 'react'
import about from '../assets/about.png'

const AboutSection = () => {
  const stats = [
    { number: '4+', label: 'Certifications' },
    { number: '3+', label: 'Projects Completed' },
    { number: '2027', label: 'Expected Graduation' }
  ]

  return (
    <section className="text-theme mt-20 relative overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="text-4xl md:text-5xl font-extrabold text-theme mb-6">
              Professional <span className="text-primary">Summary</span>
            </h2>

            <p className="text-theme-muted text-base lg:text-lg leading-relaxed mb-8">
              I am <span className="text-primary font-semibold">Tanisha Soni</span>,
              a Computer Science Engineering student at Lakshmi Chand Institute of
              Technology (LCIT), Bilaspur, with a focused interest in frontend
              development, interface design, and responsive web experiences.
            </p>

            <p className="text-theme-muted text-base lg:text-lg leading-relaxed mb-10">
              My technical stack includes HTML5, CSS3, JavaScript, React, Tailwind
              CSS, and Node.js fundamentals, along with programming knowledge in
              Python, C, and Java. I value clean structure, thoughtful visuals,
              and practical problem-solving.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((item, index) => (
                <div
                  key={index}
                  className="glass-panel rounded-2xl p-6 text-center"
                >
                  <h3 className="text-primary text-3xl font-bold">
                    {item.number}
                  </h3>

                  <p className="text-theme-muted text-sm mt-2">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center" data-aos="fade-left">
            <div className="relative">
              <div className="absolute h-full w-full z-0 p-2 translate-x-4 translate-y-4 rounded-3xl border border-primary/50 animate-glow-pulse" />

              <div className="relative z-10 glass-panel rounded-3xl overflow-hidden">
                <img
                  src={about}
                  alt="About Me"
                  className="w-72 md:w-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
