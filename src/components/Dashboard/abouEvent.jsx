import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutEvent = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const tabContent = {
    about: {
      title: "About the Event",
      content: [
        "Join us for an exciting hackathon that brings together innovative minds!",
        "48 hours of coding, creating, and collaborating",
        "Network with industry professionals and like-minded developers",
        "Win amazing prizes and get a chance to showcase your skills"
      ]
    },
    themes: {
      title: "Hackathon Themes",
      content: [
        "Artificial Intelligence & Machine Learning",
        "Sustainable Technology Solutions",
        "Healthcare Innovation",
        "Financial Technology"
      ]
    },
    resources: {
      title: "Available Resources",
      content: [
        "Access to APIs and Development Tools",
        "Mentorship from Industry Experts",
        "Technical Documentation",
        "Workshop Materials and Guides"
      ]
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-6">
      <motion.div 
        className="w-1/2 h-[80vh] bg-[#0a0a1f]/40 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Tabs */}
        <div className="flex border-b border-gray-800">
          {Object.keys(tabContent).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-4 text-center transition-all duration-300 ${
                activeTab === tab 
                  ? 'bg-[#6822d0]/20 text-white border-b-2 border-[#6822d0]' 
                  : 'text-gray-400 hover:text-white hover:bg-[#6822d0]/10'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-6 h-[calc(80vh-60px)] overflow-y-auto" ref={ref}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-white mb-8">
              {tabContent[activeTab].title}
            </h2>
            
            {tabContent[activeTab].content.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ delay: index * 0.1 }}
                className="bg-[#1a1a3a]/30 p-6 rounded-lg border border-gray-800 hover:border-[#6822d0]/50 transition-all duration-300"
              >
                <p className="text-gray-300">{item}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutEvent;
