import type { ReactNode } from 'react'
import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'

type Props = { children: ReactNode }

export default function DashboardLayout({ children }: Props) {
  return (
    <div className="min-h-screen bg-[#0a192f]">
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-8"
      >
        {children}
      </motion.div>
    </div>
  );
}
