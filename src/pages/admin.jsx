import React, { useState, useEffect } from 'react';
import Table from '../components/table';

const Admin = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await fetch('https://apihackorate.sinusoid.in/api/teams/getallteams');
        if (!response.ok) {
          throw new Error('Failed to fetch teams');
        }
        const data = await response.json();
        
        // Process the data to remove _id and __v
        const processedTeams = data.map(team => {
          const { _id, __v, ...rest } = team;
          return rest;
        });

        setTeams(processedTeams);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchTeams();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white text-2xl font-boldonse">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500 text-2xl font-boldonse">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-boldonse font-bold text-white mb-8 text-center">Team Details</h1>
      <div className="grid gap-8">
        {teams.map((team, index) => (
          <div key={index}>
            <h2 className="text-2xl font-boldonse text-[#759cff] mb-4">Team {index + 1}</h2>
            <Table teamDetails={team} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
