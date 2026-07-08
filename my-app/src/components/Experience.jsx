import { Code, Monitor, Database, Calendar } from 'lucide-react'

const Experience = () => {
  const skills = [
    { name: 'HTML & CSS', percentage: '90%' },
    { name: 'React JS', percentage: '75%' },
    { name: 'JavaScript', percentage: '70%' },
    { name: 'Python', percentage: '80%' },
    { name: 'Java', percentage: '75%' },
    { name: 'C Programming', percentage: '85%' },
    { name: 'Tailwind CSS', percentage: '60%' },
    { name: 'Node JS', percentage: '30%' },
  ]

  const experience = [
    {
      title: 'Computer Science Student',
      company: 'LCIT Bilaspur',
      duration: '2023 - 2027',
      icon: <Monitor size={24} />
    },
    {
      title: 'Web Designer & Frontend Developer',
      company: 'Personal Projects',
      duration: '2024 - Present',
      icon: <Code size={24} />
    },
    {
      title: 'SECR Vocational Training',
      company: 'South East Central Railway',
      duration: 'Training Program',
      icon: <Database size={24} />
    }
  ]

  return (
    <section className="text-theme py-20" id="skills">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-10">
              Core <span className="text-primary">Skills</span>
            </h2>

            {skills.map((skill, index) => (
              <div key={index} className="mb-8">
                <div className="flex justify-between mb-2 text-theme">
                  <span>{skill.name}</span>
                  <span className="text-primary">
                    {skill.percentage}
                  </span>
                </div>

                <div className="w-full bg-surface-soft rounded-full h-3 overflow-hidden border border-theme">
                  <div
                    className="bg-primary h-3 rounded-full transition-all duration-700"
                    style={{ width: skill.percentage }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-10">
              Professional <span className="text-primary">Journey</span>
            </h2>

            <div className="space-y-6">
              {experience.map((item, index) => (
                <div
                  key={index}
                  className="glass-panel p-6 rounded-2xl transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-surface-soft p-3 rounded-xl text-primary border border-theme">
                      {item.icon}
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-theme">
                        {item.title}
                      </h3>

                      <p className="text-theme-muted">
                        {item.company}
                      </p>

                      <div className="flex items-center gap-2 text-primary mt-2">
                        <Calendar size={14} />
                        <span>{item.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

