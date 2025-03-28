import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import "./Hero.css"

const Hero = () => {
  const navigate = useNavigate();

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const hackorateText = "HACKORATE".split("");

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
        <div className="glass-card" style={{ background: "rgba(27, 36, 59, 0.25)", backdropFilter: "blur(20px)" }}>
          <div className="hidden md:block">
            <motion.h1
              className="title" 
              variants={textVariants}
              initial="hidden"
              animate="visible"
              key="animated-title"
              style={{ color: "#FFFFFF" }}
            >
              {hackorateText.map((letter, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  transition={{ 
                    repeat: Number.POSITIVE_INFINITY,
                    repeatDelay: 190
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h1>
          </div>

          <div className="md:hidden">
            <motion.h1
              className="gradient-text title"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Hackorate
            </motion.h1>
          </div>

          <motion.div
            className="tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            style={{ color: "#1B243B" }}
          >
            <span style={{ color: "#FA7D67" }}>Web Wizards & AI Magicians!</span>{" "}
            <span style={{ color: "#FA7D67" }}>Build</span> .
            <span style={{ color: "#FA7D67" }}>Design</span>{" "}
            .<span style={{ color: "#FA7D67" }}>Dominate</span>
          </motion.div>

          <motion.div
            className="date"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            style={{ color: "#FFFFFF" }}
          >
            12<sup>th</sup> - 13<sup>th</sup> April, 2025
          </motion.div>

          <motion.div
            className="location"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            style={{ color: "#1B243B" }}
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
              style={{ backgroundColor: "#6822D0" }}
            >
              Register Now
            </motion.button>
            <motion.button 
              className="community-btn" 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              style={{ backgroundColor: "#FA7D67" }}
            >
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
