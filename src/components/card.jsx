import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ websiteUrl }) => {
  const handleClick = () => {
    window.open(websiteUrl, '_blank');
  };

  // Extract domain from URL for display
  const getDomain = (url) => {
    try {
      const domain = new URL(url).hostname;
      return domain.startsWith('www.') ? domain.substring(4) : domain;
    } catch {
      return url;
    }
  };

  return (
    <div 
      className="card-container"
      onClick={handleClick}
      style={{
        cursor: 'pointer',
        maxWidth: '300px',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.2s ease-in-out',
        margin: '1rem',
        backgroundColor: '#fff',
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      <div style={{ 
        position: 'relative', 
        paddingTop: '56.25%',
        backgroundColor: '#f5f5f5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          color: '#666'
        }}>
          <span style={{ fontSize: '3rem' }}>🌐</span>
          <p style={{ margin: '0.5rem 0 0 0' }}>{getDomain(websiteUrl)}</p>
        </div>
      </div>
      <div style={{ padding: '1rem' }}>
        <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.2rem' }}>{getDomain(websiteUrl)}</h3>
        <p style={{ margin: 0, color: '#666', fontSize: '0.9rem', wordBreak: 'break-all' }}>{websiteUrl}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  websiteUrl: PropTypes.string.isRequired,
};

export default Card;
