/**
 * EmailJS credentials, read from Vite env vars so nothing sensitive is
 * hardcoded in source. Copy .env.example to .env.local and fill these in —
 * see EMAIL_SETUP.md for the full walkthrough.
 *
 * Note: the destination inbox (jerylitmanen@gmail.com) is NOT set here.
 * It's configured as the fixed "To Email" on the EmailJS template itself,
 * so it can't be tampered with from the browser.
 */
export const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  autoReplyTemplateId: import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

export const isEmailjsConfigured = Boolean(
  EMAILJS_CONFIG.serviceId && EMAILJS_CONFIG.templateId && EMAILJS_CONFIG.publicKey
);
