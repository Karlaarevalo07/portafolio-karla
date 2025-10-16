import type { ReactNode } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import useSidebar from '../hooks/useSidebar'
import { motion, AnimatePresence } from 'framer-motion'

type Props = { children: ReactNode }

export default function DashboardLayout({ children }: Props) {
  const { open, toggle } = useSidebar()

  return (
    <div className="min-h-screen">
      <Navbar onMenuClick={toggle} />
      <div className="grid grid-cols-1 md:grid-cols-[260px_1fr]">
        {/* Desktop sidebar (visible on md+) */}
        <aside className="hidden md:block border-r bg-white md:min-h-[calc(100vh-64px)]">
          <Sidebar />
        </aside>

        {/* Mobile overlay sidebar (appears when open) */}
        <AnimatePresence initial={false}>
          {open && (
            <>
              <motion.div
                key="backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                onClick={toggle}
                className="fixed inset-0 bg-black z-40 md:hidden"
              />

              <motion.aside
                key="mobile-sidebar"
                initial={{ x: -260 }}
                animate={{ x: 0 }}
                exit={{ x: -260 }}
                transition={{ duration: 0.2 }}
                className="fixed left-0 top-0 z-50 w-64 h-full bg-white md:hidden shadow-lg"
              >
                <Sidebar />
              </motion.aside>
            </>
          )}
        </AnimatePresence>

        <main className="p-4 md:p-6">
          <div className="container mx-auto max-w-6xl">{children}</div>
        </main>
      </div>
    </div>
  )
}
