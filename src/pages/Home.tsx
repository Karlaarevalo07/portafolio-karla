import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Fondo con imagen de montañas y overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/src/assets/mountains.jpg)'
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(10, 25, 47, 0.9)' }} />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo UMG */}
          <motion.div
            initial={{ scale: 0, opacity: 0, rotate: -180 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="mb-12"
          >
            <div className="relative inline-block">
              <div className="absolute -inset-2 bg-gradient-to-r from-red-500 to-blue-500 rounded-full opacity-75 blur-lg"></div>
              <img
                src="/imagenes/umg1.jpg"
                alt="Logo Universidad Mariano Gálvez de Guatemala"
                className="relative w-48 h-48 mx-auto"
              />
            </div>
          </motion.div>

          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-5xl font-bold mb-4 text-red-400">
              Portafolio De Tareas
            </h1>
            <h2 className="text-xl text-gray-300 mb-2">
              Karla Waleska Rodríguez Arévalo
            </h2>
            <p className="text-blue-400 font-medium mb-8">
              Ingeniería en Sistemas - Universidad Mariano Gálvez de Guatemala
            </p>
          </motion.div>

          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              to="/sobre-mi"
              className="px-8 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              Sobre Mí
            </Link>
            
            <Link
              to="/Tareas"
              className="px-8 py-3 bg-[#112240] text-white rounded-lg hover:bg-[#1a2f55] transition-colors"
            >
              Tareas
            </Link>
            <Link
              to="/certificaciones"
              className="px-8 py-3 bg-[#112240] text-white rounded-lg hover:bg-[#1a2f55] transition-colors"
            >
              Certificaciones
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
