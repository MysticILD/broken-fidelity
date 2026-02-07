import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SingerCard from '../components/SingerCard';
import { singers } from '../data/singers';
import '../App.css';

const HomePage = () => {
  return (
    <div className="App">
      <nav className="navbar glass">
        <div className="nav-content">
          <Link to="/" className="nav-logo gradient-text">Broken Fidelity</Link>
           <div className="nav-links">
             <a href="#voices">Voices</a>
             <a href="#about">About</a>
           </div>
        </div>
      </nav>

      <header className="hero">
        <div className="hero-background">
          <div className="grid-overlay"></div>
          <div className="glow glow-purple"></div>
          <div className="glow glow-green"></div>
        </div>
        
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="hero-tag">Virtual Singer Collection</div>
          <h2 className="hero-title">
            The future of <br />
            <span className="gradient-text">synthetic voices.</span>
          </h2>
          <p className="hero-subtitle">
            Exploring the aesthetic potential of digital imperfection through a unique collection of virtual UTAU singers.
          </p>
           <div className="hero-btns">
             <a href="#voices" className="btn btn-primary">Browse Singers</a>
           </div>
        </motion.div>
      </header>

      <main className="container">
        <section id="voices" className="section">
          <div className="section-header">
            <span className="sub-header">Featured Singers</span>
            <h2 className="section-title">The Voices</h2>
          </div>
          
          <div className="singers-grid">
            {singers.map((singer, index) => (
              <motion.div
                key={singer.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <SingerCard singer={singer} />
              </motion.div>
            ))}
          </div>
        </section>



         <section id="about" className="section">
           <div className="about-grid">
             <motion.div 
               className="about-card glass"
               initial={{ opacity: 0, x: 0 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
             >
               <h3 className="card-title">About UTAU</h3>
               <p className="card-text">
                 UTAU is a free, community-driven singing synthesizer application for Windows. 
                 Like Vocaloid, it allows users to create synthetic singing voices by inputting melody and lyrics. 
                 The Broken Fidelity Project creates voicebanks specifically for this platform.
               </p>
               <div className="card-links">
                 <a href="https://www.openutau.com/" target="_blank" rel="noopener noreferrer" className="text-link">Visit OpenUTAU →</a>
               </div>
             </motion.div>
           </div>
         </section>


      </main>

      <footer className="footer glass">
        <div className="footer-content">
          <div className="footer-brand">
             <Link to="/" className="nav-logo gradient-text">Broken Fidelity</Link>
             <p>A celebration of digital imperfection and synthetic voices.</p>
          </div>
           <div className="footer-links-container">
            <div className="footer-group">
               <h4>Project</h4>
               <a href="#voices">Voices</a>
               <a href="#about">About</a>
            </div>
            <div className="footer-group">
               <h4>Social</h4>
               <a href="https://www.tiktok.com/@myfi_utau" target="_blank" rel="noopener noreferrer">TikTok</a>
               <a href="https://discord.gg/Ab3RYEDXCX" target="_blank" rel="noopener noreferrer">Discord</a>
            </div>
           </div>
        </div>
        <div className="footer-bottom">
           <p>© {new Date().getFullYear()} Broken Fidelity Project. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;