import React, { useState } from 'react';
import { Award, Star, ShieldCheck, MessageSquare, Send, X } from 'lucide-react';
import '../styles/HostProfile.css';

export default function HostProfile({ host }) {
  const [isMessageOpen, setIsMessageOpen] = useState(false);
  const [messageText, setMessageText] = useState('');
  const [messageSent, setMessageSent] = useState(false);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!messageText.trim()) return;
    setMessageSent(true);
    setTimeout(() => {
      setMessageSent(false);
      setIsMessageOpen(false);
      setMessageText('');
    }, 2000);
  };

  return (
    <section className="host-section" aria-label="Host information">
      <div className="host-section__container">
        {/* Left: Host Identity Badge Card */}
        <div className="host-card">
          <div className="host-card__avatar-row">
            <div className="host-card__avatar-wrapper">
              <img src={host.avatar} alt={host.name} className="host-card__avatar" />
              {host.isSuperhost && (
                <div className="host-card__badge" title="Superhost">
                  <Award size={14} color="#ffffff" />
                </div>
              )}
            </div>
            <div>
              <h2 className="host-card__name">{host.name}</h2>
              <div className="host-card__status">
                <span>Superhost</span>
                <span className="dot">·</span>
                <span>{host.yearsHosting} years hosting</span>
              </div>
            </div>
          </div>

          <div className="host-card__stats-grid">
            <div className="host-stat">
              <div className="host-stat__val">{host.reviewsCount}</div>
              <div className="host-stat__label">Reviews</div>
            </div>
            <div className="host-stat host-stat--border">
              <div className="host-stat__val">
                {host.rating} <Star size={14} fill="#222222" color="#222222" />
              </div>
              <div className="host-stat__label">Rating</div>
            </div>
            <div className="host-stat">
              <div className="host-stat__val">{host.yearsHosting}</div>
              <div className="host-stat__label">Years hosting</div>
            </div>
          </div>
        </div>

        {/* Right: Host Details & Info */}
        <div className="host-details">
          <h3 className="host-details__heading">About the host</h3>
          <p className="host-details__bio">{host.bio}</p>

          <div className="host-details__info-list">
            <div className="host-info-item">
              <strong>Co-host:</strong> {host.coHost}
            </div>
            <div className="host-info-item">
              <strong>Response rate:</strong> {host.responseRate}%
            </div>
            <div className="host-info-item">
              <strong>Response time:</strong> {host.responseTime}
            </div>
          </div>

          <button className="host-details__contact-btn" onClick={() => setIsMessageOpen(true)}>
            <MessageSquare size={16} />
            <span>Message Host</span>
          </button>

          <div className="host-details__protection">
            <ShieldCheck size={28} color="#FF385C" className="protection-icon" />
            <p className="protection-text">
              To protect your payment, never transfer money or communicate outside of the Airbnb
              website or app.
            </p>
          </div>
        </div>
      </div>

      {/* Message Modal */}
      {isMessageOpen && (
        <div className="message-modal-overlay" onClick={() => setIsMessageOpen(false)}>
          <div className="message-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="message-modal-header">
              <button
                className="message-modal-close"
                onClick={() => setIsMessageOpen(false)}
                aria-label="Close message modal"
              >
                <X size={20} />
              </button>
              <h3 className="message-modal-title">Contact {host.name}</h3>
            </div>

            {messageSent ? (
              <div className="message-success">
                <ShieldCheck size={40} color="#008A05" />
                <h4>Message sent!</h4>
                <p>Mirashya Homes typically responds within an hour.</p>
              </div>
            ) : (
              <form onSubmit={handleSendMessage} className="message-form">
                <p className="message-form__prompt">
                  Ask about check-in details, jacuzzi instructions, or local Goa tips:
                </p>
                <textarea
                  className="message-textarea"
                  rows={4}
                  placeholder={`Hi ${host.name}, I have a question about...`}
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  required
                />
                <button type="submit" className="message-submit-btn">
                  <Send size={16} />
                  <span>Send message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
