import React from 'react';
import { FaTrophy, FaMedal, FaAward, FaHeart, FaGift, FaTicketAlt } from 'react-icons/fa';

const Prizes = () => {
    const prizes = [
        {
            title: '1st Place',
            amount: 'Prizes worth ₹2500',
            description: 'Grand prize for the most innovative and impactful project',
            icon: <FaTrophy className="text-[#759cff]" />
        },
        {
            title: '2nd Place', 
            amount: 'Prizes worth ₹1500',
            description: 'Runner-up award for exceptional execution',
            icon: <FaMedal className="text-[#7460FF]" />
        },
        {
            title: '3rd Place',
            amount: 'Prizes worth ₹1000',
            description: 'Third place prize for outstanding achievement',
            icon: <FaAward className="text-[#759cff]" />
        },
        {
            title: "People's Choice",
            amount: 'Prizes upto ₹500',
            description: "Special award voted by the community",
            icon: <FaHeart className="text-[#7460FF]" />
        },
        {
            title: 'Gift Cards',
            amount: 'Worth ₹500',
            description: 'Digital gift cards from our sponsors',
            icon: <FaGift className="text-[#759cff]" />
        },
        {
            title: 'Special Prizes',
            amount: 'Worth ₹250',
            description: 'Additional rewards and surprises',
            icon: <FaTicketAlt className="text-[#7460FF]" />
        }
    ];

    return (
        <section className="py-20 relative" id="prizes">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl font-bold mb-8 text-white text-center">PRIZE POOL</h2>
                <h3 className="text-2xl text-[#759cff] mb-16 text-center">₹7,000+ in Prizes</h3>
                <p className="text-[#7460FF] mb-12 text-xl text-center">
                    Showcase your innovation and creativity to win amazing prizes! From cash awards to special vouchers,
                    there's something exciting for everyone.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {prizes.map((prize, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-r from-[#6822d0]/30 to-[#759cff]/30 rounded-xl p-8 backdrop-blur-sm 
                            border border-[#6822d0]/20 transform transition-all duration-300 hover:scale-105 
                            hover:shadow-[0_0_30px_rgba(104,34,208,0.4)] hover:border-[#759cff]/40"
                        >
                            <div className="text-5xl mb-4 transition-transform duration-300 hover:rotate-12">
                                {prize.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">{prize.title}</h3>
                            <div className="text-3xl font-bold text-[#759cff] mb-4">{prize.amount}</div>
                            <p className="text-[#7460FF]">{prize.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Prizes;