import { useState } from 'react'

export default function useSidebar() {
  // Open by default on desktop (>=768px), closed on mobile
  const isDesktop = typeof window !== 'undefined' ? window.innerWidth >= 768 : true
  const [open, setOpen] = useState<boolean>(isDesktop)
  const toggle = () => setOpen(v => !v)
  return { open, toggle }
}
