import React from 'react';
import { Globe, Heart } from 'lucide-react';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container-wide">
        {/* Navigation Columns */}
        <div className="footer__grid">
          <div className="footer__col">
            <h4 className="footer__col-title">Support</h4>
            <ul className="footer__links">
              <li><a href="#help">Help Centre</a></li>
              <li><a href="#aircover">AirCover</a></li>
              <li><a href="#anti-discrimination">Anti-discrimination</a></li>
              <li><a href="#disability">Disability support</a></li>
              <li><a href="#cancellation">Cancellation options</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Hosting</h4>
            <ul className="footer__links">
              <li><a href="#host">Airbnb your home</a></li>
              <li><a href="#aircover-hosts">AirCover for Hosts</a></li>
              <li><a href="#resources">Hosting resources</a></li>
              <li><a href="#community">Community forum</a></li>
              <li><a href="#responsible">Hosting responsibly</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Airbnb</h4>
            <ul className="footer__links">
              <li><a href="#newsroom">Newsroom</a></li>
              <li><a href="#features">New features</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#investors">Investors</a></li>
              <li><a href="#emergency">Airbnb.org emergency stays</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__divider" />

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <div className="footer__bottom-left">
            <span>© 2026 Airbnb, Inc.</span>
            <span>·</span>
            <a href="#privacy">Privacy</a>
            <span>·</span>
            <a href="#terms">Terms</a>
            <span>·</span>
            <a href="#sitemap">Sitemap</a>
            <span>·</span>
            <a href="#company">Company details</a>
          </div>

          <div className="footer__bottom-right">
            <button className="footer__meta-btn">
              <Globe size={16} />
              <span>English (IN)</span>
            </button>
            <button className="footer__meta-btn">
              <span>₹ INR</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
