import { useState } from 'react';
import { Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Newsletter() {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-8 md:p-12 shadow-lg">
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 rounded-full mb-6">
          <Mail className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-paniers-brown mb-4">
          {t.language === 'fr' ? 'Restez informé' : 'Stay Informed'}
        </h2>
        <p className="text-lg text-paniers-brown/80 mb-8">
          {t.language === 'fr'
            ? 'Recevez nos nouveaux plats de la semaine et découvrez notre panier de saison en avant-première'
            : 'Get our new weekly dishes and discover our seasonal basket in preview'}
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t.language === 'fr' ? 'Votre adresse e-mail' : 'Your email address'}
            className="flex-1 max-w-md px-6 py-4 rounded-full border-2 border-orange-200 focus:border-orange-500 focus:outline-none transition-colors"
            required
          />
          <button
            type="submit"
            className="px-8 py-4 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            {t.language === 'fr' ? "S'inscrire" : 'Subscribe'}
          </button>
        </form>

        {status === 'success' && (
          <p className="mt-4 text-green-600 font-semibold animate-fade-in">
            {t.language === 'fr' ? 'Merci pour votre inscription !' : 'Thank you for subscribing!'}
          </p>
        )}
      </div>
    </div>
  );
}
