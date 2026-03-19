import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ServicesHub from './pages/ServicesHub';
import ServicePage from './pages/ServicePage';
import ZonesHub from './pages/ZonesHub';
import ZonePage from './pages/ZonePage';
import Tarifs from './pages/Tarifs';
import APropos from './pages/APropos';
import Contact from './pages/Contact';
import MentionsLegales from './pages/MentionsLegales';
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite';
import Cookies from './pages/Cookies';
import PlanDuSite from './pages/PlanDuSite';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="services" element={<ServicesHub />} />
          <Route path="services/:slug" element={<ServicePage />} />
          <Route path="zones-intervention" element={<ZonesHub />} />
          <Route path="zones-intervention/:slug" element={<ZonePage />} />
          <Route path="tarifs" element={<Tarifs />} />
          <Route path="a-propos" element={<APropos />} />
          <Route path="contact" element={<Contact />} />
          <Route path="mentions-legales" element={<MentionsLegales />} />
          <Route path="politique-confidentialite" element={<PolitiqueConfidentialite />} />
          <Route path="cookies" element={<Cookies />} />
          <Route path="plan-du-site" element={<PlanDuSite />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
