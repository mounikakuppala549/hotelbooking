import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/DatePickerCalendar.css';

export default function DatePickerCalendar() {
  const [selectedStart, setSelectedStart] = useState(12);
  const [selectedEnd, setSelectedEnd] = useState(17);

  // Month data for October 2026
  // Oct 1, 2026 is Thursday (day index 4, where Sun = 0)
  const octDays = Array.from({ length: 31 }, (_, i) => i + 1);
  const octPadding = Array.from({ length: 4 }, (_, i) => null);

  // Nov 1, 2026 is Sunday (day index 0)
  const novDays = Array.from({ length: 30 }, (_, i) => i + 1);

  const handleDateClick = (day) => {
    if (!selectedStart || (selectedStart && selectedEnd)) {
      setSelectedStart(day);
      setSelectedEnd(null);
    } else if (selectedStart && !selectedEnd) {
      if (day > selectedStart) {
        setSelectedEnd(day);
      } else {
        setSelectedStart(day);
      }
    }
  };

  const nights = selectedStart && selectedEnd ? selectedEnd - selectedStart : 5;

  return (
    <section className="calendar-section">
      <div className="calendar-section__header">
        <div>
          <h2 className="section-heading" style={{ marginBottom: 4 }}>
            {nights} nights in Candolim
          </h2>
          <p className="calendar-section__sub">
            {selectedStart ? `${selectedStart} Oct 2026` : 'Select check-in'} –{' '}
            {selectedEnd ? `${selectedEnd} Oct 2026` : 'Select checkout'}
          </p>
        </div>

        <button
          className="calendar-section__clear-btn"
          onClick={() => {
            setSelectedStart(12);
            setSelectedEnd(17);
          }}
        >
          Reset dates
        </button>
      </div>

      <div className="calendar-grid-container">
        {/* Month 1: October 2026 */}
        <div className="calendar-month">
          <div className="calendar-month__title">October 2026</div>

          <div className="calendar-weekdays">
            <span>Su</span>
            <span>Mo</span>
            <span>Tu</span>
            <span>We</span>
            <span>Th</span>
            <span>Fr</span>
            <span>Sa</span>
          </div>

          <div className="calendar-days">
            {octPadding.map((_, i) => (
              <div key={`pad-${i}`} className="calendar-day-empty" />
            ))}
            {octDays.map((day) => {
              const isStart = day === selectedStart;
              const isEnd = day === selectedEnd;
              const isInRange = selectedStart && selectedEnd && day > selectedStart && day < selectedEnd;
              const isPast = day < 1;

              return (
                <button
                  key={`oct-${day}`}
                  disabled={isPast}
                  onClick={() => handleDateClick(day)}
                  className={`calendar-day ${isStart ? 'calendar-day--start' : ''} ${
                    isEnd ? 'calendar-day--end' : ''
                  } ${isInRange ? 'calendar-day--range' : ''}`}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>

        {/* Month 2: November 2026 */}
        <div className="calendar-month">
          <div className="calendar-month__title">November 2026</div>

          <div className="calendar-weekdays">
            <span>Su</span>
            <span>Mo</span>
            <span>Tu</span>
            <span>We</span>
            <span>Th</span>
            <span>Fr</span>
            <span>Sa</span>
          </div>

          <div className="calendar-days">
            {novDays.map((day) => (
              <button
                key={`nov-${day}`}
                className="calendar-day"
                onClick={() => {}}
              >
                {day}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
