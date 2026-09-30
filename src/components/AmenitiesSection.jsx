import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Waves,
  Utensils,
  Wifi,
  Car,
  Wind,
  Tv,
  Shirt,
  Sun,
  ShieldCheck,
  ShieldAlert,
  HeartPulse,
  Flame,
  Camera,
  Coffee,
  Table,
  Dumbbell,
  Umbrella,
  ArrowUpDown,
  BatteryCharging,
  Key,
  Briefcase,
  Calendar,
  X,
  Droplets,
  Smile,
  Package,
  BedDouble,
  Check,
  Volume2,
  Compass,
  Snowflake,
  Zap,
  CupSoda,
  Wine,
  Trees
} from 'lucide-react';
import '../styles/AmenitiesSection.css';

export default function AmenitiesSection({ categories }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsModalOpen(false);
    };
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  // Icon mapping
  const getIcon = (name) => {
    const map = {
      Sparkles: <Sparkles size={24} strokeWidth={1.7} />,
      Waves: <Waves size={24} strokeWidth={1.7} />,
      Utensils: <Utensils size={24} strokeWidth={1.7} />,
      Wifi: <Wifi size={24} strokeWidth={1.7} />,
      Car: <Car size={24} strokeWidth={1.7} />,
      Wind: <Wind size={24} strokeWidth={1.7} />,
      Tv: <Tv size={24} strokeWidth={1.7} />,
      Shirt: <Shirt size={24} strokeWidth={1.7} />,
      Sun: <Sun size={24} strokeWidth={1.7} />,
      ShieldCheck: <ShieldCheck size={24} strokeWidth={1.7} />,
      ShieldAlert: <ShieldAlert size={24} strokeWidth={1.7} />,
      HeartPulse: <HeartPulse size={24} strokeWidth={1.7} />,
      Flame: <Flame size={24} strokeWidth={1.7} />,
      Camera: <Camera size={24} strokeWidth={1.7} />,
      Coffee: <Coffee size={24} strokeWidth={1.7} />,
      Table: <Table size={24} strokeWidth={1.7} />,
      Dumbbell: <Dumbbell size={24} strokeWidth={1.7} />,
      Umbrella: <Umbrella size={24} strokeWidth={1.7} />,
      ArrowUpDown: <ArrowUpDown size={24} strokeWidth={1.7} />,
      BatteryCharging: <BatteryCharging size={24} strokeWidth={1.7} />,
      Key: <Key size={24} strokeWidth={1.7} />,
      Briefcase: <Briefcase size={24} strokeWidth={1.7} />,
      Calendar: <Calendar size={24} strokeWidth={1.7} />,
      Droplets: <Droplets size={24} strokeWidth={1.7} />,
      Smile: <Smile size={24} strokeWidth={1.7} />,
      Package: <Package size={24} strokeWidth={1.7} />,
      BedDouble: <BedDouble size={24} strokeWidth={1.7} />,
      Check: <Check size={24} strokeWidth={1.7} />,
      Volume2: <Volume2 size={24} strokeWidth={1.7} />,
      Compass: <Compass size={24} strokeWidth={1.7} />,
      Snowflake: <Snowflake size={24} strokeWidth={1.7} />,
      Zap: <Zap size={24} strokeWidth={1.7} />,
      CupSoda: <CupSoda size={24} strokeWidth={1.7} />,
      Wine: <Wine size={24} strokeWidth={1.7} />,
      Trees: <Trees size={24} strokeWidth={1.7} />
    };
    return map[name] || <Check size={24} strokeWidth={1.7} />;
  };

  // Top 10 preview amenities
  const previewItems = [
    { name: 'Private hot tub / Jacuzzi', icon: 'Sparkles' },
    { name: 'Shared outdoor swimming pool', icon: 'Waves' },
    { name: 'Fully equipped kitchen', icon: 'Utensils' },
    { name: 'High-speed Wi-Fi (100 Mbps)', icon: 'Wifi' },
    { name: 'Free dedicated parking on premises', icon: 'Car' },
    { name: 'Air conditioning', icon: 'Wind' },
    { name: '43" Smart HDTV with Netflix', icon: 'Tv' },
    { name: 'Washing machine in unit', icon: 'Shirt' },
    { name: 'Private patio / balcony', icon: 'Sun' },
    { name: '24/7 Gated security & CCTV', icon: 'Camera' }
  ];

  // Total count
  const totalCount = categories.reduce((acc, cat) => acc + cat.items.length, 0);

  return (
    <section className="amenities-section">
      <h2 className="section-heading">What this place offers</h2>

      <div className="amenities-section__grid">
        {previewItems.map((item, idx) => (
          <div key={idx} className="amenity-item">
            <span className="amenity-item__icon">{getIcon(item.icon)}</span>
            <span className="amenity-item__name">{item.name}</span>
          </div>
        ))}
      </div>

      <button className="amenities-section__btn" onClick={() => setIsModalOpen(true)}>
        Show all {totalCount} amenities
      </button>

      {/* Full Amenities Modal */}
      {isModalOpen && (
        <div className="amenities-modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div
            className="amenities-modal-content"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="amenities-modal-title"
          >
            <div className="amenities-modal-header">
              <button
                className="amenities-modal-close"
                onClick={() => setIsModalOpen(false)}
                aria-label="Close amenities modal"
              >
                <X size={20} />
              </button>
            </div>

            <div className="amenities-modal-body">
              <h2 id="amenities-modal-title" className="amenities-modal-title">
                What this place offers
              </h2>

              <div className="amenities-modal-categories">
                {categories.map((cat, catIdx) => (
                  <div key={catIdx} className="amenity-category-block">
                    <h3 className="amenity-category-title">{cat.category}</h3>
                    <div className="amenity-category-list">
                      {cat.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="amenity-modal-row">
                          <span className="amenity-modal-icon">{getIcon(item.icon)}</span>
                          <span className="amenity-modal-name">{item.name}</span>
                        </div>
                      ))}
                    </div>
                    {catIdx < categories.length - 1 && <div className="divider" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
