import { useState } from 'react';
import { Utensils } from 'lucide-react';
import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { useLanguage } from '../contexts/LanguageContext';

export function Catering() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    guestCount: '',
    eventType: 'wedding',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  // TODO: Remplacer par les images définitives
  const cateringGallery = [
    { id: 1, title: 'Mini Amuse-bouches', image: 'https://images.unsplash.com/photo-1608877907149-a206d75ba011?w=800&h=600&fit=crop&q=80' },
    { id: 2, title: 'Plateau de Charcuterie', image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=800&h=600&fit=crop&q=80' },
    { id: 3, title: 'Desserts Gourmands', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&h=600&fit=crop&q=80' },
    { id: 4, title: 'Sélection de Fromages', image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=800&h=600&fit=crop&q=80' },
    { id: 5, title: 'Plateaux d\'Entrées', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=600&fit=crop&q=80' },
    { id: 6, title: 'Installation Buffet', image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=800&h=600&fit=crop&q=80' },
    { id: 7, title: 'Bouchées Cocktail', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&h=600&fit=crop&q=80' },
    { id: 8, title: 'Espace Sucré', image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&h=600&fit=crop&q=80' },
  ];

  const eventTypes = [
    { value: 'wedding', label: 'Mariage' },
    { value: 'corporate', label: 'Événement d\'Entreprise' },
    { value: 'birthday', label: 'Fête d\'Anniversaire' },
    { value: 'cocktail', label: 'Réception Cocktail' },
    { value: 'anniversary', label: 'Anniversaire' },
    { value: 'other', label: 'Autre' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventDate: '',
        guestCount: '',
        eventType: 'wedding',
        message: '',
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <main className="bg-paniers-cream">
      <Section className="bg-paniers-dark text-paniers-cream text-center py-16">
        <div className="space-y-4">
          <h1 className="font-display font-bold text-5xl md:text-6xl">{t.catering.pageTitle}</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            {t.catering.pageSubtitle}
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="font-display font-bold text-4xl text-paniers-dark mb-6">
              {t.catering.celebrateTitle}
            </h2>
            <p className="text-paniers-dark opacity-90 mb-4 leading-relaxed">
              Aux Paniers, nous apportons notre expertise culinaire à vos célébrations. Que vous planifiiez une réunion intime ou un grand événement, notre équipe traiteur créera une expérience gastronomique inoubliable adaptée à votre vision.
            </p>
            <p className="text-paniers-dark opacity-90 mb-6 leading-relaxed">
              Chaque menu est conçu sur mesure avec des plats entièrement faits maison et les meilleurs ingrédients de saison. Nous gérons tout, de la consultation au service, vous permettant de profiter pleinement de votre événement.
            </p>
            <div className="space-y-3">
              <div className="flex gap-3">
                <span className="text-paniers-red font-bold">✓</span>
                <span className="text-paniers-dark">Conception de menu personnalisé</span>
              </div>
              <div className="flex gap-3">
                <span className="text-paniers-red font-bold">✓</span>
                <span className="text-paniers-dark">Installation et service professionnels</span>
              </div>
              <div className="flex gap-3">
                <span className="text-paniers-red font-bold">✓</span>
                <span className="text-paniers-dark">Recommandations d'accords vins</span>
              </div>
              <div className="flex gap-3">
                <span className="text-paniers-red font-bold">✓</span>
                <span className="text-paniers-dark">Options de livraison flexibles</span>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-paniers-light to-paniers-border rounded-lg h-96 flex items-center justify-center overflow-hidden">
            {/* TODO: Remplacer par l'image définitive */}
            <img
              src="https://images.unsplash.com/photo-1555244162-803834f70033?w=1200&h=800&fit=crop&q=80"
              alt="Catering presentation"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        <div>
          <h2 className="font-display font-bold text-4xl text-paniers-dark mb-8 text-center">
            {t.catering.galleryTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cateringGallery.map((item) => (
              <div
                key={item.id}
                className="bg-gradient-to-br from-paniers-light to-paniers-border rounded-lg h-48 flex items-center justify-center overflow-hidden group cursor-pointer relative"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity flex items-center justify-center rounded-lg">
                  <p className="text-paniers-cream font-semibold">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display font-bold text-3xl text-paniers-dark mb-8">
              {t.catering.formTitle}
            </h2>
            {submitted ? (
              <div className="bg-paniers-light border border-paniers-red rounded-lg p-8 text-center space-y-3">
                <div className="text-3xl text-paniers-red">✓</div>
                <h3 className="font-semibold text-paniers-dark">{t.catering.successTitle}</h3>
                <p className="text-paniers-dark opacity-80">
                  {t.catering.successMessage}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder={t.catering.form.namePlaceholder}
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 border border-paniers-border rounded-lg focus:outline-none focus:ring-2 focus:ring-paniers-red"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder={t.catering.form.emailPlaceholder}
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 border border-paniers-border rounded-lg focus:outline-none focus:ring-2 focus:ring-paniers-red"
                  />
                </div>

                <input
                  type="tel"
                  name="phone"
                  placeholder={t.catering.form.phonePlaceholder}
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-paniers-border rounded-lg focus:outline-none focus:ring-2 focus:ring-paniers-red"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 border border-paniers-border rounded-lg focus:outline-none focus:ring-2 focus:ring-paniers-red"
                  />
                  <input
                    type="number"
                    name="guestCount"
                    placeholder={t.catering.form.guestPlaceholder}
                    value={formData.guestCount}
                    onChange={handleChange}
                    min="1"
                    required
                    className="px-4 py-3 border border-paniers-border rounded-lg focus:outline-none focus:ring-2 focus:ring-paniers-red"
                  />
                </div>

                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-paniers-border rounded-lg focus:outline-none focus:ring-2 focus:ring-paniers-red"
                >
                  {eventTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>

                <textarea
                  name="message"
                  placeholder={t.catering.form.messagePlaceholder}
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-paniers-border rounded-lg focus:outline-none focus:ring-2 focus:ring-paniers-red"
                />

                <Button type="submit" size="lg" variant="primary" className="w-full">
                  {t.catering.form.submitButton}
                </Button>
              </form>
            )}
          </div>

          <div className="space-y-6">
            <Card>
              <h3 className="font-display font-bold text-xl text-paniers-dark mb-3">
                {t.catering.services.weddings.title}
              </h3>
              <p className="text-paniers-dark opacity-80">
                {t.catering.services.weddings.description}
              </p>
            </Card>

            <Card>
              <h3 className="font-display font-bold text-xl text-paniers-dark mb-3">
                {t.catering.services.corporate.title}
              </h3>
              <p className="text-paniers-dark opacity-80">
                {t.catering.services.corporate.description}
              </p>
            </Card>

            <Card>
              <h3 className="font-display font-bold text-xl text-paniers-dark mb-3">
                {t.catering.services.private.title}
              </h3>
              <p className="text-paniers-dark opacity-80">
                {t.catering.services.private.description}
              </p>
            </Card>

            <Card>
              <h3 className="font-display font-bold text-xl text-paniers-dark mb-3">
                {t.catering.services.cocktails.title}
              </h3>
              <p className="text-paniers-dark opacity-80">
                {t.catering.services.cocktails.description}
              </p>
            </Card>
          </div>
        </div>
      </Section>

      <Section className="bg-paniers-light">
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <h2 className="font-display font-bold text-3xl text-paniers-dark">
            {t.catering.pricingTitle}
          </h2>
          <p className="text-paniers-dark opacity-90">
            {t.catering.pricingDescription}
          </p>
          <p className="text-paniers-dark opacity-80 italic">
            {t.catering.pricingNote}
          </p>
        </div>
      </Section>
    </main>
  );
}
