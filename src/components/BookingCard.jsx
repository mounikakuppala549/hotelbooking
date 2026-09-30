import React, { useState, useRef, useEffect } from 'react';
import { Star, ChevronDown, ChevronUp, Flag, Sparkles, CheckCircle2 } from 'lucide-react';
import '../styles/BookingCard.css';

export default function BookingCard({ listing, onScrollToReviews }) {
  // Booking state
  const [checkInDate, setCheckInDate] = useState('2026-10-12');
  const [checkOutDate, setCheckOutDate] = useState('2026-10-17');
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [isGuestPickerOpen, setIsGuestPickerOpen] = useState(false);
  const [isReservedModalOpen, setIsReservedModalOpen] = useState(false);

  // Guest counts
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  const guestPickerRef = useRef(null);
  const datePickerRef = useRef(null);

  // Close popovers on click outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (guestPickerRef.current && !guestPickerRef.current.contains(e.target)) {
        setIsGuestPickerOpen(false);
      }
      if (datePickerRef.current && !datePickerRef.current.contains(e.target)) {
        setIsDatePickerOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Compute nights
  const start = new Date(checkInDate);
  const end = new Date(checkOutDate);
  const diffTime = Math.max(1, end.getTime() - start.getTime());
  const nights = Math.max(1, Math.round(diffTime / (1000 * 60 * 60 * 24)));

  const totalGuests = adults + children;
  const maxGuests = 3;

  // Pricing calculations
  const baseRate = listing.pricing.basePricePerNight;
  const baseTotal = baseRate * nights;
  const hasWeeklyDiscount = nights >= 7;
  const weeklyDiscount = hasWeeklyDiscount
    ? Math.round(baseTotal * (listing.pricing.weeklyDiscountPercent / 100))
    : 0;
  const cleaningFee = listing.pricing.cleaningFee;
  const serviceFee = listing.pricing.serviceFee;
  const grandTotal = baseTotal - weeklyDiscount + cleaningFee + serviceFee;

  const formatCurrency = (val) => '₹' + val.toLocaleString('en-IN');

  const guestLabel = () => {
    let str = `${totalGuests} guest${totalGuests > 1 ? 's' : ''}`;
    if (infants > 0) {
      str += `, ${infants} infant${infants > 1 ? 's' : ''}`;
    }
    return str;
  };

  const handleReserve = () => {
    setIsReservedModalOpen(true);
  };

  return (
    <aside className="booking-card" aria-label="Reservation widget">
      <div className="booking-card__container">
        {/* Header: Price & Rating */}
        <div className="booking-card__header">
          <div className="booking-card__price-wrapper">
            <span className="booking-card__price">{formatCurrency(baseRate)}</span>
            <span className="booking-card__period"> / night</span>
            <span className="booking-card__original-price">
              {formatCurrency(listing.pricing.originalPricePerNight)}
            </span>
          </div>

          <div
            className="booking-card__rating-badge"
            onClick={onScrollToReviews}
            role="button"
            tabIndex={0}
          >
            <Star size={13} fill="#222222" color="#222222" />
            <span className="booking-card__rating-score">{listing.rating}</span>
            <span className="booking-card__rating-dot">·</span>
            <span className="booking-card__reviews-count">{listing.reviewCount} reviews</span>
          </div>
        </div>

        {/* Inputs Box */}
        <div className="booking-card__inputs-box">
          {/* Dates Row */}
          <div
            className="booking-card__dates-row"
            ref={datePickerRef}
            onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}
          >
            <div className="booking-card__date-col booking-card__date-col--left">
              <label className="booking-card__label">CHECK-IN</label>
              <div className="booking-card__date-val">
                {new Date(checkInDate).toLocaleDateString('en-GB', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric'
                })}
              </div>
            </div>

            <div className="booking-card__date-col">
              <label className="booking-card__label">CHECKOUT</label>
              <div className="booking-card__date-val">
                {new Date(checkOutDate).toLocaleDateString('en-GB', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric'
                })}
              </div>
            </div>

            {/* Date Picker Popover */}
            {isDatePickerOpen && (
              <div
                className="booking-card__date-popover"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="booking-card__popover-title">Select dates</div>
                <div className="booking-card__date-inputs">
                  <div className="booking-card__date-field">
                    <label>Check-in</label>
                    <input
                      type="date"
                      value={checkInDate}
                      min="2026-10-01"
                      onChange={(e) => {
                        setCheckInDate(e.target.value);
                        if (new Date(e.target.value) >= new Date(checkOutDate)) {
                          const nextDay = new Date(e.target.value);
                          nextDay.setDate(nextDay.getDate() + 2);
                          setCheckOutDate(nextDay.toISOString().split('T')[0]);
                        }
                      }}
                    />
                  </div>
                  <div className="booking-card__date-field">
                    <label>Checkout</label>
                    <input
                      type="date"
                      value={checkOutDate}
                      min={checkInDate}
                      onChange={(e) => setCheckOutDate(e.target.value)}
                    />
                  </div>
                </div>
                <div className="booking-card__popover-footer">
                  <button
                    className="booking-card__popover-close-btn"
                    onClick={() => setIsDatePickerOpen(false)}
                  >
                    Done
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Guests Row */}
          <div
            className="booking-card__guests-row"
            ref={guestPickerRef}
            onClick={() => setIsGuestPickerOpen(!isGuestPickerOpen)}
          >
            <div className="booking-card__guests-text">
              <label className="booking-card__label">GUESTS</label>
              <div className="booking-card__guest-val">{guestLabel()}</div>
            </div>
            {isGuestPickerOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}

            {/* Guest Selector Dropdown */}
            {isGuestPickerOpen && (
              <div
                className="booking-card__guest-popover"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Adults */}
                <div className="guest-row">
                  <div className="guest-row__info">
                    <div className="guest-row__name">Adults</div>
                    <div className="guest-row__sub">Age 13+</div>
                  </div>
                  <div className="guest-row__counter">
                    <button
                      className="counter-btn"
                      disabled={adults <= 1}
                      onClick={() => setAdults(adults - 1)}
                      aria-label="Decrease adults"
                    >
                      –
                    </button>
                    <span className="counter-val">{adults}</span>
                    <button
                      className="counter-btn"
                      disabled={totalGuests >= maxGuests}
                      onClick={() => setAdults(adults + 1)}
                      aria-label="Increase adults"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Children */}
                <div className="guest-row">
                  <div className="guest-row__info">
                    <div className="guest-row__name">Children</div>
                    <div className="guest-row__sub">Ages 2–12</div>
                  </div>
                  <div className="guest-row__counter">
                    <button
                      className="counter-btn"
                      disabled={children <= 0}
                      onClick={() => setChildren(children - 1)}
                      aria-label="Decrease children"
                    >
                      –
                    </button>
                    <span className="counter-val">{children}</span>
                    <button
                      className="counter-btn"
                      disabled={totalGuests >= maxGuests}
                      onClick={() => setChildren(children + 1)}
                      aria-label="Increase children"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Infants */}
                <div className="guest-row">
                  <div className="guest-row__info">
                    <div className="guest-row__name">Infants</div>
                    <div className="guest-row__sub">Under 2</div>
                  </div>
                  <div className="guest-row__counter">
                    <button
                      className="counter-btn"
                      disabled={infants <= 0}
                      onClick={() => setInfants(infants - 1)}
                      aria-label="Decrease infants"
                    >
                      –
                    </button>
                    <span className="counter-val">{infants}</span>
                    <button
                      className="counter-btn"
                      disabled={infants >= 2}
                      onClick={() => setInfants(infants + 1)}
                      aria-label="Increase infants"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="guest-popover__note">
                  This place has a maximum of {maxGuests} guests, not including infants.
                </div>

                <div className="guest-popover__footer">
                  <button
                    className="guest-popover__close-btn"
                    onClick={() => setIsGuestPickerOpen(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Reserve Action Button */}
        <button className="booking-card__reserve-btn" onClick={handleReserve}>
          Reserve
        </button>

        <p className="booking-card__charged-note">You won’t be charged yet</p>

        {/* Price Breakdown */}
        <div className="booking-card__breakdown">
          <div className="breakdown-row">
            <span className="breakdown-row__label">
              {formatCurrency(baseRate)} × {nights} {nights === 1 ? 'night' : 'nights'}
            </span>
            <span className="breakdown-row__value">{formatCurrency(baseTotal)}</span>
          </div>

          {hasWeeklyDiscount && (
            <div className="breakdown-row breakdown-row--discount">
              <span className="breakdown-row__label">Weekly stay discount (10%)</span>
              <span className="breakdown-row__value">-{formatCurrency(weeklyDiscount)}</span>
            </div>
          )}

          <div className="breakdown-row">
            <span className="breakdown-row__label">Cleaning fee</span>
            <span className="breakdown-row__value">{formatCurrency(cleaningFee)}</span>
          </div>

          <div className="breakdown-row">
            <span className="breakdown-row__label">Airbnb service fee</span>
            <span className="breakdown-row__value">{formatCurrency(serviceFee)}</span>
          </div>

          <div className="booking-card__divider" />

          <div className="breakdown-row breakdown-row--total">
            <span className="breakdown-row__total-label">Total before taxes</span>
            <span className="breakdown-row__total-value">{formatCurrency(grandTotal)}</span>
          </div>
        </div>
      </div>

      {/* Rare find / Diamond highlight */}
      <div className="booking-card__rare-find">
        <Sparkles size={18} color="#D70466" />
        <div>
          <span className="rare-find__bold">Rare find.</span> Mirashya's place on Airbnb is
          usually fully booked.
        </div>
      </div>

      {/* Report Listing */}
      <button className="booking-card__report-link">
        <Flag size={14} />
        <span>Report this listing</span>
      </button>

      {/* Reservation Confirmation Modal */}
      {isReservedModalOpen && (
        <div className="booking-modal-overlay" onClick={() => setIsReservedModalOpen(false)}>
          <div className="booking-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="booking-modal-icon">
              <CheckCircle2 size={48} color="#008A05" />
            </div>
            <h3 className="booking-modal-title">Reservation Request Sent!</h3>
            <p className="booking-modal-text">
              Your dates for <strong>{nights} nights</strong> ({checkInDate} to {checkOutDate}) for{' '}
              <strong>{guestLabel()}</strong> have been held with Mirashya Homes.
            </p>
            <div className="booking-modal-summary">
              <div>Total: <strong>{formatCurrency(grandTotal)}</strong></div>
              <div>Free cancellation for 48 hours</div>
            </div>
            <button
              className="booking-modal-btn"
              onClick={() => setIsReservedModalOpen(false)}
            >
              Great, got it!
            </button>
          </div>
        </div>
      )}
    </aside>
  );
}
