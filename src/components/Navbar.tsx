import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="h-16 border-b border-[#233554] bg-[#0a192f] sticky top-0 z-50">
      <div className="h-full container mx-auto flex items-center justify-between px-6">
        <Link to="/" className="font-bold tracking-tight text-xl text-red-400 hover:text-red-300 transition-colors">
          Portafolio De Tareas
        </Link>

        <nav className="flex items-center gap-8 text-sm">
          <NavLink 
            to="/" 
            className={({isActive}) => 
              `text-gray-300 hover:text-red-400 transition-colors ${isActive ? 'text-red-400' : ''}`
            }
          >
            Inicio
          </NavLink>
          <NavLink 
            to="/sobre-mi" 
            className={({isActive}) => 
              `text-gray-300 hover:text-red-400 transition-colors ${isActive ? 'text-red-400' : ''}`
            }
          >
            Sobre Mí
          </NavLink>
          
          <NavLink 
            to="/tareas" 
            className={({isActive}) => 
              `text-gray-300 hover:text-red-400 transition-colors ${isActive ? 'text-red-400' : ''}`
            }
          >
            Tareas
          </NavLink>
          <NavLink 
            to="/certificaciones" 
            className={({isActive}) => 
              `text-gray-300 hover:text-red-400 transition-colors ${isActive ? 'text-red-400' : ''}`
            }
          >
            Certificaciones
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
