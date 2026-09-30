import React from 'react';
import { Award, Key, Sparkles, Wifi, Waves, Star } from 'lucide-react';
import '../styles/Highlights.css';

export default function Highlights({ listing }) {
  const iconMap = {
    Award: <Award size={24} strokeWidth={1.8} />,
    Key: <Key size={24} strokeWidth={1.8} />,
    Sparkles: <Sparkles size={24} strokeWidth={1.8} />,
    Wifi: <Wifi size={24} strokeWidth={1.8} />,
    Waves: <Waves size={24} strokeWidth={1.8} />
  };

  return (
    <section className="highlights">
      {/* Property & Host Header */}
      <div className="highlights__header">
        <div className="highlights__title-area">
          <h2 className="highlights__type">{listing.type}</h2>
          <p className="highlights__specs">{listing.specs}</p>
        </div>

        <div className="highlights__host-badge">
          <img
            src={listing.host.avatar}
            alt={listing.host.name}
            className="highlights__host-avatar"
          />
          {listing.host.isSuperhost && (
            <div className="highlights__superhost-tag" title="Superhost">
              <Award size={12} color="#ffffff" />
            </div>
          )}
        </div>
      </div>

      <div className="divider" />

      {/* Guest Favourite Grand Banner */}
      {listing.isGuestFavourite && (
        <div className="highlights__favourite-banner">
          <div className="favourite-banner__side favourite-banner__side--left">
            <span className="favourite-banner__leaves">🌿</span>
            <div className="favourite-banner__title">Guest favourite</div>
            <span className="favourite-banner__leaves">🌿</span>
          </div>

          <div className="favourite-banner__desc">
            One of the most loved homes on Airbnb, according to guests
          </div>

          <div className="favourite-banner__side favourite-banner__side--right">
            <div className="favourite-banner__rating">
              <span className="favourite-banner__score">{listing.rating}</span>
              <div className="favourite-banner__stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={11} fill="#222222" color="#222222" />
                ))}
              </div>
            </div>
            <div className="favourite-banner__reviews-count">
              <span className="count-number">{listing.reviewCount}</span>
              <span className="count-label">Reviews</span>
            </div>
          </div>
        </div>
      )}

      <div className="divider" />

      {/* Highlight Features List */}
      <div className="highlights__list">
        {listing.highlights.map((item) => (
          <div key={item.id} className="highlight-item">
            <div className="highlight-item__icon">
              {iconMap[item.icon] || <Sparkles size={24} />}
            </div>
            <div className="highlight-item__content">
              <h3 className="highlight-item__title">{item.title}</h3>
              <p className="highlight-item__desc">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
