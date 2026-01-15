// Image mapping for all sections
// Update the actual filenames based on the images in public/images folder

export const images = {
  // Hero section
  hero: {
    background: '/images/hero-bg.jpg',
  },

  // Commerce Platform section
  products: [
    '/images/product-1.jpg',
    '/images/product-2.jpg',
    '/images/product-3.jpg',
  ],

  // Entrepreneurs section
  entrepreneurs: [
    '/images/entrepreneur-1.jpg',
    '/images/entrepreneur-2.jpg',
    '/images/entrepreneur-3.jpg',
  ],

  // Sell Everywhere section
  sellEverywhere: {
    websiteBuilder: '/images/website-builder.jpg',
    pos: '/images/pos-system.jpg',
    checkout: '/images/checkout.jpg',
  },

  // Find Customers section
  findCustomers: {
    marketing: '/images/marketing.jpg',
    b2b: '/images/b2b.jpg',
  },

  // Global section
  global: {
    map: '/images/global-map.jpg',
  },

  // Business Management section
  business: {
    admin: '/images/admin-dashboard.jpg',
    mobile: '/images/mobile-app.jpg',
  },

  // Checkout Performance section
  checkout: {
    preview: '/images/checkout-preview.jpg',
    capital: '/images/capital-image.jpg',
  },

  // Easy Start section
  steps: [
    '/images/step-1.jpg',
    '/images/step-2.jpg',
    '/images/step-3.jpg',
  ],
};

// Fallback images from original site
export const cdnImages = {
  hero: '/images/hero-bg.jpg',
};
