# Cedar Nest Website - Technical Documentation

## 🚀 Quick Start

```bash
# Install dependencies
yarn install

# Run development server
yarn dev

# Build for production
yarn build

# Deploy to Vercel
git push vercel main
```

## 📁 Project Structure

```
cedarnest/
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── layout.tsx            # Root layout with fonts & metadata
│   │   ├── page.tsx              # Homepage entry point
│   │   └── globals.css           # Global styles & Tailwind
│   │
│   ├── features/                 # Feature-based modules
│   │   └── home/
│   │       └── components/
│   │           ├── hero-section.tsx              # Hero with stats (Server)
│   │           ├── hero-background.tsx           # Particle animation (Client)
│   │           ├── particles.tsx                 # tsParticles config (Client)
│   │           ├── services-section-animated.tsx # Services cards (Client)
│   │           ├── process-section-animated.tsx  # Process timeline (Client)
│   │           ├── contact-section-animated.tsx  # Contact CTA (Client)
│   │           └── about-section-animated.tsx    # About content (Client)
│   │
│   ├── components/               # Shared components
│   │   ├── layout/
│   │   │   ├── header.tsx        # Navigation header (Server)
│   │   │   └── footer.tsx        # Site footer (Server)
│   │   └── animations/
│   │       └── scroll-animations.tsx  # Framer Motion variants
│   │
│   ├── config/
│   │   └── site.config.ts        # Site configuration & content
│   │
│   └── styles/
│       └── globals.css            # Tailwind CSS & custom styles
│
├── public/                       # Static assets
│   └── cedar-nest-logo.png       # Company logo (transparent PNG)
│
└── Configuration Files
    ├── next.config.js            # Next.js configuration
    ├── tailwind.config.ts        # Tailwind CSS configuration
    ├── tsconfig.json             # TypeScript configuration
    └── package.json              # Dependencies & scripts
```

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 15.5.12 | React framework with App Router |
| **React** | 19.2.4 | UI library |
| **TypeScript** | 5.5.3 | Type safety |
| **Tailwind CSS** | 3.4.10 | Utility-first CSS |
| **Framer Motion** | 12.34.0 | Scroll animations |
| **tsParticles** | 3.9.1 | Interactive particle effects |

## 🎨 Design System

### Colors (CSS Variables)
```css
--background: 210 20% 4%        /* Dark background */
--foreground: 0 0% 100%         /* White text */
--accent-cyan: #00D4FF           /* Primary cyan */
--accent-blue: #0066FF           /* Secondary blue */
--dark-lighter: #0A0F1B          /* Lighter dark variant */
--dark-card: #111827             /* Card backgrounds */
```

### Typography
```css
--font-space-grotesk  /* Headings - Futuristic font */
--font-inter          /* Body text - Clean, readable */
```

### Responsive Breakpoints
- Mobile: `sm:` (640px+)
- Tablet: `md:` (768px+)
- Desktop: `lg:` (1024px+)
- Large: `xl:` (1280px+)

## 🔧 Key Features

### 1. Particle Background Animation
**Location:** `/src/features/home/components/particles.tsx`
- Interactive mouse effects (repulse/attract)
- Click to add particles
- Cyan/blue color scheme
- Performance optimized with reduced particles

### 2. Scroll Animations
**Location:** `/src/components/animations/scroll-animations.tsx`
- Fade in/up effects
- Stagger animations for lists
- Scale animations for emphasis
- All sections animate on scroll

### 3. Server/Client Component Split
- **Server Components:** Header, Footer, Hero content (SEO optimized)
- **Client Components:** Animations, particles, interactive elements
- Prevents hydration errors
- Optimizes performance

## 🚀 Deployment

### Git Repository Setup
```bash
# Main repository (backup)
origin: https://github.com/Paharlaya/cedarnest.git

# Vercel deployment repository
vercel: https://github.com/Paharlaya/cedarnestweb.git
```

