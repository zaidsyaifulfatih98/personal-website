export default function Skills() {
  const skillCategories = [
    {
      title: 'Front-End',
      icon: '🎨',
      color: 'from-blue-400 to-blue-600',
      chip: 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100',
      skills: ['React / Next.js', 'TypeScript','JavaScript', 'Tailwind CSS', 'HTML / CSS', 'Bootstrap'],
    },
    {
      title: 'Back-End',
      icon: '⚙️',
      color: 'from-indigo-500 to-blue-500',
      chip: 'bg-indigo-50 text-indigo-700 border-indigo-200 hover:bg-indigo-100',
      skills: ['Node.js / Express.js', 'Python / Django', 'PostgreSQL', 'REST API'],
    },
    {
      title: 'DevOps & Tools',
      icon: '🛠️',
      color: 'from-cyan-500 to-teal-500',
      chip: 'bg-cyan-50 text-cyan-700 border-cyan-200 hover:bg-cyan-100',
      skills: ['Git / GitHub', 'Docker', 'Vercel', 'Railway', 'WSL', 'Midtrans', 'OpenCage', 'Redis'],
    },
  ]

  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-medium tracking-widest text-sm uppercase mb-2">What I Know</p>
          <h2 className="text-4xl font-bold text-gray-800">Technical Skills</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map(category => (
            <div key={category.title} className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-2xl mb-5 shadow-md`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-6">{category.title}</h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 rounded-full border text-sm font-medium transition-colors duration-200 ${category.chip}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}