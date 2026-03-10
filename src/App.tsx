import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';
import Bundle from './pages/Bundle';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-luxe-black flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collections" element={<Shop />} />
            <Route path="/bestsellers" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/bundle" element={<Bundle />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
