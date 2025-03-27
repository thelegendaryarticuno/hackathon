import React from 'react';

const speakers = [
    {
        name: 'MIRACLE KORSGAARD',
        role: 'CEO SPARK OF MINDS',
        image: '/speakers/speaker1.jpg'
    },
    {
        name: 'DAVIS GEORGE',
        role: 'CTO FOUNDER AT PINE',
        image: '/speakers/speaker2.jpg'
    },
    {
        name: 'RYAN DIAS',
        role: 'LEADER AT PINE',
        image: '/speakers/speaker3.jpg'
    },
    {
        name: 'MEDINA COLMANE',
        role: 'TECH LEAD',
        image: '/speakers/speaker4.jpg'
    }
];

const Speakers = () => {
    return (
        <section className="py-20 relative" id="speakers">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl font-bold mb-16 text-white">OUR SPEAKERS</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {speakers.map((speaker, index) => (
                        <div key={index} className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm">
                            <div className="aspect-square mb-4 rounded-xl overflow-hidden bg-gradient-to-r from-pink-500/20 to-purple-500/20 flex items-center justify-center">
                                {speaker.image ? (
                                    <img
                                        src={speaker.image}
                                        alt={speaker.name}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = 'https://via.placeholder.com/400x400.png?text=Speaker';
                                        }}
                                    />
                                ) : (
                                    <div className="text-6xl">👤</div>
                                )}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{speaker.name}</h3>
                            <p className="text-gray-400">{speaker.role}</p>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-12">
                    <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full transition duration-300">
                        VIEW ALL SPEAKERS
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Speakers; 