import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLang = () => {
    const next = i18n.language === 'th' ? 'en' : 'th';
    i18n.changeLanguage(next);
    document.documentElement.lang = next;
    localStorage.setItem('i18nextLng', next);
  };

  return (
    <button
      onClick={toggleLang}
      className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white/70 hover:text-white transition-colors"
    >
      <Globe size={14} />
      <span>{i18n.language === 'th' ? 'EN' : 'TH'}</span>
    </button>
  );
}
