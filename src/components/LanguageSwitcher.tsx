import { useLanguage } from '../contexts/LanguageContext';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-paniers-light rounded-lg p-1">
      <button
        onClick={() => setLanguage('fr')}
        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
          language === 'fr'
            ? 'bg-paniers-brown text-white'
            : 'text-paniers-dark hover:text-paniers-brown'
        }`}
      >
        FR
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
          language === 'en'
            ? 'bg-paniers-brown text-white'
            : 'text-paniers-dark hover:text-paniers-brown'
        }`}
      >
        EN
      </button>
    </div>
  );
}
