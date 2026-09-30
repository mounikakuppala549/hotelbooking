import React from 'react';
import { BedDouble, Armchair } from 'lucide-react';
import '../styles/SleepingArrangements.css';

export default function SleepingArrangements({ arrangements }) {
  const iconMap = {
    BedDouble: <BedDouble size={26} strokeWidth={1.8} />,
    Armchair: <Armchair size={26} strokeWidth={1.8} />
  };

  return (
    <section className="sleeping-arrangements">
      <h2 className="section-heading">Where you'll sleep</h2>

      <div className="sleeping-arrangements__grid">
        {arrangements.map((item, idx) => (
          <div key={idx} className="sleep-card">
            <div className="sleep-card__icon">
              {iconMap[item.icon] || <BedDouble size={26} />}
            </div>
            <h3 className="sleep-card__title">{item.roomName}</h3>
            <p className="sleep-card__bed-type">{item.bedType}</p>
            <p className="sleep-card__desc">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
