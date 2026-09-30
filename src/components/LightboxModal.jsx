import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/LightboxModal.css';

export default function LightboxModal({
  photos,
  currentIndex,
  isOpen,
  onClose,
  onNavigate
}) {
  const total = photos.length;
  const currentPhoto = photos[currentIndex] || photos[0];

  const handlePrev = useCallback(() => {
    const nextIdx = (currentIndex - 1 + total) % total;
    onNavigate(nextIdx);
  }, [currentIndex, total, onNavigate]);

  const handleNext = useCallback(() => {
    const nextIdx = (currentIndex + 1) % total;
    onNavigate(nextIdx);
  }, [currentIndex, total, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || !currentPhoto) return null;

  return (
    <div
      className="lightbox-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
    >
      {/* Top Header Bar */}
      <div className="lightbox-header">
        <button
          className="lightbox-close-btn"
          onClick={onClose}
          aria-label="Close photo lightbox"
        >
          <X size={20} />
          <span>Close</span>
        </button>

        <div className="lightbox-counter">
          <span>{currentIndex + 1} / {total}</span>
          <span className="lightbox-category-tag">{currentPhoto.category}</span>
        </div>

        <div className="lightbox-spacer" />
      </div>

      {/* Main Image Display with Side Navigation Buttons */}
      <div className="lightbox-main">
        {/* Previous Button */}
        <button
          className="lightbox-nav-btn lightbox-nav-btn--prev"
          onClick={handlePrev}
          aria-label="Previous photo (Left arrow)"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Active Photo Container */}
        <div className="lightbox-image-stage">
          <img
            key={currentPhoto.id || currentIndex}
            src={currentPhoto.url}
            alt={currentPhoto.caption}
            className="lightbox-image"
          />
        </div>

        {/* Next Button */}
        <button
          className="lightbox-nav-btn lightbox-nav-btn--next"
          onClick={handleNext}
          aria-label="Next photo (Right arrow)"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Bottom Caption Bar */}
      <div className="lightbox-footer">
        <p className="lightbox-caption">{currentPhoto.caption}</p>
      </div>
    </div>
  );
}
