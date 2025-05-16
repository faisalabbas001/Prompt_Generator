'use client';
import { motion } from 'framer-motion';

const About = () => {
  const sections = [
    { id: 'story', title: 'The Hero Origin Story' },
    { id: 'prototype', title: 'From Prototype to Validation' },
    { id: 'different', title: 'What Makes WeiBlocks Different?' },
    { id: 'future', title: 'Built for the Future' }
  ];

  return (
    <div className="relative bg-[#1c1c1c] min-h-screen">
      {/* Background Glow Effect */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-30">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8">
            {/* About Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-medium text-white mb-6">
                About Us
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed">
                This is <span className="text-white font-medium">WeiBlocks Prompt Generator</span>,
                your go-to solution for fast, free, and effortless prompt generation.
                But this isn't just another online tool—it's the product of a vision to do
                better.
              </p>
            </motion.div>

            {/* Story Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-medium text-white mb-6">
                The Hero Origin Story
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Hi, I'm Wei, a developer passionate about AI and prompt engineering. WeiBlocks was born 
                out of a simple observation: there wasn't an easy, modern, and efficient way to generate 
                and refine AI prompts.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Every tool I tried felt like it belonged to a bygone era—either cluttered with unnecessary features,
                frustratingly basic, or stuck in the design principles of the past. I wanted something different. I wanted
                a solution that was:
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  { title: 'Fast', desc: 'So you could generate and refine prompts in seconds.' },
                  { title: 'Simple', desc: 'Free from distractions and bloat—just a clean, intuitive interface.' },
                  { title: 'Accessible', desc: 'No sign-ups, no downloads, no friction. Just open, generate, and share.' }
                ].map((item) => (
                  <motion.li
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-start gap-3 text-gray-400"
                  >
                    <span className="text-white font-medium">{item.title}:</span>
                    {item.desc}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Prototype Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-medium text-white mb-6">
                From Prototype to Validation
              </h2>
              <p className="text-gray-400 leading-relaxed">
                I quickly built a prototype to see if others felt the same frustration I did. I shared it on various 
                platforms, explaining my vision for a clean and modern tool to generate AI prompts instantly. 
                The response was incredible—developers, content creators, and AI enthusiasts all shared the 
                same need for a better prompt generation tool.
              </p>
            </motion.div>
          </div>

          {/* Right Sidebar - Navigation */}
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <div className="w-24 h-24 relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-xl opacity-50"></div>
                  <div className="relative w-full h-full rounded-full bg-[#1e1e1e] border border-gray-800/50 flex items-center justify-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg transform -rotate-12"></div>
                  </div>
                </div>
              </motion.div>

              {/* Navigation */}
              <nav className="space-y-3">
                {sections.map((section) => (
                  <motion.a
                    key={section.id}
                    href={`#${section.id}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ x: 5 }}
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    {section.title}
                  </motion.a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;