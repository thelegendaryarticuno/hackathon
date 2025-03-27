import React, { useState } from 'react';

const Schedule = () => {
    const [selectedDay, setSelectedDay] = useState(null);

    const scheduleItems = [
        {
            day: 'Day 1',
            title: 'Kickoff and Orientation',
            icon: '🚀',
            color: 'from-pink-500 to-purple-500',
            date: '12th April, 2025 ',
            time: '6:00 PM - 7:00 PM',
            venue: 'TBD',
            description: 'The hackathon begins with an orientation session, an introduction to AI-powered web development, and an interactive workshop on website hosting. Participants will explore key web development concepts, set their goals, and gear up for the challenges awaiting them on Day 2.'
        },
        {
            day: 'Day 2',
            title: 'Building and Coding',
            icon: '🛠️',
            color: 'from-purple-500 to-blue-500',
            date: '13th April, 2025', 
            time: '2:00 PM - 5:00 PM',
            venue: 'TBD',
            description: 'Teams will race against the clock in a 3-hour coding sprint, developing AI-driven web solutions based on a theme revealed earlier in the day. The hackathon culminates with project submissions, live demos, judging, and an exciting awards ceremony celebrating creativity, innovation, and technical excellence.'
        }
    ];

    return (
        <section className="py-20 relative" id="schedule">
            <div className="container mx-auto px-4">
                <h2 className="text-6xl font-bold mb-16 text-center bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                    TIMELINE
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {scheduleItems.map((item, index) => (
                        <div key={index}>
                            <div
                                onClick={() => setSelectedDay(item)}
                                className={`bg-gray-800/50 rounded-xl p-8 backdrop-blur-sm border border-gray-700
                                    transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]
                                    hover:border-purple-500/40 cursor-pointer`}
                            >
                                <div className={`w-16 h-16 rounded-full mb-6 flex items-center justify-center text-3xl bg-gradient-to-r ${item.color}`}>
                                    {item.icon}
                                </div>
                                <h4 className="text-xl font-bold text-gray-400 mb-2">{item.day}</h4>
                                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                {selectedDay && (
                    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
                        <div className="bg-gray-900 rounded-xl p-8 max-w-2xl w-full border border-purple-500/20">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="text-3xl font-bold text-white mb-2">{selectedDay.day}</h3>
                                    <h4 className="text-xl text-purple-400">{selectedDay.title}</h4>
                                </div>
                                <button 
                                    onClick={() => setSelectedDay(null)}
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            
                            <div className="space-y-4 mb-6">
                                <div className="flex items-center text-gray-300">
                                    <span className="mr-2">📅</span>
                                    <span>{selectedDay.date}</span>
                                </div>
                                <div className="flex items-center text-gray-300">
                                    <span className="mr-2">⏰</span>
                                    <span>{selectedDay.time}</span>
                                </div>
                                <div className="flex items-center text-gray-300">
                                    <span className="mr-2">📍</span>
                                    <span>{selectedDay.venue}</span>
                                </div>
                            </div>
                            
                            <p className="text-gray-400 leading-relaxed">
                                {selectedDay.description}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Schedule;