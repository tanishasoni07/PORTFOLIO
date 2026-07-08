import { ArrowUpRight, Code2, LayoutDashboard, Sparkles } from 'lucide-react'

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Responsive Portfolio Website',
      type: 'Personal Brand Website',
      description:
        'Designed and developed a responsive portfolio with animated sections, theme switching, modal certificate previews, and a polished glassmorphism UI.',
      tags: ['React', 'Tailwind CSS', 'AOS', 'Responsive Design'],
      icon: <Sparkles size={18} />,
    },
    {
      title: 'Certificate Showcase System',
      type: 'Interactive UI Component',
      description:
        'Built a reusable certificate gallery with modal previews, keyboard support, and direct PDF rendering for a smoother user experience.',
      tags: ['Modal UI', 'PDF Preview', 'Accessibility', 'Reusable Components'],
      icon: <LayoutDashboard size={18} />,
    },
    {
      title: 'Frontend Learning Projects',
      type: 'Practice & Skill Growth',
      description:
        'Created small projects to strengthen HTML, CSS, JavaScript, React, and problem-solving skills while improving layout quality and responsiveness.',
      tags: ['HTML', 'CSS', 'JavaScript', 'React'],
      icon: <Code2 size={18} />,
    },
  ]

  return (
    <section className="py-20 text-theme" id="projects">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="mb-16 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-primary text-sm uppercase tracking-widest mb-2 font-semibold">
              Selected Work
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold">
              Projects.
            </h2>
          </div>

          <p className="max-w-2xl text-theme-muted text-base leading-relaxed">
            A focused collection of work that reflects my frontend skills, attention to detail, and ability to turn ideas into polished interfaces.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="group relative overflow-hidden rounded-3xl glass-panel p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60"
            >
              <div className="absolute right-4 top-4 h-20 w-20 rounded-full bg-primary/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-theme bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-theme-muted">
                {project.icon}
                {project.type}
              </div>

              <h3 className="text-2xl font-bold text-theme mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-theme-muted leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-theme bg-surface-soft px-3 py-1 text-xs font-medium text-theme"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between border-t border-theme/40 pt-4 text-sm font-semibold text-primary">
                <span>Resume highlight</span>
                <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection

