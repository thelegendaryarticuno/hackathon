import React, { useState } from 'react';

const Schedule = () => {
    const [selectedDay, setSelectedDay] = useState(null);

    const scheduleItems = [
        {
            day: 'Day 1',
            title: 'Kickoff and Orientation',
            icon: '🚀',
            color: 'from-[#FA7D67] to-[#6822D0]',
            date: '12th April, 2025 ',
            time: '6:00 PM - 7:00 PM',
            venue: 'TBD',
            description: 'The hackathon begins with an orientation session, an introduction to AI-powered web development, and an interactive workshop on website hosting. Participants will explore key web development concepts, set their goals, and gear up for the challenges awaiting them on Day 2.'
        },
        {
            day: 'Day 2',
            title: 'Building and Coding',
            icon: '🛠️',
            color: 'from-[#6822D0] to-[#759CFF]',
            date: '13th April, 2025',
            time: '2:00 PM - 5:00 PM',
            venue: 'TBD',
            description: 'Teams will race against the clock in a 3-hour coding sprint, developing AI-driven web solutions based on a theme revealed earlier in the day. But it isn\'t all code and hardwork, you can use AI tools to enhance your projects and make them stand out. The hackathon culminates with project submissions, live demos, judging, and an exciting awards ceremony celebrating creativity, innovation, and technical excellence.'
        }
    ];

    return (
        <section className="py-20 relative" id="schedule">
            <div className="container mx-auto px-4">
                <h2 className="text-6xl font-boldonse font-bold mb-16 text-center bg-gradient-to-r from-[#6822D0] via-[#7460FF] to-[#759CFF] bg-clip-text text-transparent">
                    TIMELINE
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {scheduleItems.map((item, index) => (
                        <div key={index}>
                            <div
                                onClick={() => setSelectedDay(item)}
                                className={`bg-[#1B243B]/50 rounded-xl p-8 backdrop-blur-sm border border-[#6822D0]/30
                                    transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(104,34,208,0.4)]
                                    hover:border-[#7460FF]/40 cursor-pointer`}
                            >
                                <div className={`w-16 h-16 rounded-full mb-6 flex items-center justify-center text-3xl bg-gradient-to-r ${item.color}`}>
                                    {item.icon}
                                </div>
                                <h4 className="text-xl font-boldonse font-bold text-[#759CFF] mb-2">{item.day}</h4>
                                <h3 className="text-2xl font-boldonse font-bold text-white">{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                {selectedDay && (
                    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
                        <div className="bg-[#1B243B] rounded-xl p-8 max-w-2xl w-full border border-[#6822D0]/20">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="text-3xl font-boldonse font-bold text-white mb-2">{selectedDay.day}</h3>
                                    <h4 className="text-xl font-boldonse text-[#759CFF]">{selectedDay.title}</h4>
                                </div>
                                <button
                                    onClick={() => setSelectedDay(null)}
                                    className="text-[#759CFF] hover:text-white transition-colors"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <div className="space-y-4 mb-6">
                                <div className="flex items-center text-[#5FFAB8] font-boldonse">
                                    <span className="mr-2">📅</span>
                                    <span>{selectedDay.date}</span>
                                </div>
                                <div className="flex items-center text-[#5FFAB8] font-boldonse">
                                    <span className="mr-2">⏰</span>
                                    <span>{selectedDay.time}</span>
                                </div>
                                <div className="flex items-center text-[#5FFAB8] font-boldonse">
                                    <span className="mr-2">📍</span>
                                    <span>{selectedDay.venue}</span>
                                </div>
                            </div>

                            <p className="text-[#759CFF] leading-relaxed">
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