export default function About() {
  const skills = ['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'Django', 'PostgreSQL']
  const values = [
    { icon: '⏰', title: 'On Time Delivery', desc: 'Always meet deadlines without compromising quality' },
    { icon: '🎯', title: 'Attention to Detail', desc: 'Pixel-perfect implementation with clean, maintainable code' },
    { icon: '💬', title: 'Clear Communication', desc: 'Regular updates and transparent project management' },
  ]

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-violet-600 font-medium tracking-widest text-sm uppercase mb-2">Get to Know</p>
          <h2 className="text-4xl font-bold text-gray-800">About Me</h2>
          <div className="w-16 h-1 bg-violet-600 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Bio */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Full-Stack Developer based in <span className="text-violet-600">Indonesia</span>
            </h3>
            <p className="text-gray-500 leading-relaxed mb-4">
              I'm a passionate full-stack web developer with 5+ years of experience building robust, scalable web applications. My journey started with a curiosity about how websites work, which evolved into a deep love for crafting elegant digital solutions.
            </p>
            <p className="text-gray-500 leading-relaxed mb-6">
              I specialize in React and Node.js ecosystems, with a strong foundation in modern web technologies. Whether it's a startup MVP or enterprise-level application, I bring the same level of dedication and technical excellence to every project.
            </p>

            {/* Core Skills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {skills.map(skill => (
                <span key={skill} className="px-3 py-1 bg-violet-50 text-violet-700 rounded-full text-sm border border-violet-200 font-medium">
                  {skill}
                </span>
              ))}
            </div>

            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-violet-200"
            >
              Download CV
              <span>↓</span>
            </a>
          </div>

          {/* Values */}
          <div className="flex flex-col gap-6">
            {values.map(value => (
              <div key={value.title} className="flex gap-4 p-5 bg-gray-50 rounded-xl border border-gray-200 hover:border-violet-400 hover:shadow-md transition-all">
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