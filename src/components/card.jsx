import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const Card = ({ websiteUrl, teamId }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollDirection, setScrollDirection] = useState('down');
  const [upvoted, setUpvoted] = useState(false);
  const iframeRef = useRef(null);

  const handleClick = () => {
    window.open(websiteUrl, '_blank');
  };

  const handleUpvote = async (e) => {
    e.stopPropagation(); // Prevent card click when upvoting

    try {
      const response = await fetch('https://apihackorate.sinusoid.in/api/teams/increment-upvote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ teamId }),
      });

      if (response.ok) {
        setUpvoted(true);
      } else {
        console.error('Failed to upvote');
      }
    } catch (error) {
      console.error('Error upvoting:', error);
    }
  };

  // Auto scroll effect
  useEffect(() => {
    let animationFrameId;
    const scrollSpeed = 0.5; // Reduced speed for smoother scrolling

    const animate = () => {
      if (iframeRef.current) {
        const iframe = iframeRef.current;
        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        const maxScroll = iframeDoc.documentElement.scrollHeight - iframe.clientHeight;

        if (scrollDirection === 'down') {
          iframe.contentWindow.scrollBy(0, scrollSpeed);
          if (iframe.contentWindow.pageYOffset >= maxScroll) {
            setScrollDirection('up');
          }
        } else {
          iframe.contentWindow.scrollBy(0, -scrollSpeed);
          if (iframe.contentWindow.pageYOffset <= 0) {
            setScrollDirection('down');
          }
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    if (!isLoading) {
      animationFrameId = requestAnimationFrame(animate);
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isLoading, scrollDirection]);

  // Inject custom scrollbar styles when iframe loads
  const handleIframeLoad = () => {
    setIsLoading(false);
    const iframe = iframeRef.current;
    if (iframe) {
      const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
      const style = iframeDoc.createElement('style');
      style.textContent = `
        ::-webkit-scrollbar {
          width: 2px;
        }
        ::-webkit-scrollbar-track {
          background: #0a0a1f;
        }
        ::-webkit-scrollbar-thumb {
          background: #6822d0;
          border-radius: 9999px;
        }
      `;
      iframeDoc.head.appendChild(style);
    }
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
      className="card-container [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-[#0a0a1f] [&::-webkit-scrollbar-thumb]:bg-[#6822d0] [&::-webkit-scrollbar-thumb]:rounded-full"
      onClick={handleClick}
      style={{
        cursor: 'pointer',
        maxWidth: '400px',
        minHeight: '500px',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.2s ease-in-out, opacity 0.3s ease-in-out',
        margin: '1rem',
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        opacity: isLoading ? 0.7 : 1,
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      <div style={{
        position: 'relative',
        flex: '1',
        paddingTop: '75%',
        backgroundColor: '#f5f5f5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <iframe
          ref={iframeRef}
          src={websiteUrl}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 'none',
          }}
          title="Website Preview"
          loading="lazy"
          onLoad={handleIframeLoad}
        />
        {isLoading && (
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            color: '#666'
          }}>
            <span style={{ fontSize: '3rem' }}>🌐</span>
            <p style={{ margin: '0.5rem 0 0 0' }}>Loading preview...</p>
          </div>
        )}
      </div>
      <div style={{ padding: '1.5rem' }}>
        <h3 style={{ margin: '0 0 0.75rem 0', fontSize: '1.4rem' }}>{getDomain(websiteUrl)}</h3>
        <p style={{ margin: '0 0 1rem 0', color: '#666', fontSize: '1rem', wordBreak: 'break-all' }}>{websiteUrl}</p>
        <button
          onClick={handleUpvote}
          disabled={upvoted}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: upvoted ? '#ccc' : '#6822d0',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: upvoted ? 'not-allowed' : 'pointer',
            width: '100%',
            transition: 'background-color 0.2s ease'
          }}
        >
          {upvoted ? 'Upvoted!' : 'Upvote'}
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  websiteUrl: PropTypes.string.isRequired,
  teamId: PropTypes.string.isRequired
};

export default Card;
