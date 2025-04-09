import { motion } from "framer-motion";

const TimelineComponent = () => {
  const events = [
    {
      title: "Project Kickoff",
      date: "January 15, 2024",
      completed: true
    },
    {
      title: "Design Phase", 
      date: "February 1, 2024",
      completed: true
    },
    {
      title: "Development Sprint",
      date: "February 15, 2024",
      completed: false
    },
    {
      title: "Testing & QA",
      date: "March 1, 2024",
      completed: false
    }
  ];

  return (
    <div className="relative w-full max-w-3xl mx-auto py-12 mt-18">
      {/* Vertical line */}
      <div className="absolute left-12 h-full w-0.5 bg-gray-700"></div>

      {events.map((event, index) => (
        <div key={index} className="flex items-center mb-12">
          {/* Timeline node and connector */}
          <motion.div 
            className="relative flex items-center justify-center ml-12"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.2 }}
          >
            {/* Horizontal connector line */}
            <div className="absolute w-8 h-0.5 bg-gray-700 -left-4"></div>
            
            <div 
              className={`w-6 h-6 rounded-full border-4 
                ${event.completed 
                  ? 'border-[#6822d0] bg-[#7460FF]' 
                  : 'border-gray-700 bg-gray-900'
                } relative z-10`}
            >
              {event.completed && (
                <motion.div
                  className="absolute -inset-2 rounded-full bg-[#6822d0] opacity-20"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              )}
            </div>
          </motion.div>

          {/* Content */}
          <motion.div 
            className="text-left pl-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="text-xl font-boldonse text-white mb-2">{event.title}</h3>
            <p className="text-sm text-gray-500 mt-1">{event.date}</p>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default TimelineComponent;
