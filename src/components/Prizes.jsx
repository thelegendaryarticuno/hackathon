import React from 'react';
import { FaTrophy, FaMedal, FaAward, FaHeart, FaGift, FaTicketAlt } from 'react-icons/fa';

const Prizes = () => {
    const prizes = [
        {
            title: '1st Place',
            amount: '$3,000',
            description: 'Grand prize for the most innovative and impactful project',
            icon: <FaTrophy className="text-yellow-400" />
        },
        {
            title: '2nd Place', 
            amount: '$2,000',
            description: 'Runner-up award for exceptional execution',
            icon: <FaMedal className="text-gray-300" />
        },
        {
            title: '3rd Place',
            amount: '$1,000',
            description: 'Third place prize for outstanding achievement',
            icon: <FaAward className="text-amber-600" />
        },
        {
            title: "People's Choice",
            amount: '$500',
            description: "Special award voted by the community",
            icon: <FaHeart className="text-red-400" />
        },
        {
            title: 'Vouchers',
            amount: 'Worth $300',
            description: 'Digital gift cards from our sponsors',
            icon: <FaGift className="text-purple-400" />
        },
        {
            title: 'Special Prizes',
            amount: 'Worth $200',
            description: 'Additional rewards and surprises',
            icon: <FaTicketAlt className="text-blue-400" />
        }
    ];

    return (
        <section className="py-20 relative" id="prizes">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl font-bold mb-8 text-white text-center">PRIZE POOL</h2>
                <h3 className="text-2xl text-purple-400 mb-16 text-center">$7,000+ in Prizes</h3>
                <p className="text-gray-400 mb-12 text-xl text-center">
                    Showcase your innovation and creativity to win amazing prizes! From cash awards to special vouchers,
                    there's something exciting for everyone.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {prizes.map((prize, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-xl p-8 backdrop-blur-sm 
                            border border-purple-500/20 transform transition-all duration-300 hover:scale-105 
                            hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:border-purple-500/40"
                        >
                            <div className="text-5xl mb-4 transition-transform duration-300 hover:rotate-12">
                                {prize.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">{prize.title}</h3>
                            <div className="text-3xl font-bold text-purple-400 mb-4">{prize.amount}</div>
                            <p className="text-gray-400">{prize.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Prizes;