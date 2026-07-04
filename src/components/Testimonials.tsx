import { useState } from 'react'
import testimonialsData from '../data/testimonial.json'

export default function Testimonials() {
  const [active, setActive] = useState(0)

  const prev = () => setActive(i => (i - 1 + testimonialsData.length) % testimonialsData.length)
  const next = () => setActive(i => (i + 1) % testimonialsData.length)

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-medium tracking-widest text-sm uppercase mb-2">Kind Words</p>
          <h2 className="text-4xl font-bold text-gray-800">Testimonials</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Featured Testimonial */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100 relative shadow-sm">
            <span className="text-6xl text-blue-300 font-serif absolute top-4 left-6">"</span>
            <p className="text-gray-600 text-lg leading-relaxed text-center mb-8 relative z-10 pt-4">
              {testimonialsData[active].quote}
            </p>
            <div className="flex items-center justify-center gap-4">
              <img
                src={testimonialsData[active].photo}
                alt={testimonialsData[active].name}
                className="w-14 h-14 rounded-full border-2 border-blue-400 object-cover"
              />
              <div>
                <p className="text-gray-800 font-semibold">{testimonialsData[active].name}</p>
                <p className="text-blue-600 text-sm">{testimonialsData[active].role} @ {testimonialsData[active].company}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-6 mt-6">
            <button onClick={prev} className="w-10 h-10 bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-600 rounded-full transition-colors flex items-center justify-center border border-gray-200">
              ←
            </button>
            <div className="flex gap-2">
              {testimonialsData.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`transition-all rounded-full ${i === active ? 'w-8 h-2 bg-blue-600' : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'}`}
                />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-600 rounded-full transition-colors flex items-center justify-center border border-gray-200">
              →
            </button>
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonialsData.map((t, i) => (
            <div
              key={t.id}
              onClick={() => setActive(i)}
              className={`p-4 rounded-xl border cursor-pointer transition-all ${
                i === active
                  ? 'border-blue-400 bg-blue-50 shadow-md'
                  : 'border-gray-200 bg-gray-50 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <img src={t.photo} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <p className="text-gray-800 text-sm font-semibold">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.role}</p>
                </div>
              </div>
              <p className="text-gray-500 text-xs leading-relaxed line-clamp-3">{t.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}