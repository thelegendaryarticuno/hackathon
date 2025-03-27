import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RegistrationForm from './form';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

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
                            <a href="#" className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                                HACKSINU
                            </a>
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
                                onClick={() => setIsDialogOpen(true)}
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
                                        setIsDialogOpen(true);
                                    }}
                                >
                                    Register Now
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            {/* Registration Dialog */}
            <AnimatePresence>
                {isDialogOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 overflow-hidden bg-black bg-opacity-50 flex items-center justify-center"
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="relative w-full max-w-2xl h-[80vh] bg-gray-900 rounded-lg overflow-y-auto"
                        >
                            {/* Close button */}
                            <button
                                onClick={() => setIsDialogOpen(false)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-white z-50 bg-gray-800 rounded-full p-2 transition-colors duration-200"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Registration Form */}
                            <div className="p-6">
                                <RegistrationForm />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;