/**
 * CENTRAL SITE CONFIGURATION
 * ---------------------------------------------------------------
 * Edit this file to update contact details and profile links everywhere
 * on the site (header, footer, contact page, About page, CTAs).
 *
 * Any value that still contains "YOUR_" or "example.com" is treated as a
 * placeholder: the related icon is shown greyed-out and is NOT clickable,
 * so visitors are never sent to a fake or wrong profile.
 */
const siteConfig = {
  name: 'QuorvexaTech',
  domain: 'quorvexatech.com',
  url: 'https://quorvexatech.com',
  tagline: 'We Build Digital Experiences That Grow Your Business.',
  description:
    'QuorvexaTech is a growing web development studio building responsive business websites, online stores, landing pages and custom React.js sites.',

  // ---- Contact -------------------------------------------------
  email: 'hashirg620@gmail.com',
whatsappNumber: '92336861622',
  whatsappMessage: "Hello QuorvexaTech, I'd like to discuss a website project.",

  // ---- Social profiles ----------------------------------------
  socials: {
    instagram: 'https://www.instagram.com/quorvexa_offical/',
    tiktok: 'https://www.tiktok.com/@quorvexa_offical',
    facebook: 'https://www.facebook.com/profile.php?id=61595211802708',
    linkedin: 'https://www.linkedin.com/in/hashirmahmood08',
    github: 'https://github.com/Hashirahm11',
  },

  // ---- Freelancing profiles -----------------------------------
  freelancing: {
    fiverr: 'https://www.fiverr.com/sellers/hashirahmad640',
    upwork: 'https://www.upwork.com/freelancers/~0118097504753c4cdc?mp_source=share',
  },

  // ---- Developer portfolio (shown on the About page) -----------
  developerPortfolio: {
    label: 'Developer portfolio',
    url: 'https://YOUR_PORTFOLIO_URL',
  },

  // ---- Location / map ------------------------------------------
  // Leave both empty until a real address is available. The map only appears when
  // mapEmbedUrl is a genuine embed URL (Google Maps -> Share -> Embed a map -> copy the src="..." URL).
  location: {
  label: 'Our location',
  address: 'Gulberg III, Lahore, Pakistan',
  mapEmbedUrl: 'https://maps.google.com/maps?q=31.5105453,74.3412813&z=15&output=embed',
},

  // ---- Contact form --------------------------------------------
  // The form uses Formspree when VITE_FORMSPREE_ENDPOINT is set, otherwise Netlify Forms.
  form: {
    netlifyFormName: 'contact',
    formspreeEndpoint: import.meta.env.VITE_FORMSPREE_ENDPOINT || '',
  },
};

export default siteConfig;
