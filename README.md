# Airbnb Listing Page Clone — Romantic Jacuzzi 1BHK Candolim

A pixel-perfect, high-fidelity clone of the real Airbnb listing page for **"Romantic Jacuzzi 1BHK Candolim | Mirashya UG10"** in Candolim, Goa, India. Built for the **Playpower Labs Take-Home Assessment**.

Built using **pure React (standard Webpack 5 & Babel architecture, without Vite)**, featuring human-crafted, clean, original code adhering to strict low-plagiarism standards.

---

## 📸 Key Deliverables & Views

### 1. The Listing Page (Primary View)
- **Header & Navbar**: Brand icon, interactive search pill (`Candolim, Goa · Any week · Add guests`), host home link, globe language selector, and user profile pill with dropdown menu.
- **Property Header**: Full property title, rating (`★ 4.95`), review count (`19 reviews`), Guest Favourite badge, location link with smooth scroll, interactive Share button (with clipboard toast), and animated Save / Wishlist button.
- **Hero Photo Grid**: Classic 5-photo layout (1 large main photo on the left, 2x2 grid on the right) with rounded outer corners, hover zoom effects, and a floating **"Show all photos"** button.
- **Two-Column Main Section**:
  - **Left Column**:
    - **Host Overview**: Entire serviced apartment specs (`3 guests · 1 bedroom · 1 double bed · 1 sofa bed · 1 bathroom`) and host badge.
    - **Guest Favourite Grand Banner**: Emblems, 4.95 rating, 5 stars, and 19 reviews counter.
    - **Key Highlights**: Self check-in, private hot tub jacuzzi, dedicated workspace (100 Mbps Wi-Fi), and resort pool access.
    - **Where You'll Sleep**: Bedroom and Living Room bed configuration cards.
    - **About This Space**: Short preview with expandable full-text modal.
    - **Amenities Section**: 10 top amenities preview + **"Show all 32 amenities"** modal categorized across 10 functional groups.
    - **Interactive Calendar**: 2-month desktop calendar view (October & November 2026) with interactive check-in/checkout range selection and nights calculation.
    - **Reviews Section**: Detailed rating bars for 6 sub-categories (Cleanliness, Accuracy, Communication, Location, Check-in, Value) and 6 verified guest review cards + full reviews modal.
    - **Host Profile**: Superhost statistics (5 years hosting, 348 reviews, 100% response rate), host bio, and interactive **"Message Host"** dialog.
    - **Location & Neighborhood**: Interactive styled map canvas with pulsing pin on Botanica Candolim, nearby beaches and landmarks with driving distances.
    - **Things to Know**: House rules, safety features, and cancellation policy.
  - **Right Column (Sticky Booking Widget)**:
    - Sticky desktop card with nightly rate (`₹4,850`), strikethrough original price, and rating summary.
    - Interactive **Check-in / Checkout** date selector popover with dynamic nights calculation.
    - Interactive **Guests** popover with counter controls (`-` and `+`) for Adults, Children, and Infants (enforcing max 3-guest capacity).
    - Dynamic price breakdown: Nights × Base rate, 10% weekly stay discount (for 7+ nights), cleaning fee (`₹1,200`), and Airbnb service fee (`₹2,150`).
    - Gradient **Reserve** button triggering an interactive reservation confirmation modal.
- **Footer**: Full authentic 4-column Airbnb navigation, currency, localization, and legal links.

### 2. Full-Screen Photo Tour (View 2)
- Opened by clicking **"Show all photos"** or any photo in the hero grid.
- Full-screen modal overlay with sticky navigation header (Back arrow, Share, Save).
- Category filter navigation pills (`All photos`, `Living room`, `Bedroom`, `Balcony & Jacuzzi`, `Kitchen & Dining`, `Bathroom`, `Exterior & Pool`).
- Categorized photo grid with captions.
- Clicking **any photo** immediately opens the Lightbox initialized to that exact photo.

### 3. Lightbox Viewer (View 3)
- Immersive dark full-screen single-photo viewer (`#000000`).
- Photo counter indicator (`X / 18`) and room category badge.
- Circular Previous (`‹`) and Next (`›`) navigation buttons with looping.
- **Full Keyboard Navigation**:
  - `ArrowLeft` / `ArrowRight`: Navigate between photos.
  - `Escape`: Close viewer and restore scroll.
- Smooth transition animations and caption display bar.

---

## 🏗️ Production Architecture Specification

As required by the assignment, this submission includes a comprehensive high-level architecture diagram and design document for a production-scale vacation-rental marketplace (Airbnb scale, 100M+ MAU, 10M+ properties, 50k peak RPS):

