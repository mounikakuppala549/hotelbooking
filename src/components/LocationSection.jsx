import React from 'react';
import { MapPin, Navigation, Compass, Waves } from 'lucide-react';
import '../styles/LocationSection.css';

export default function LocationSection({ neighborhood, fullAddress }) {
  return (
    <section className="location-section" id="location" aria-label="Location information">
      <h2 className="section-heading">Where you'll be</h2>
      <p className="location-section__address">{fullAddress}</p>

      {/* Styled Interactive Map Canvas */}
      <div className="location-map">
        <div className="location-map__water">
          <Waves size={16} /> Arabian Sea
        </div>

        <div className="location-map__coastline" />

        {/* Pulse Pin for Mirashya UG10 */}
        <div className="location-pin-wrapper">
          <div className="location-pin-pulse" />
          <div className="location-pin">
            <div className="location-pin__home-icon">
              <MapPin size={22} fill="#FF385C" color="#FFFFFF" />
            </div>
            <div className="location-pin__tooltip">
              <strong>Botanica Candolim</strong>
              <span>Mirashya UG10</span>
            </div>
          </div>
        </div>

        {/* Nearby Reference Points */}
        <div className="map-badge map-badge--beach">
          <Navigation size={12} /> Candolim Beach (1.8 km)
        </div>
        <div className="map-badge map-badge--aguada">
          <Compass size={12} /> Fort Aguada (3.5 km)
        </div>

        <div className="location-map__controls">
          <button className="map-ctrl-btn" aria-label="Zoom in">+</button>
          <button className="map-ctrl-btn" aria-label="Zoom out">−</button>
        </div>
      </div>

      {/* Neighborhood Description */}
      <div className="location-section__info">
        <h3 className="location-info__subtitle">Candolim, Goa, India</h3>
        <p className="location-info__text">{neighborhood.description}</p>

        <div className="location-landmarks">
          <h4 className="landmarks-title">Getting around:</h4>
          <div className="landmarks-grid">
            {neighborhood.pointsOfInterest.map((item, idx) => (
              <div key={idx} className="landmark-item">
                <MapPin size={16} className="landmark-item__icon" />
                <span className="landmark-item__name">{item.name}</span>
                <span className="landmark-item__dist">{item.distance}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
