import { Link, NavLink } from 'react-router-dom'
import { FiMenu } from 'react-icons/fi'

type Props = { onMenuClick?: () => void }

export default function Navbar({ onMenuClick }: Props) {
  return (
    <header className="h-16 border-b bg-white sticky top-0 z-50">
      <div className="h-full container mx-auto flex items-center justify-between px-3">
        <button
          onClick={onMenuClick}
          className="md:hidden p-2 rounded hover:bg-gray-100"
          aria-label="Abrir menú"
        >
          <FiMenu size={22} />
        </button>

        <Link to="/" className="font-semibold tracking-tight text-sm md:text-base">
          Portafolio Académico
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <NavLink to="/" className={({isActive}) => isActive ? 'font-semibold' : ''}>Inicio</NavLink>
          <NavLink to="/glosario" className={({isActive}) => isActive ? 'font-semibold' : ''}>Glosario</NavLink>
          <NavLink to="/tareas" className={({isActive}) => isActive ? 'font-semibold' : ''}>Tareas</NavLink>
        </nav>
      </div>
    </header>
  )
}
