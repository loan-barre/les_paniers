import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { siteConfig } from '../siteConfig';
import { useLanguage } from '../contexts/LanguageContext';

export function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const dayKeys = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

  return (
    <main className="bg-paniers-cream">
      <Section className="bg-paniers-dark text-paniers-cream text-center py-16">
        <div className="space-y-4">
          <h1 className="font-display font-bold text-5xl md:text-6xl">{t.contact.pageTitle}</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            {t.contact.pageSubtitle}
          </p>
        </div>
      </Section>

      <Section className="max-w-5xl mx-auto">
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="font-display font-bold text-3xl text-paniers-dark mb-8">
              {t.contact.informationTitle}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="flex flex-col items-center text-center">
                <MapPin className="text-paniers-red mb-4" size={32} />
                <h3 className="font-semibold text-paniers-dark mb-2">{t.contact.locationLabel}</h3>
                <p className="text-paniers-dark opacity-80">
                  {siteConfig.contact.address}
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <Phone className="text-paniers-red mb-4" size={32} />
                <h3 className="font-semibold text-paniers-dark mb-2">{t.contact.phoneLabel}</h3>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="text-paniers-red hover:underline"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>

              <div className="flex flex-col items-center text-center">
                <Mail className="text-paniers-red mb-4" size={32} />
                <h3 className="font-semibold text-paniers-dark mb-2">{t.contact.emailLabel}</h3>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-paniers-red hover:underline"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="font-display font-bold text-3xl text-paniers-dark mb-8">
              {t.contact.hoursTitle}
            </h2>
            <div className="max-w-2xl mx-auto space-y-3">
              {dayKeys.map((dayKey) => {
                const hours =
                  siteConfig.openingHours[dayKey as keyof typeof siteConfig.openingHours];

                let lunchHours = '';
                let eveningHours = '';

                if (hours) {
                  lunchHours = hours.open && hours.close ? `${hours.open} - ${hours.close}` : '';
                  eveningHours = hours.evening && hours.closeEvening ? `${hours.evening} - ${hours.closeEvening}` : '';
                }

                return (
                  <div
                    key={dayKey}
                    className="grid grid-cols-[1fr_auto_auto] gap-4 items-center pb-3 border-b border-paniers-border last:border-0 min-h-[2rem]"
                  >
                    <span className="font-medium text-paniers-dark">{t.contact.days[dayKey as keyof typeof t.contact.days]}</span>
                    <span className="text-paniers-dark opacity-80 text-right w-32">
                      {lunchHours || '-'}
                    </span>
                    <span className="text-paniers-dark opacity-80 text-right w-32">
                      {eveningHours || '-'}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm p-8 border border-paniers-border">
              <h2 className="font-display font-bold text-2xl text-paniers-dark mb-6 text-center">
                {t.contact.formTitle}
              </h2>

              {submitted ? (
                <div className="bg-paniers-light border border-paniers-red rounded-lg p-8 text-center space-y-3">
                  <div className="text-3xl text-paniers-red">✓</div>
                  <h3 className="font-semibold text-paniers-dark">{t.contact.successTitle}</h3>
                  <p className="text-paniers-dark opacity-80">
                    {t.contact.successMessage}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    placeholder={t.contact.form.namePlaceholder}
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-paniers-border rounded-lg focus:outline-none focus:ring-2 focus:ring-paniers-red"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder={t.contact.form.emailPlaceholder}
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-paniers-border rounded-lg focus:outline-none focus:ring-2 focus:ring-paniers-red"
                  />

                  <textarea
                    name="message"
                    placeholder={t.contact.form.messagePlaceholder}
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-paniers-border rounded-lg focus:outline-none focus:ring-2 focus:ring-paniers-red resize-none"
                  />

                  <Button type="submit" size="lg" variant="primary" className="w-full">
                    {t.contact.form.submitButton}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
          <Card className="text-center">
            <h3 className="font-display font-bold text-xl text-paniers-dark mb-3">
              {t.contact.visitUsTitle}
            </h3>
            <p className="text-paniers-dark opacity-80">
              {t.contact.visitUsDescription}
            </p>
          </Card>

          <Card className="text-center">
            <h3 className="font-display font-bold text-xl text-paniers-dark mb-3">
              {t.contact.guidelinesTitle}
            </h3>
            <p className="text-paniers-dark opacity-80">
              {t.contact.guidelinesDescription}
            </p>
          </Card>
        </div>

        <div className="bg-paniers-light rounded-lg p-8 text-center max-w-3xl mx-auto">
          <h2 className="font-display font-bold text-2xl text-paniers-dark mb-4">
            {t.contact.privateDiningTitle}
          </h2>
          <p className="text-paniers-dark opacity-90 max-w-2xl mx-auto mb-6">
            {t.contact.privateDiningDescription}
          </p>
          <a href={`mailto:${siteConfig.contact.email}`} className="inline-block">
            <Button variant="primary">
              {t.contact.privateDiningButton}
            </Button>
          </a>
        </div>
      </Section>

      <Section className="bg-paniers-dark text-paniers-cream">
        <div className="text-center space-y-4">
          <Clock className="mx-auto text-paniers-red" size={40} />
          <h2 className="font-display font-bold text-3xl">
            {t.contact.experienceTitle}
          </h2>
          <p className="opacity-90 max-w-2xl mx-auto">
            {t.contact.experienceDescription}
          </p>
          <a href={siteConfig.thefork.reservationUrl} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-paniers-red hover:bg-paniers-terracotta text-white mx-auto mt-4"
            >
              {t.contact.reserveButton}
            </Button>
          </a>
        </div>
      </Section>
    </main>
  );
}
