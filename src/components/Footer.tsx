import { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import { siteConfig } from '../siteConfig';
import { useLanguage } from '../contexts/LanguageContext';

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { t } = useLanguage();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 3000);
  };

  const getDisplayHours = () => {
    const today = new Date().toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
    const hours = siteConfig.openingHours[today as keyof typeof siteConfig.openingHours];
    if (hours) {
      return `${hours.open} - ${hours.close} | ${hours.evening} - ${hours.closeEvening}`;
    }
    return t.reservation.closed;
  };

  return (
    <footer className="bg-paniers-dark text-paniers-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <img
              src="/Group_1.svg"
              alt="Les Paniers"
              className="h-7 w-auto mb-4"
            />
            <p className="text-sm opacity-80">
              {t.footer.description}
            </p>
          </div>

          <div>
            <h4 className="font-serif font-bold mb-4">{t.footer.location}</h4>
            <div className="space-y-3 text-sm opacity-80">
              <div className="flex gap-3">
                <MapPin size={18} className="flex-shrink-0 text-paniers-red mt-0.5" />
                <p>{siteConfig.contact.address}</p>
              </div>
              <div className="flex gap-3">
                <Phone size={18} className="flex-shrink-0 text-paniers-red" />
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-paniers-red transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </div>
              <div className="flex gap-3">
                <Mail size={18} className="flex-shrink-0 text-paniers-red" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-paniers-red transition-colors">
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-serif font-bold mb-4">{t.footer.todaysHours}</h4>
            <p className="text-sm opacity-80">{getDisplayHours()}</p>
            <div className="mt-6">
              <h5 className="text-xs font-semibold mb-2 opacity-80">{t.footer.followUs}</h5>
              <div className="flex gap-4">
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-paniers-cream hover:text-paniers-red transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-paniers-cream hover:text-paniers-red transition-colors"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href={siteConfig.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-paniers-cream hover:text-paniers-red transition-colors"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-serif font-bold mb-4">{t.footer.newsletter.title}</h4>
            <p className="text-sm opacity-80 mb-4">{t.footer.newsletter.description}</p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <input
                type="email"
                placeholder={t.footer.newsletter.placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 bg-paniers-brown text-paniers-cream rounded placeholder-opacity-60 placeholder-paniers-cream text-sm focus:outline-none focus:ring-2 focus:ring-paniers-red"
              />
              <button
                type="submit"
                className="w-full bg-paniers-red text-white px-3 py-2 rounded font-medium text-sm hover:bg-paniers-terracotta transition-colors"
              >
                {t.footer.newsletter.button}
              </button>
              {subscribed && (
                <p className="text-xs text-paniers-red mt-2">{t.footer.newsletter.success}</p>
              )}
            </form>
          </div>
        </div>

        <div className="border-t border-paniers-brown pt-8 flex flex-col md:flex-row justify-between items-center text-sm opacity-70">
          <p>&copy; 2024 Les Paniers. {t.footer.rights}</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-paniers-red transition-colors">{t.footer.links.privacy}</a>
            <a href="#" className="hover:text-paniers-red transition-colors">{t.footer.links.terms}</a>
            <a href="#" className="hover:text-paniers-red transition-colors">{t.footer.links.allergens}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
