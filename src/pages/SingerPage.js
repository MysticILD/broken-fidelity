import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { singers } from '../data/singers';
import VoicebankCard from '../components/VoicebankCard';
import './SingerPage.css';

const SingerPage = () => {
  const { singerId } = useParams();
  const singer = singers.find(s => s.id === parseInt(singerId));

  if (!singer) {
    return (
      <div className="singer-not-found">
        <h2>Singer not found</h2>
        <Link to="/" className="back-link">Return to Home</Link>
      </div>
    );
  }

  const imageUrl = '/images/' + encodeURIComponent(singer.portrait);

  return (
    <div className="singer-page">
      {/* Navigation similar to main page */}
      <nav className="navbar glass">
        <div className="nav-content">
          <Link to="/" className="nav-logo gradient-text">Broken Fidelity</Link>
           <div className="nav-links">
             <Link to="/">Home</Link>
             <a href="#voices">Voices</a>
             <a href="#about">About</a>
           </div>
        </div>
      </nav>

      <main className="container singer-main">
        <div className="singer-layout">
          <motion.div 
            className="singer-left-col"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Link to="/" className="back-link">
              ← Back to all singers
            </Link>
            
            <div className="singer-portrait-wrapper">
              <div 
                className="singer-portrait-modern"
                style={{ 
                  backgroundImage: `url('${imageUrl}')`,
                  backgroundColor: '#1a1a1a',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center top'
                }}
              >
              </div>
              <div className="status-badge-modern">
                <span className={`status-dot ${singer.status.toLowerCase().replace(' ', '-')}`}></span>
                {singer.status}
              </div>
            </div>

            <div className="singer-features-modern">
              {singer.features.map((feature, i) => (
                <span key={i} className="feature-tag-modern">{feature}</span>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="singer-right-col"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="singer-meta">
              <h1 className="singer-page-name">{singer.name}</h1>
              <p className="singer-page-title">{singer.title}</p>
              <div className="divider"></div>
              <p className="singer-page-description">{singer.description}</p>
            </div>

            <section className="voicebanks-section-modern">
              <div className="section-header-small">
                <h2 className="section-title-small">Available Voicebanks</h2>
              </div>

              <div className="voicebanks-list">
                {singer.voicebanks.map((voicebank, index) => (
                  <motion.div
                    key={voicebank.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                  >
                    <VoicebankCard 
                      voicebank={voicebank} 
                      singerColor={singer.color}
                    />
                  </motion.div>
                ))}
              </div>
            </section>
          </motion.div>
        </div>
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
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
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

export default SingerPage;