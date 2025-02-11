import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Health from "./pages/Health";
import Mourning from "./pages/Mourning";
import PlanoCosta from "./pages/PlanoCosta";
import PlanosBeneficios from "./pages/PlanoBeneficios"; // Importe a nova página
import CentroClinico from "./pages/CentroClinico";
import CostaAmbulancias from "./pages/CostaAmbulancias";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saude" element={<Health />} />
        <Route path="/luto" element={<Mourning />} />
        <Route path="/plano-costa" element={<PlanoCosta />} />
        <Route path="/planos-beneficios" element={<PlanosBeneficios />} />
        <Route path="/centro-clinico" element={<CentroClinico />} />
        <Route path="/ambulancias" element={<CostaAmbulancias />} />
      </Routes>
    </Router>
  );
}