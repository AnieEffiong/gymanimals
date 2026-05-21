import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <HashRouter future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    }}>
      <div id="app-root-wrapper-v9x2k4m1" className="min-h-screen overflow-x-hidden">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}