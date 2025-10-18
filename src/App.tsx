import { Routes, Route } from 'react-router-dom'
import DashboardLayout from './layout/DashboardLayout'
import Home from './pages/Home'
import Glossary from './pages/Glossary'
import Tasks from './pages/Tasks'
import AboutMe from "./pages/AboutMe";
import Certifications from "./pages/Certifications";


export default function App() {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/glosario" element={<Glossary />} />
        <Route path="/tareas" element={<Tasks />} />
        <Route path="/sobre-mi" element={<AboutMe />} />  
        <Route path="/certificaciones" element={<Certifications />} />  
      </Routes>
    </DashboardLayout>
  );
}