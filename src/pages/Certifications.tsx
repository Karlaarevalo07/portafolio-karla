
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

export default function Certifications() {
  const certificates = [
    {
      title: "Bibliotecas de Desarrollo Front-End",
      issuer: "freeCodeCamp",
      date: "3 de octubre de 2025",
      image: "/imagenes/freecodecamp-cert.png",
      url: "https://www.freecodecamp.org/certification/fcc-947b208e-e0d2-4c92-b4c7-9488d0fa817f/front-end-development-libraries",
      hours: "300 horas de trabajo"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a192f] text-white py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <div>
            <h2 className="text-red-400 text-lg mb-2">Educación Continua</h2>
            <h1 className="text-4xl font-bold mb-4 text-white">Mis Certificaciones</h1>
            <p className="text-gray-400 max-w-2xl">
              Certificaciones obtenidas a través de plataformas educativas reconocidas,
              demostrando mi compromiso con el aprendizaje continuo.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-1 max-w-4xl mx-auto">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-[#112240] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-[#233554]"
              >
                <div className="relative">
                  <img
                    src={cert.image}
                    alt={`Certificado de ${cert.title}`}
                    className="w-full object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#112240] to-transparent opacity-20"></div>
                </div>

                <div className="p-8 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-red-400">
                      {cert.title}
                    </h3>
                    <p className="text-gray-300">
                      Emitido por <span className="font-medium text-white">{cert.issuer}</span>
                    </p>
                    <p className="text-gray-400 text-sm">
                      {cert.date} · {cert.hours}
                    </p>
                  </div>

                  <div className="pt-4">
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full gap-2 bg-red-500 hover:bg-red-600 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 group"
                    >
                      <span>Ver Certificado</span>
                      <FiExternalLink className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
