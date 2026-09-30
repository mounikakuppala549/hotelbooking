import React from 'react';
import { LayoutGrid } from 'lucide-react';
import '../styles/HeroGrid.css';

export default function HeroGrid({ photos, onOpenPhotoTour, onOpenLightbox }) {
  // Use first 5 photos for the hero grid
  const heroPhotos = photos.slice(0, 5);

  return (
    <section className="hero-grid" aria-label="Photo gallery preview">
      <div className="hero-grid__layout">
        {/* Main Large Photo (Left) */}
        <div
          className="hero-grid__item hero-grid__item--main"
          onClick={() => onOpenLightbox(0)}
          role="button"
          tabIndex={0}
          aria-label={`View photo 1: ${heroPhotos[0]?.caption}`}
        >
          <img
            src={heroPhotos[0]?.url}
            alt={heroPhotos[0]?.caption || 'Living room'}
            className="hero-grid__image"
            loading="eager"
          />
          <div className="hero-grid__overlay" />
        </div>

        {/* 2x2 Secondary Photos (Right) */}
        <div className="hero-grid__subgrid">
          {heroPhotos.slice(1, 5).map((photo, index) => {
            const actualIndex = index + 1;
            const isLast = actualIndex === 4;

            return (
              <div
                key={photo.id || actualIndex}
                className={`hero-grid__item hero-grid__item--sub hero-grid__item--pos-${actualIndex}`}
                onClick={() => onOpenLightbox(actualIndex)}
                role="button"
                tabIndex={0}
                aria-label={`View photo ${actualIndex + 1}: ${photo.caption}`}
              >
                <img
                  src={photo.url}
                  alt={photo.caption || `Property photo ${actualIndex + 1}`}
                  className="hero-grid__image"
                  loading="lazy"
                />
                <div className="hero-grid__overlay" />

                {/* Floating "Show all photos" button on the 5th photo */}
                {isLast && (
                  <button
                    className="hero-grid__show-all-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenPhotoTour();
                    }}
                    aria-label="Show all photos"
                  >
                    <LayoutGrid size={15} strokeWidth={2.2} />
                    <span>Show all photos</span>
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
