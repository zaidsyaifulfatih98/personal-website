import { useState } from 'react'
import LokaHajat from '../assets/tumbnail_LokaHajat.png'
import FreshPress from '../assets/tumbnail_FreshPress.png'
import RejekiBarokah from '../assets/tumbnail_RejekiBarokah.png'

const projects = [
  {
    id: 1,
    title: 'Anomali Coffee',
    category: 'Full-Stack',
    image: 'https://company-profile-anomali-coffee.vercel.app/assets/about1-BkOxxUoA.webp',
    technologies: ['React', 'Node.js', 'Express.Js', 'Backendless'],
    situation: 'As a coding bootcamp final project, I was tasked with building a company profile and e-commerce site for a fictional coffee brand, Anomali Coffee, to showcase full-stack development skills.',
    task: 'Build the front-end and back-end from scratch, including a product catalog, shopping cart, and checkout flow with a real backend for data persistence.',
    action: 'Built a responsive UI with React, developed RESTful APIs with Node.js and Express.js, and used Backendless for data storage and authentication.',
    result: 'Delivered a fully functional, deployed web app within the project deadline, strengthening my hands-on experience with end-to-end full-stack development.',
    github: '#',
    live: 'https://company-profile-anomali-coffee.vercel.app/',
  },
  {
    id: 2,
    title: 'LokaHajat - Event Management Platform',
    category: 'Full-Stack',
    image: LokaHajat,
    technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Express.js', 'Node.js', 'PostgreSQL', 'Prisma ORM'],
    situation: 'Event organizers and attendees needed a reliable platform to discover events, book tickets securely, and manage ticket sales without relying on scattered manual processes.',
    task: 'Develop a comprehensive, full-stack event ticketing platform covering event discovery and booking, a referral and loyalty point system, and an organizer dashboard for managing events and sales.',
    action: 'Built a dynamic frontend with React.js, TypeScript, and Tailwind CSS for browsing events, filtering by category, and completing a secure checkout flow. Engineered custom business logic for referral mechanics, rewarding users with points and loyalty discounts on successful conversions. Developed a CMS-style organizer dashboard with Express.js, Node.js, PostgreSQL, and Prisma ORM for creating events, managing ticket inventories, and monitoring sales metrics in real-time.',
    result: 'Delivered a fully functional, deployed event ticketing platform with automated referral rewards and real-time organizer analytics.',
    github: '#',
    live: 'https://lokahajat.vercel.app/',
  },
  {
    id: 3,
    title: 'FreshPress - Laundry Services App',
    category: 'Full-Stack',
    image: FreshPress,
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Express.js', 'Node.js', 'PostgreSQL', 'Prisma ORM', 'Midtrans', 'OpenCage', 'Geolocation'],
    situation: 'On-demand laundry services needed a dynamic platform to bridge customers, outlet operations, and delivery services into one streamlined workflow.',
    task: 'Develop a full-stack web application covering user and order management, role-based dashboards for staff, and reliable order/point tracking logic.',
    action: 'Implemented secure authentication and a seamless ordering flow with Next.js and TypeScript, letting customers select services and track orders in real-time. Built multi-role access control for Admin, Super Admin, and Drivers to manage outlets, logistics, and processing stages. Engineered relational database schemas with PostgreSQL and Prisma ORM to handle complex order transactions and point balances, and integrated Midtrans for payments plus OpenCage and Geolocation for address and delivery tracking.',
    result: 'Delivered a fully functional, deployed laundry service platform with real-time order tracking, role-based operations, and integrated payment and location services.',
    github: '#',
    live: 'https://freshpress-laundry.vercel.app',
  },
  {
    id: 4,
    title: 'UD. Rejeki Barokah - Business Website',
    category: 'Front-End',
    image: RejekiBarokah,
    technologies: ['React.js', 'Tailwind CSS'],
    situation: 'UD. Rejeki Barokah, a building materials and metal fabrication shop in Jombang, Indonesia, had no online presence to showcase its products and reach customers beyond word of mouth.',
    task: 'Build a responsive business website to present the shop\'s steel products and fabrication services, and make it easy for customers to get in touch.',
    action: 'Built a fully responsive UI with React.js and Tailwind CSS, featuring a product and services showcase, customer testimonials, and clear contact information with direct WhatsApp and phone call-to-action buttons.',
    result: 'Delivered a live business website that gives the shop a professional online presence and a simple way for customers to browse offerings and reach out directly.',
    github: '#',
    live: 'https://www.zaidsyaifulfatih.online/',
  },
]

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  const filters = ['All', 'Full-Stack', 'Front-End']
  const filtered = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter)

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-medium tracking-widest text-sm uppercase mb-2">My Work</p>
          <h2 className="text-4xl font-bold text-gray-800">Portfolio</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full font-medium text-sm transition-all ${
                activeFilter === filter
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
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
               className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden h-48">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <span className="absolute top-4 right-4 px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                  {project.category}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">{project.situation}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map(tech => (
                    <span key={tech} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md border border-blue-200">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a href={project.live} onClick={e => e.stopPropagation()} className="text-gray-400 hover:text-blue-600 text-sm transition-colors">Live Demo →</a>
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
                  <span key={tech} className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full border border-blue-200">
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
                  <h4 className="text-blue-600 font-semibold mb-1">{item.label}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.content}</p>
                </div>
              ))}

              <div className="flex gap-4 mt-6">
                 <a href={selectedProject.live} className="flex-1 text-center py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium">Live Demo</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}