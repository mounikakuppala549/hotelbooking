import React, { useState } from 'react';
import { Star, Award, Share, Heart, Check } from 'lucide-react';
import '../styles/PropertyHeader.css';

export default function PropertyHeader({
  listing,
  isSaved,
  onToggleSave,
  onScrollToReviews,
  onScrollToLocation
}) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(window.location.href);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section className="property-header">
      <h1 className="property-header__title">{listing.title}</h1>

      <div className="property-header__meta">
        <div className="property-header__left">
          <div className="property-header__rating" onClick={onScrollToReviews} role="button" tabIndex={0}>
            <Star size={14} fill="#222222" color="#222222" />
            <span className="property-header__score">{listing.rating}</span>
            <span className="property-header__dot">·</span>
            <span className="property-header__reviews-link">{listing.reviewCount} reviews</span>
          </div>

          {listing.isGuestFavourite && (
            <>
              <span className="property-header__dot">·</span>
              <div className="property-header__badge">
                <Award size={14} color="#D70466" />
                <span>Guest favourite</span>
              </div>
            </>
          )}

          <span className="property-header__dot">·</span>
          <button
            className="property-header__location-link"
            onClick={onScrollToLocation}
          >
            {listing.locationSummary}
          </button>
        </div>

        <div className="property-header__right">
          {/* Share Button with Toast */}
          <button
            className="property-header__action-btn"
            onClick={handleShare}
            aria-label="Share listing"
          >
            {copied ? (
              <>
                <Check size={16} color="#008A05" />
                <span className="property-header__action-text" style={{ color: '#008A05' }}>Link copied!</span>
              </>
            ) : (
              <>
                <Share size={16} />
                <span className="property-header__action-text">Share</span>
              </>
            )}
          </button>

          {/* Save / Wishlist Button */}
          <button
            className={`property-header__action-btn ${isSaved ? 'property-header__action-btn--saved' : ''}`}
            onClick={onToggleSave}
            aria-label={isSaved ? 'Remove from wishlist' : 'Save to wishlist'}
          >
            <Heart
              size={16}
              fill={isSaved ? '#FF385C' : 'transparent'}
              color={isSaved ? '#FF385C' : '#222222'}
              className={isSaved ? 'heart-bounce' : ''}
            />
            <span className="property-header__action-text">{isSaved ? 'Saved' : 'Save'}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
