import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Import components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Programs from './components/Programs';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Team from './components/Team';
import Footer from './components/Footer';
import SocialMediaWidget from './components/SocialMediaWidget';

function App() {
  const { i18n } = useTranslation();

  console.log('🎓 KelceTS Business School App loaded, language:', i18n.language);

  return (
    <Router>
      <div className="App" dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <Features />
              <Programs />
              <About />
              <Testimonials />
              <Contact />
              <Team />
            </main>
          } />
        </Routes>
        <Footer />
        <SocialMediaWidget />
      </div>
    </Router>
  );
}

export default App;
