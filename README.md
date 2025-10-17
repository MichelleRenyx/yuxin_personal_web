# Yuxin Ren's Personal Portfolio

This is a personal portfolio website for Yuxin Ren, built based on https://youtubebinjanportfolio.pages.dev

## Tech Stack

- **Frontend**: React 18 with Vite
- **Styling**: SCSS modules
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Carousel**: React Slick

## Getting Started

### Prerequisites

Make sure you have Node.js (version 14 or higher) and npm installed on your machine.

### Installation

1. Clone the repository
```bash
git clone https://github.com/MichelleRenyx/yuxin_personal_web.git
cd yuxin_personal_web
```

2. Install dependencies
```bash
npm install
```

### Development

To start the development server:

```bash
npm run dev
```

This will start the development server at `http://localhost:5173` (or another available port). The page will automatically reload when you make changes.

### Building for Production

To build the project for production:

```bash
npm run build
```

The built files will be generated in the `dist` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

### Deployment

To deploy to GitHub Pages:

```bash
npm run deploy
```

This will build the project and deploy it to the `gh-pages` branch.

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Experties/      # Expertise section
│   ├── Footer/         # Footer component
│   ├── Header/         # Header/Navigation
│   ├── Hero/           # Hero section
│   ├── People/         # People/Team section
│   ├── Portfolio/      # Portfolio showcase
│   ├── WorkExps/       # Work experience
│   └── Works/          # Works section
├── hooks/              # Custom React hooks
├── styles/             # Global styles and constants
├── utils/              # Utility functions and data
└── assets/             # Static assets
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to GitHub Pages