# Ricco - Premium Tech Company Website

A futuristic, Korean-inspired minimalist tech company website built with Next.js, featuring high-end animations, smooth transitions, and interactive effects.

## 🚀 Features

- **Hero Section**: Fullscreen with 3D effects, particle background, typing animation, and parallax mouse movement
- **About Section**: Animated cards with hover lift effects and scroll reveal animations
- **Services Section**: Glassmorphism cards with hover scale, shadow, and glow border effects
- **Portfolio Section**: Project showcase with filter buttons and smooth transitions
- **Tech Stack Section**: Infinite scroll marquee with floating animations
- **Stats Section**: Animated counters with parallax background
- **Testimonials Section**: Auto-sliding cards with glass UI and blur effects
- **Contact Section**: Modern form with floating labels and input focus glow effects
- **Footer**: Comprehensive footer with social links and scroll-to-top button

## 🎨 Design Features

- Korean minimal + futuristic glassmorphism design
- Light mode only with soft shadows and glowing borders
- Blur effects (backdrop-blur) throughout
- Smooth hover transitions on all interactive elements
- Clean typography using Inter and Poppins fonts
- Custom scrollbar styling
- Gradient overlays and backgrounds

## ⚙️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: React (JSX)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Effects**: Three.js + React Three Fiber
- **Particles**: tsParticles
- **Scroll Animations**: GSAP
- **Smooth Scrolling**: Lenis
- **Icons**: Lucide React

## 📁 Project Structure

```
ricco2/
├── app/
│   ├── layout.jsx          # Root layout with fonts and metadata
│   ├── page.jsx            # Main page with all components
│   └── globals.css         # Global styles and Tailwind directives
├── components/
│   ├── Navbar.jsx          # Sticky navbar with blur effect
│   ├── Hero.jsx            # Hero section with 3D and particles
│   ├── About.jsx           # About section with animated cards
│   ├── Services.jsx        # Services grid with glassmorphism
│   ├── Portfolio.jsx       # Portfolio with filter animations
│   ├── TechStack.jsx       # Tech stack with infinite marquee
│   ├── Stats.jsx           # Stats with animated counters
│   ├── Testimonials.jsx    # Auto-sliding testimonials
│   ├── Contact.jsx         # Contact form with animations
│   └── Footer.jsx          # Footer with social links
├── lib/
│   └── particles.js        # Particle configuration
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
└── README.md
```

## 🛠️ Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🎯 Key Components

### Hero Section
- 3D rotating sphere using Three.js
- Particle background with tsParticles
- Typing animation for headline
- Parallax mouse movement effect
- Gradient overlay with glow effects

### Animations
- Page load animations (fade + blur)
- Scroll-triggered animations using Framer Motion
- Hover effects on buttons (glow + scale)
- Hover effects on cards (lift + shadow)
- Smooth scrolling with Lenis
- Custom cursor effects (optional)

### Glassmorphism
- Consistent glass card styling
- Backdrop blur effects
- Subtle borders and shadows
- Hover state enhancements

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

This project is for demonstration purposes.

## 🤝 Contributing

Feel free to fork this project and customize it for your needs!

## 🎨 Inspiration

Inspired by:
- Apple's minimalist design
- Samsung's Korean tech aesthetics
- Awwwards-winning websites
- Modern glassmorphism trends
