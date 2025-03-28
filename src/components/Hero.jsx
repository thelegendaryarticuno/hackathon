"use client"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import "./Hero.css"

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="hero-container">
      <div className="gradient-background"></div>

      <div className="clouds top-clouds">
        <motion.div
          className="cloud cloud-1"
          animate={{
            x: [0, 20, 0],
            opacity: [0.7, 0.9, 0.7],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 15,
            ease: "easeInOut",
          }}
        ></motion.div>
        <motion.div
          className="cloud cloud-2"
          animate={{
            x: [0, -30, 0],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 20,
            ease: "easeInOut",
          }}
        ></motion.div>
      </div>

      <div className="content">
        <div className="glass-card">
          <motion.h1
            className="title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.span
              className="gradient-text"
              style={{
                background: "linear-gradient(45deg, #6822d0, #7460FF, #759cff)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                backgroundSize: "200% 200%"
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 10,
                ease: "linear",
              }}
            >
              HACKORATE
            </motion.span>
          </motion.h1>

          <motion.div
            className="tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <span className="gold">Web Wizards & AI Magicians!</span> <span className="purple">Build</span> .<span className="blue">Design</span>{" "}
            .<span className="gold">Dominate</span>
          </motion.div>

          <motion.div
            className="date"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            12<sup>th</sup> - 13<sup>th</sup> April, 2025
          </motion.div>

          <motion.div
            className="location"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <span className="location-icon">📍</span> NIIT University, Neemrana
          </motion.div>

          <motion.div
            className="buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            <motion.button 
              className="register-btn" 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/register')}
            >
              Register Now
            </motion.button>
            <motion.button className="community-btn" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Join Our Community
            </motion.button>
          </motion.div>
        </div>
      </div>

      <div className="clouds bottom-clouds">
        <motion.div
          className="cloud cloud-3"
          animate={{
            x: [0, 40, 0],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 25,
            ease: "easeInOut",
          }}
        ></motion.div>
        <motion.div
          className="cloud cloud-4"
          animate={{
            x: [0, -20, 0],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 18,
            ease: "easeInOut",
          }}
        ></motion.div>
      </div>

      <motion.div
        className="shooting-stars"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className={`star star-${i + 1}`}
            animate={{
              x: [-100, window.innerWidth + 100],
              y: [-100, window.innerHeight + 100],
              opacity: [0, 1, 0],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 4 + i * 2,
              delay: i * 3,
              ease: "easeInOut",
              times: [0, 0.5, 1],
            }}
          />
        ))}
      </motion.div>
    </div>
  )
}

export default Hero
