import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CostaAmbulancias from "./pages/CostaAmbulancias";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importe o CSS do AOS
import { useEffect } from "react";

export default function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duração das animações
      once: true, // Animações ocorrem apenas uma vez
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/ambulancias" element={<CostaAmbulancias />} />
      </Routes>
    </Router>
  );
}