'use client';
import { motion } from 'framer-motion';

const ChangelogEntry = ({ date, features }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="mb-16 border-b border-gray-800/50 pb-16 last:border-0"
  >
    <motion.h2 
      className="text-2xl font-medium text-white mb-8"
    >
      {date}
    </motion.h2>
    <div className="space-y-8">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="space-y-3"
        >
          <div className="flex items-center gap-3">
            <span className="text-xl">{feature.icon}</span>
            <h3 className="text-xl text-white">{feature.title}</h3>
            {feature.tag && (
              <span className="px-2 py-1 text-xs font-medium text-emerald-400 bg-emerald-400/10 rounded-full">
                {feature.tag}
              </span>
            )}
          </div>
          <p className="text-gray-400 leading-relaxed pl-9">
            {feature.description}
          </p>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const WhatsNew = () => {
  const changelog = [
    {
      date: "April 27, 2025",
      features: [
        {
          icon: "🔧",
          title: "Redesigned My Notes",
          tag: "New Features",
          description: "We have completely redesigned the My Notes sidebar for mobile and desktop. On mobile we no longer have separate sidebars for notes and main navigation. Instead we have now have a unified sidebar that includes both! Simpler, cleaner and more intuitive."
        },
        {
          icon: "✏️",
          title: "Rename notes",
          description: "You can now rename your notes by using the new note actions (...) menu when hovering over a note in the My Notes sidebar. Once you rename a note, it will no longer use the first sentence of the note as the title when editing."
        }
      ]
    },
    {
      date: "April 12, 2025",
      features: [
        {
          icon: "🎨",
          title: "Text colours",
          tag: "New Features",
          description: "Changing your text colour is here! Pick from a range of colours to bring your notes to life. Optimised for both light and dark mode."
        },
        {
          icon: "🌈",
          title: "Highlight colours",
          description: "Make your important text stand out with our new highlight colours feature. Perfect for emphasizing key points in your notes."
        }
      ]
    }
  ];

  return (
    <div className="relative bg-[#1c1c1c] min-h-screen">
      {/* Background Glow Effect */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-20">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-medium text-white mb-6">
            What's New
          </h1>
          <p className="text-gray-400 text-lg">
            Stay up to date with the latest features and improvements to WeiBlocks Prompt Generator.
          </p>
        </motion.div>

        {/* Changelog Entries */}
        <div className="space-y-16">
          {changelog.map((entry, index) => (
            <ChangelogEntry
              key={index}
              date={entry.date}
              features={entry.features}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhatsNew;