'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EmptyState = () => (
  <div className="flex flex-col items-center justify-center h-full">
    <motion.div
      animate={{
        opacity: [0.3, 1, 0.3],
        scale: [0.95, 1, 0.95],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="mb-6"
    >
      <svg 
        className="w-12 h-12 text-purple-500"
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M9.663 17h4.674M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{
            pathLength: [0, 1, 0],
            opacity: [0.3, 1, 0.3]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.circle
          cx="12"
          cy="12"
          r="8"
          className="text-purple-500/20"
          fill="currentColor"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </svg>
    </motion.div>
    <motion.h3
      animate={{
        opacity: [0.5, 1, 0.5]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="text-xl font-medium text-purple-500 mb-2"
    >
      No prompt generated yet
    </motion.h3>
    <motion.p
      animate={{
        opacity: [0.3, 0.7, 0.3]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="text-purple-500/70 text-center"
    >
      Start by entering a prompt on the left side.
    </motion.p>
  </div>
);

const Sections = () => {
    const [prompt, setPrompt] = useState('');
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const generateImprovedPrompt = async () => {
      if (!prompt.trim()) {
        setError('Please enter a prompt');
        return;
      }
  
      setLoading(true);
      setError(null);
      setResult(null);
  
      try {
        const response = await fetch('/api/gemini', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ prompt: prompt.trim() })
        });
  
        const data = await response.json();
        if (!response.ok) throw new Error(data.error || 'Server error');
        setResult(data.result);
      } catch (err) {
        setError(err.message || 'Failed to generate prompt');
      } finally {
        setLoading(false);
      }
    };

    // Card animation variants
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        },
        hover: {
            scale: 1.02,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        }
    };

    // Loader animation
    const LoaderAnimation = () => (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#1e1e1e]/90 backdrop-blur-sm">
            <div className="relative w-20 h-20">
                {/* Outer ring */}
                <div className="absolute inset-0 border-4 border-blue-500/20 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-transparent border-t-blue-500 rounded-full loader-spin"></div>
                {/* Inner ring */}
                <div className="absolute inset-3 border-4 border-purple-500/20 rounded-full"></div>
                <div className="absolute inset-3 border-4 border-transparent border-t-purple-500 rounded-full loader-spin-reverse"></div>
            </div>
            <div className="mt-4 text-blue-400 font-medium animate-pulse">
                Crafting your perfect prompt...
            </div>
        </div>
    );

    return (
        <div className="h-[calc(100vh-64px)] bg-[#1c1c1c] relative overflow-hidden">
            {/* Animated Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Animated clouds/fog effect */}
                <div className="absolute w-full h-full">
                    <div className="absolute top-0 -left-1/2 w-[200%] h-full 
                                  animate-wave opacity-20 blur-3xl"
                         style={{
                             background: `
                                 radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.1) 0%, transparent 50%),
                                 radial-gradient(circle at 0% 0%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                                 radial-gradient(circle at 100% 0%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)
                             `,
                             animation: 'wave 20s linear infinite'
                         }}
                    />
                    <div className="absolute top-0 -left-1/2 w-[200%] h-full 
                                  animate-wave-slow opacity-20 blur-3xl"
                         style={{
                             background: `
                                 radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.1) 0%, transparent 50%),
                                 radial-gradient(circle at 0% 100%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
                                 radial-gradient(circle at 100% 100%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)
                             `,
                             animation: 'wave 15s linear infinite reverse'
                         }}
                    />
                </div>

                {/* Ambient light effects */}
                <div className="absolute inset-0"
                     style={{
                         background: `
                             radial-gradient(circle at 20% 20%, rgba(56, 189, 248, 0.05) 0%, transparent 40%),
                             radial-gradient(circle at 80% 80%, rgba(147, 51, 234, 0.05) 0%, transparent 40%)
                         `
                     }}
                />
            </div>

            {/* Main Content */}
            <div className="h-full container mx-auto px-4 py-6 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
                    {/* Left Side - Prompt Input */}
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        className="group relative flex flex-col h-full"
                    >
                        {/* Enhanced glow effects */}
                        <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-lg blur-md opacity-25 group-hover:opacity-40 transition-all duration-1000"></div>
                        <div className="absolute -inset-[1px] bg-gradient-to-b from-white/10 to-transparent rounded-lg"></div>
                        
                        {/* Card content with glass effect */}
                        <div className="relative flex flex-col h-full bg-[#1e1e1e]/80 rounded-lg border border-gray-800/50 
                                    backdrop-blur-md overflow-hidden transition-all duration-300">
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="relative flex items-center justify-between p-4 border-b border-gray-800/50"
                            >
                                <div>
                                    <h1 className="text-xl font-semibold text-gray-200 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                        AI Prompt Generator
                                    </h1>
                                    <p className="text-sm text-gray-400">Transform your ideas into detailed, structured prompts</p>
                                </div>
                            </motion.div>

                            <div className="flex-1 flex flex-col min-h-0 p-4 relative">
                                <motion.textarea
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    value={prompt}
                                    onChange={(e) => setPrompt(e.target.value)}
                                    className="flex-1 p-4 bg-[#2d2d2d]/80 text-gray-200 border border-gray-700/50 rounded-lg 
                                             focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 resize-none
                                             placeholder-gray-500 backdrop-blur-md transition-all duration-300"
                                    placeholder="Describe what kind of prompt you want to generate..."
                                />
                            </div>

                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="p-4 border-t border-gray-800/50 relative"
                            >
                                <button
                                    onClick={generateImprovedPrompt}
                                    disabled={loading || !prompt.trim()}
                                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-600/80 to-purple-600/80 text-white rounded-lg 
                                             hover:from-blue-600/90 hover:to-purple-600/90 disabled:from-gray-700/50 disabled:to-gray-700/50 
                                             disabled:text-gray-400 disabled:cursor-not-allowed transition-all duration-300 font-medium 
                                             flex items-center justify-center gap-2 backdrop-blur-sm
                                             shadow-[0_0_15px_rgba(59,130,246,0.3)]
                                             hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]"
                                >
                                    {loading ? 'Generating...' : 'Generate Structured Prompt'}
                                </button>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right Side - Results */}
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        className="group relative flex flex-col h-full"
                    >
                        {/* Enhanced glow effects */}
                        <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-blue-500/30 rounded-lg blur-md opacity-25 group-hover:opacity-40 transition-all duration-1000"></div>
                        <div className="absolute -inset-[1px] bg-gradient-to-b from-white/10 to-transparent rounded-lg"></div>
                        
                        {/* Card content with glass effect */}
                        <div className="relative flex flex-col h-full bg-[#1e1e1e]/80 rounded-lg border border-gray-800/50 
                                    backdrop-blur-md overflow-hidden">
                            {/* Header */}
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="relative flex items-center justify-between p-4 border-b border-gray-800/50"
                            >
                                <h2 className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                    Generated Result
                                </h2>
                            </motion.div>

                            {/* Content Container */}
                            <div className="flex-1 relative">
                                <AnimatePresence mode="wait">
                                    {loading ? (
                                        <LoaderAnimation />
                                    ) : !result ? (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <EmptyState />
                                        </div>
                                    ) : (
                                        <motion.div 
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0 }}
                                            className="p-6 h-full overflow-y-auto"
                                        >
                                    

                                            {/* Enhanced Prompt Section */}
                                            <div className="space-y-6">
                                                <div className="bg-[#2d2d2d]/50 rounded-lg p-5 backdrop-blur-sm border border-gray-700/30">
                                                    <h4 className="text-lg font-semibold text-blue-400 mb-3">
                                                        Enhanced Prompt
                                                    </h4>
                                                    <p className="text-gray-300 leading-relaxed">
                                                        {result.enhancedPrompt}
                                                    </p>
                                                </div>

                                                {/* Instructions Section */}
                                                <div className="bg-[#2d2d2d]/50 rounded-lg p-5 backdrop-blur-sm border border-gray-700/30">
                                                    <h4 className="text-lg font-semibold text-purple-400 mb-3">
                                                        Instructions
                                                    </h4>
                                                    <ol className="list-decimal list-inside space-y-2 text-gray-300">
                                                        {result.analysis?.improvements.map((improvement, index) => (
                                                            <li key={index} className="leading-relaxed">
                                                                {improvement}
                                                            </li>
                                                        ))}
                                                    </ol>
                                                </div>

                                                {/* Metadata Section */}
                                                <div className="mt-6 pt-6 border-t border-gray-700/30">
                                                    <div className="grid grid-cols-3 gap-4 text-sm">
                                                        <div className="bg-[#2d2d2d]/30 rounded-lg p-3 backdrop-blur-sm">
                                                            <span className="text-purple-400 block mb-1">Category</span>
                                                            <span className="text-gray-300">{result.category}</span>
                                                        </div>
                                                        <div className="bg-[#2d2d2d]/30 rounded-lg p-3 backdrop-blur-sm">
                                                            <span className="text-purple-400 block mb-1">Complexity</span>
                                                            <span className="text-gray-300">{result.complexity}</span>
                                                        </div>
                                                        <div className="bg-[#2d2d2d]/30 rounded-lg p-3 backdrop-blur-sm">
                                                            <span className="text-purple-400 block mb-1">Length</span>
                                                            <span className="text-gray-300">1000-1500 words</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Sections;