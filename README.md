A modern, fully responsive React.js website that combines design inspiration and UI patterns from Elsner.com and Dotsquares.com to deliver a clean, professional digital presence.

Key Features

Home Page
Engaging hero section with company statistics and clear call-to-action buttons.

Services Section
Showcase of 8+ areas of expertise including WordPress, Magento, Shopify, Laravel, and more.

Projects Section
Filterable project portfolio with category-based navigation.

Case Studies
Detailed case studies highlighting success stories, metrics, and outcomes.

Industries Section
Coverage of 12+ industries with icon-based visual representation.

Contact Form
Professional contact form built using React controlled components and state management.

Technologies Used

React 18.2.0 – Latest stable version of React

React Hooks – useState, useEffect for state and lifecycle management

CSS3 – Modern styling with responsive layouts

Google Fonts – Inter font family for clean typography

Installation & Setup
Prerequisites

Node.js (v14 or higher)

npm or yarn

Setup Steps

Install dependencies

npm install


Start the development server

npm start


Open your browser at:

http://localhost:3000


Create a production build

npm run build

Project Structure
src/
├── components/
│   ├── Navbar/
│   │   ├── Navbar.js
│   │   └── Navbar.css
│   ├── Hero/
│   │   ├── Hero.js
│   │   └── Hero.css
│   ├── TrustedBy/
│   ├── Services/
│   ├── Projects/
│   ├── CaseStudies/
│   ├── Industries/
│   ├── ContactForm/
│   └── Footer/
├── App.js
├── App.css
├── index.js
└── index.css

Components Overview
Navbar

Sticky navigation bar

Mobile-responsive hamburger menu

Smooth scrolling between sections

Hero Section

Gradient background

Key company statistics

Primary call-to-action buttons

Services

Grid-based layout

Hover interactions

Service highlights and metrics

Projects

Filterable gallery (All, Magento, WordPress, React, Mobile)

Animated project cards

Category-based filtering

Case Studies

Detailed case study cards

Performance metrics

Industry tags

Industries

Icon-based industry grid

Clean hover animations

Scalable layout

Contact Form

React controlled inputs

Basic form validation

Service selection dropdown

Feature Highlights

✅ Fully Responsive Design – Optimized for mobile, tablet, and desktop

✅ Modern React Architecture – Uses hooks and functional components

✅ Smooth Animations – CSS transitions and hover effects

✅ Dynamic Filtering – Category-based project filtering

✅ Form State Management – Built with React state handling

✅ Professional UI – Modern gradients, shadows, and spacing

Customization Guide
Update Theme Colors

Edit CSS variables in src/index.css:

:root {
    --primary-color: #2563eb;
    --secondary-color: #10b981;
}

Update Content

Modify the data arrays inside the respective component files.

Browser Compatibility

Chrome (latest)

Firefox (latest)

Safari (latest)

Microsoft Edge (latest)

Notes

Form submission currently logs data to the console; backend API integration is required for production.

Images are placeholders and should be replaced with actual assets.

Company logos are placeholders and should be updated with real logos.

Available Scripts

npm start – Run development server

npm run build – Generate production build

npm test – Run tests