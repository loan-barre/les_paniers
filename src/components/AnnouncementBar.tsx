import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    const dismissed = localStorage.getItem('announcementBarDismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('announcementBarDismissed', 'true');
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="bg-paniers-orange text-white py-2 px-4 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <p className="text-sm md:text-base font-medium text-center pr-8">
          {t.announcementBar.text}
        </p>
        <button
          onClick={handleClose}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 hover:bg-white hover:bg-opacity-20 rounded-full p-1 transition-colors duration-200"
          aria-label="Close announcement"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
}
