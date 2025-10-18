import { NavLink } from 'react-router-dom'
import { FiHome } from "react-icons/fi";
import { FiUser } from "react-icons/fi"; 
import { FiAward } from "react-icons/fi";
import { FiList } from "react-icons/fi";

const item =
  'flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors'

export default function Sidebar() {
  return (
    <div className="p-3 md:p-4">
      <div className="space-y-1">
        <NavLink to="/" className={item}>
          <FiHome /> Inicio
        </NavLink>
        <NavLink to="/tareas" className={item}>
          <FiList /> Tareas
        </NavLink>
        <NavLink to="/sobre-mi" className={item}>
          <FiUser /> Sobre mí
        </NavLink>
        <NavLink to="/certificaciones" className={item}>
          <FiAward /> Certificaciones
        </NavLink>
      </div>
      

      <div className="mt-6 text-xs text-gray-500 px-4">
        © {new Date().getFullYear()} Tu Nombre
      </div>
    </div>
  )
}
