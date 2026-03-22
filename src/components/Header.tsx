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
          <Link to="/" className="flex items-center">
            <img
              src="/Group_1.svg"
              alt="Les Paniers"
              className="h-6 md:h-7 w-auto"
            />
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
