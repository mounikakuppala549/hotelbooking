import React from 'react';
import { Clock, ShieldCheck, CalendarX } from 'lucide-react';
import '../styles/PoliciesSection.css';

export default function PoliciesSection({ policies }) {
  return (
    <section className="policies-section" aria-label="House rules and policies">
      <h2 className="section-heading">Things to know</h2>

      <div className="policies-grid">
        {/* House Rules */}
        <div className="policy-col">
          <div className="policy-col__header">
            <Clock size={20} className="policy-col__icon" />
            <h3 className="policy-col__title">House rules</h3>
          </div>
          <ul className="policy-list">
            {policies.houseRules.map((rule, idx) => (
              <li key={idx} className="policy-item">
                {rule}
              </li>
            ))}
          </ul>
        </div>

        {/* Safety & Property */}
        <div className="policy-col">
          <div className="policy-col__header">
            <ShieldCheck size={20} className="policy-col__icon" />
            <h3 className="policy-col__title">Safety & property</h3>
          </div>
          <ul className="policy-list">
            {policies.safety.map((item, idx) => (
              <li key={idx} className="policy-item">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Cancellation Policy */}
        <div className="policy-col">
          <div className="policy-col__header">
            <CalendarX size={20} className="policy-col__icon" />
            <h3 className="policy-col__title">Cancellation policy</h3>
          </div>
          <ul className="policy-list">
            {policies.cancellation.map((item, idx) => (
              <li key={idx} className="policy-item">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
