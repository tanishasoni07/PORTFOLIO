import React from 'react'
import educ from '../assets/educ.png'
import {
  Calendar,
  CheckCircle,
  GraduationCap
} from 'lucide-react'

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: 'B.Tech in Computer Science Engineering',
      institution: 'Lakshmi Chand Institute of Technology (LCIT), Bilaspur',
      duration: '2023 - 2027',
      details:
        'Currently pursuing B.Tech in Computer Science Engineering with interests in Web Development, Software Engineering, and Programming.'
    },
    {
      id: 2,
      degree: 'Intermediate Web Developer',
      institution: 'Self Learning & Practical Projects',
      duration: '2024 - Present',
      details:
        'Building responsive websites using HTML5, CSS3, JavaScript, Tailwind CSS, React, and basic Node.js.'
    }
  ]

  return (
    <section className="text-theme py-20 overflow-hidden" id="education">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="mb-16">
          <p className="text-primary text-sm uppercase tracking-widest mb-2 font-semibold">
            Learning Path
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-theme">
            Education.
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-5/12 flex justify-center lg:justify-start" data-aos="fade-right">
            <div className="relative">
              <div className="absolute h-full w-full z-0 p-2 translate-x-4 translate-y-4 rounded-3xl border border-primary/50 blur-[1px]" />

              <div className="relative z-10 glass-panel rounded-3xl overflow-hidden">
                <img
                  src={educ}
                  alt="Education"
                  className="w-64 h-64 md:w-96 md:h-120 object-cover transform transition-transform duration-500 hover:scale-110"
                />
              </div>

              <div className="absolute -top-4 -left-4 h-16 w-16 rounded-full bg-primary/20 blur-2xl animate-glow-pulse" />
            </div>
          </div>

          <div className="w-full lg:w-7/12 space-y-6" data-aos="fade-left">
            {educationData.map((edu) => (
              <div
                key={edu.id}
                className="group relative p-6 rounded-2xl glass-panel transition-all duration-300 hover:border-primary/50"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-surface-soft rounded-lg border border-theme group-hover:border-primary transition-colors">
                      <GraduationCap className="text-primary" size={24} />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-theme group-hover:text-primary transition-colors">
                        {edu.degree}
                      </h3>

                      <p className="text-theme-muted">
                        {edu.institution}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-medium bg-surface-soft px-3 py-1 rounded-full border border-theme w-fit">
                  <Calendar size={12} className="text-primary" />
                  {edu.duration}
                </div>

                <p className="text-theme-muted text-sm leading-relaxed mb-4 mt-4">
                  {edu.details}
                </p>

                <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-primary font-bold">
                  <CheckCircle size={12} />
                  Continuous Learning
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
