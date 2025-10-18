import SectionTitle from '../components/SectionTitle'
import { glossary } from '../data/glossary'
import { motion } from 'framer-motion'

export default function Glossary() {
  const letters = Object.keys(glossary)

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={containerVariants}
      className="space-y-8 pb-8"
    >
      <SectionTitle>Glosario</SectionTitle>

      <div className="flex flex-wrap gap-3 justify-center bg-[#112240] p-4 rounded-lg shadow-lg">
        {letters.map(l => (
          <motion.a
            key={l}
            href={`#sec-${l}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 flex items-center justify-center bg-[#0a192f] text-red-400 font-semibold rounded-lg hover:bg-red-400 hover:text-[#0a192f] transition-colors duration-300"
          >
            {l}
          </motion.a>
        ))}
      </div>

      <motion.div variants={containerVariants} className="space-y-12">
        {letters.map(letter => (
          <motion.section
            key={letter}
            variants={itemVariants}
            id={`sec-${letter}`}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-red-400 border-b border-red-400/30 pb-2">
              {letter}
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {glossary[letter].map(item => (
                <motion.div
                  key={item.term}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="bg-[#112240] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <h4 className="text-lg font-semibold text-white mb-2">{item.term}</h4>
                  <p className="text-gray-400 leading-relaxed">{item.def}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        ))}
      </motion.div>
    </motion.div>
  )
}
