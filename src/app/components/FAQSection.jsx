'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const UserTypeCard = ({ icon, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-[#1e1e1e]/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800/50"
  >
    <div className="flex items-center gap-3 mb-4">
      <span className="text-gray-400">{icon}</span>
      <h3 className="text-xl font-medium text-white">{title}</h3>
    </div>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </motion.div>
);

const FeatureCard = ({ icon, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="flex flex-col items-start"
  >
    <div className="w-12 h-12 bg-[#1e1e1e] rounded-lg flex items-center justify-center mb-4 border border-gray-800/50">
      <span className="text-gray-400">{icon}</span>
    </div>
    <h3 className="text-xl font-medium text-white mb-3">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </motion.div>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Do I need to create an account to use Hyper Notepad?",
      answer: "No, you can start using Hyper Notepad immediately without creating an account. It's designed for instant access and ease of use."
    },
    {
      question: "Is Hyper Notepad really free to use?",
      answer: "Yes, Hyper Notepad is completely free to use with all its core features. There are no hidden charges or premium tiers."
    },
    {
      question: "How do I share my notes with others?",
      answer: "Simply click the share button to generate a unique link that you can send to anyone. They can view and edit the note without needing an account."
    },
    {
      question: "Is my data secure?",
      answer: "Yes, we use industry-standard encryption to protect your notes. Your data is transmitted securely and stored safely on our servers."
    },
    {
      question: "Can I access my notes from different devices?",
      answer: "Yes, you can access your notes from any device with an internet connection by using the unique note link."
    },
    {
      question: "What happens if I lose my unique note link?",
      answer: "Without the unique link, you won't be able to access your note again. We recommend bookmarking important note links or creating an account to save them."
    },

  ];

  // User types data
  const userTypes = [
    {
      icon: "👨‍🎓",
      title: "Students",
      description: "Take quick notes during lectures, collaborate on group projects, create study guides, and maintain organised class notes—all accessible from any device."
    },
    {
      icon: "👔",
      title: "Professionals",
      description: "Capture meeting minutes, organise project ideas, track daily tasks, and share important information with team members instantly and securely."
    },
    {
      icon: "✍️",
      title: "Writers and Bloggers",
      description: "Draft articles, organise research notes, create content outlines, and store writing ideas in one place with easy access for editing and collaboration."
    },
    {
      icon: "👩‍🏫",
      title: "Teachers and Educators",
      description: "Create and distribute lesson plans, share educational resources, provide student feedback, and collaborate with other educators using shareable links."
    },
    {
      icon: "👩‍💻",
      title: "Developers",
      description: "Quickly draft and share code snippets, document project requirements, and reference debugging steps."
    },
    {
      icon: "👥",
      title: "Anyone",
      description: "From shopping lists to personal journals, creative writing to quick reminders—our online notepad is perfect for anyone who needs a reliable, accessible space for their thoughts."
    }
  ];

  const features = [
    {
      icon: "⭐",
      title: "Ease of Use",
      description: "Our intuitive interface is built for speed and simplicity. No downloads, no sign-ups — just open and type."
    },
    {
      icon: "🛡️",
      title: "Security",
      description: "Your data matters. Hyper Notepad encrypts every note for secure storage, giving you peace of mind."
    },
    {
      icon: "∞",
      title: "Unlimited",
      description: "Hyper Notepad offers everything — rich text editing, sharing, and downloading — for free."
    },
    {
      icon: "💻",
      title: "Compatibility",
      description: "Whether you're on a laptop, tablet, or smartphone, your notes are just a click away."
    }
  ];

  return (
    <div className="relative bg-[#1c1c1c] overflow-hidden">
      {/* Background effects remain the same */}
      <div className="absolute inset-0 overflow-hidden">
        {/* ... existing background effects ... */}
      </div>

      {/* Main Content - Updated Layout */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Side - Title and Description */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-medium text-white mb-4"
            >
              FAQs
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-400 text-lg"
            >
              Find quick answers to common questions about using Hyper Notepad.
            </motion.p>
          </div>

          {/* Right Side - FAQ Items */}
          <div className="lg:col-span-8">
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="border-b border-gray-800/50 backdrop-blur-sm"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full py-5 flex justify-between items-center text-left focus:outline-none group"
                  >
                    <span className="text-lg text-gray-200 group-hover:text-white transition-colors">
                      {faq.question}
                    </span>
                    <span className="ml-6 flex-shrink-0">
                      <motion.svg
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="w-6 h-6 text-gray-400 group-hover:text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </motion.svg>
                    </span>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-5 pr-12">
                          <p className="text-gray-400">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Who Needs Section */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-gray-800/50">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Side - Title and Description */}
          <div className="lg:col-span-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-medium text-white mb-4"
            >
              Who needs an online notepad?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-400 text-lg"
            >
              There are numerous use cases for our free online notepad. Whether you're a small business owner, a marketer, a student, or a writer, we've got you covered.
            </motion.p>
          </div>

          {/* Right Side - User Type Cards */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {userTypes.map((userType, index) => (
                <UserTypeCard
                  key={index}
                  icon={userType.icon}
                  title={userType.title}
                  description={userType.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Best Online Notepad Section */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-gray-800/50">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-medium mb-6"
          >
            <span className="italic text-gray-400">The</span>{" "}
            <span className="text-white">best online notepad</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-400 text-lg leading-relaxed"
          >
            Hyper Notepad isn't just another notepad — it's the number one free online notepad designed for 
            everyone, everywhere. Whether you need to jot down a quick idea, organise your thoughts, or 
            collaborate on a project, Hyper Notepad provides the perfect blend of simplicity, speed, and 
            functionality to meet your needs.
          </motion.p>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default FAQSection;
