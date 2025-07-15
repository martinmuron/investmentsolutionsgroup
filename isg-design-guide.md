ISG Website - Design Guide for Cursor AI
This design guide defines the visual and functional standards for the ISG website, inspired by Apple’s minimalistic, elegant, and user-centered aesthetic, including emerging 2025 trends like "liquid glass" for subtle depth and tactility.

Visual Design System
Color Palette
Primary: ISG Green (#22c55e) - core brand color for emphasis
Primary Dark: Darker Green (#16a34a) - hover states and depth
Primary Light: Light Green (#dcfce7) - subtle backgrounds
Neutral Accent: Soft Beige (#f5f5f4) - secondary backgrounds or highlights
Background: Pure White (#ffffff) and Light Gray (#f8fafc)
Text: Near Black (#111827) for headings, Medium Gray (#6b7280) for body text
Borders: Very Light Gray (#e5e7eb) for subtle dividers
Cards: Pure White (#ffffff) with minimal shadows or translucent effects
Gradients: Subtle linear gradients (e.g., from #ffffff to #f8fafc) for depth in glassy elements
Dark Mode:
Background: Dark Gray (#1c2526)
Text: Light Gray (#e5e7eb)
Primary: Adjusted Green (#34d399)
Accessibility: All color combinations must meet WCAG 2.1 AA contrast ratios (4.5:1 for normal text, 3:1 for large text), especially on translucent backgrounds.
Typography
Font Family: Inter (Google Fonts), fallback: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif
Font Sizes (Responsive):
sm: 14px (captions, fine print)
base: 16px (body text)
lg: 18px (subheadings)
xl: 24px (secondary headings)
2xl: 32px (main headings)
3xl: 40px (hero titles)
Font Weights:
Light (300): Hero titles for elegance
Regular (400): Body text for readability
Medium (500): Subheadings
Semibold (600): Important text or CTAs
Bold (700): Main headings
Line Height: 1.6–1.8 for body text, 1.2–1.4 for headings
Letter Spacing: Default, +0.02em for uppercase text
Dynamic Type: Support browser/system text size adjustments for accessibility
Glassmorphism Elements (2025 Trend)
Translucency: Use subtle CSS blurs (e.g., backdrop-filter: blur(10px)) and semi-transparent backgrounds (e.g., rgba(255, 255, 255, 0.8)) for overlays, cards, and navigation to create a "liquid glass" effect with depth and tactility.
Layering: Apply to hero sections, modals, or cards for a hovering, physical feel without overwhelming minimalism.
Guidelines: Ensure high contrast for text; fallback to solid backgrounds for older devices; test performance.
Design Philosophy
Minimalism: Clean, uncluttered layouts with generous white space
No Icons: Use typography, numbers, or letters instead of icons
No Emojis: Maintain professional, text-based communication
Apple-Inspired Aesthetics: Sophisticated, refined, elegant, with subtle depth via liquid glass effects
Content-First: Prioritize content clarity and focus
Human-Centered Design: Intuitive, accessible, and user-friendly
Purposeful Motion: Animations enhance usability, not decoration
Tactility: Incorporate subtle glassy layers for a physical, intuitive feel
Layout Principles
Spacing System
Modular Scale: Use increments of 4px (e.g., 8px, 16px, 24px, 32px, 48px, 64px)
Section Spacing: Large vertical padding (py-20 to py-32)
Component Spacing: Generous internal padding (p-8 to p-12)
Element Spacing: Consistent margins (8px to 16px)
Container Widths: max-w-6xl (1280px) or max-w-7xl (1440px) for readability
Edge Cases: Ensure layouts adapt for <320px and >1920px screens
Grid System
Mobile-First: Single column, expanding to 2 or 3 columns on larger screens
Breakpoints:
Mobile: 1 column (<640px)
Tablet: 2 columns (640px–1024px)
Desktop: 3 columns (>1024px)
Gaps: Consistent gap-8 or gap-12 between grid items
Alignment: Center-aligned content containers
Asymmetry: Use subtle asymmetrical layouts for visual interest (e.g., offset hero sections)
White Space Usage
Proportional Scaling: Increase padding on larger screens, reduce on mobile
Breathing Room: Elements should never feel cramped
Visual Hierarchy: Use white space to emphasize importance
Safe Zones: Maintain 16px–24px padding near screen edges to avoid cutoffs
Purposeful Application: Leverage white space around glassy elements to enhance depth and focus
Component Design
Buttons
Primary Style: ISG Green background, white text, border-radius: 8px
Secondary Style: White background, ISG Green border, ISG Green text
Disabled Style: Reduced opacity (0.5), grayed-out text, no interactivity
Size: Minimum 44px height, 120px width for touch targets
Hover States: Subtle color transitions (0.2s, cubic-bezier(0.25, 0.1, 0.25, 1.0))
Microinteractions: Slight scale-up (1.05x) on tap for mobile
Cards
Background: Pure White (#ffffff) or translucent (e.g., rgba(255, 255, 255, 0.8)) with blur
Shadows: Subtle (shadow-sm), barely visible, or replaced with glass effects
Borders: None or Very Light Gray (#e5e7eb) if needed
Padding: Generous (p-8 to p-12)
Rounded Corners: border-radius: 8px–12px
Focus States: ISG Green outline for keyboard navigation
Layering: Slight elevation or stacking effects for depth; apply liquid glass for hovering feel
Forms
Inputs: Simple borders, ISG Green focus states
Spacing: 16px–24px between fields
Labels: Clear, typography-based, no placeholder-only fields
Validation: Real-time feedback (e.g., green checkmark for valid input)
Error States: Subtle ISG Green outlines, helpful error messages
Single Column: Stack fields vertically
Autofill: Support browser autofill and password managers
Navigation
Typography-Based: Use “Menu” text, no hamburger icons
Hierarchy: Clear distinction between nav levels (e.g., weight, size)
Hover States: Subtle ISG Green transitions, no underlines
Mobile Menu: Simple, full-screen, text-based menu
Sticky Navigation: Fixed header with subtle shadow or blur effect (liquid glass style)
Breadcrumbs: Lightweight, text-based for deeper pages
Visual Hierarchy
Headings
H1: Large (40px), light weight, generous spacing (mt-12, mb-6)
H2: Medium (32px), medium weight, section headers
H3: Smaller (24px), regular weight, subsections
Contrast: Ensure WCAG 2.1 AA compliance for readability, especially on glassy backgrounds
Text Content
Body Text: 16px–18px, regular weight, 65–75 character line length
Emphasis: Use font weight (semibold) instead of color
Lists: Simple bullet points or numbers, consistent spacing
Links: Subtle ISG Green underlines, hover transitions
Microcopy: Concise, human (e.g., “Learn More” instead of “Click Here”)
Truncation: Use ellipses or “Read More” for long text
Visual Elements
Dividers: Prefer white space over lines; use Very Light Gray if needed
Emphasis: Typography weight and size for hierarchy
Highlighting: Subtle ISG Light Green backgrounds or glassy overlays
Call-outs: Clean boxes with Light Gray or ISG Light Green backgrounds
Animation & Interactions
Subtle Animations
Page Transitions: Gentle fade-ins (0.3s, cubic-bezier(0.25, 0.1, 0.25, 1.0))
Hover States: Smooth color transitions (0.2s–0.3s)
Loading States: Simple, elegant spinners in ISG Green
Scroll Animations: Subtle reveals, no distractions
Performance: Use CSS transforms and hardware acceleration (e.g., will-change: transform) for smooth animations
Reduced Motion: Disable non-essential animations for prefers-reduced-motion
Liquid Glass Motions: Gentle layer transitions for depth, ensuring tactility without performance hits
Interactive Elements
Buttons: Clear hover and pressed states
Links: Smooth ISG Green color transitions
Form Fields: ISG Green focus states, real-time validation
Cards: Gentle elevation on hover
Keyboard Navigation: Clear focus indicators (ISG Green outlines)
Content Presentation
Text Formatting
Paragraphs: 65–75 character line length, 1.6–1.8 line height
Alignment: Left-aligned body text, center-aligned headings
Emphasis: Bold for importance, italic sparingly
Localization: Design for text expansion (e.g., 30% for German)
Visual Content
Images: Professional, high-quality, WebP format, max 2MB
Alt Text: Descriptive for accessibility and SEO
Placeholders: Simple, elegant (e.g., solid ISG Light Green)
Galleries: Clean grids with consistent 16:9 or 4:3 aspect ratios
Graphics: Minimal, functional, content-supporting
Lazy Loading: Apply to images and off-screen content
Hero Sections: Full-page or large-scale with glassy overlays and subtle gradients for impact
Accessibility Guidelines
Screen Readers: Use ARIA labels and roles for all interactive elements
Color Contrast: Meet WCAG 2.1 AA standards, with extra checks for translucent/glassy backgrounds
Keyboard Navigation: Full Tab and Enter key support
Focus Indicators: ISG Green outlines for interactive elements
Dynamic Type: Support text size adjustments
Reduced Motion: Respect prefers-reduced-motion preferences
Testing Tools: Use Lighthouse, Axe, and Wave for audits
Performance Optimization
Lazy Loading: Images and off-screen content
Critical CSS: Inline for above-the-fold content
Asset Compression: WebP images, compressed fonts/scripts
CDN: Use for static assets to improve global performance
Goal: Google Lighthouse scores of 90+ for Performance, Accessibility, SEO
Page Load: Target <2s for initial load
Glass Effects: Optimize blurs with hardware acceleration; provide solid fallbacks for low-performance devices
Eco-Friendly: Minimize asset sizes and animations to reduce energy consumption, aligning with sustainable design
Testing and Validation
Prototyping: Create high-fidelity Figma prototypes to validate design
User Testing: Conduct usability tests with 5–10 users
Cross-Browser Testing: Safari, Chrome, Firefox, Edge
Performance Metrics: Monitor load times and Lighthouse scores
Accessibility Audits: Use tools like WAVE or axe for compliance
A/B Testing: Evaluate glassy effects on clarity and conversions
Professional Standards
Clean Design Principles
Consistency: Uniform elements across all pages
Alignment: Precise, grid-based layouts
Contrast: Sufficient for readability
Hierarchy: Clear order of importance
Simplicity: Remove unnecessary elements
Performance: Optimize for speed and responsiveness
Brand Consistency
Color Usage: ISG Green for strategic emphasis, not overuse
Typography: Consistent use of Inter
Spacing: Predictable, modular spacing system
Voice: Confident, approachable, innovative tone
Logo Usage (if applicable): Minimum size 24px, clear space 1x logo height, ISG Green or white
Things to Avoid
Icons: Use text, numbers, or letters instead
Emojis: Maintain professional communication
Flashy Animations: Keep interactions subtle
Bright Colors: Stick to defined palette
Decorative Elements: Focus on content
Pop-ups: Avoid intrusive overlays
Auto-playing Media: No auto-playing video/audio
Complex Gradients: Use solid colors or subtle single-color gradients
Cluttered Layouts: Embrace white space
Inconsistent Spacing: Follow spacing system
Poor Contrast: Ensure readability
Busy Backgrounds: Keep backgrounds clean
Overused Glass Effects: Apply liquid glass sparingly to maintain minimalism and performance