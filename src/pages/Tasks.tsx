import SectionTitle from '../components/SectionTitle'
import Card from '../components/Card'

const tasks = [
  {
    title: 'Actividad 1: Diseño Responsivo',
    desc: 'Práctica de breakpoints, grid y flex con Tailwind.',
    tags: ['HTML', 'CSS', 'Tailwind'],
  },
  {
    title: 'Actividad 2: Consumo de API',
    desc: 'Fetch en React con manejo de estado básico.',
    tags: ['React', 'Fetch'],
  },
  {
    title: 'Actividad 3: Componentes Reutilizables',
    desc: 'Construcción de Card y SectionTitle.',
    tags: ['React', 'UI'],
  },
]

export default function Tasks() {
  return (
    <div className="space-y-6">
      <SectionTitle>Tareas / Actividades</SectionTitle>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tasks.map(t => (
          <Card key={t.title} title={t.title}>
            <p className="text-sm">{t.desc}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {t.tags.map(tag => (
                <span key={tag} className="text-xs px-2 py-1 rounded bg-gray-100 border">
                  {tag}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
