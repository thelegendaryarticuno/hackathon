import { motion } from "framer-motion";
import { useState, useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { FaPencilAlt } from 'react-icons/fa';
import Particles from '../components/Dashboard/Particles';
import { events, tabContent } from '../data/aboutEvent';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const [showUploadMenu, setShowUploadMenu] = useState(false);
  const [profileUrl, setProfileUrl] = useState(null);
  const [selectedResource, setSelectedResource] = useState(null);
  const [teamDetails, setTeamDetails] = useState(null);
  const fileInputRef = useRef(null);
  const uploadMenuRef = useRef(null);

  useEffect(() => {
    const fetchTeamDetails = async () => {
      const teamId = sessionStorage.getItem('teamId');
      if (!teamId) return;

      try {
        const response = await fetch('https://apihackorate.sinusoid.in/api/teams/fetch-details', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ teamId }),
        });
        const data = await response.json();
        if (data.team) {
          setTeamDetails({
            name: data.team.TeamName,
            members: [
              { id: 'leader', label: 'Leader', name: data.team.LeaderName },
              { id: 'member2', label: 'Member 2', name: data.team.TeamMember2Name || 'Not Assigned' }
            ]
          });
        }
      } catch (error) {
        console.error('Error fetching team details:', error);
      }
    };

    fetchTeamDetails();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (uploadMenuRef.current && !uploadMenuRef.current.contains(event.target)) {
        setShowUploadMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch('https://localhost:5000/cloudinary', {
        method: 'POST',
        body: formData
      });
      const data = await response.json();
      setProfileUrl(data.url);
      setShowUploadMenu(false);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  if (!teamDetails) {
    return <div className="flex items-center justify-center min-h-screen">
      <div className="text-white text-xl">Loading...</div>
    </div>;
  }

  return (
    <div className="flex flex-col min-h-[90vh] relative">
      <div className="fixed inset-0 z-0">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      <div className="relative z-10">
        {/* Welcome Banner */}
        <div className="h-[10vh] bg-[#000510] bg-opacity-90 backdrop-blur-sm flex items-center px-4 md:px-8 border-b border-gray-800">
          <h1 className="text-xl md:text-3xl font-bold text-white truncate">{`Welcome, ${teamDetails.name}`}</h1>
        </div>

        <div className="flex flex-col md:flex-row gap-4 p-6">
          {/* Timeline */}
          <div className="w-full md:w-[20vw]">
            <div className="h-full bg-[#0a0a1f]/40 backdrop-blur-sm rounded-xl border border-gray-800 p-6 overflow-hidden">
              <h3 className="text-2xl font-bold text-white text-center mb-4">Timeline</h3>
              <div className="relative w-full py-6">
                <div className="absolute left-12 h-[calc(100%-3rem)] w-0.5 bg-gray-700"></div>
                {events.map((event, index) => (
                  <div key={index} className="flex items-center mb-12 last:mb-0">
                    <motion.div
                      className="relative flex items-center justify-center ml-12"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.2 }}
                    >
                      <div className="absolute w-8 h-0.5 bg-gray-700 -left-4"></div>
                      <div className={`w-6 h-6 rounded-full border-4 ${event.completed ? 'border-[#6822d0] bg-[#7460FF]' : 'border-gray-700 bg-gray-900'} relative z-10`}>
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
                    <motion.div
                      className="text-left pl-8"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                      <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                      <p className="text-sm text-gray-500 mt-1">{event.date}</p>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* About Event */}
          <div className="w-full md:w-[50vw]">
            <motion.div
              className="h-full bg-[#0a0a1f]/40 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-wrap border-b border-gray-800">
                {Object.keys(tabContent).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-4 text-center transition-all duration-300 ${activeTab === tab
                      ? 'bg-[#6822d0]/20 text-white border-b-2 border-[#6822d0]'
                      : 'text-gray-400 hover:text-white hover:bg-[#6822d0]/10'
                      }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
              <div className="p-6 h-[calc(90vh-120px)] overflow-y-auto" ref={ref}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <h2 className="text-3xl font-bold text-white mb-8">
                    {tabContent[activeTab].title}
                  </h2>
                  {activeTab === 'resources' ? (
                    tabContent[activeTab].content.map((resource, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => setSelectedResource(resource)}
                        className="bg-[#1a1a3a]/30 p-6 rounded-lg border border-gray-800 hover:border-[#6822d0]/50 transition-all duration-300 cursor-pointer"
                      >
                        <p className="text-gray-300">{resource.title}</p>
                      </motion.div>
                    ))
                  ) : (
                    tabContent[activeTab].content.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-[#1a1a3a]/30 p-6 rounded-lg border border-gray-800 hover:border-[#6822d0]/50 transition-all duration-300"
                      >
                        <p className="text-gray-300">{item}</p>
                      </motion.div>
                    ))
                  )}
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* ID Card */}
          <div className="w-full md:w-[30vw]">
            <div className="h-full bg-[#0a0a1f]/40 backdrop-blur-sm rounded-xl border border-gray-800 p-6">
              <div className="flex items-center justify-center mb-6 relative">
                {profileUrl ? (
                  <img
                    src={profileUrl}
                    alt="Team Logo"
                    className="w-32 h-32 object-contain rounded-full"
                  />
                ) : (
                  <div
                    className="w-32 h-32 rounded-full border-2 border-dashed border-gray-600 flex items-center justify-center relative group cursor-pointer"
                    onClick={() => setShowUploadMenu(true)}
                    ref={uploadMenuRef}
                  >
                    <FaPencilAlt className="text-gray-500 group-hover:text-[#6822d0] transition-colors duration-300" />
                    {showUploadMenu && (
                      <div className="absolute top-full mt-2 bg-[#1a1a3a] rounded-lg shadow-lg p-4 z-20">
                        <button
                          className="text-white hover:text-[#6822d0] transition-colors duration-300"
                          onClick={() => fileInputRef.current.click()}
                        >
                          Upload Image
                        </button>
                        <input
                          type="file"
                          ref={fileInputRef}
                          className="hidden"
                          accept="image/*"
                          onChange={handleImageUpload}
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-white">{teamDetails.name}</h2>
                </div>
                <div className="space-y-4">
                  {teamDetails.members.map((member) => (
                    <div
                      key={member.id}
                      className="bg-[#1a1a3a]/30 p-4 rounded-lg border border-gray-800 hover:border-[#6822d0]/50 transition-all duration-300"
                    >
                      <span className="text-[#6822d0] font-medium">{member.label}:</span>
                      <span className="text-gray-300 ml-2">{member.name}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-white text-center mb-4">Team QR Code</h3>
                  <div className="bg-[#1a1a3a]/30 p-8 rounded-lg border border-gray-800 flex items-center justify-center">
                    <p className="text-gray-300 text-lg">Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectedResource && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
          <div className="bg-[#1B243B] rounded-xl p-8 max-w-2xl w-full border border-[#6822D0]/20">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">{selectedResource.title}</h3>
              </div>
              <button
                onClick={() => setSelectedResource(null)}
                className="text-[#759CFF] hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-4 mb-6">
              <p className="text-[#759CFF] leading-relaxed">
                {selectedResource.description}
              </p>
              <a
                href={selectedResource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[#5FFAB8] hover:text-[#6822D0] transition-colors duration-300"
              >
                Visit Resource →
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;