import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '../siteConfig';
import { useLanguage } from '../contexts/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { label: t.nav.home, path: '/' },
    { label: t.nav.menu, path: '/menu' },
    { label: t.nav.catering, path: '/catering' },
    { label: t.nav.contact, path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-paniers-cream border-b border-paniers-border shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2">
            <svg
              className="w-8 h-8 text-paniers-red"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
            </svg>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg text-paniers-dark">Les Paniers</span>
              <span className="text-xs text-paniers-brown">Restaurant</span>
            </div>
          </Link>

          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-paniers-dark hover:bg-paniers-light rounded-lg"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-paniers-dark font-medium hover:text-paniers-red transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <LanguageSwitcher />
            <a
              href={siteConfig.thefork.reservationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-paniers-red text-white px-6 py-2 rounded-lg font-medium hover:bg-paniers-brown transition-colors flex items-center gap-2"
            >
              {t.common.bookNow}
            </a>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 border-t border-paniers-border">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block py-2 text-paniers-dark font-medium hover:text-paniers-red transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4">
              <LanguageSwitcher />
            </div>
            <a
              href={siteConfig.thefork.reservationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 bg-paniers-red text-white px-6 py-2 rounded-lg font-medium hover:bg-paniers-brown transition-colors text-center"
              onClick={() => setIsOpen(false)}
            >
              {t.common.bookNow}
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
