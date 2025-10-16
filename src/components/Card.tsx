import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

type Props = { title?: string; children: ReactNode; className?: string }

export default function Card({ title, children, className = '' }: Props) {
  return (
    <motion.div
      initial={{ y: 8, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.2 }}
      className={`rounded-2xl border bg-white p-4 md:p-6 shadow-sm text-gray-800 ${className}`}
    >
      {title && <h3 className="text-lg font-semibold mb-2 text-gray-900">{title}</h3>}
      <div className="text-gray-700">{children}</div>
    </motion.div>
  )
}
