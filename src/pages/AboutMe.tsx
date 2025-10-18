import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <div className="min-h-screen bg-[#0a192f] text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="mb-12">
            <h2 className="text-red-400 text-lg mb-2">Discover</h2>
            <h1 className="text-4xl md:text-5xl font-bold mb-8">About Me</h1>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-red-400 to-[#233554] rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <div className="relative">
                <img
                  src="/imagenes/profile-pic.jpg"
                  alt="Foto de perfil de Karla Waleska Rodríguez"
                  className="w-full h-[500px] object-cover rounded-lg shadow-2xl hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f]/50 to-transparent rounded-lg"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                Soy estudiante de Ingeniería en Sistemas en la Universidad Mariano Gálvez 
                de Guatemala. Me apasiona el desarrollo Web, el diseño de interfaces 
                limpias y funcionales, así como la creación de proyectos que integren 
                bases de datos, React, Node.js y TypeScript.
              </p>

              <div className="bg-[#112240] p-6 rounded-lg border border-[#233554]">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-red-400 mb-2">Nombre:</h3>
                    <p>Karla Waleska Rodríguez Arévalo</p>
                  </div>
                  <div>
                    <h3 className="text-red-400 mb-2">Universidad:</h3>
                    <p>UMG Guatemala</p>
                  </div>
                  <div>
                    <h3 className="text-red-400 mb-2">Email:</h3>
                    <p>krodrigueza7@miumg.edu.gt</p>
                  </div>
                  <div>
                    <h3 className="text-red-400 mb-2">GitHub:</h3>
                    <p>Karlaarevalo07</p>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
