import React from 'react';

const Table = ({ teamDetails }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-gradient-to-r from-[#6822d0]/30 to-[#759cff]/30 rounded-xl backdrop-blur-sm border border-[#6822d0]/20">
        <thead>
          <tr className="border-b border-[#759cff]/40">
            <th className="px-6 py-4 text-left text-xl font-boldonse text-white">Field</th>
            <th className="px-6 py-4 text-left text-xl font-boldonse text-white">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-[#759cff]/20 hover:bg-[#6822d0]/20 transition-colors">
            <td className="px-6 py-4 text-[#759cff] font-boldonse">Team Name</td>
            <td className="px-6 py-4 text-white">{teamDetails.TeamName}</td>
          </tr>
          <tr className="border-b border-[#759cff]/20 hover:bg-[#6822d0]/20 transition-colors">
            <td className="px-6 py-4 text-[#759cff] font-boldonse">Team ID</td>
            <td className="px-6 py-4 text-white">{teamDetails.TeamId}</td>
          </tr>
          <tr className="border-b border-[#759cff]/20 hover:bg-[#6822d0]/20 transition-colors">
            <td className="px-6 py-4 text-[#759cff] font-boldonse">Leader Name</td>
            <td className="px-6 py-4 text-white">{teamDetails.LeaderName}</td>
          </tr>
          <tr className="border-b border-[#759cff]/20 hover:bg-[#6822d0]/20 transition-colors">
            <td className="px-6 py-4 text-[#759cff] font-boldonse">Leader Email</td>
            <td className="px-6 py-4 text-white">{teamDetails.LeaderEmail}</td>
          </tr>
          <tr className="border-b border-[#759cff]/20 hover:bg-[#6822d0]/20 transition-colors">
            <td className="px-6 py-4 text-[#759cff] font-boldonse">Leader Phone</td>
            <td className="px-6 py-4 text-white">{teamDetails.LeaderPhone}</td>
          </tr>
          <tr className="border-b border-[#759cff]/20 hover:bg-[#6822d0]/20 transition-colors">
            <td className="px-6 py-4 text-[#759cff] font-boldonse">Team Size</td>
            <td className="px-6 py-4 text-white">{teamDetails.TeamMemberNumber}</td>
          </tr>
          <tr className="border-b border-[#759cff]/20 hover:bg-[#6822d0]/20 transition-colors">
            <td className="px-6 py-4 text-[#759cff] font-boldonse">Member 2 Name</td>
            <td className="px-6 py-4 text-white">{teamDetails.TeamMember2Name}</td>
          </tr>
          <tr className="hover:bg-[#6822d0]/20 transition-colors">
            <td className="px-6 py-4 text-[#759cff] font-boldonse">Member 2 Email</td>
            <td className="px-6 py-4 text-white">{teamDetails.TeamMember2Email}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
