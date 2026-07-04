export default function About() {
  const skills = ['React.js', 'Node.js', 'Next.js', 'Express.js', 'REST API', 'PostgreSQL', 'Prisma ORM', 'Python', 'Django']
  const values = [
    { icon: '⏰', title: 'On Time Delivery', desc: 'Always meet deadlines without compromising quality' },
    { icon: '🎯', title: 'Attention to Detail', desc: 'Pixel-perfect implementation with clean, maintainable code' },
    { icon: '💬', title: 'Clear Communication', desc: 'Regular updates and transparent project management' },
  ]

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-medium tracking-widest text-sm uppercase mb-2">Get to Know</p>
          <h2 className="text-4xl font-bold text-gray-800">About Me</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Bio */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Full-Stack Developer based in <span className="text-blue-600">Indonesia</span>
            </h3>
            <p className="text-gray-500 leading-relaxed mb-4 text-justify indent-8">
              I'm a passionate full-stack web developer who thrives on turning ideas into fast, reliable, and user-friendly applications. My journey started with a curiosity about how websites work, which evolved into a deep love for crafting elegant end-to-end digital solutions.
            </p>
            <p className="text-gray-500 leading-relaxed mb-6 text-justify indent-8">
              On the front end, I build dynamic interfaces with <span className="text-blue-600 font-medium">React.js</span> and <span className="text-blue-600 font-medium">Next.js</span>. On the back end, I design robust APIs using <span className="text-blue-600 font-medium">Node.js</span>, <span className="text-blue-600 font-medium">Express.js</span>, and <span className="text-blue-600 font-medium">REST API</span> architecture, backed by <span className="text-blue-600 font-medium">PostgreSQL</span> and <span className="text-blue-600 font-medium">Prisma ORM</span> for clean, type-safe data access. I'm also well-versed in <span className="text-blue-600 font-medium">Python</span> and <span className="text-blue-600 font-medium">Django</span>, giving me the flexibility to pick the right tool for every job — from a startup MVP to an enterprise-level application.
            </p>

            {/* Core Skills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {skills.map(skill => (
                <span key={skill} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm border border-blue-200 font-medium">
                  {skill}
                </span>
              ))}
            </div>

            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-200"
            >
              Download CV
              <span>↓</span>
            </a>
          </div>

          {/* Values */}
          <div className="flex flex-col gap-6">
            {values.map(value => (
              <div key={value.title} className="flex gap-4 p-5 bg-gray-50 rounded-xl border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all">
                <span className="text-3xl">{value.icon}</span>
                <div>
                  <h4 className="text-gray-800 font-semibold mb-1">{value.title}</h4>
                  <p className="text-gray-500 text-sm">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}