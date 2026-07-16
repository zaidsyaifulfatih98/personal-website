import educationData from '../data/education.json'

export default function Education() {
  return (
    <section id="education" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-medium tracking-widest text-sm uppercase mb-2">Academic Background</p>
          <h2 className="text-4xl font-bold text-gray-800">Education</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        <div className="flex flex-col gap-8">
          {educationData.map(edu => (
            <div
              key={edu.id}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-3">
                <h3 className="text-xl font-bold text-gray-800">{edu.institution}</h3>
                <p className="text-blue-600 font-medium">
                  {edu.degree}
                  {edu.field ? `, ${edu.field}` : ''}
                </p>
              </div>

              <div className="flex gap-4 mb-4 text-sm text-gray-400">
                <span>📅 {edu.period}</span>
              </div>

              <ul className="flex flex-col gap-2 mb-4">
                {edu.description.map((item, i) => (
                  <li key={i} className="flex gap-2 text-gray-500 text-sm">
                    <span className="text-blue-500 mt-0.5 flex-shrink-0">▸</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {edu.skills.map(skill => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs border border-blue-200 font-medium"
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
