'use client';
import { motion } from 'framer-motion';
import FAQSection from './FAQSection';

const DetailsSections = () => {
  return (
    <div className="relative bg-[#0A0A0A] overflow-hidden">
      {/* Background Gradient Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1c1c1c] via-[#1c1c1c]/95 to-[#1c1c1c]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(91,143,249,0.05),transparent_50%)]"></div>
      </div>

      {/* Animated Text Container */}
      <div className="relative max-w-[100vw] overflow-hidden">
        {/* First Line */}
        <div className="relative whitespace-nowrap mb-2">
          <motion.div
            initial={{ x: "0%" }}
            animate={{ x: "-50%" }}
            transition={{
              repeat: Infinity,
              duration: 25,
              ease: "linear"
            }}
            className="inline-block"
          >
            <span className="text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6.5rem] font-medium tracking-tight inline-flex items-center">
              <span className="text-[#40C9FF]">The</span>
              &nbsp;
              <span className="text-[#5B8FF9]">online</span>
              &nbsp;
              <span className="text-[#9D76F9]">notepad</span>
              &nbsp;
              <span className="text-[#E469F9]">The</span>
              &nbsp;
              <span className="text-[#FF7C7C]">online</span>
              &nbsp;
              <span className="text-[#FFA23E]">notepad</span>
              &nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          </motion.div>

          <motion.div
            initial={{ x: "0%" }}
            animate={{ x: "-50%" }}
            transition={{
              repeat: Infinity,
              duration: 25,
              ease: "linear"
            }}
            className="inline-block"
          >
            <span className="text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6.5rem] font-medium tracking-tight inline-flex items-center">
              <span className="text-[#40C9FF]">The</span>
              &nbsp;
              <span className="text-[#5B8FF9]">online</span>
              &nbsp;
              <span className="text-[#9D76F9]">notepad</span>
              &nbsp;
              <span className="text-[#E469F9]">The</span>
              &nbsp;
              <span className="text-[#FF7C7C]">online</span>
              &nbsp;
              <span className="text-[#FFA23E]">notepad</span>
              &nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          </motion.div>
        </div>

        {/* Second Line */}
        <div className="relative whitespace-nowrap">
          <motion.div
            initial={{ x: "-50%" }}
            animate={{ x: "0%" }}
            transition={{
              repeat: Infinity,
              duration: 25,
              ease: "linear"
            }}
            className="inline-block"
          >
            <span className="text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6.5rem] font-medium tracking-tight inline-flex items-center">
              <span className="text-white">free</span>
              &nbsp;
              <span className="text-[#40C9FF]">for</span>
              &nbsp;
              <span className="text-[#9D76F9]">everyone</span>
              &nbsp;
              <span className="text-white">free</span>
              &nbsp;
              <span className="text-[#E469F9]">for</span>
              &nbsp;
              <span className="text-[#FFA23E]">everyone</span>
              &nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          </motion.div>

          <motion.div
            initial={{ x: "-50%" }}
            animate={{ x: "0%" }}
            transition={{
              repeat: Infinity,
              duration: 25,
              ease: "linear"
            }}
            className="inline-block"
          >
            <span className="text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6.5rem] font-medium tracking-tight inline-flex items-center">
              <span className="text-white">free</span>
              &nbsp;
              <span className="text-[#40C9FF]">for</span>
              &nbsp;
              <span className="text-[#9D76F9]">everyone</span>
              &nbsp;
              <span className="text-white">free</span>
              &nbsp;
              <span className="text-[#E469F9]">for</span>
              &nbsp;
              <span className="text-[#FFA23E]">everyone</span>
              &nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          </motion.div>
        </div>
      </div>

      {/* Edge Fade Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-[#1c1c1c] to-transparent"></div>
        <div className="absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-[#1c1c1c] to-transparent"></div>
      </div>

      {/* New Info Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-medium text-white mb-6"
            >
              What is an online notepad?
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 text-lg leading-relaxed mb-6"
            >
              An online notepad is a versatile, browser-based text editor that allows you to create, save, 
              and share notes instantly without needing software installation or account creation. Unlike 
              traditional note-taking tools, online notepads are accessible from any device with an 
              internet connection, making them the perfect solution for people who require a flexible 
              and portable workspace.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-400 text-lg leading-relaxed"
            >
              Whether you're jotting down quick ideas, managing projects, or drafting documents, our 
              online notepad is designed to make your life easier.
            </motion.p>
          </div>

          {/* Logo/Icon */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative lg:flex-shrink-0"
          >
            <div className="relative w-48 h-48 rounded-full">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#40C9FF] via-[#E469F9] to-[#FFA23E] opacity-20 blur-2xl"></div>
              
              {/* Icon container */}
              <div className="relative w-full h-full rounded-full bg-[#1A1A1A] flex items-center justify-center border border-gray-800/30">
                <div className="w-24 h-24 bg-gradient-to-br from-[#40C9FF] via-[#E469F9] to-[#FFA23E] rounded-lg transform -rotate-12">
                  {/* You can add more specific icon details here */}
                </div>
              </div>

              {/* Orbital ring */}
              <div className="absolute inset-0 rounded-full border border-gray-700/20 transform scale-110"></div>
              <div className="absolute inset-0 rounded-full border border-gray-700/10 transform scale-120"></div>
            </div>
          </motion.div>
        </div>
        <FAQSection />
      </div>
    
    </div>
  );
}

export default DetailsSections;