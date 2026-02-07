import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './SingerCard.css';

const SingerCard = ({ singer }) => {
  const imageUrl = `${process.env.PUBLIC_URL}/images/${encodeURIComponent(singer.portrait)}`;
  return (
    <motion.div 
      className="singer-card glass"
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <div className="singer-art-container">
        <div 
          className="singer-art-placeholder" 
          style={{ 
            backgroundImage: `url('${imageUrl}')`,
            backgroundColor: '#1a1a1a',
            backgroundSize: 'cover',
            backgroundPosition: 'center top'
          }}
        >
        </div>
        <div className="status-overlay">
          <span className={`status-dot ${singer.status.toLowerCase().replace(' ', '-')}`}></span>
          {singer.status}
        </div>
      </div>

      <div className="singer-info-new">
        <h3 className="singer-name-new">{singer.name}</h3>
        <p className="singer-title-new">{singer.title}</p>
        
        <div className="singer-tags-new">
          {singer.features.slice(0, 2).map((feature, i) => (
            <span key={i} className="singer-tag-new">{feature}</span>
          ))}
        </div>

        <Link to={`/singer/${singer.id}`} className="view-profile-btn" style={{ '--hover-color': singer.color }}>
          View Voicebank
        </Link>
      </div>
    </motion.div>
  );
};

export default SingerCard;