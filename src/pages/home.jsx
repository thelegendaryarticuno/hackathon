import React from 'react'
import Hero from '../components/Hero'
import Schedule from '../components/Schedule'
import Prizes from '../components/Prizes'
import GlitchText from '../components/GlitchText';
import logo from '../images/studcops.jpg'

function Home() {
  return (
    <div className="min-h-screen bg-[#000510] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-400/20 via-transparent to-transparent">
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10">
        <Hero />
        <Schedule />
        <Prizes />
        {/* Sponsors Section */}
        <section className="py-20" id="sponsors">
          <div className="container mx-auto px-4">
            <h2 className="text-6xl font-bold mb-16 text-center bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              SPONSOR
            </h2>
            <div className="max-w-5xl mx-auto">
              <div className="bg-[#0D0D0D]/80 rounded-2xl p-12 backdrop-blur-lg border border-gray-800 hover:border-purple-500/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="flex flex-col mb-8 md:mb-0">
                    <GlitchText
                      speed={1}
                      enableShadows={true}
                      enableOnHover={true}
                      className='custom-class'
                    >
                      Powered By
                    </GlitchText>
                  </div>
                  <img
                    src={logo}
                    alt="StudCops"
                    className="h-48 w-48 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
