# TechPartner Website - React.js

एक modern, responsive React.js website जो Elsner.com और Dotsquares.com के design elements को combine करती है।

## Features

- **Home Page**: Hero section with company statistics और call-to-action
- **Services Section**: 8+ expertise areas showcase (WordPress, Magento, Shopify, Laravel, etc.)
- **Projects Section**: Filterable project portfolio with categories
- **Case Studies**: Detailed case studies with metrics और success stories
- **Industries Section**: 12+ industries served with icons
- **Contact Form**: Professional contact form with React state management

## Technologies Used

- **React 18.2.0** - Latest React version
- **React Hooks** - useState, useEffect for state management
- **CSS3** - Modern styling with CSS modules
- **Google Fonts** - Inter font family

## Installation & Setup

### Prerequisites
- Node.js (v14 या उससे ऊपर)
- npm या yarn

### Steps

1. **Dependencies install करें:**
```bash
npm install
```

2. **Development server start करें:**
```bash
npm start
```

3. Browser में खुल जाएगा: `http://localhost:3000`

4. **Production build बनाने के लिए:**
```bash
npm run build
```

## Project Structure

```
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
```

## Components Overview

### Navbar
- Sticky navigation
- Mobile-responsive hamburger menu
- Smooth scroll to sections

### Hero
- Gradient background
- Company statistics
- Call-to-action buttons

### Services
- Grid layout
- Hover effects
- Service statistics

### Projects
- Filterable gallery (All, Magento, WordPress, React, Mobile)
- Category-based filtering
- Project cards with animations

### Case Studies
- Case study cards
- Success metrics
- Industry tags

### Industries
- Grid of industry cards
- Icon-based representation
- Hover animations

### Contact Form
- React controlled components
- Form validation
- Service dropdown

## Features Breakdown

- ✅ **Responsive Design** - Mobile, tablet, desktop सभी devices पर perfect
- ✅ **React Hooks** - Modern React patterns
- ✅ **Smooth Animations** - CSS transitions और hover effects
- ✅ **Filterable Projects** - Category-based filtering
- ✅ **Form Handling** - React state management
- ✅ **Modern UI** - Gradients, shadows, और modern design

## Customization

### Colors Change करने के लिए:
`src/index.css` में CSS variables edit करें:
```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #10b981;
    /* ... */
}
```

### Content Change करने के लिए:
Respective component files में data arrays edit करें।

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes

- Form submission currently console में log करता है - backend API integrate करें
- Images placeholder gradients हैं - actual images add करें
- Company logos placeholder हैं - actual logos add करें

## Available Scripts

- `npm start` - Development server start करता है
- `npm run build` - Production build बनाता है
- `npm test` - Tests run करता है

## License

Free to use और modify करने के लिए।

---

**Made with ❤️ using React.js**

