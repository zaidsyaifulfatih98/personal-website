import experienceData from '../data/experience.json'

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-medium tracking-widest text-sm uppercase mb-2">My Journey</p>
          <h2 className="text-4xl font-bold text-gray-800">Work Experience</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2 hidden md:block" />

          <div className="flex flex-col gap-12">
            {experienceData.map((exp, index) => (
              <div key={exp.id} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 top-6 -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-gray-50 z-10 shadow-md" />

                {/* Spacer */}
                <div className="hidden md:block md:w-1/2" />

                {/* Content */}
                <div className="md:w-1/2 bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
                      <p className="text-blue-600 font-medium">{exp.company}</p>
                    </div>
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      exp.type === 'Full-time'
                        ? 'bg-green-100 text-green-700 border border-green-200'
                        : 'bg-yellow-100 text-yellow-700 border border-yellow-200'
                    }`}>
                      {exp.type}
                    </span>
                  </div>

                  <div className="flex gap-4 mb-4 text-sm text-gray-400">
                    <span>📅 {exp.period}</span>
                    <span>📍 {exp.location}</span>
                  </div>

                  <ul className="flex flex-col gap-2">
                    {exp.responsibilities.map((item, i) => (
                      <li key={i} className="flex gap-2 text-gray-500 text-sm">
                        <span className="text-blue-500 mt-0.5 flex-shrink-0">▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}