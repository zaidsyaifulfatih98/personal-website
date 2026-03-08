import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => setStatus('sent'), 1500)
  }

  const contactInfo = [
    { icon: '📧', label: 'Email', value: 'zaidsyaifulfatih98@gmail.com', href: 'mailto:zaidsyaifulfatih98@email.com' },
    { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/zaid-syaiful-fatih', href: 'https://www.linkedin.com/in/zaid-syaiful-fatih/' },
    { icon: '🐱', label: 'GitHub', value: 'github.com/zaidsyaifulfatih98', href: 'https://github.com/zaidsyaifulfatih98' },
    { icon: '📍', label: 'Location', value: 'Jakarta, Indonesia', href: '#' },
  ]

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-violet-600 font-medium tracking-widest text-sm uppercase mb-2">Get In Touch</p>
          <h2 className="text-4xl font-bold text-gray-800">Contact Me</h2>
          <div className="w-16 h-1 bg-violet-600 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Let's work together!</h3>
            <p className="text-gray-500 mb-8 leading-relaxed">
              I'm currently open to new opportunities. Whether you have a project in mind or just want to say hello, feel free to reach out!
            </p>

            <div className="flex flex-col gap-4 mb-8">
              {contactInfo.map(info => (
                <a key={info.label} href={info.href} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-violet-400 hover:shadow-md transition-all group">
                  <span className="text-2xl">{info.icon}</span>
                  <div>
                    <p className="text-gray-400 text-xs">{info.label}</p>
                    <p className="text-gray-700 group-hover:text-violet-600 transition-colors text-sm font-medium">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            {status === 'sent' ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Message Sent!</h3>
                <p className="text-gray-500 mb-6">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                <button
                  onClick={() => { setStatus('idle'); setForm({ name: '', email: '', subject: '', message: '' }) }}
                  className="px-6 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg transition-colors"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-600 text-sm mb-1 block font-medium">Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-200 transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-gray-600 text-sm mb-1 block font-medium">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-200 transition-colors text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-gray-600 text-sm mb-1 block font-medium">Subject</label>
                  <input
                    type="text"
                    required
                    value={form.subject}
                    onChange={e => setForm({ ...form, subject: e.target.value })}
                    placeholder="Project inquiry..."
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-200 transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="text-gray-600 text-sm mb-1 block font-medium">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-200 transition-colors text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-3 bg-violet-600 hover:bg-violet-700 disabled:bg-violet-400 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-violet-200"
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-20 pt-8 border-t border-gray-200">
        <p className="text-gray-400 text-sm">© 2026 Zaid Fatih. Built with React & Tailwind CSS.</p>
      </div>
    </section>
  )
}