# Excellence Academy Kenya Website

A modern, professional school website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Features a floating transparent navbar, smooth animations, and comprehensive information about the school's programs and admissions.

## Features

- **Floating Transparent Navbar**: Dynamic navigation that changes appearance on scroll
- **Smooth Animations**: Engaging Framer Motion animations throughout
- **Responsive Design**: Mobile-first design that works on all devices
- **Modern UI**: Contemporary design with blue-teal gradient theme
- **SEO Optimized**: Built with Next.js 14+ for excellent search engine visibility

## Sections

1. **Hero**: Stunning hero section with school statistics and CTAs
2. **About**: School values and vision statement
3. **Programs**: Comprehensive program offerings from pre-primary to senior secondary
4. **Admissions**: Clear admission process and requirements
5. **Gallery**: Visual showcase of campus facilities and activities
6. **Contact**: Contact form with detailed school information
7. **Footer**: Social media links and quick navigation

## Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Geist Sans & Geist Mono

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd school-website
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Colors
The primary color scheme uses blue and teal gradients. To change colors, update the Tailwind classes:
- Primary: `blue-600` → your color
- Secondary: `teal-600` → your color

### Content
Update the following in the components:
- School name in `components/Navbar.tsx`
- Vision statement in `components/About.tsx`
- Programs in `components/Programs.tsx`
- Admission requirements in `components/Admissions.tsx`
- Contact information in `components/Contact.tsx`

### Metadata
Update SEO information in `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: "Your School Name",
  description: "Your description",
};
```

## Project Structure

```
school-website/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Programs.tsx
│   ├── Admissions.tsx
│   ├── Gallery.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── lib/
│   └── utils.ts
└── package.json
```

## Design Highlights

- **Professional Navbar**: Clean, transparent design with smooth transitions
- **Gradient Themes**: Beautiful blue-teal gradients for visual appeal
- **Interactive Cards**: Hover effects and animations on program cards
- **Step-by-step Process**: Clear admission process visualization
- **Mobile-Optimized**: Full mobile menu with smooth animations

## Key Components

### Hero Section
- Eye-catching statistics (Success Rate, Students, Teachers)
- Clear call-to-action buttons
- Animated background gradients

### Programs Section
- Six main program categories
- Age-appropriate groupings
- Color-coded program cards

### Admissions Section
- 4-step admission process
- Required documents checklist
- Important dates and times

### Contact Section
- Comprehensive contact information
- School hours display
- Multi-field inquiry form

## Performance

- Server-side rendering for fast page loads
- Optimized animations with Framer Motion
- Code splitting for minimal bundle size
- Lazy loading of components

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Credits

Built with modern web technologies for Excellence Academy Kenya.
