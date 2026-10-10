import siteConfig from '../config/siteConfig';

/** True when a config value has been filled in with real information. */
export const isConfigured = (value) =>
  typeof value === 'string' && value.trim() !== '' && !/YOUR_|example\.com/i.test(value);

export const getEmailUrl = () => (isConfigured(siteConfig.email) ? `mailto:${siteConfig.email}` : null);

export const getWhatsAppUrl = (message = siteConfig.whatsappMessage) => {
  const number = siteConfig.whatsappNumber;
  if (!isConfigured(number) || !/^\d{7,15}$/.test(number)) return null;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
};

/**
 * Single source of truth for every social icon on the site.
 * `url` is null when the value is still a placeholder.
 * `primary` icons stay visible on small screens in the top bar.
 */
export const getSocialItems = () => {
  const { socials, freelancing } = siteConfig;
  const profile = (url) => (isConfigured(url) ? url : null);
  return [
    { id: 'instagram', label: 'Instagram', url: profile(socials.instagram), primary: true },
    { id: 'tiktok', label: 'TikTok', url: profile(socials.tiktok), primary: false },
    { id: 'facebook', label: 'Facebook', url: profile(socials.facebook), primary: false },
    { id: 'linkedin', label: 'LinkedIn', url: profile(socials.linkedin), primary: true },
    { id: 'github', label: 'GitHub', url: profile(socials.github), primary: true },
    { id: 'fiverr', label: 'Fiverr', url: profile(freelancing.fiverr), primary: false },
    { id: 'upwork', label: 'Upwork', url: profile(freelancing.upwork), primary: false },
    { id: 'whatsapp', label: 'WhatsApp', url: getWhatsAppUrl(), primary: true },
    { id: 'email', label: 'Email', url: getEmailUrl(), primary: true },
  ];
};
