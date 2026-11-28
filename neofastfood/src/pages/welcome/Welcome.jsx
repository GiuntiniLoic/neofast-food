import { useTranslation } from 'react-i18next';
import './Welcome.css';

const LANGUAGES = [
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'en', label: 'English',  flag: '🇬🇧' },
];

export default function Welcome() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
  };

  return (
    <main className="welcome">
      {/* Top tagline */}
      <p className="welcome__tagline">{t('tagline')}</p>

      {/* Brand */}
      <div className="welcome__brand">
        <h1 className="welcome__brand-name">{t('brand')}</h1>
        <p className="welcome__brand-sub">{t('brandSub')}</p>
      </div>

      <hr className="welcome__divider" />

      {/* Hero sentence */}
      <p className="welcome__hero">{t('hero')}</p>

      {/* CTA buttons */}
      <div className="welcome__actions">
        <button className="btn btn--primary">{t('cta')}</button>

        <div className="welcome__secondary-actions">
          <button className="btn btn--secondary">{t('scanQr')}</button>
          <button className="btn btn--secondary">{t('enterCode')}</button>
        </div>
      </div>

      <div className="welcome__spacer" />

      {/* Language picker */}
      <section className="welcome__lang" aria-label={t('chooseLanguage')}>
        <p className="welcome__lang-label">{t('chooseLanguage')}</p>
        <div className="welcome__lang-options">
          {LANGUAGES.map(({ code, label, flag }) => (
            <button
              key={code}
              className={`lang-btn${i18n.language === code ? ' lang-btn--active' : ''}`}
              onClick={() => changeLanguage(code)}
              aria-pressed={i18n.language === code}
              aria-label={label}
            >
              <span className="lang-btn__flag" role="img" aria-hidden="true">{flag}</span>
              <span className="lang-btn__label">{label}</span>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}
