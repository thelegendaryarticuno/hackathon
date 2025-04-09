import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, useDragControls } from 'framer-motion';

const DashboardNavbar = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const dragControls = useDragControls();

  const navItems = [
    { name: 'Timeline', path: '/dashboard/timeline' },
    { name: 'Team Info', path: '/dashboard/team' },
    { name: 'Voting Chart', path: '/dashboard/voting' }
  ];

  return (
    <motion.div
      drag
      dragControls={dragControls}
      dragMomentum={false}
      dragElastic={0}
      initial={{ y: "90vh" }}
      animate={{ y: "80vh" }}
      className="fixed left-1/2 transform -translate-x-1/2 z-50"
      style={{ x: position.x, y: position.y }}
      onDragEnd={(_, info) => {
        setPosition({
          x: position.x + info.offset.x,
          y: position.y + info.offset.y
        });
      }}
    >
      <div className="bg-[#000510] bg-opacity-90 backdrop-blur-md rounded-full px-6 py-3 shadow-lg border border-gray-800">
        <div className="flex space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => `
                px-4 py-2 rounded-full transition-all duration-300
                ${isActive ? 
                  'bg-[#6822d0] text-white' : 
                  'text-gray-300 hover:text-white hover:bg-[#6822d0]/20'
                }
              `}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
      
      {/* Drag Handle */}
      <div 
        className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-600 rounded-full cursor-grab"
        onPointerDown={(e) => dragControls.start(e)}
      />
    </motion.div>
  );
};

export default DashboardNavbar;
