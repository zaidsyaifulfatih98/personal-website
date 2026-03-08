export default function Skills() {
  const skillCategories = [
    {
      title: 'Front-End',
      icon: '🎨',
      color: 'from-violet-500 to-purple-500',
      bar: 'from-violet-500 to-purple-500',
      bg: 'bg-violet-50',
      border: 'border-violet-200',
      skills: [
        { name: 'React / Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'HTML / CSS', level: 98 },
        { name: 'Vue.js', level: 75 },
      ],
    },
    {
      title: 'Back-End',
      icon: '⚙️',
      color: 'from-indigo-500 to-blue-500',
      bar: 'from-indigo-500 to-blue-500',
      bg: 'bg-indigo-50',
      border: 'border-indigo-200',
      skills: [
        { name: 'Node.js / Express', level: 90 },
        { name: 'Python / Django', level: 80 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 82 },
        { name: 'RESTful API', level: 95 },
      ],
    },
    {
      title: 'DevOps & Tools',
      icon: '🛠️',
      color: 'from-cyan-500 to-teal-500',
      bar: 'from-cyan-500 to-teal-500',
      bg: 'bg-cyan-50',
      border: 'border-cyan-200',
      skills: [
        { name: 'Git / GitHub', level: 95 },
        { name: 'Docker', level: 78 },
        { name: 'AWS', level: 72 },
        { name: 'CI/CD Pipeline', level: 80 },
        { name: 'Linux', level: 75 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-violet-600 font-medium tracking-widest text-sm uppercase mb-2">What I Know</p>
          <h2 className="text-4xl font-bold text-gray-800">Technical Skills</h2>
          <div className="w-16 h-1 bg-violet-600 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map(category => (
            <div key={category.title} className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-violet-400 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-2xl mb-5 shadow-md`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-6">{category.title}</h3>

              <div className="flex flex-col gap-4">
                {category.skills.map(skill => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-600 text-sm">{skill.name}</span>
                      <span className="text-violet-600 text-sm font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${category.bar} transition-all duration-1000`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}