import React from 'react';

const Hero = () => {
    return (
        <section className="py-20 relative">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <div className="lg:w-1/2 mb-10 lg:mb-0">
                        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-green-400 bg-clip-text text-transparent">
                            SINU<br />
                            HACKATHON<br />
                            WEEK
                        </h1>
                        <p className="text-gray-300 mb-8 text-xl">
                            Join our 2-Day Design Hackathon to showcase your skills, tackle unique challenges, and win amazing prizes!
                        </p>
                        <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full transition duration-300">
                            REGISTER TODAY
                        </button>
                    </div>
                    <div className="lg:w-1/2">
                        <div className="relative">
                            <div className="w-full h-[400px] bg-gradient-to-r from-pink-500/20 to-green-400/20 rounded-lg flex items-center justify-center">
                                <div className="text-6xl">🌟</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero; 