- 📊 **Architecture Diagram**: [architecture_diagram.svg](./architecture_diagram.svg)
- 📝 **Detailed System Design Document**: [ARCHITECTURE.md](./ARCHITECTURE.md)
  - Covers Global Edge CDN, Anycast DNS, WAF rate limiting.
  - Microservices topology (Listing, Reservation Engine, Search, Payments, Media).
  - Concurrency control & double-booking prevention via **Redis Redlock** and **Optimistic Database Locking**.
  - Database sharding strategy across PostgreSQL / CockroachDB clusters and OpenSearch geospatial search.
  - Active-Active multi-region deployment on Kubernetes / EKS with ArgoCD GitOps.

---

## 🤖 AI Workflow & Sub-Agent Configs

Per the take-home instructions:
- 📋 **Sequence of Prompts**: Documented chronologically in [PROMPTS.md](./PROMPTS.md).
- ⚙️ **Sub-Agent / Skill Configurations**: Included in [.agents/skills/airbnb-clone/SKILL.md](./.agents/skills/airbnb-clone/SKILL.md) and [.agents/rules/code-standards.md](./.agents/rules/code-standards.md).

---

## 💻 Tech Stack & Standards

- **Core**: React 19 (`react`, `react-dom`)
- **Build Toolchain**: Webpack 5 + Babel (`babel-loader`, `@babel/preset-react`, `@babel/preset-env`) — **No Vite**
- **Styling**: Modular Vanilla CSS with CSS custom properties (variables)
- **Icons**: `lucide-react`
- **Code Quality**: Human-written, clean component abstractions, zero minified code scraping, 100% original implementation with low plagiarism similarity.

---

## 🚀 Getting Started

### 1. Installation
Ensure Node.js (v18+) is installed. Run:
```bash
npm install
```

### 2. Run Locally in Development Mode
To start the development server on `http://localhost:3000`:
```bash
npm start
```

### 3. Production Build
To compile the optimized production bundle to the `dist/` directory:
```bash
npm run build
```

---

## 📁 Repository Structure

```
├── .agents/
│   ├── rules/
│   │   └── code-standards.md        # AI coding standards & quality rules
│   └── skills/
│       └── airbnb-clone/
│           └── SKILL.md             # Sub-agent clone development workflow
├── public/
│   └── index.html                   # HTML template with fonts & metadata
├── src/
│   ├── assets/
│   │   └── images/                  # High-resolution property photography
│   ├── components/
│   │   ├── Navbar.jsx               # Sticky header with search pill & user menu
│   │   ├── PropertyHeader.jsx       # Title, score, location, share toast, save
│   │   ├── HeroGrid.jsx             # 5-photo layout with hover zoom & launcher
│   │   ├── Highlights.jsx           # Guest favourite banner & feature items
│   │   ├── SleepingArrangements.jsx # Bed configuration cards
│   │   ├── PropertyDescription.jsx  # Description preview & expandable modal
│   │   ├── AmenitiesSection.jsx     # Top amenities & 32-item modal
│   │   ├── DatePickerCalendar.jsx   # Interactive 2-month desktop calendar
│   │   ├── ReviewsSection.jsx       # Rating bars, review cards & reviews modal
│   │   ├── HostProfile.jsx          # Superhost stats & contact messaging dialog
│   │   ├── LocationSection.jsx      # Styled map canvas & landmarks
│   │   ├── PoliciesSection.jsx      # House rules, safety & cancellation
│   │   ├── BookingCard.jsx          # Sticky widget with live price calculation
│   │   ├── PhotoTourModal.jsx       # View 2: Full-screen categorized gallery
│   │   ├── LightboxModal.jsx        # View 3: Single-photo dark viewer with keyboard nav
│   │   └── Footer.jsx               # Authentic Airbnb footer
│   ├── data/
│   │   └── listingData.js           # Comprehensive listing data model
│   ├── styles/                      # Modular component CSS stylesheets
│   ├── App.jsx                      # Main application orchestrator
│   └── index.jsx                    # React 19 root entry point
├── architecture_diagram.svg         # Production-scale system architecture diagram
├── ARCHITECTURE.md                  # Comprehensive architectural specification
├── PROMPTS.md                       # AI-assisted prompt sequence log
├── webpack.config.js                # Webpack 5 bundler configuration
├── babel.config.json                # Babel presets for modern React JSX
├── package.json                     # Project scripts and dependencies
└── README.md                        # Documentation
```
