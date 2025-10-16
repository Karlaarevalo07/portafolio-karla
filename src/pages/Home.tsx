import SectionTitle from '../components/SectionTitle'
import Card from '../components/Card'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Home() {
  return (
    <div className="space-y-6">
      <SectionTitle>Bienvenido(a)</SectionTitle>

      <Card title="Introducción">
          <p className="text-sm md:text-base leading-relaxed text-gray-700">
          Este portafolio académico resume mis actividades, glosario de conceptos,
          y tareas desarrolladas durante el curso. Usa la navegación para explorar.
        </p>
      </Card>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
        <Card title="Glosario" className="w-full">
          <p className="text-gray-700 mb-2">Conceptos clave organizados por letra.</p>
          <Link to="/glosario" className="text-indigo-600 hover:text-indigo-700 hover:underline text-sm">
            Ir al glosario →
          </Link>
        </Card>

        <Card title="Tareas / Actividades" className="w-full">
          <p className="text-gray-700 mb-2">Listado de actividades con diseño responsivo.</p>
          <Link to="/tareas" className="text-indigo-600 hover:text-indigo-700 hover:underline text-sm">
            Ver tareas →
          </Link>
        </Card>

        <Card title="Estado (ejemplo)" className="w-full">
          <Counter />
        </Card>
      </div>
    </div>
  )
}



function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div className="flex items-center gap-3">
      <button
        className="px-3 py-1 rounded-lg border hover:bg-gray-50"
        onClick={() => setCount(c => c - 1)}
      >
        -
      </button>
      <span className="font-mono">{count}</span>
      <button
        className="px-3 py-1 rounded-lg border hover:bg-gray-50"
        onClick={() => setCount(c => c + 1)}
      >
        +
      </button>
    </div>
  )
}
