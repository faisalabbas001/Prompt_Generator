'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {
  const footerLinks = {
    product: {
      title: 'Product',
      links: [
        { name: 'About', href: '/about' },
        { name: 'Features', href: '/features' },
        { name: 'Changelog', href: '/changelog' },
        { name: 'Contact', href: '/contact' }
      ]
    },
    resources: {
      title: 'Resources',
      links: [
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Privacy & Cookies', href: '/privacy' },
        { name: 'Reporting Abuse', href: '/report-abuse' }
      ]
    },
    tools: {
      title: 'Tools',
      links: [
        { name: 'Word Counter', href: '/word-counter' }
      ]
    },
    featured: {
      title: 'Featured on',
      links: [
        { name: 'Startup Fame', href: '#' },
        { name: 'Indie Voice', href: '#' },
        { name: 'projecthunt.me', href: '#' },
        { name: 'UtilPortal', href: '#' }
      ]
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const linkHoverVariants = {
    hover: {
      x: 5,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <motion.footer 
      className="bg-[#1c1c1c] border-t border-gray-800/50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
          variants={containerVariants}
        >
          {/* Logo and Copyright Section */}
          <motion.div 
            className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-1"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Link href="/" className="flex items-center gap-2 text-white">
                <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded"></div>
                <span className="font-medium">Hyper Notepad</span>
              </Link>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="mt-6 text-gray-400 text-sm"
            >
              <motion.p 
                className="flex items-center gap-1"
                whileHover={{ scale: 1.02 }}
              >
                Made with <motion.span 
                  className="text-red-500"
                  animate={{ 
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >❤</motion.span>
              </motion.p>
              <p className="mt-2">© 2025 Hyper Notepad</p>
            </motion.div>

            {/* Theme Toggle */}
            <motion.div 
              className="mt-6 flex gap-2"
              variants={itemVariants}
            >
              {['language', 'theme'].map((type) => (
                <motion.button 
                  key={type}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
                  aria-label={`Toggle ${type}`}
                >
                  <motion.svg 
                    className="w-5 h-5 text-gray-400"
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.3 }}
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor"
                  >
                    {type === 'language' ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    )}
                  </motion.svg>
                </motion.button>
              ))}
            </motion.div>
          </motion.div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <motion.div 
              key={key}
              variants={itemVariants}
              className="space-y-4"
            >
              <motion.h3 
                className="text-white font-medium"
                variants={itemVariants}
              >
                {section.title}
              </motion.h3>
              <motion.ul 
                className="space-y-3"
                variants={containerVariants}
              >
                {section.links.map((link) => (
                  <motion.li 
                    key={link.name}
                    variants={itemVariants}
                  >
                    <motion.div
                      variants={linkHoverVariants}
                      whileHover="hover"
                    >
                      <Link 
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors inline-block"
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;