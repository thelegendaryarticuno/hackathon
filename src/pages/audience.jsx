import React, { useState, useRef, useEffect } from 'react';
import Card from '../components/card';

const Audience = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [websites, setWebsites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [upvotes, setUpvotes] = useState({});
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const [swipeDirection, setSwipeDirection] = useState(null);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await fetch('https://apihackorate.sinusoid.in/api/teams/getallteams');
        if (!response.ok) {
          throw new Error('Failed to fetch teams');
        }
        const data = await response.json();
        
        // Filter teams that have a non-null LiveWebsiteUrl
        const validTeams = data.filter(team => 
          team.LiveWebsiteUrl != null
        ).map(team => ({
          url: team.LiveWebsiteUrl,
          teamName: team.TeamName,
          id: team.TeamId,
          upvotes: team.Upvote || 0
        }));

        setWebsites(validTeams);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching teams:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchTeams();
  }, []);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    setSwipeDirection(null);
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
    const currentSwipe = touchStartX.current - e.touches[0].clientX;
    if (Math.abs(currentSwipe) > 20) {
      setSwipeDirection(currentSwipe > 0 ? 'left' : 'right');
    }
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (Math.abs(swipeDistance) > minSwipeDistance) {
      if (swipeDistance > 0 && currentIndex < websites.length - 1) {
        setCurrentIndex(prev => prev + 1);
      } else if (swipeDistance < 0 && currentIndex > 0) {
        setCurrentIndex(prev => prev - 1);
      }
    }
    setSwipeDirection(null);
  };

  const handleUpvote = async (teamId) => {
    try {
      const response = await fetch(`https://apihackorate.sinusoid.in/api/teams/upvote/${teamId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to update upvote');
      }

      setWebsites(prevWebsites =>
        prevWebsites.map(website =>
          website.id === teamId
            ? { ...website, upvotes: (website.upvotes || 0) + 1 }
            : website
        )
      );

      setUpvotes(prev => ({
        ...prev,
        [teamId]: true
      }));

    } catch (error) {
      console.error('Error updating upvote:', error);
    }
  };

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
      }}>
        <div style={{
          textAlign: 'center',
          padding: '2rem',
        }}>
          <div style={{
            width: '50px',
            height: '50px',
            border: '5px solid #f3f3f3',
            borderTop: '5px solid #007bff',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto',
          }} />
          <p style={{ marginTop: '1rem', color: '#666' }}>Loading websites...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
      }}>
        <div style={{
          textAlign: 'center',
          padding: '2rem',
          color: '#dc3545',
        }}>
          <p>Error: {error}</p>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              marginTop: '1rem',
            }}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (websites.length === 0) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
      }}>
        <p style={{ color: '#666' }}>No websites available</p>
      </div>
    );
  }

  return (
    <>
      <style>
        {`
          @keyframes slideLeft {
            from { transform: translateX(0); }
            to { transform: translateX(-10px); }
          }
          
          @keyframes slideRight {
            from { transform: translateX(0); }
            to { transform: translateX(10px); }
          }

          .swipe-left {
            animation: slideLeft 0.3s ease-out forwards;
          }

          .swipe-right {
            animation: slideRight 0.3s ease-out forwards;
          }

          @media (min-width: 768px) {
            .mobile-view {
              display: none !important;
            }
            .desktop-view {
              display: grid !important;
            }
          }
          @media (max-width: 767px) {
            .desktop-view {
              display: none !important;
            }
            .mobile-view {
              display: block !important;
            }
          }
        `}
      </style>
      <div style={{
        minHeight: '100vh',
        padding: '2rem',
        paddingTop: '6rem',
        backgroundColor: '#000510',
        background: 'radial-gradient(ellipse at top, rgba(59, 130, 246, 0.2) 0%, transparent 50%, transparent 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '500px',
          height: '500px',
          backgroundColor: 'rgba(59, 130, 246, 0.3)',
          borderRadius: '50%',
          filter: 'blur(100px)',
          zIndex: 0,
        }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          {/* Mobile View */}
          <div className="mobile-view">
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '400px',
                margin: '0 auto 2rem',
              }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div className={swipeDirection ? `swipe-${swipeDirection}` : ''}>
                <Card
                  websiteUrl={websites[currentIndex]?.url}
                  teamId={websites[currentIndex]?.id}
                />
              </div>

              {/* Navigation Indicators */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                position: 'absolute',
                top: '50%',
                left: '-20px',
                right: '-20px',
                transform: 'translateY(-50%)',
                pointerEvents: 'none',
              }}>
                {currentIndex > 0 && (
                  <div style={{
                    color: '#007bff',
                    fontSize: '24px',
                    opacity: swipeDirection === 'right' ? 1 : 0.3,
                    transition: 'opacity 0.3s ease',
                  }}>
                    ←
                  </div>
                )}
                {currentIndex < websites.length - 1 && (
                  <div style={{
                    color: '#007bff',
                    fontSize: '24px',
                    opacity: swipeDirection === 'left' ? 1 : 0.3,
                    transition: 'opacity 0.3s ease',
                  }}>
                    →
                  </div>
                )}
              </div>

              {/* Navigation Dots */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '1rem',
                gap: '0.5rem',
              }}>
                {websites.map((_, index) => (
                  <div
                    key={index}
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: index === currentIndex ? '#007bff' : '#ccc',
                      transition: 'background-color 0.3s ease',
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Team Name */}
            <h3 style={{
              margin: '0 0 1rem 0',
              color: '#fff',
              textAlign: 'center',
            }}>
              {websites[currentIndex]?.teamName}
            </h3>

            {/* Upvote Button */}
            <div style={{ textAlign: 'center' }}>
              <button
                onClick={() => handleUpvote(websites[currentIndex]?.id)}
                disabled={upvotes[websites[currentIndex]?.id]}
                style={{
                  padding: '0.75rem 1.5rem',
                  fontSize: '1rem',
                  backgroundColor: upvotes[websites[currentIndex]?.id] ? '#ccc' : '#6822d0',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: upvotes[websites[currentIndex]?.id] ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  margin: '0 auto',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.2s ease',
                  opacity: upvotes[websites[currentIndex]?.id] ? 0.7 : 1,
                }}
                onMouseDown={(e) => !upvotes[websites[currentIndex]?.id] && (e.currentTarget.style.transform = 'scale(0.95)')}
                onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <span>↑</span>
                {upvotes[websites[currentIndex]?.id] ? 'Upvoted' : 'Upvote'} ({websites[currentIndex]?.upvotes || 0})
              </button>
            </div>

            {/* Swipe Instructions for Mobile */}
            <p style={{
              marginTop: '2rem',
              color: '#666',
              fontSize: '0.9rem',
              textAlign: 'center',
            }}>
              Swipe left or right to view more websites
            </p>
          </div>

          {/* Desktop/Tablet Grid View */}
          <div className="desktop-view" style={{
            display: 'none',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '2rem',
            maxWidth: '1200px',
            margin: '0 auto',
            marginTop: '2rem',
          }}>
            {websites.map((website) => (
              <div key={website.id} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem',
              }}>
                <Card 
                  websiteUrl={website.url} 
                  teamId={website.id}
                />
                <h3 style={{
                  margin: 0,
                  color: '#fff',
                  textAlign: 'center',
                }}>
                  {website.teamName}
                </h3>
                <button
                  onClick={() => handleUpvote(website.id)}
                  disabled={upvotes[website.id]}
                  style={{
                    padding: '0.75rem 1.5rem',
                    fontSize: '1rem',
                    backgroundColor: upvotes[website.id] ? '#ccc' : '#6822d0',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: upvotes[website.id] ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    transition: 'transform 0.2s ease',
                    opacity: upvotes[website.id] ? 0.7 : 1,
                  }}
                  onMouseDown={(e) => !upvotes[website.id] && (e.currentTarget.style.transform = 'scale(0.95)')}
                  onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <span>↑</span>
                  {upvotes[website.id] ? 'Upvoted' : 'Upvote'} ({website.upvotes || 0})
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Audience;
