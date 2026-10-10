# LAYER Storefront

A responsive React + Vite storefront concept for LAYER's first hoodie-and-trouser drop.

## Requirements
- Node.js 18 or newer
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite.

## Production build
```bash
npm run build
npm run preview
```

## Project structure
```text
src/
  components/
    CartDrawer.jsx
    Header.jsx
    ProductCard.jsx
    SizeGuide.jsx
  data/
    products.js
  hooks/
    useCart.js
  App.jsx
  main.jsx
  styles.css
```

## Included
- Responsive mobile-first storefront
- Sticky navigation and mobile menu
- Hero, product collection, matching set, brand story, service details, size guide, Instagram section and footer
- Product size selection
- Cart drawer with quantity controls and remove action
- Cart persistence using localStorage
- WhatsApp order handoff with cart summary
- Newsletter form validation placeholder
- Semantic landmarks, alt text, keyboard-operable controls and reduced-motion support

## Before launching
1. Replace the demo Unsplash images with your own product and campaign photos.
2. Confirm product prices, garment measurements, delivery fees, payment methods and exchange policy.
3. Replace `@layer.nepal` and the Instagram URL with your real profile.
4. In `src/components/CartDrawer.jsx`, replace the generic `https://wa.me/` URL with your business WhatsApp number in international format, digits only, e.g. `97798XXXXXXXX`.
5. Connect the newsletter form to an email marketing provider or backend.
6. Add a real checkout/payment integration if you want online payment. The current cart hands off the order to WhatsApp and does not process payment.
7. For production, consider a backend for inventory, orders, analytics and customer support.

## Architecture notes
- Product catalogue is centralised in `src/data/products.js`.
- Cart behaviour is isolated in `src/hooks/useCart.js`.
- Reusable UI lives in `src/components/`.
- Page composition and section content live in `src/App.jsx`.
