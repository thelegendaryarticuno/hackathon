import React from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Speakers from './components/Speakers'
import Schedule from './components/Schedule'
import Prizes from './components/Prizes'

function App() {
  return (
    <div className="min-h-screen bg-[#000510] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-400/20 via-transparent to-transparent">
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Schedule />
        <Prizes />
        {/* Sponsors Section */}
        <section className="py-20" id="sponsors">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold mb-16 text-white text-center">SPONSORS</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
              {[1, 2, 3, 4, 5].map((sponsor) => (
                <div
                  key={sponsor}
                  className="bg-gray-800/50 rounded-xl p-8 aspect-video flex items-center justify-center backdrop-blur-sm"
                >
                  <div className="text-4xl">🏢</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 bg-gray-900/50 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-4 md:mb-0">
                META HACK
              </div>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">Terms</a>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">Privacy</a>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">Contact</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
