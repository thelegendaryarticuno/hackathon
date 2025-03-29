import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../images/logo-text.webp'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const navItems = [
        { name: 'Schedule', href: '#schedule' },
        { name: 'Prizes', href: '#prizes' },
        { name: 'Sponsors', href: '#sponsors' }
    ];

    return (
        <>
            <nav className="fixed w-full z-50 bg-[#000510] bg-opacity-90 backdrop-blur-sm">
                <div className="container mx-auto pr-4">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex items-center">
                            <img
                                src={logo}
                                alt="HackSinu Logo"
                                className="h-15 w-70 object-cover rounded-full cursor-pointer hover:scale-105 transition-transform duration-300"
                                onClick={() => navigate('/')}
                            />
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-white font-boldonse hover:text-[#759cff] transition duration-300"
                                >
                                    {item.name}
                                </a>
                            ))}
                            <button 
                                onClick={() => navigate('/register')}
                                className="bg-[#6822d0] hover:bg-[#7460FF] text-white font-boldonse px-6 py-2 rounded-full transition duration-300"
                            >
                                Register Now
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-white hover:text-[#759cff]"
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
                                        className="block px-3 py-2 text-white font-boldonse hover:text-[#759cff] transition duration-300"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                                <button
                                    className="w-full mt-4 bg-[#6822d0] hover:bg-[#7460FF] text-white font-boldonse px-6 py-2 rounded-full transition duration-300"
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