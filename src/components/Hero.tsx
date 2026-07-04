import photo from '../assets/photo_personalWebsite.jpeg'

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/50 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/50 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <div className="order-2 md:order-1">
          <p className="text-blue-600 font-medium mb-3 tracking-widest text-sm uppercase">Hello, I'm</p>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight mb-4">
            Zaid <span className="text-blue-600">Fatih</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-500 font-medium mb-6">
            Full-Stack Web Developer
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-lg">
            Building scalable and high-performance web solutions for your business needs.
            Passionate about clean code, great UX, and solving complex problems.
          </p>

          <div className="flex flex-wrap gap-4">
<button
               onClick={() => scrollTo('portfolio')}
               className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-300"
             >
               View Portfolio
             </button>
             <button
               onClick={() => scrollTo('contact')}
               className="px-8 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
             >
               Contact Me
             </button>
          </div>
        </div>

        {/* Photo */}
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative">
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 p-1 shadow-2xl shadow-blue-200">
              <img
                src={photo}
                alt="Zaid Fatih"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-white border border-gray-200 rounded-xl px-4 py-2 shadow-xl">
              <p className="text-blue-600 font-bold text-sm">Available for hire</p>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <p className="text-gray-400 text-xs">Open to work</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </section>
  )
}