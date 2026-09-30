import heroLivingRoom from '../assets/images/hero_living_room.jpg';
import heroBedroom from '../assets/images/hero_bedroom.jpg';
import heroJacuzzi from '../assets/images/hero_jacuzzi.jpg';
import heroKitchen from '../assets/images/hero_kitchen.jpg';
import heroPool from '../assets/images/hero_pool.jpg';
import galleryBathroom from '../assets/images/gallery_bathroom_shower.jpg';

export const listingData = {
  id: 'mirashya-ug10',
  title: 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10',
  shortTitle: 'Romantic Jacuzzi 1BHK Candolim',
  type: 'Entire serviced apartment in Candolim, India',
  specs: '3 guests · 1 bedroom · 1 double bed · 1 sofa bed · 1 bathroom',
  rating: 4.95,
  reviewCount: 19,
  isGuestFavourite: true,
  isSuperhost: true,
  city: 'Candolim',
  state: 'Goa',
  country: 'India',
  locationSummary: 'Candolim, Goa, India',
  fullAddress: 'Botanica by Raichandani, Tukaram Naik Road, Pilerne - Candolim Road, Candolim, Goa 403515',
  pricing: {
    basePricePerNight: 4850,
    originalPricePerNight: 5500,
    cleaningFee: 1200,
    serviceFee: 2150,
    occupancyTaxes: 850,
    weeklyDiscountPercent: 10,
    minNights: 2
  },
  host: {
    name: 'Mirashya Homes',
    coHost: 'Alok (Co-host)',
    yearsHosting: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    isSuperhost: true,
    reviewsCount: 348,
    rating: 4.94,
    responseRate: 100,
    responseTime: 'within an hour',
    bio: 'Hi there! We are Mirashya Homes, curating luxury and boutique holiday homes across Goa. Our goal is to ensure you experience the most relaxing, memorable getaway with hotel-standard cleanliness and personalized hospitality.',
    verified: true
  },
  highlights: [
    {
      id: 'guest-fav',
      title: 'Guest favourite',
      description: 'One of the most loved homes on Airbnb based on ratings, reviews, and reliability.',
      icon: 'Award'
    },
    {
      id: 'self-checkin',
      title: 'Self check-in',
      description: 'Check yourself in effortlessly with the smart keypad lockbox.',
      icon: 'Key'
    },
    {
      id: 'jacuzzi-highlight',
      title: 'Private hot tub jacuzzi',
      description: 'Unwind under the stars in your personal jacuzzi tub on the balcony.',
      icon: 'Sparkles'
    },
    {
      id: 'dedicated-workspace',
      title: 'Dedicated workspace',
      description: 'A dedicated desk and ergonomic seating paired with fast 100 Mbps Wi-Fi.',
      icon: 'Wifi'
    },
    {
      id: 'pool-highlight',
      title: 'Dive right in',
      description: 'This is one of the few places in the area with a large swimming pool.',
      icon: 'Waves'
    }
  ],
  sleepingArrangements: [
    {
      roomName: 'Bedroom 1',
      bedType: '1 double bed',
      description: 'Plush queen mattress, cotton linens, warm ambient lighting, AC',
      icon: 'BedDouble'
    },
    {
      roomName: 'Living room',
      bedType: '1 sofa bed',
      description: 'Mustard convertible sofa with extra pillows and throw blanket',
      icon: 'Armchair'
    }
  ],
  description: {
    short:
      'Experience a dreamy Goa retreat at this designer 1BHK serviced apartment located at Botanica by Raichandani, Candolim. Complete with a private open-air Jacuzzi hot tub on the patio, shared swimming pool, fast 100 Mbps Wi-Fi, and fully equipped modular kitchen, it is the ultimate romantic or workation escape.',
    full: [
      'Welcome to Mirashya UG10 — an intimate, beautifully designed 1-bedroom serviced apartment crafted for couples, solo travelers, and small families seeking luxury and serenity in North Goa.',
      'Situated within Botanica by Raichandani, a gated luxury residential complex on Pilerne-Candolim Road, this home strikes the perfect balance between tranquil tropical nature and vibrant coastal entertainment.',
      'THE SPACE:\n• Private Outdoor Jacuzzi: Heated hydrotherapy jets, ambient fairy lights, and lush potted tropical greenery for magical evenings.\n• Living Room: Cozy mustard sofa, wooden teak coffee table, 43" Smart HDTV loaded with Netflix & Prime, air conditioning, and bohemian decor.\n• Master Bedroom: Ultra-comfortable double bed with high-thread-count Egyptian cotton linens, bedside warm sconces, wardrobe, and direct garden view balcony.\n• Fully Equipped Kitchen: Granite countertops, induction cooktop, microwave, refrigerator, electric kettle, toaster, blender, cookware, and modern dinnerware.\n• Spa-Like Bathroom: Contemporary glass rain shower, hot water geyser, hair dryer, and organic toiletries.\n• Shared Amenities: Access to Botanica’s grand swimming pool (9 AM - 7 PM), fitness gym, and landscaped tropical gardens.',
      'GUEST ACCESS:\nGuests have private, exclusive access to the entire apartment and its private balcony jacuzzi. Shared amenities include the gated compound pool, gym, free covered parking, and 24/7 security reception.',
      'OTHER DETAILS TO NOTE:\n• High-speed Wi-Fi (100 Mbps) with power inverter backup ensures zero downtime for remote work.\n• Daily housekeeping is available on request between 9:00 AM and 5:00 PM.\n• Candolim Beach, Fort Aguada, and legendary beach shacks (Fisherman’s Cove, Calamari, Cohiba) are just 7–10 minutes away.'
    ]
  },
  photos: [
    {
      id: 1,
      url: heroLivingRoom,
      caption: 'Sunlit living room with plush mustard sofa, teak coffee table, and lush balcony view',
      category: 'Living room',
      isHero: true
    },
    {
      id: 2,
      url: heroBedroom,
      caption: 'Romantic master bedroom with warm LED headboard lighting and crisp luxury linens',
      category: 'Bedroom',
      isHero: true
    },
    {
      id: 3,
      url: heroJacuzzi,
      caption: 'Private balcony jacuzzi hot tub illuminated under warm evening string lights',
      category: 'Balcony & Jacuzzi',
      isHero: true
    },
    {
      id: 4,
      url: heroKitchen,
      caption: 'Fully equipped modern kitchen with stainless steel appliances and breakfast bar',
      category: 'Kitchen & Dining',
      isHero: true
    },
    {
      id: 5,
      url: heroPool,
      caption: 'Grand swimming pool and tropical resort facade at Botanica by Raichandani',
      category: 'Exterior & Pool',
      isHero: true
    },
    {
      id: 6,
      url: galleryBathroom,
      caption: 'Spa-style ensuite bathroom with walk-in rain shower and backlit LED mirror',
      category: 'Bathroom',
      isHero: false
    },
    {
      id: 7,
      url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
      caption: 'Living room reading corner with handcrafted rattan armchair and warm lighting',
      category: 'Living room',
      isHero: false
    },
    {
      id: 8,
      url: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80',
      caption: 'Dedicated workspace nook with high-speed 100 Mbps internet and ergonomic chair',
      category: 'Living room',
      isHero: false
    },
    {
      id: 9,
      url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
      caption: 'Minimalist bedroom detail showing teak side table and brass reading sconce',
      category: 'Bedroom',
      isHero: false
    },
    {
      id: 10,
      url: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80',
      caption: 'Private hot tub close-up with bubbling hydrotherapy jets and aromatic candles',
      category: 'Balcony & Jacuzzi',
      isHero: false
    },
    {
      id: 11,
      url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
      caption: 'Kitchen breakfast counter with wooden bar stools and pendant lighting',
      category: 'Kitchen & Dining',
      isHero: false
    },
    {
      id: 12,
      url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
      caption: 'Organic herbal shower amenities, shampoo, and fluffy combed cotton towels',
      category: 'Bathroom',
      isHero: false
    },
    {
      id: 13,
      url: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80',
      caption: 'Daytime pool deck with sunbeds surrounded by coconut palms and frangipani trees',
      category: 'Exterior & Pool',
      isHero: false
    },
    {
      id: 14,
      url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      caption: 'Gated entrance of Botanica Candolim with manicured tropical landscaping',
      category: 'Exterior & Pool',
      isHero: false
    },
    {
      id: 15,
      url: 'https://images.unsplash.com/photo-1540518614846-7ede433c4ef4?auto=format&fit=crop&w=1200&q=80',
      caption: 'Bedroom wardrobe area with full-length mirror and iron with board',
      category: 'Bedroom',
      isHero: false
    },
    {
      id: 16,
      url: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80',
      caption: 'Balcony morning tea setting overlooking the quiet tropical valley',
      category: 'Balcony & Jacuzzi',
      isHero: false
    },
    {
      id: 17,
      url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
      caption: 'Dining table set up with glassware and artisanal ceramic plates',
      category: 'Kitchen & Dining',
      isHero: false
    },
    {
      id: 18,
      url: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1200&q=80',
      caption: 'Scenic dusk view of Botanica Candolim residential building',
      category: 'Exterior & Pool',
      isHero: false
    }
  ],
  amenityCategories: [
    {
      category: 'Scenic views',
      items: [
        { name: 'Pool view', icon: 'Waves' },
        { name: 'Tropical garden view', icon: 'Trees' }
      ]
    },
    {
      category: 'Bathroom',
      items: [
        { name: 'Private hot tub / Jacuzzi', icon: 'Sparkles', featured: true },
        { name: 'Hair dryer', icon: 'Wind' },
        { name: 'Shampoo & conditioner', icon: 'Droplets' },
        { name: 'Body soap & shower gel', icon: 'Smile' },
        { name: 'Hot water geyser (24/7)', icon: 'Flame' }
      ]
    },
    {
      category: 'Bedroom and laundry',
      items: [
        { name: 'Washing machine in unit', icon: 'Shirt' },
        { name: 'Hangers & drying rack', icon: 'Package' },
        { name: 'Bed linen & extra pillows', icon: 'BedDouble' },
        { name: 'Iron with ironing board', icon: 'Check' },
        { name: 'Room-darkening shades', icon: 'Sun' }
      ]
    },
    {
      category: 'Entertainment',
      items: [
        { name: '43" Smart HDTV with Netflix, Prime', icon: 'Tv', featured: true },
        { name: 'High-speed Wi-Fi (100 Mbps)', icon: 'Wifi', featured: true },
        { name: 'Bluetooth sound speaker', icon: 'Volume2' }
      ]
    },
    {
      category: 'Heating and cooling',
      items: [
        { name: 'Air conditioning (Living room & Bedroom)', icon: 'Wind', featured: true },
        { name: 'Ceiling fans', icon: 'Compass' }
      ]
    },
    {
      category: 'Home safety',
      items: [
        { name: 'Smoke alarm', icon: 'ShieldCheck' },
        { name: 'Carbon monoxide alarm', icon: 'ShieldAlert' },
        { name: 'First aid kit', icon: 'HeartPulse' },
        { name: 'Fire extinguisher', icon: 'Flame' },
        { name: '24/7 Gated security & CCTV in common areas', icon: 'Camera' }
      ]
    },
    {
      category: 'Kitchen and dining',
      items: [
        { name: 'Fully equipped kitchen space', icon: 'Utensils', featured: true },
        { name: 'Refrigerator & freezer', icon: 'Snowflake' },
        { name: 'Microwave oven', icon: 'Zap' },
        { name: 'Induction cooktop & cookware', icon: 'Coffee' },
        { name: 'Electric kettle & toaster', icon: 'CupSoda' },
        { name: 'Dishes, wine glasses & silverware', icon: 'Wine' },
        { name: 'Dining breakfast counter with stools', icon: 'Table' }
      ]
    },
    {
      category: 'Outdoor & recreation',
      items: [
        { name: 'Private patio / balcony', icon: 'Sun', featured: true },
        { name: 'Shared outdoor swimming pool (9am - 7pm)', icon: 'Waves', featured: true },
        { name: 'Shared fitness gym', icon: 'Dumbbell' },
        { name: 'Sun loungers & pool deck', icon: 'Umbrella' }
      ]
    },
    {
      category: 'Parking and facilities',
      items: [
        { name: 'Free dedicated parking on premises', icon: 'Car', featured: true },
        { name: 'Modern elevator in building', icon: 'ArrowUpDown' },
        { name: 'Power backup inverter', icon: 'BatteryCharging' }
      ]
    },
    {
      category: 'Services',
      items: [
        { name: 'Self check-in with keypad lockbox', icon: 'Key' },
        { name: 'Luggage drop-off allowed', icon: 'Briefcase' },
        { name: 'Daily housekeeping support (9am - 5pm)', icon: 'Sparkles' },
        { name: 'Long term stays allowed (28+ days)', icon: 'Calendar' }
      ]
    }
  ],
  ratingsBreakdown: {
    cleanliness: 5.0,
    accuracy: 4.9,
    communication: 5.0,
    location: 4.8,
    checkIn: 5.0,
    value: 4.9
  },
  reviews: [
    {
      id: 'rev-1',
      author: 'Rahul Sharma',
      date: 'August 2026',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
      location: 'Bengaluru, India',
      stayDetails: 'Stayed with a friend · 4 nights',
      text: "Mirashya's place was absolute bliss! The private jacuzzi on the balcony under the fairy lights made our Goa trip unforgettable. Super clean, fast 100 Mbps WiFi, and the pool in Botanica was spotless. Host was incredibly responsive and check-in was seamless."
    },
    {
      id: 'rev-2',
      author: 'Sneha Mukherjee',
      date: 'July 2026',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
      location: 'Mumbai, India',
      stayDetails: 'Stayed with partner · 3 nights',
      text: 'Had the most relaxing staycation here. The apartment looks even better in real life than the photos! Very aesthetic interiors, ultra comfortable bed, and the hot tub is so relaxing after a beach day. Candolim beach is just 10 mins away. 10/10 recommend!'
    },
    {
      id: 'rev-3',
      author: 'Amit & Priya Verma',
      date: 'June 2026',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80',
      location: 'Delhi, India',
      stayDetails: 'Stayed 5 nights',
      text: 'Clean, peaceful gated community, and the hot tub is a total game changer after exploring North Goa all day. Kitchen had all essentials for morning coffee and breakfast. Alok was great with local dining tips!'
    },
    {
      id: 'rev-4',
      author: 'David Krause',
      date: 'May 2026',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      location: 'Berlin, Germany',
      stayDetails: 'Stayed 1 week',
      text: 'Great dedicated workspace with rock-solid high-speed internet for remote meetings. The AC cooled fast, bed was very comfortable, and Botanica feels super safe with friendly security staff.'
    },
    {
      id: 'rev-5',
      author: 'Ananya Deshmukh',
      date: 'April 2026',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      location: 'Pune, India',
      stayDetails: 'Stayed 2 nights',
      text: 'Beautifully decorated 1BHK with tons of natural light. The self check-in was smooth, the balcony was our favorite spot, and having the swimming pool right downstairs was fantastic. We will be back soon!'
    },
    {
      id: 'rev-6',
      author: 'Vikram Talwar',
      date: 'March 2026',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
      location: 'Hyderabad, India',
      stayDetails: 'Stayed 3 nights',
      text: 'Worth every single penny. The attention to detail—from luxury bath amenities to warm ambient lighting—stands out. Perfect romantic getaway in Candolim.'
    }
  ],
  neighborhood: {
    description:
      'Candolim is one of the most serene yet lively coastal destinations in North Goa. The apartment is located in Botanica by Raichandani on Tukaram Naik Road, offering a quiet green oasis while keeping you close to the beach and top nightlife.',
    pointsOfInterest: [
      { name: 'Candolim Beach', distance: '1.8 km (6-8 min drive / 15 min walk)' },
      { name: 'Sinquerim Beach & Fort Aguada', distance: '3.5 km (10 min drive)' },
      { name: 'Fisherman’s Cove & Candolim Market', distance: '1.2 km (4 min drive)' },
      { name: 'Cohiba Bar & Kitchen', distance: '2.4 km (7 min drive)' },
      { name: 'Calangute & Baga Beaches', distance: '5.0 km (12 min drive)' },
      { name: 'Goa International Airport (GOX / Dabolim)', distance: '38 km (45-50 min)' }
    ]
  },
  policies: {
    houseRules: [
      'Check-in: 2:00 PM – 10:00 PM',
      'Checkout before 11:00 AM',
      'Maximum 3 guests',
      'No loud music or parties after 10:00 PM (peaceful community)',
      'No smoking inside the apartment (balcony permitted)'
    ],
    safety: [
      'Smoke detector installed',
      'Carbon monoxide detector installed',
      'First aid kit available in bathroom vanity',
      'CCTV in building common corridors & perimeter'
    ],
    cancellation: [
      'Free cancellation for 48 hours after booking.',
      'Cancel up to 7 days before check-in for a full refund minus service fee.',
      'Review the full cancellation policy before confirming reservation.'
    ]
  }
};
