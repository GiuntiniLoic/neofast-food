import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  fr: {
    translation: {
      tagline: 'DU BON. DU FRAIS. DU NEO.',
      brand: 'NEO',
      brandSub: 'FASTFOOD',
      hero: 'Votre prochaine envie\ncommence ici.',
      cta: 'Appuyez pour commencer',
      scanQr: 'Scanner un QR code',
      enterCode: 'Rentrer un code',
      chooseLanguage: 'Choisissez votre langue',
    },
  },
  en: {
    translation: {
      tagline: 'GOOD. FRESH. NEO.',
      brand: 'NEO',
      brandSub: 'FASTFOOD',
      hero: 'Your next craving\nstarts here.',
      cta: 'Tap to start',
      scanQr: 'Scan a QR code',
      enterCode: 'Enter a code',
      chooseLanguage: 'Choose your language',
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fr',
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
