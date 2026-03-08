import { useState } from 'react'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform for XYZ Retail',
    category: 'Full-Stack',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
    situation: 'XYZ Retail sought to expand into e-commerce to reach a wider audience and streamline its sales processes.',
    task: 'Building the front-end and back-end components of the platform, ensuring seamless integration with inventory and payment systems.',
    action: 'Used React for a responsive UI, developed RESTful APIs with Node.js and MongoDB, integrated AWS, and set up a CI/CD pipeline.',
    result: 'Completed on time, leading to a 35% increase in online sales within the first three months.',
    github: '#',
    live: '#',
  },
  {
    id: 2,
    title: 'Project Management SaaS',
    category: 'Full-Stack',
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Docker'],
    situation: 'A startup needed a comprehensive project management tool for remote teams across different time zones.',
    task: 'Design and develop a full-featured SaaS platform with real-time collaboration and team analytics.',
    action: 'Built with Next.js for SSR, implemented WebSocket for real-time updates, and containerized with Docker.',
    result: 'Onboarded 500+ users within the first month with a 4.8/5 user satisfaction rating.',
    github: '#',
    live: '#',
  },
  {
    id: 3,
    title: 'Healthcare Appointment System',
    category: 'Back-End',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
    technologies: ['Node.js', 'Express', 'MySQL', 'Redis'],
    situation: 'A local healthcare provider needed to digitize their appointment booking process.',
    task: 'Build a robust backend with appointment scheduling and automated reminders.',
    action: 'Developed RESTful APIs with Node.js/Express, implemented Redis caching, and automated SMS/email reminders.',
    result: 'Reduced no-shows by 60% and cut administrative workload by 40%.',
    github: '#',
    live: '#',
  },
  {
    id: 4,
    title: 'Real Estate Listing Platform',
    category: 'Front-End',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Google Maps API'],
    situation: 'A real estate agency wanted a modern searchable platform with interactive maps.',
    task: 'Create a visually appealing frontend with advanced search filters and map integration.',
    action: 'Built responsive UI with React and Tailwind, integrated Google Maps API, and added 360° virtual tour support.',
    result: 'Increased property inquiries by 45% and reduced time-to-contact from 3 days to 6 hours.',
    github: '#',
    live: '#',
  },
]

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  const filters = ['All', 'Full-Stack', 'Front-End', 'Back-End']
  const filtered = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter)

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-violet-600 font-medium tracking-widest text-sm uppercase mb-2">My Work</p>
          <h2 className="text-4xl font-bold text-gray-800">Portfolio</h2>
          <div className="w-16 h-1 bg-violet-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full font-medium text-sm transition-all ${
                activeFilter === filter
                  ? 'bg-violet-600 text-white shadow-lg shadow-violet-200'
                  : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filtered.map(project => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-violet-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden h-48">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <span className="absolute top-4 right-4 px-3 py-1 bg-violet-600 text-white text-xs font-medium rounded-full">
                  {project.category}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">{project.situation}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map(tech => (
                    <span key={tech} className="px-2 py-1 bg-violet-50 text-violet-700 text-xs rounded-md border border-violet-200">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a href={project.github} onClick={e => e.stopPropagation()} className="text-gray-400 hover:text-violet-600 text-sm transition-colors">GitHub →</a>
                  <a href={project.live} onClick={e => e.stopPropagation()} className="text-gray-400 hover:text-violet-600 text-sm transition-colors">Live Demo →</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-200 shadow-2xl" onClick={e => e.stopPropagation()}>
            <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-56 object-cover rounded-t-2xl" />
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-800">{selectedProject.title}</h3>
                <button onClick={() => setSelectedProject(null)} className="text-gray-400 hover:text-gray-700 text-2xl leading-none">×</button>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.technologies.map(tech => (
                  <span key={tech} className="px-3 py-1 bg-violet-50 text-violet-700 text-sm rounded-full border border-violet-200">
                    {tech}
                  </span>
                ))}
              </div>

              {[
                { label: 'Situation', content: selectedProject.situation },
                { label: 'Task', content: selectedProject.task },
                { label: 'Action', content: selectedProject.action },
                { label: 'Result', content: selectedProject.result },
              ].map(item => (
                <div key={item.label} className="mb-4">
                  <h4 className="text-violet-600 font-semibold mb-1">{item.label}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.content}</p>
                </div>
              ))}

              <div className="flex gap-4 mt-6">
                <a href={selectedProject.github} className="flex-1 text-center py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors text-sm font-medium">View Code</a>
                <a href={selectedProject.live} className="flex-1 text-center py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg transition-colors text-sm font-medium">Live Demo</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}