import React from 'react'
import { Helmet } from 'react-helmet'
import Hero from '../components/Hero'
import Schedule from '../components/Schedule'
import Prizes from '../components/Prizes'
import GlitchText from '../components/GlitchText';
import logo from '../images/studcops.jpg'

function Home() {
  return (
    <>
      <Helmet>
        <title>Hackorate | siNUsoid</title>
        <meta name="description" content="Join StudCops Hackathon to showcase your innovation and creativity. Compete for prizes worth ₹7,000+ including cash prizes, gift cards and special rewards." />
        <meta name="keywords" content="hackathon, studcops, coding competition, tech event, prizes, innovation" />    
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Hackorate - Innovate, Create, Transform" />
        <meta property="og:description" content="Join Hackorate to showcase your innovation and creativity. Compete for prizes worth ₹7,000+" />  
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hackorate - Innovate, Create, Transform" />
        <meta name="twitter:description" content="Join Hackorate to showcase your innovation and creativity. Compete for prizes worth ₹7,000+" />
      </Helmet>

      <div className="min-h-screen bg-[#000510] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#6822D0]/20 via-transparent to-transparent">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#6822D0]/30 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10">
          <Hero />
          <Schedule />
          <Prizes />
          {/* Sponsors Section */}
          <section className="py-20" id="sponsors">
            <div className="container mx-auto px-4">
              <h2 className="text-6xl font-boldonse font-bold mb-16 text-center bg-gradient-to-r from-[#FA7D67] via-[#6822D0] to-[#759CFF] bg-clip-text text-transparent">
                SPONSOR
              </h2>
              <div className="max-w-5xl mx-auto">
                <div className="bg-[#0D0D0D]/80 rounded-2xl p-12 backdrop-blur-lg border border-[#6822D0]/30 hover:border-[#7460FF]/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(104,34,208,0.4)]">
                  <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="flex flex-col mb-8 md:mb-0">
                      <GlitchText
                        speed={1}
                        enableShadows={true}
                        enableOnHover={true}
                        className='font-boldonse custom-class'
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
    </>
  )
}

export default Home
