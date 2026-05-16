---
name: Helios Industrial
colors:
  surface: '#f9f9ff'
  surface-dim: '#cfdaf1'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d8e3fa'
  on-surface: '#111c2c'
  on-surface-variant: '#44464e'
  inverse-surface: '#263142'
  inverse-on-surface: '#ebf1ff'
  outline: '#75777f'
  outline-variant: '#c5c6cf'
  surface-tint: '#4c5e88'
  primary: '#00061c'
  on-primary: '#ffffff'
  primary-container: '#081e45'
  on-primary-container: '#7587b3'
  inverse-primary: '#b4c6f6'
  secondary: '#b90c09'
  on-secondary: '#ffffff'
  secondary-container: '#de2e21'
  on-secondary-container: '#fffbff'
  tertiary: '#05080a'
  on-tertiary: '#ffffff'
  tertiary-container: '#1d2022'
  on-tertiary-container: '#85878a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d9e2ff'
  primary-fixed-dim: '#b4c6f6'
  on-primary-fixed: '#031a41'
  on-primary-fixed-variant: '#34466f'
  secondary-fixed: '#ffdad5'
  secondary-fixed-dim: '#ffb4a9'
  on-secondary-fixed: '#410000'
  on-secondary-fixed-variant: '#930002'
  tertiary-fixed: '#e0e3e6'
  tertiary-fixed-dim: '#c4c7ca'
  on-tertiary-fixed: '#191c1e'
  on-tertiary-fixed-variant: '#44474a'
  background: '#f9f9ff'
  on-background: '#111c2c'
  surface-variant: '#d8e3fa'
typography:
  headline-xl:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  gutter-sm: 16px
  gutter-md: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  max-width: 1280px
---

## Brand & Style

The design system is engineered for **REPOWER-RDC**, projecting a persona of industrial reliability, technological precision, and sustainable progress. It targets commercial and residential energy stakeholders in the Democratic Republic of Congo, demanding a visual language that feels established, authoritative, and future-proof.

The visual style is **Corporate / Modern** with a lean toward **Industrial Minimalism**. This is achieved through high-contrast color application, a rigid layout structure, and a total absence of decorative "fluff." The aesthetic prioritizes clarity and functional density, mirroring the efficiency of solar infrastructure.

The emotional response should be one of absolute trust—conveying that the energy solutions provided are as robust as the UI itself.

## Colors

This design system utilizes a high-contrast palette to drive hierarchy and brand recognition.

- **Primary (Deep Navy):** Represents stability, engineering depth, and the professional foundation of the brand. Used for navigation, primary headings, and core UI structures.
- **Secondary (Solar Red):** Inherited from the brand logo, this is a high-energy call-to-action color. It is reserved for critical interactions, alerts, and highlighting key performance metrics.
- **Tertiary (Cool Slate):** A light, desaturated blue-grey used for backgrounds and surface tiering, preventing the interface from feeling starkly white.
- **Neutrals:** A range of cool greys are used for body text and supportive UI elements to maintain a technical, clean atmosphere.

The default mode is **Light**, ensuring maximum readability for technical documentation and professional proposals in high-glare environments.

## Typography

The typography system relies exclusively on **Hanken Grotesk**, a typeface that balances geometric precision with a modern, approachable clarity. 

- **Headlines:** Use heavy weights (700-800) with tight letter spacing to mirror the bold, compact nature of the "REPOWER" logo. 
- **Body:** Standard weights are used for readability, with a slightly increased line height (1.5x) to handle technical data comfortably.
- **Labels:** Utilizes semi-bold weights and uppercase transformation to evoke a "technical spec sheet" aesthetic, useful for data points and small UI controllers.
- **Hierarchy:** High contrast between headline and body sizes is essential to guide the user through complex information.

## Layout & Spacing

The design system employs a **Fixed Grid** model for desktop and a **Fluid Grid** for mobile. 

- **Grid:** A 12-column system is used across all platforms. On desktop, the content is centered with a max-width of 1280px.
- **Rhythm:** An 8px base unit (linear scale) dictates all margins, paddings, and component heights. This creates a predictable, "snapped" industrial feel.
- **Breakpoints:**
  - **Mobile (< 600px):** 4 columns, 16px margins, 16px gutters.
  - **Tablet (600px - 1024px):** 8 columns, 24px margins, 24px gutters.
  - **Desktop (> 1024px):** 12 columns, 64px margins, 24px gutters.
- **Reflow:** Complex product tables and solar arrays reflow from multi-column layouts into vertically stacked cards on mobile devices.

## Elevation & Depth

To maintain the "High-Tech" and "Industrial" feel, this design system avoids soft, organic shadows in favor of **Tonal Layering** and **Low-Contrast Outlines**.

- **Surface Tiering:** Different levels of information are separated by subtle shifts in background color (e.g., White surface on a Tertiary Slate background).
- **Outlines:** All containers and cards use a 1px solid border (#E2E8F0) to define their boundaries clearly, echoing architectural blue-prints.
- **Interactions:** Shadows are only used during "Active" or "Hover" states to indicate lift. These shadows are "Hard" (low blur, higher opacity) to maintain the rigid style.
- **Backdrop:** For modal overlays, a dark tint (#081e45 at 40% opacity) is used to maintain brand alignment even in the background layers.

## Shapes

The shape language is **Soft (0.25rem)**. 

While the brand is industrial, pure sharp edges can feel aggressive or dated. A 4px (Soft) radius is applied to buttons, input fields, and cards to provide a modern, "machined" look—similar to the finished edges of high-quality industrial hardware or solar panel frames. 

- **Standard Radius:** 4px (UI elements)
- **Large Radius:** 8px (Large containers/Cards)
- **Interactive elements:** Maintain consistency across all states to ensure the interface feels solid and unchanging.

## Components

### Buttons
- **Primary:** Deep Navy (#081e45) background with white text. Bold, rectangular with 4px radius.
- **Action:** Solar Red (#ee3a2b) for high-priority conversions like "Request Quote" or "Emergency Support."
- **Ghost:** Transparent background with 1px Deep Navy border for secondary actions.

### Cards
- **Product Cards:** White background, 1px grey outline, no shadow. Images should be sharp and high-resolution.
- **Data Cards:** Use the Tertiary background to group related energy metrics.

### Form Fields
- **Industrial Inputs:** Solid 1px border (#CBD5E0). Labels are semi-bold and sit above the field. Focused states use a 2px Deep Navy border.
- **Success/Error:** Use standard green for success, but retain Solar Red (#ee3a2b) for errors to maintain brand cohesion.

### Icons
- **Style:** 2px stroke weight, geometric, and technical. 
- **Solar Set:** Custom icons for "Panel Yield," "Battery Storage," and "Grid Status" should use the Primary Navy with Secondary Red accents for active indicators.

### Progress Indicators
- Linear bars are preferred over circular ones to reinforce the horizontal, structured nature of the layout.