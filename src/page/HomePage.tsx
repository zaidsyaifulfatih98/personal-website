import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Portfolio from '../components/Portofolio'
import Experience from '../components/Experience'
import Education from '../components/Education'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'

export default function HomePage() {
  return (
    <main className="bg-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Experience />
      <Education />
      <Contact />
    </main>
  )
}