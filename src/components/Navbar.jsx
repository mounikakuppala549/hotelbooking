import React, { useState, useRef, useEffect } from 'react';
import { Search, Globe, Menu, User, Heart } from 'lucide-react';
import '../styles/Navbar.css';

export default function Navbar({ onLogoClick, savedCount = 0 }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="navbar">
      <div className="container-wide navbar__inner">
        {/* Brand Logo */}
        <div className="navbar__brand" onClick={onLogoClick} role="button" tabIndex={0}>
          <svg className="navbar__logo-icon" viewBox="0 0 32 32" aria-hidden="true">
            <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 3.072.696 4.373-.323 1.96-1.636 3.518-3.528 4.183-1.023.36-2.188.423-3.447.186-1.921-.362-3.868-1.572-5.75-3.575l-.5-.536-.5.536c-1.882 2.003-3.829 3.213-5.75 3.575-1.259.237-2.424.174-3.447-.186-1.892-.665-3.205-2.223-3.528-4.183-.214-1.301.029-2.782.696-4.373l.145-.353c.986-2.296 5.146-11.006 7.1-14.836l.533-1.025C12.537 1.963 13.992 1 16 1zm0 2c-1.242 0-2.274.636-3.284 2.435l-.527 1.014c-1.93 3.784-6.07 12.45-7.039 14.708l-.134.327c-.553 1.32-.738 2.494-.572 3.504.225 1.365 1.135 2.443 2.45 2.905.748.263 1.62.297 2.584.115 1.587-.299 3.266-1.396 4.955-3.238l1.567-1.706 1.567 1.706c1.689 1.842 3.368 2.939 4.955 3.238.964.182 1.836.148 2.584-.115 1.315-.462 2.225-1.54 2.45-2.905.166-1.01-.019-2.184-.572-3.504l-.134-.327c-.969-2.258-5.109-10.924-7.039-14.708l-.527-1.014C18.274 3.636 17.242 3 16 3zm0 10.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z" fill="#FF385C" />
          </svg>
          <span className="navbar__brand-text">airbnb</span>
        </div>

        {/* Compact Search Bar */}
        <div className="navbar__search-pill" role="button" tabIndex={0}>
          <button className="navbar__search-btn navbar__search-btn--bold">Candolim, Goa</button>
          <span className="navbar__search-separator" />
          <button className="navbar__search-btn">Any week</button>
          <span className="navbar__search-separator" />
          <button className="navbar__search-btn navbar__search-btn--light">Add guests</button>
          <div className="navbar__search-icon-wrapper" aria-label="Search">
            <Search size={14} strokeWidth={2.5} color="#FFFFFF" />
          </div>
        </div>

        {/* User Navigation Pill & Dropdown */}
        <div className="navbar__actions">
          <button className="navbar__action-link">Airbnb your home</button>
          <button className="navbar__icon-button" aria-label="Language & currency">
            <Globe size={18} />
          </button>

          <div className="navbar__user-menu-container" ref={menuRef}>
            <button
              className={`navbar__user-pill ${isMenuOpen ? 'navbar__user-pill--active' : ''}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="User navigation menu"
            >
              <Menu size={18} strokeWidth={2} />
              <div className="navbar__avatar">
                <User size={16} color="#717171" />
              </div>
              {savedCount > 0 && (
                <span className="navbar__wishlist-badge" title={`${savedCount} saved`}>
                  <Heart size={10} fill="#FF385C" color="#FF385C" />
                </span>
              )}
            </button>

            {isMenuOpen && (
              <div className="navbar__dropdown" role="menu">
                <div className="navbar__dropdown-section">
                  <div className="navbar__dropdown-item navbar__dropdown-item--bold" role="menuitem">
                    Sign up
                  </div>
                  <div className="navbar__dropdown-item" role="menuitem">
                    Log in
                  </div>
                </div>
                <div className="navbar__dropdown-divider" />
                <div className="navbar__dropdown-section">
                  <div className="navbar__dropdown-item" role="menuitem">
                    Airbnb your home
                  </div>
                  <div className="navbar__dropdown-item" role="menuitem">
                    Help Centre
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
