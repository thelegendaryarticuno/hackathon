import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../images/logo-text.webp';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [loadingMessage, setLoadingMessage] = useState('');
    const [showUnauthorized, setShowUnauthorized] = useState(false);
    const navigate = useNavigate();

    const navItems = [
        { name: 'Schedule', href: '#schedule' },
        { name: 'Prizes', href: '#prizes' },
        { name: 'Sponsors', href: '#sponsors' }
    ];

    const handleNavClick = (href) => {
        navigate('/');
        setTimeout(() => {
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    const handleLogout = async () => {
        try {
            await auth.signOut();
            sessionStorage.removeItem('teamId');
            setShowUnauthorized(false);
            navigate('/');
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    const handleLogin = async () => {
        try {
            setIsLoading(true);
            setLoadingMessage('Authenticating with Google...');

            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);

            if (result.user) {
                setLoadingMessage('Verifying registration...');
                const verifyResponse = await fetch('https://apihackorate.sinusoid.in/api/teams/verify-email', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: result.user.email
                    })
                });

                const verifyData = await verifyResponse.json();

                if (verifyData.teamId) {
                    sessionStorage.setItem('teamId', verifyData.teamId);
                    await navigate('/dashboard');
                } else {
                    setShowUnauthorized(true);
                }
            }
        } catch (error) {
            console.error('Login error:', error);
            setShowUnauthorized(true);
        } finally {
            setIsLoading(false);
            setLoadingMessage('');
        }
    };

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
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavClick(item.href);
                                    }}
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
                            <button
                                onClick={handleLogin}
                                className="bg-[#6822d0] hover:bg-[#7460FF] text-white font-boldonse px-6 py-2 rounded-full transition duration-300"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Loading...' : 'Login'}
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
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setIsMenuOpen(false);
                                            handleNavClick(item.href);
                                        }}
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
                                <button
                                    className="w-full mt-2 bg-[#6822d0] hover:bg-[#7460FF] text-white font-boldonse px-6 py-2 rounded-full transition duration-300"
                                    onClick={() => {
                                        setIsMenuOpen(false);
                                        handleLogin();
                                    }}
                                    disabled={isLoading}
                                >
                                    {isLoading ? 'Loading...' : 'Login'}
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            {/* Loading Overlay */}
            {isLoading && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-[#000510] border border-[#759cff]/30 p-6 rounded-xl max-w-sm w-full mx-4">
                        <div className="flex flex-col items-center">
                            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#759cff] mb-4"></div>
                            <p className="text-[#759cff]">{loadingMessage}</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Unauthorized Access Dialog */}
            {showUnauthorized && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-[#000510] border border-[#759cff]/30 p-6 rounded-xl max-w-sm w-full mx-4">
                        <h3 className="text-xl font-boldonse text-white mb-4">Unauthorized Access</h3>
                        <p className="text-[#759cff] mb-6">Please register your team first to access the dashboard.</p>
                        <div className="flex space-x-4">
                            <button
                                onClick={() => {
                                    setShowUnauthorized(false);
                                    navigate('/register');
                                }}
                                className="flex-1 bg-[#6822d0] hover:bg-[#7460FF] text-white font-boldonse px-6 py-2 rounded-full transition duration-300"
                            >
                                Register
                            </button>
                            <button
                                onClick={handleLogout}
                                className="flex-1 bg-transparent border border-[#6822d0] hover:bg-[#6822d0]/10 text-white font-boldonse px-6 py-2 rounded-full transition duration-300"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;