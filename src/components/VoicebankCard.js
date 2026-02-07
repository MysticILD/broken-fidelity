import React from 'react';
import { motion } from 'framer-motion';
import './VoicebankCard.css';

const VoicebankCard = ({ voicebank, singerColor }) => {
  const recordingTypeColor = {
    'CV': 'var(--primary)',
    'CVVC': 'var(--secondary)',
    'other': '#F59E0B'
  };

  const languageColor = {
    'English': '#3B82F6',
    'Japanese': '#EF4444',
    'Chinese': 'var(--secondary)',
    'Korean': 'var(--primary)',
    'Spanish': '#F59E0B'
  };

  const getLanguageColor = (lang) => languageColor[lang] || '#6B7280';

  return (
    <motion.div 
      className="voicebank-card glass"
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <div className="voicebank-header">
        <h3 className="voicebank-name">{voicebank.name}</h3>
        <div className="voicebank-tags">
          <span 
            className="voicebank-tag language-tag"
            style={{ backgroundColor: getLanguageColor(voicebank.language) + '20', color: getLanguageColor(voicebank.language) }}
          >
            {voicebank.language}
          </span>
          <span 
            className="voicebank-tag recording-tag"
            style={{ backgroundColor: recordingTypeColor[voicebank.recordingType] + '20', color: recordingTypeColor[voicebank.recordingType] }}
          >
            {voicebank.recordingType}
          </span>
        </div>
      </div>

      <p className="voicebank-description">{voicebank.description}</p>

      <div className="voicebank-details">
        <div className="detail-item">
          <span className="detail-label">Size</span>
          <span className="detail-value">{voicebank.size}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Version</span>
          <span className="detail-value">{voicebank.version}</span>
        </div>
      </div>

      <div className="voicebank-actions">
        <a 
          href={voicebank.downloadLink} 
          className="download-btn"
          style={{ '--singer-color': singerColor }}
          target="_blank" 
          rel="noopener noreferrer"
        >
          Download Voicebank
        </a>
        {voicebank.termsOfUse && (
          <a 
            href={voicebank.termsOfUse} 
            className="terms-btn"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Terms of Use
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default VoicebankCard;