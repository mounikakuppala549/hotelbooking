import React, { useState } from 'react';
import { Star, X } from 'lucide-react';
import '../styles/ReviewsSection.css';

export default function ReviewsSection({ listing }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    { label: 'Cleanliness', score: listing.ratingsBreakdown.cleanliness },
    { label: 'Accuracy', score: listing.ratingsBreakdown.accuracy },
    { label: 'Communication', score: listing.ratingsBreakdown.communication },
    { label: 'Location', score: listing.ratingsBreakdown.location },
    { label: 'Check-in', score: listing.ratingsBreakdown.checkIn },
    { label: 'Value', score: listing.ratingsBreakdown.value }
  ];

  return (
    <section className="reviews-section" id="reviews" aria-label="Customer reviews">
      {/* Title */}
      <div className="reviews-section__header">
        <Star size={20} fill="#222222" color="#222222" />
        <h2 className="reviews-section__title">
          {listing.rating} · {listing.reviewCount} reviews
        </h2>
      </div>

      {/* Ratings Categories 2-Column Grid */}
      <div className="reviews-section__ratings-grid">
        {categories.map((cat, idx) => (
          <div key={idx} className="rating-bar-row">
            <span className="rating-bar-row__label">{cat.label}</span>
            <div className="rating-bar-row__metric">
              <div className="rating-bar-track">
                <div
                  className="rating-bar-fill"
                  style={{ width: `${(cat.score / 5) * 100}%` }}
                />
              </div>
              <span className="rating-bar-row__score">{cat.score.toFixed(1)}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Reviews Cards 2-Column Grid */}
      <div className="reviews-section__cards-grid">
        {listing.reviews.map((rev) => (
          <article key={rev.id} className="review-card">
            <div className="review-card__user">
              <img
                src={rev.avatar}
                alt={rev.author}
                className="review-card__avatar"
                loading="lazy"
              />
              <div className="review-card__user-info">
                <h3 className="review-card__name">{rev.author}</h3>
                <div className="review-card__meta">
                  <span>{rev.location}</span>
                  <span className="meta-dot">·</span>
                  <span>{rev.date}</span>
                </div>
              </div>
            </div>

            <div className="review-card__stars">
              {[...Array(rev.rating)].map((_, i) => (
                <Star key={i} size={11} fill="#222222" color="#222222" />
              ))}
              <span className="review-card__stay">{rev.stayDetails}</span>
            </div>

            <p className="review-card__text">{rev.text}</p>
          </article>
        ))}
      </div>

      <button className="reviews-section__all-btn" onClick={() => setIsModalOpen(true)}>
        Show all {listing.reviewCount} reviews
      </button>

      {/* All Reviews Modal */}
      {isModalOpen && (
        <div className="reviews-modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div
            className="reviews-modal-content"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="reviews-modal-title"
          >
            <div className="reviews-modal-header">
              <button
                className="reviews-modal-close"
                onClick={() => setIsModalOpen(false)}
                aria-label="Close reviews modal"
              >
                <X size={20} />
              </button>
            </div>

            <div className="reviews-modal-body">
              <div className="reviews-modal-left">
                <div className="modal-rating-header">
                  <Star size={24} fill="#222222" color="#222222" />
                  <h2 id="reviews-modal-title" className="reviews-modal-title">
                    {listing.rating} · {listing.reviewCount} reviews
                  </h2>
                </div>

                <div className="reviews-modal-categories">
                  {categories.map((cat, idx) => (
                    <div key={idx} className="rating-bar-row">
                      <span className="rating-bar-row__label">{cat.label}</span>
                      <div className="rating-bar-row__metric">
                        <div className="rating-bar-track">
                          <div
                            className="rating-bar-fill"
                            style={{ width: `${(cat.score / 5) * 100}%` }}
                          />
                        </div>
                        <span className="rating-bar-row__score">{cat.score.toFixed(1)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="reviews-modal-right">
                <div className="reviews-modal-list">
                  {listing.reviews.map((rev) => (
                    <article key={`modal-${rev.id}`} className="review-card review-card--modal">
                      <div className="review-card__user">
                        <img src={rev.avatar} alt={rev.author} className="review-card__avatar" />
                        <div className="review-card__user-info">
                          <h3 className="review-card__name">{rev.author}</h3>
                          <div className="review-card__meta">
                            <span>{rev.location}</span>
                            <span className="meta-dot">·</span>
                            <span>{rev.date}</span>
                          </div>
                        </div>
                      </div>
                      <p className="review-card__text">{rev.text}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
