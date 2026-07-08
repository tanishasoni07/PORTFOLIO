import { useState } from 'react'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    message: '',
  })

  const contactInfo = [
    {
      id: 1,
      title: 'Email',
      value: 'sonitanisha0107@gmail.com',
      link: 'mailto:sonitanisha0107@gmail.com',
    },
    {
      id: 2,
      title: 'LinkedIn',
      value: 'linkedin.com/in/tanisha-soni-b8b0b0288',
      link: 'https://www.linkedin.com/in/tanisha-soni-b8b0b0288',
    },
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const recipient = 'sonitanisha0107@gmail.com'
    const subject = encodeURIComponent(
      `${formData.title} - from ${formData.name}`
    )
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`

    setFormData({
      name: '',
      email: '',
      title: '',
      message: '',
    })
  }

  const inputClass =
    'w-full p-4 mb-4 rounded-2xl bg-[color:var(--surface)] border border-theme text-theme placeholder:text-theme-muted focus:outline-none focus:border-primary transition-all backdrop-blur-md'

  return (
    <section
      id="contact"
      className="py-20 bg-[color:var(--app-bg-alt)] text-theme"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            Professional <span className="text-primary">Contact</span>
          </h2>

          <p className="text-theme-muted mt-4">
            Have a project in mind? Feel free to contact me.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="glass-panel p-8 rounded-3xl">
            <h3 className="text-2xl font-bold mb-6 text-theme">
              Contact Information
            </h3>

            {contactInfo.map((item) => (
              <div
                key={item.id}
                className="mb-6 border-b border-theme/50 pb-4"
              >
                <h4 className="text-primary font-semibold mb-1">
                  {item.title}
                </h4>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-theme-muted hover:text-theme transition"
                >
                  {item.value}
                </a>
              </div>
            ))}
          </div>

          <div className="glass-panel p-8 rounded-3xl">
            <h3 className="text-2xl font-bold mb-6 text-theme">
              Send Me a Message
            </h3>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
                className={inputClass}
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleChange}
                className={inputClass}
              />

              <input
                type="text"
                name="title"
                placeholder="Subject"
                required
                value={formData.title}
                onChange={handleChange}
                className={inputClass}
              />

              <textarea
                name="message"
                rows="6"
                placeholder="Describe your project or work requirement..."
                required
                value={formData.message}
                onChange={handleChange}
                className={inputClass}
              />

              <button
                type="submit"
                className="w-full py-4 bg-primary hover:bg-primary/90 rounded-2xl font-semibold transition shadow-lg shadow-primary/20"
              >
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
