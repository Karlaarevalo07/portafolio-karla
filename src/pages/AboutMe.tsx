import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <div className="space-y-6">
      <SectionTitle>Sobre Mí</SectionTitle>

      <Card>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col md:flex-row gap-6 items-center"
        >
          <img
            src="/src/assets/profile.jpg"
            alt="Foto de perfil"
            className="w-36 h-36 rounded-full object-cover shadow-md border"
          />
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-gray-800">
              ¡Hola! Soy Karla Waleska Rodríguez Arévalo
            </h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Soy estudiante de Ingeniería en Sistemas en la Universidad Mariano
              Gálvez de Guatemala. Me apasiona el desarrollo Web, el
              diseño de interfaces limpias y funcionales, así como la creación
              de proyectos que integren bases de datos, React, Node.js y
              TypeScript.
            </p>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Este portafolio académico reúne mis actividades, proyectos y
              glosario de términos que reflejan mi aprendizaje y evolución en
              el campo del desarrollo de software.
            </p>
          </div>
        </motion.div>
      </Card>

      <Card title="Intereses y Habilidades">
        <ul className="list-disc list-inside text-sm md:text-base text-gray-700 space-y-1">
          <li>Desarrollo Frontend con React, TypeScript y TailwindCSS</li>
          <li>Diseño de bases de datos con Oracle, SQL Server y MySQL</li>
          <li>Diseño UI/UX y prototipado en Figma</li>
          <li>Automatización con Node.js y Express</li>
          <li>Trabajo colaborativo en GitHub y despliegue en Vercel/Netlify</li>
        </ul>
      </Card>

      <Card title="Contacto">
        <p className="text-sm md:text-base">
          📧 <strong>Correo:</strong> krodrigueza7@miumg.edu.gt
        </p>
        <p className="text-sm md:text-base">
          🌐 <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/Karlaarevalo07"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            Karlaarevalo07
          </a>
        </p>
        <p className="text-sm md:text-base">
          🎓 <strong>Universidad:</strong> Universidad Mariano Gálvez de Guatemala
        </p>
      </Card>
    </div>
  );
}
