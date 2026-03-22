# Les Paniers Restaurant Website

A modern, elegant restaurant website built with React, TypeScript, Tailwind CSS, and Vite.

## Features

- Modern, responsive design with warm earth-tone color palette
- Multi-page application with React Router
- Dynamic menu system loaded from JSON
- Online reservation integration with TheFork
- Catering inquiry forms
- Contact page with opening hours
- Newsletter subscription
- Mobile-friendly navigation

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Customization Guide

### 1. Site Configuration

Edit `src/siteConfig.ts` to update:

- Restaurant name and tagline
- Contact information (address, phone, email)
- Opening hours for each day
- TheFork reservation URL
- Social media links
- Color palette

Example:
```typescript
export const siteConfig = {
  restaurant: {
    name: 'Your Restaurant Name',
    tagline: 'Your tagline here',
  },
  contact: {
    address: 'Your address',
    phone: '+33 X XX XX XX XX',
    email: 'your@email.com',
  },
  // ... more configuration
};
```

### 2. Menu Content

Edit `src/data/menu.json` to update:

- Starters, mains, desserts, and wine list
- Dish names, descriptions, and prices
- Wine pairings

The menu is automatically rendered from this JSON file.

### 3. Images

Place your images in the `public/images/` directory with these filenames:

#### Home Page:
- `hero-exterior.jpg` - Main hero image (1920x1080px recommended)
- `about-interior.jpg` - Restaurant interior (800x600px)
- `wine-shelves.jpg` - Wine collection display (800x600px)
- `dish-highlight-1.jpg` - Featured dish 1 (600x400px)
- `dish-highlight-2.jpg` - Featured dish 2 (600x400px)
- `dish-highlight-3.jpg` - Featured dish 3 (600x400px)

#### Catering Page:
- `catering-header.jpg` - Catering hero image (1200x800px)
- `catering-appetizers.jpg` - Mini appetizers display
- `catering-charcuterie.jpg` - Charcuterie board
- `catering-desserts.jpg` - Dessert display
- `catering-cheese.jpg` - Cheese selection
- `catering-entrees.jpg` - Entrée platters
- `catering-buffet.jpg` - Buffet setup
- `catering-cocktail.jpg` - Cocktail bites
- `catering-sweets.jpg` - Sweet station

All catering gallery images should be 800x600px for consistency.

### 4. Colors

The site uses a warm color palette defined in `tailwind.config.js`:

- `paniers-brown`: Saddle brown (#8B4513)
- `paniers-terracotta`: Peru (#D2691E)
- `paniers-red`: Crimson (#C41E3A)
- `paniers-cream`: Seashell (#FFF8F3)
- `paniers-light`: Linen (#F5F1ED)
- `paniers-dark`: Dark gray (#2C2C2C)
- `paniers-border`: Beige (#E8DDD6)
- `paniers-wood`: Tan (#D4A574)

### 5. Fonts

The site uses:
- **Playfair Display** (serif) for headings
- **Inter** (sans-serif) for body text

These are loaded from Google Fonts in `index.html`.

## Deployment

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

### Other Platforms

The site is a standard Vite application and can be deployed to:
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any static hosting service

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── Header.tsx   # Navigation header
│   ├── Footer.tsx   # Site footer
│   ├── Button.tsx   # Button component
│   ├── Card.tsx     # Card component
│   └── Section.tsx  # Section wrapper
├── pages/           # Page components
│   ├── Home.tsx     # Homepage
│   ├── Menu.tsx     # Menu page
│   ├── Reservation.tsx  # Reservation page
│   ├── Catering.tsx     # Catering page
│   └── Contact.tsx      # Contact page
├── data/
│   └── menu.json    # Menu data
├── siteConfig.ts    # Site configuration
├── App.tsx          # Main app component
└── main.tsx         # Entry point
```

## Technology Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **Lucide React** - Icons

## Support

For issues or questions about customization, refer to:
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Vite Documentation](https://vitejs.dev)

## License

All rights reserved.