### Deployment Workflow
1. Make changes locally
2. Test with `yarn dev`
3. Build check: `yarn build`
4. Commit changes: `git add -A && git commit -m "message"`
5. Push to both repos:
   ```bash
   git push origin main    # Backup
   git push vercel main    # Deploy to Vercel
   ```

### Vercel Configuration
- **URL:** https://cedarnestweb.vercel.app
- **Auto-deploy:** Enabled on push to `main` branch
- **Node Version:** 18.x (Next.js 15 compatible)
- **Build Command:** `yarn build`
- **Output Directory:** `out/`

## 📝 Content Management

### Update Company Info
**File:** `/src/config/site.config.ts`
```typescript
export const company = {
  name: 'Cedar Nest',
  tagline: 'Transform Your Business',
  description: '...',
  logo: {
    src: '/cedar-nest-logo.png',
    alt: 'Cedar Nest Logo'
  }
}
```

### Update Services
**File:** `/src/features/home/components/services-section-animated.tsx`
- Modify the `services` array
- Each service has: title, description, icon, gradient

### Update Contact Info
**File:** `/src/config/site.config.ts`
```typescript
export const contactInfo = {
  email: 'cedarnestwebstudio@gmail.com',
  // Add phone, address, social links as needed
}
```

## 🐛 Common Issues & Solutions

### Issue 1: Hydration Errors
**Cause:** Random values generated differently on server/client
**Solution:** Use fixed values or move to client components

### Issue 2: Build Failures
**Check:**
- Run `yarn build` locally
- Check for TypeScript errors
- Verify all imports are correct

### Issue 3: Mobile Text Overflow
**Solution:** Adjust responsive classes
```tsx
// Use responsive text sizes
className="text-lg sm:text-2xl md:text-4xl"
// Add padding for mobile
className="px-4 sm:px-0"
// Use break-all for long text
className="break-all"
```

### Issue 4: Deployment Not Updating
**Check:**
1. Ensure pushing to correct remote: `git push vercel main`
2. Check Vercel dashboard for build logs
3. Clear browser cache

## 🔄 Making Updates

### Adding New Sections
1. Create component in `/src/features/home/components/`
2. Import in `/src/app/page.tsx`
3. Add scroll animations if needed
4. Test on mobile and desktop

### Updating Animations
**File:** `/src/components/animations/scroll-animations.tsx`
- Modify animation variants
- Adjust timing and easing
- Test performance impact

### Changing Particle Effects
**File:** `/src/features/home/components/particles.tsx`
- Adjust particle count (currently 120)
- Modify colors in `color.value` array
- Change interaction behaviors

## 📱 Mobile Optimization

### Current Mobile Fixes
- Hero text: `text-3xl` → `text-xl` on mobile
- Stats: Reduced size and spacing
- Email: Added `break-all` and smaller font
- Padding: Added responsive padding throughout

### Testing Mobile
1. Use browser dev tools (responsive mode)
2. Test on actual devices
3. Check Vercel preview on mobile
4. Verify touch interactions work

## 🔐 Environment Variables

Currently no environment variables required. If adding:
1. Create `.env.local` file
2. Add to Vercel dashboard
3. Update this documentation

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [tsParticles](https://particles.js.org/)
- [Vercel Deployment](https://vercel.com/docs)

## 👨‍💻 Developer Notes

1. **Always test builds locally** before pushing
2. **Mobile-first approach** - design for mobile, enhance for desktop
3. **Keep animations smooth** - 60fps target
4. **Optimize images** - use WebP/AVIF when possible
5. **Check lighthouse scores** - aim for 90+ performance

## 📞 Support

For questions or issues:
- Repository: https://github.com/Paharlaya/cedarnest
- Deployed Site: https://cedarnestweb.vercel.app

---

*Last Updated: February 2024*
*Built with ❤️ for Cedar Nest*