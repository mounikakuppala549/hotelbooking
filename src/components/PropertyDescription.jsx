import React, { useState, useEffect } from 'react';
import { ChevronRight, X } from 'lucide-react';
import '../styles/PropertyDescription.css';

export default function PropertyDescription({ description }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
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
  }, [isOpen]);

  return (
    <section className="property-description">
      <h2 className="section-heading">About this space</h2>

      <p className="property-description__preview">{description.short}</p>

      <button className="property-description__more-btn" onClick={() => setIsOpen(true)}>
        <span>Show more</span>
        <ChevronRight size={18} />
      </button>

      {/* Full Description Modal */}
      {isOpen && (
        <div className="description-modal-overlay" onClick={() => setIsOpen(false)}>
          <div
            className="description-modal-content"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="desc-modal-title"
          >
            <div className="description-modal-header">
              <button
                className="description-modal-close"
                onClick={() => setIsOpen(false)}
                aria-label="Close description modal"
              >
                <X size={20} />
              </button>
            </div>

            <div className="description-modal-body">
              <h2 id="desc-modal-title" className="description-modal-title">
                About this space
              </h2>

              <div className="description-modal-paragraphs">
                {description.full.map((paragraph, index) => (
                  <p key={index} className="desc-paragraph">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
