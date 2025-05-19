'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            // Close menu if click is outside of nav elements
            if (isMobileMenuOpen && !event.target.closest('nav')) {
                setIsMobileMenuOpen(false);
            }
        };

        // Add event listener when menu is open
        if (isMobileMenuOpen) {
            document.addEventListener('click', handleClickOutside);
        }

        // Cleanup function to remove event listener
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isMobileMenuOpen]);

    const handleGitHubClick = (e) => {
        e.preventDefault();
        window.open('https://github.com/usamalatif', '_blank', 'noopener,noreferrer');
    };

    return (
        <nav className="bg-[#1c1c1c]/95 backdrop-blur-md border-b border-gray-800/50 sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="text-xl font-semibold">
                            <span className="text-[#5B8FF9]">AI</span>{' '}
                            <span className="bg-gradient-to-r from-[#5B8FF9] via-[#9D76F9] to-[#E469F9] bg-clip-text text-transparent">
                                Prompt
                            </span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link 
                            href="/" 
                            className="text-gray-400 hover:text-gray-200 transition-colors text-sm"
                        >
                            Home
                        </Link>
                        <Link 
                            href="/about" 
                            className="text-gray-400 hover:text-gray-200 transition-colors text-sm"
                        >
                            About
                        </Link>
                        <Link 
                            href="/examples" 
                            className="text-gray-400 hover:text-gray-200 transition-colors text-sm"
                        >
                            Examples
                        </Link>
                        <motion.a 
                            href="https://github.com/usamalatif"
                            onClick={handleGitHubClick}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="block px-3 py-2 text-gray-400 hover:text-gray-200 hover:bg-gray-800/50 rounded-md transition-all text-sm group relative"
                        >
                            <span className="flex items-center gap-2">
                                <svg 
                                    className="w-5 h-5 group-hover:rotate-12 transition-transform" 
                                    fill="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                </svg>
                                GitHub
                            </span>
                        </motion.a>
                    </div>

                    {/* Action Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <button className="px-4 py-1.5 text-sm text-gray-300 hover:text-white transition-colors">
                            Sign In
                        </button>
                        <button className="px-4 py-1.5 text-sm text-white bg-[#5B8FF9] hover:bg-[#4A7DE0] rounded-md transition-all duration-200">
                            Get Started
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 text-gray-400 hover:text-white focus:outline-none"
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
                                {isMobileMenuOpen ? (
                                    <path d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden border-t border-gray-800/50"
                    >
                        <div className="px-4 py-3 space-y-2 bg-[#1c1c1c]/95 backdrop-blur-md">
                            <Link 
                                href="/" 
                                className="block px-3 py-2 text-gray-400 hover:text-gray-200 hover:bg-gray-800/50 rounded-md transition-all text-sm"
                            >
                                Home
                            </Link>
                            <Link 
                                href="/about" 
                                className="block px-3 py-2 text-gray-400 hover:text-gray-200 hover:bg-gray-800/50 rounded-md transition-all text-sm"
                            >
                                About
                            </Link>
                            <Link 
                                href="/examples" 
                                className="block px-3 py-2 text-gray-400 hover:text-gray-200 hover:bg-gray-800/50 rounded-md transition-all text-sm"
                            >
                                Examples
                            </Link>
                            <motion.a 
                                href="https://github.com/usamalatif"
                                onClick={handleGitHubClick}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="block px-3 py-2 text-gray-400 hover:text-gray-200 hover:bg-gray-800/50 rounded-md transition-all text-sm group relative"
                            >
                                <span className="flex items-center gap-2">
                                    <svg 
                                        className="w-5 h-5 group-hover:rotate-12 transition-transform" 
                                        fill="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                    </svg>
                                    GitHub
                                </span>
                            </motion.a>
                            <div className="pt-2 space-y-2">
                                <button className="w-full px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md transition-all">
                                    Sign In
                                </button>
                                <button className="w-full px-3 py-2 text-sm text-white bg-[#5B8FF9] hover:bg-[#4A7DE0] rounded-md transition-all">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;