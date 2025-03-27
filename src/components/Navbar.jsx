import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../images/grad-sinu.webp'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const navItems = [
        { name: 'Home', href: '#' },
        { name: 'Schedule', href: '#schedule' },
        { name: 'Prizes', href: '#prizes' },
        { name: 'Sponsors', href: '#sponsors' }
    ];

    return (
        <>
            <nav className="fixed w-full z-50 bg-gray-900/80 backdrop-blur-sm">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex items-center">
                            <img
                                src={logo}
                                alt="HackSinu Logo"
                                className="h-12 w-60 mt-7 object-cover rounded-full cursor-pointer hover:scale-105 transition-transform duration-300"
                                onClick={() => navigate('/')}
                            />
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-gray-300 hover:text-white transition duration-300"
                                >
                                    {item.name}
                                </a>
                            ))}
                            <button 
                                onClick={() => navigate('/register')}
                                className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full transition duration-300"
                            >
                                Register Now
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-gray-300 hover:text-white"
                            >
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    {isMenuOpen ? (
                                        <path d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    {isMenuOpen && (
                        <div className="md:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                {navItems.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="block px-3 py-2 text-gray-300 hover:text-white transition duration-300"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                                <button
                                    className="w-full mt-4 bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full transition duration-300"
                                    onClick={() => {
                                        setIsMenuOpen(false);
                                        navigate('/register');
                                    }}
                                >
                                    Register Now
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </>
    );
};

export default Navbar;