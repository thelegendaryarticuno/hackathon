import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../images/logo-text.webp'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showDialog, setShowDialog] = useState(false);
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await auth.signOut();
            setShowDialog(false);
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    const handleLogin = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider).then((result) => {
            if (result.user) {
                const userEmail = result.user.email;
                console.log("User email:", userEmail);
                const allowedEmails = [
                    import.meta.env.VITE_ALLOWED_EMAIL1,
                    import.meta.env.VITE_ALLOWED_EMAIL2,
                    import.meta.env.VITE_ALLOWED_EMAIL3,
                    import.meta.env.VITE_ALLOWED_EMAIL4,
                    import.meta.env.VITE_ALLOWED_EMAIL5,
                    import.meta.env.VITE_ALLOWED_EMAIL6,
                    import.meta.env.VITE_ALLOWED_EMAIL7,
                    import.meta.env.VITE_ALLOWED_EMAIL8,
                    import.meta.env.VITE_ALLOWED_EMAIL9
                ];
                console.log("Allowed emails:", allowedEmails);
                if (allowedEmails.includes(userEmail)) {
                    navigate('/admin');
                } else {
                    setShowDialog(true);
                }
            }
        }).catch((error) => {
            console.error("Login error:", error);
        })
    }

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
                                onClick={handleLogin}
                                className="bg-[#6822d0] hover:bg-[#7460FF] text-white font-boldonse px-6 py-2 rounded-full transition duration-300"
                            >
                                Login with Google
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
                                        handleLogin();
                                    }}
                                >
                                    Login with Google
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            {/* Unauthorized Access Dialog */}
            {showDialog && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-[#000510] border border-[#759cff]/30 p-6 rounded-xl max-w-sm w-full mx-4">
                        <h3 className="text-xl font-boldonse text-white mb-4">Unauthorized Access</h3>
                        <p className="text-[#759cff] mb-6">You are not authorized to access this page.</p>
                        <button
                            onClick={handleLogout}
                            className="w-full bg-[#6822d0] hover:bg-[#7460FF] text-white font-boldonse px-6 py-2 rounded-full transition duration-300"
                        >
                            OK
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;