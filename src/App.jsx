import React, { useState } from 'react';
import Navbar from './components/Navbar';
import PropertyHeader from './components/PropertyHeader';
import HeroGrid from './components/HeroGrid';
import Highlights from './components/Highlights';
import SleepingArrangements from './components/SleepingArrangements';
import PropertyDescription from './components/PropertyDescription';
import AmenitiesSection from './components/AmenitiesSection';
import DatePickerCalendar from './components/DatePickerCalendar';
import ReviewsSection from './components/ReviewsSection';
import HostProfile from './components/HostProfile';
import LocationSection from './components/LocationSection';
import PoliciesSection from './components/PoliciesSection';
import BookingCard from './components/BookingCard';
import PhotoTourModal from './components/PhotoTourModal';
import LightboxModal from './components/LightboxModal';
import Footer from './components/Footer';

import { listingData } from './data/listingData';
import './styles/App.css';

export default function App() {
  // Modal & View states
  const [isPhotoTourOpen, setIsPhotoTourOpen] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // User wishlist saved state
  const [isSaved, setIsSaved] = useState(false);

  // Navigation handlers
  const handleOpenPhotoTour = () => {
    setIsPhotoTourOpen(true);
  };

  const handleClosePhotoTour = () => {
    setIsPhotoTourOpen(false);
  };

  const handleOpenLightbox = (index = 0) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setIsLightboxOpen(false);
  };

  const handleNavigateLightbox = (index) => {
    setLightboxIndex(index);
  };

  const handleToggleSave = () => {
    setIsSaved(!isSaved);
  };

  const handleScrollToReviews = () => {
    const el = document.getElementById('reviews');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToLocation = () => {
    const el = document.getElementById('location');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app-root">
      {/* 1. Header Navigation */}
      <Navbar
        onLogoClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        savedCount={isSaved ? 1 : 0}
      />

      {/* Main Page Container */}
      <main className="container-wide app-main">
        {/* 2. Property Header (Title, Score, Share/Save) */}
        <PropertyHeader
          listing={listingData}
          isSaved={isSaved}
          onToggleSave={handleToggleSave}
          onScrollToReviews={handleScrollToReviews}
          onScrollToLocation={handleScrollToLocation}
        />

        {/* 3. Hero 5-Photo Grid */}
        <HeroGrid
          photos={listingData.photos}
          onOpenPhotoTour={handleOpenPhotoTour}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* 4. Two-Column Main Content Layout */}
        <div className="listing-layout">
          {/* Left Column (Property Details) */}
          <div className="listing-layout__left">
            <Highlights listing={listingData} />

            <div className="divider" />
            <SleepingArrangements arrangements={listingData.sleepingArrangements} />

            <div className="divider" />
            <PropertyDescription description={listingData.description} />

            <div className="divider" />
            <AmenitiesSection categories={listingData.amenityCategories} />

            <div className="divider" />
            <DatePickerCalendar />
          </div>

          {/* Right Column (Sticky Booking Widget) */}
          <div className="listing-layout__right">
            <BookingCard
              listing={listingData}
              onScrollToReviews={handleScrollToReviews}
            />
          </div>
        </div>

        {/* 5. Full Width Sections */}
        <div className="divider" />
        <ReviewsSection listing={listingData} />

        <div className="divider" />
        <HostProfile host={listingData.host} />

        <div className="divider" />
        <LocationSection
          neighborhood={listingData.neighborhood}
          fullAddress={listingData.fullAddress}
        />

        <div className="divider" />
        <PoliciesSection policies={listingData.policies} />
      </main>

      {/* 6. Footer */}
      <Footer />

      {/* 7. Full-Screen Photo Tour Overlay (View 2) */}
      <PhotoTourModal
        photos={listingData.photos}
        isOpen={isPhotoTourOpen}
        onClose={handleClosePhotoTour}
        onOpenLightbox={handleOpenLightbox}
        isSaved={isSaved}
        onToggleSave={handleToggleSave}
      />

      {/* 8. Full-Screen Single Photo Lightbox Overlay (View 3) */}
      <LightboxModal
        photos={listingData.photos}
        currentIndex={lightboxIndex}
        isOpen={isLightboxOpen}
        onClose={handleCloseLightbox}
        onNavigate={handleNavigateLightbox}
      />
    </div>
  );
}
