import { motion } from 'framer-motion'
import { FiExternalLink, FiDownload, FiBookOpen } from 'react-icons/fi'

const tasks = [
  {
    title: 'FORMULARIO',
    desc: 'Creaciòn de Formulario.',
    tags: ['React', 'Fetch', 'Forms'],
    github: 'https://github.com/Karlaarevalo07/formulario-karla.git',
    deploy: 'https://formulario-karla.vercel.app/',
    image: '/imagenes/Formulario.jpg'
  },
  {
    title: 'DISEÑO RESPONSIVO',
    desc: 'Construcción de componentes Card y SectionTitle con diseño responsivo.',
    tags: ['React', 'UI', 'TailwindCSS'],
    github: 'https://github.com/Karlaarevalo07/diseno-karla.git',
    deploy: 'https://lively-sfogliatella-8fc36a.netlify.app/',
    image: '/imagenes/responsivo.jpg'
  },
  {
    title: 'GLOSARIO DE TERMINOS',
    desc: 'Desarrollo de un glosario de términos',
    tags: ['React', 'Framer Motion', 'TailwindCSS', 'TypeScript'],
    image: '/imagenes/glosario.jpg',
    type: 'pdf',
    pdfUrl: '/docs/TAREA 1 KARLA DESARROLLO WEB.pdf'
  },
  {
    title: 'INVESTIGACIÓN',
    desc: 'Investigación de Hooks',
    tags: ['React', 'Hooks', 'JavaScript'],
    image: '/imagenes/investigacion.jpg',
    type: 'pdf',
    pdfUrl: '/docs/Desarrollo Web Karla.pdf'
  }
]

export default function Tasks() {
  return (
    <div className="min-h-screen bg-[#0a192f] text-white py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-red-400 text-lg mb-2">Portafolio</h2>
          <h1 className="text-4xl font-bold mb-12">Mis Proyectos</h1>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tasks.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#112240] rounded-lg overflow-hidden border border-[#233554] hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="h-48 bg-gray-800 relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-red-400">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="text-xs px-3 py-1 rounded-full bg-[#233554] text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.type === 'pdf' || project.title === 'GLOSARIO DE TERMINOS' ? (
                      <>
                        <a
                          href={project.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                        >
                          <FiBookOpen />
                          Abrir PDF
                        </a>
                        <a
                          href={project.pdfUrl}
                          download
                          className="flex items-center gap-2 px-4 py-2 bg-[#233554] text-white rounded hover:bg-[#2a3f63] transition-colors"
                        >
                          <FiDownload />
                          Descargar PDF
                        </a>
                      </>
                    ) : (
                      <>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                        >
                          <FiExternalLink />
                          GitHub
                        </a>
                        <a
                          href={project.deploy}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-[#233554] text-white rounded hover:bg-[#2a3f63] transition-colors"
                        >
                          <FiExternalLink />
                          Demo
                        </a>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
