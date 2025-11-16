# React Project Structure Documentation

## Overview
This is a complete React application converted from an HTML template, featuring a full hosting, web development, digital marketing, and app development services website.

## Project Structure

```
src/
├── assets/
│   ├── css/
│   │   └── style.css              # Main CSS file (existing)
│   └── js/
│       ├── main.js                # Main JavaScript utilities
│       └── scrollCue.min.js       # Scroll animation library
│
├── components/
│   ├── Header/
│   │   ├── Header.jsx             # Main header component with desktop menu
│   │   ├── MobileMenu.jsx         # Mobile menu component
│   │   ├── MobileMenu.css         # Mobile menu styles
│   │   └── MenuData.js            # Menu configuration data
│   │
│   ├── Cards/
│   │   ├── ServiceCard.jsx        # Service card component
│   │   ├── PricingCard.jsx        # Pricing card component
│   │   ├── TeamCard.jsx           # Team member card component
│   │   └── BlogCard.jsx           # Blog post card component
│   │
│   ├── Carousel/
│   │   ├── HeroCarousel.jsx       # Hero section carousel
│   │   ├── TestimonialCarousel.jsx # Testimonials carousel
│   │   └── BrandCarousel.jsx      # Brand logos carousel
│   │
│   ├── Footer.jsx                 # Footer component
│   ├── Layout.jsx                 # Main layout wrapper
│   ├── Loader.jsx                 # Loading component
│   ├── Breadcrumb.jsx             # Breadcrumb navigation
│   └── Faq.jsx                    # FAQ accordion component
│
├── pages/
│   ├── Home.jsx                   # Homepage
│   ├── About.jsx                  # About page
│   ├── Services.jsx               # Services listing page
│   ├── ServiceDetails.jsx         # Service details page
│   ├── Projects.jsx               # Projects/Portfolio page
│   ├── Team.jsx                   # Team page
│   ├── Blog.jsx                   # Blog page
│   ├── Contact.jsx                # Contact page
│   ├── WebDevelopment.jsx         # Web development services
│   ├── DigitalMarketing.jsx       # Digital marketing services
│   ├── AppDevelopment.jsx         # App development services
│   ├── HostingServices.jsx        # Hosting services
│   ├── Pricing.jsx                # Pricing plans
│   ├── Ticket.jsx                 # Support ticket page
│   └── Login.jsx                  # Login page
│
├── App.jsx                        # Main app component with routes
├── main.jsx                       # Entry point
└── index.css                      # Global styles

public/
└── assets/
    └── img/                       # All images and icons
```

## Menu Structure

The website includes a comprehensive menu system with the following sections:

### Main Navigation
1. **Home** - Landing page
2. **Hosting** (Dropdown)
   - Cloud & cPanel Hosting
   - Reseller Hosting
   - WordPress Hosting

3. **VPS & Dedicated** (Dropdown)
   - Self Managed VPS
   - Managed VPS
   - Managed Windows VPS
   - Self Managed Windows VPS
   - Self Managed Dedicated Server
   - Managed Dedicated Server

4. **Domain & Email** (Dropdown)
   - Domain
   - Microsoft 365
   - Google Workspace
   - Zoho Email
   - Titan Email
   - Web Mail

5. **Web Development** (Dropdown)
   - Static Websites
   - Dynamic Websites
   - E-commerce Websites
   - Web Apps
   - Website Redesign
   - Website Maintenance

6. **Digital Marketing** (Dropdown)
   - SEO
   - Google Ads
   - Social Media Marketing
   - Email Marketing
   - Branding & Content

7. **App Development** (Dropdown)
   - Android Apps
   - iOS Apps
   - Hybrid Apps
   - UI/UX for Mobile
   - App Support & Maintenance

8. **Pricing** - View pricing plans
9. **24/7 Ticket** - Support ticket system
10. **Contact Support** - Contact form
11. **Login** - User login
12. **Country Selector** - India, U.S., U.K.

## Key Features

### Header Component
- **Desktop Navigation**: Fully functional dropdown menus
- **Mobile Menu**: Slide-in mobile navigation with collapsible submenus
- **Search Functionality**: Full-screen search overlay
- **Country Selector**: Multi-country support with flags
- **Sticky Header**: Fixed header on scroll
- **Outside Click Detection**: Close dropdowns when clicking outside

### Carousel Components
- **Swiper Integration**: Modern touch-enabled sliders
- **Multiple Carousel Types**:
  - Hero carousel with fade effect
  - Testimonial carousel with pagination
  - Brand carousel with autoplay
- **Responsive Breakpoints**: Adapt to different screen sizes
- **Navigation & Pagination**: Arrow buttons and dot indicators

### Card Components
All cards are reusable and accept props:
- **ServiceCard**: Icon, title, description, and link
- **PricingCard**: Price, features, popular badge
- **TeamCard**: Photo, name, designation, social links
- **BlogCard**: Image, title, excerpt, metadata

### Pages
All pages include:
- Breadcrumb navigation
- Hero sections with background images
- Service/feature listings
- Call-to-action sections
- Responsive layout

## Routing

The application uses React Router with lazy loading for optimal performance:

```javascript
/ - Home page
/web-development - Web development services
/web-development/:service - Specific web dev service
/digital-marketing - Digital marketing services
/digital-marketing/:service - Specific marketing service
/app-development - App development services
/app-development/:service - Specific app service
/hosting/:type - Hosting services (cloud-cpanel, reseller, wordpress)
/vps/:type - VPS services
/dedicated/:type - Dedicated server services
/domain - Domain registration
/email/:type - Email services
/pricing - Pricing plans
/ticket - Support ticket
/contact - Contact form
/login - User login
```

## CSS Architecture

The project uses the existing CSS from the HTML template:
- **style.css**: Main stylesheet (390KB) with all component styles
- **MobileMenu.css**: Custom mobile menu and dropdown styles
- **Responsive Design**: Built-in breakpoints for all screen sizes

## Dependencies

### Core
- React 19.1.1
- React Router DOM 7.9.5

### UI
- Swiper 12.0.3 - Carousel/slider functionality
- Lucide React 0.552.0 - Icon library

### Build Tools
- Vite 7.1.7 - Fast build tool
- ESLint - Code linting

## How to Run

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Mobile Responsiveness

All components are fully responsive:
- **Mobile Menu**: Slide-in navigation with touch support
- **Breakpoints**: 576px, 768px, 1024px, 1200px
- **Touch Events**: Swipe gestures for carousels
- **Flexible Layouts**: CSS Grid and Flexbox throughout

## Best Practices Implemented

1. **Component Reusability**: All UI elements are modular components
2. **Lazy Loading**: Pages load on demand for better performance
3. **Clean Code**: Functional components with hooks
4. **Proper File Organization**: Logical folder structure
5. **No Inline Styles**: Uses existing CSS classes
6. **Accessibility**: Semantic HTML and ARIA labels
7. **SEO Ready**: Proper heading hierarchy and meta tags
8. **Performance**: Optimized images and code splitting

## Future Enhancements

Potential additions:
- Add state management (Context API or Redux)
- Integrate with backend API
- Add form validation
- Implement user authentication
- Add internationalization (i18n)
- Include unit tests
- Add PWA features
