import React from 'react';

const IdCard = () => {
  const teamDetails = {
    name: "Team Name",
    logo: "/team-logo.png",
    members: [
      { id: 1, label: "Team Member 1", name: "John Doe" },
      { id: 2, label: "Team Member 2", name: "Jane Smith" },
      { id: 3, label: "Team Member 3", name: "Mike Johnson" }
    ]
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-6">
      <div className="w-[80%] bg-[#0a0a1f]/40 backdrop-blur-sm rounded-xl border border-gray-800 p-6">
        <div className="flex items-center justify-center mb-6">
          <img 
            src={teamDetails.logo}
            alt="Team Logo"
            className="w-32 h-32 object-contain" 
          />
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
  );
};

export default IdCard;
