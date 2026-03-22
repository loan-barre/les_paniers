import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { LanguageProvider } from './contexts/LanguageContext';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Reservation } from './pages/Reservation';
import { Catering } from './pages/Catering';
import { Contact } from './pages/Contact';
import { AdminLogin } from './pages/AdminLogin';
import { AdminDashboard } from './pages/AdminDashboard';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/gestion-interne-paniers" element={<AdminLogin />} />
          <Route path="/gestion-interne-paniers/dashboard" element={<AdminDashboard />} />

          <Route path="*" element={
            <div className="min-h-screen bg-paniers-cream">
              <AnnouncementBar />
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/reservation" element={<Reservation />} />
                <Route path="/catering" element={<Catering />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
              <Footer />
            </div>
          } />
        </Routes>
        <Analytics />
      </Router>
    </LanguageProvider>
  );
}

export default App;
