import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Equipo from './pages/Equipo';
import Rpa from './pages/Rpa';
import Mapas from './pages/Mapas';
import Desafios from './pages/Desafios';
import DesafioDetalle from './pages/DesafioDetalle';
import Tpi from './pages/Tpi';
import Actividades from './pages/Actividades';
import TestsLiderazgo from './pages/TestsLiderazgo';
import InvestigacionGerencia from './pages/InvestigacionGerencia';

// Componente para scroll al tope en cada cambio de ruta
function ScrollRestoration() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

function AppRoutes() {
  return (
    <>
      <ScrollRestoration />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/equipo" element={<Equipo />} />
          <Route path="/rpa" element={<Rpa />} />
          <Route path="/mapas" element={<Mapas />} />
          <Route path="/desafios" element={<Desafios />} />
          <Route path="/desafios/:id" element={<DesafioDetalle />} />
          <Route path="/tpi" element={<Tpi />} />
          <Route path="/actividades" element={<Actividades />} />
          <Route path="/actividades/tests-liderazgo" element={<TestsLiderazgo />} />
          <Route path="/actividades/investigacion-gerencia" element={<InvestigacionGerencia />} />
          {/* Fallback — redirige al home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
