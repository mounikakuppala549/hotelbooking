import React, { useState, useEffect } from 'react';
import { ArrowLeft, Share, Heart, Check } from 'lucide-react';
import '../styles/PhotoTourModal.css';

export default function PhotoTourModal({
  photos,
  isOpen,
  onClose,
  onOpenLightbox,
  isSaved,
  onToggleSave
}) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [copied, setCopied] = useState(false);

  // Lock body scroll when photo tour is open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const categories = ['All', 'Living room', 'Bedroom', 'Balcony & Jacuzzi', 'Kitchen & Dining', 'Bathroom', 'Exterior & Pool'];

  const filteredPhotos =
    activeCategory === 'All'
      ? photos
      : photos.filter((p) => p.category === activeCategory);

  const handleShare = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(window.location.href);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      className="photo-tour-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Full-screen photo tour"
    >
      {/* Sticky Top Bar */}
      <header className="photo-tour-header">
        <button
          className="photo-tour-back-btn"
          onClick={onClose}
          aria-label="Back to listing"
        >
          <ArrowLeft size={20} />
        </button>

        <div className="photo-tour-header__actions">
          <button className="photo-tour-action-btn" onClick={handleShare}>
            {copied ? (
              <>
                <Check size={16} color="#008A05" />
                <span style={{ color: '#008A05' }}>Copied</span>
              </>
            ) : (
              <>
                <Share size={16} />
                <span>Share</span>
              </>
            )}
          </button>

          <button className="photo-tour-action-btn" onClick={onToggleSave}>
            <Heart
              size={16}
              fill={isSaved ? '#FF385C' : 'transparent'}
              color={isSaved ? '#FF385C' : '#222222'}
            />
            <span>{isSaved ? 'Saved' : 'Save'}</span>
          </button>
        </div>
      </header>

      {/* Filter Category Pills Bar */}
      <nav className="photo-tour-nav" aria-label="Photo categories">
        <div className="photo-tour-nav__inner">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`photo-tour-pill ${activeCategory === cat ? 'photo-tour-pill--active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
              {cat === 'All' && ` (${photos.length})`}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Gallery Scroll Area */}
      <main className="photo-tour-content">
        <div className="photo-tour-container">
          {activeCategory === 'All' ? (
            // Group by category when 'All' is selected
            categories.slice(1).map((categoryName) => {
              const groupPhotos = photos.filter((p) => p.category === categoryName);
              if (groupPhotos.length === 0) return null;

              return (
                <section key={categoryName} className="photo-tour-section">
                  <h2 className="photo-tour-section__title">{categoryName}</h2>
                  <div className="photo-tour-grid">
                    {groupPhotos.map((photo) => {
                      const globalIndex = photos.findIndex((p) => p.id === photo.id);
                      return (
                        <figure
                          key={photo.id}
                          className="photo-tour-card"
                          onClick={() => onOpenLightbox(globalIndex)}
                          role="button"
                          tabIndex={0}
                        >
                          <div className="photo-tour-card__img-wrap">
                            <img
                              src={photo.url}
                              alt={photo.caption}
                              className="photo-tour-card__img"
                              loading="lazy"
                            />
                            <div className="photo-tour-card__hover-shade" />
                          </div>
                          <figcaption className="photo-tour-card__caption">
                            {photo.caption}
                          </figcaption>
                        </figure>
                      );
                    })}
                  </div>
                </section>
              );
            })
          ) : (
            // Show single filtered category
            <section className="photo-tour-section">
              <h2 className="photo-tour-section__title">{activeCategory}</h2>
              <div className="photo-tour-grid">
                {filteredPhotos.map((photo) => {
                  const globalIndex = photos.findIndex((p) => p.id === photo.id);
                  return (
                    <figure
                      key={photo.id}
                      className="photo-tour-card"
                      onClick={() => onOpenLightbox(globalIndex)}
                      role="button"
                      tabIndex={0}
                    >
                      <div className="photo-tour-card__img-wrap">
                        <img
                          src={photo.url}
                          alt={photo.caption}
                          className="photo-tour-card__img"
                          loading="lazy"
                        />
                        <div className="photo-tour-card__hover-shade" />
                      </div>
                      <figcaption className="photo-tour-card__caption">
                        {photo.caption}
                      </figcaption>
                    </figure>
                  );
                })}
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  );
}
