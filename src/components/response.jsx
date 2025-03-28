import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Fragment, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const SuccessDialog = ({ isOpen, onClose, leaderName }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (isOpen) {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });

            const timer = setTimeout(() => {
                onClose();
                navigate('/');
            }, 10000);

            return () => clearTimeout(timer);
        }
    }, [isOpen, navigate, onClose]);

    const handleClose = () => {
        onClose();
        navigate('/');
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 overflow-y-auto">
                    <div className="flex min-h-screen items-center justify-center px-4 text-center">
                        <div className="fixed inset-0 bg-black opacity-30" />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="inline-block w-full max-w-md p-8 overflow-hidden text-left align-middle bg-gray-800 shadow-xl rounded-2xl relative"
                        >
                            <div className="absolute top-0 right-0 pt-4 pr-4">
                                <button
                                    type="button"
                                    className="text-gray-400 hover:text-gray-200 transition-colors"
                                    onClick={handleClose}
                                >
                                    <span className="sr-only">Close</span>
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <div className="text-center">
                                <h3 className="text-3xl font-bold leading-6 text-transparent bg-gradient-to-r from-violet-400 to-indigo-300 bg-clip-text mb-6">
                                    Congratulations!
                                </h3>

                                <div className="mt-4">
                                    <p className="text-gray-200 text-lg">
                                        Your registration is successful! A mail with event guidelines will be delivered to you soon. Till then keep ideating, keep designing.
                                    </p>
                                    <p className="mt-6 text-gray-300 font-semibold">
                                        Regards,<br />
                                        siNUsoidV9 Core
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            )}
        </AnimatePresence>
    );
};

export const ErrorDialog = ({ isOpen, onClose }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => {
                onClose();
                navigate('/');
            }, 10000);

            return () => clearTimeout(timer);
        }
    }, [isOpen, navigate, onClose]);

    const handleClose = () => {
        onClose();
        navigate('/');
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 overflow-y-auto">
                    <div className="flex min-h-screen items-center justify-center px-4 text-center">
                        <div className="fixed inset-0 bg-black opacity-30" />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="inline-block w-full max-w-md p-8 overflow-hidden text-left align-middle bg-gray-800 shadow-xl rounded-2xl relative"
                        >
                            <div className="absolute top-0 right-0 pt-4 pr-4">
                                <button
                                    type="button"
                                    className="text-gray-400 hover:text-gray-200 transition-colors"
                                    onClick={handleClose}
                                >
                                    <span className="sr-only">Close</span>
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <div className="text-center">
                                <h3 className="text-3xl font-bold leading-6 text-red-400 mb-6">
                                    Oops!
                                </h3>

                                <div className="mt-4">
                                    <p className="text-gray-200 text-lg">
                                        Server crashed. Please try again or contact us at{' '}
                                        <a href="mailto:sinusoid@st.niituniversity.in" className="text-violet-400 hover:text-violet-300 transition-colors">
                                            sinusoid@st.niituniversity.in
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            )}
        </AnimatePresence>
    );
};
