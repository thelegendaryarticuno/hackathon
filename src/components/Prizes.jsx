import React from 'react';
import { FaTrophy, FaMedal, FaAward, FaHeart, FaGift, FaTicketAlt } from 'react-icons/fa';
import { SiAmazon, SiApple, SiZomato } from 'react-icons/si';
import myntraLogo from '../images/Myntra-Logo.png';
import logo5 from '../images/blinkit-logo.png';

const Prizes = () => {
    const prizes = [
        {
            title: '1st Place',
            amount: 'Prizes worth ₹2,500',
            description: 'Grand prize for the most innovative and impactful project',
            icon: <FaTrophy className="text-yellow-400" />
        },
        {
            title: '2nd Place',
            amount: 'Prizes worth ₹1,500',
            description: 'Runner-up award for exceptional execution',
            icon: <FaMedal className="text-gray-300" />
        },
        {
            title: '3rd Place',
            amount: 'Prizes worth ₹1,000',
            description: 'Third place prize for outstanding achievement',
            icon: <FaAward className="text-amber-600" />
        },
        {
            title: "People's Choice",
            amount: 'Prizes upto ₹300',
            description: "Special award voted by the community",
            icon: <FaHeart className="text-pink-500" />
        },
        {
            title: 'Gift Cards',
            amount: 'Total Worth ₹6,500 ',
            description: (
                <div className="flex space-x-2 items-center justify-center">
                    <SiApple className="text-3xl text-gray-200" />
                    <SiAmazon className="text-3xl text-[#FF9900]" />
                    <SiZomato className="text-5xl text-red-500" />
                    <img src={myntraLogo} alt="Myntra" className="h-18" />
                    <img src={logo5} alt="Blinkit" className="h-18" />
                </div>
            ),
            icon: <FaGift className="text-purple-500" />
        },
        {
            title: 'Special Prizes',
            amount: 'Worth ₹250',
            description: 'Additional rewards and surprises',
            icon: <FaTicketAlt className="text-red-500" />
        }
    ];

    return (
        <section className="py-20 relative" id="prizes">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl font-boldonse font-bold mb-8 text-white text-center">PRIZE POOL</h2>
                <h3 className="text-2xl font-boldonse text-[#759cff] mb-16 text-center">₹7,000+ in Prizes</h3>
                <p className="text-[#FFFFFF] mb-12 text-xl text-center font-boldonse">
                    Showcase your innovation and creativity to win amazing prizes! From cash prizes to gift cards,
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
                            <h3 className="text-2xl font-boldonse font-bold text-white mb-2">{prize.title}</h3>
                            <div className="text-3xl font-boldonse font-bold text-[#759cff] mb-4">{prize.amount}</div>
                            <p className="text-[#7460FF] font-boldonse">{prize.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Prizes;