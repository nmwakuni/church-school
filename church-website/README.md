# Grace Church Kenya Website

A beautiful, modern church website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Features a floating transparent navbar, smooth animations, and creative design sections.

## Features

- **Floating Transparent Navbar**: Elegant navigation that adapts based on scroll position
- **Smooth Animations**: Powered by Framer Motion for delightful user interactions
- **Responsive Design**: Fully responsive across all devices
- **Modern UI**: Clean, contemporary design with gradient accents
- **SEO Optimized**: Built with Next.js 14+ for optimal performance and SEO

## Sections

1. **Hero**: Eye-catching hero section with animated gradients and service information
2. **About**: Core values and mission statement
3. **Services**: Church programs and service times
4. **Events**: Upcoming church events and activities
5. **Gallery**: Visual showcase of church life
6. **Contact**: Contact form and church information
7. **Footer**: Social links and quick navigation

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
cd church-website
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
The primary color scheme uses purple and pink gradients. To change colors, update the Tailwind classes in the components:
- Primary: `purple-600` → your color
- Secondary: `pink-600` → your color

### Content
Update the following in the components:
- Church name in `components/Navbar.tsx`
- Mission statement in `components/About.tsx`
- Service times in `components/Services.tsx`
- Event details in `components/Events.tsx`
- Contact information in `components/Contact.tsx`

### Metadata
Update SEO information in `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: "Your Church Name",
  description: "Your description",
};
```

## Project Structure

```
church-website/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Events.tsx
│   ├── Gallery.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── lib/
│   └── utils.ts
└── package.json
```

## Design Highlights

- **Floating Navbar**: Transparent when at top, solid with blur on scroll
- **Gradient Backgrounds**: Beautiful purple-pink gradients throughout
- **Smooth Scrolling**: Enhanced user experience with smooth scroll behavior
- **Hover Effects**: Interactive elements with scale and color transitions
- **Mobile Menu**: Fully functional mobile navigation

## Performance

- Built with Next.js App Router for optimal performance
- Server-side rendering for fast initial page loads
- Optimized animations with Framer Motion
- Minimal bundle size with tree-shaking

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Credits

Built with ❤️ using modern web technologies for Grace Church Kenya.
