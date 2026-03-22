import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { siteConfig } from '../siteConfig';

export function Contact() {
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

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const dayKeys = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

  return (
    <main className="bg-paniers-cream">
      <Section className="bg-paniers-dark text-paniers-cream text-center py-16">
        <div className="space-y-4">
          <h1 className="font-serif font-bold text-5xl md:text-6xl">Get In Touch</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you.
          </p>
        </div>
      </Section>

      <Section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <h2 className="font-serif font-bold text-3xl text-paniers-dark mb-6">
              Contact Information
            </h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="text-paniers-red flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-paniers-dark mb-1">Location</h3>
                  <p className="text-paniers-dark opacity-80">
                    {siteConfig.contact.address}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="text-paniers-red flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-paniers-dark mb-1">Phone</h3>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="text-paniers-red hover:underline"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="text-paniers-red flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-paniers-dark mb-1">Email</h3>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-paniers-red hover:underline"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-serif font-bold text-3xl text-paniers-dark mb-6">
              Opening Hours
            </h2>
            <div className="space-y-3">
              {days.map((day, index) => {
                const hours =
                  siteConfig.openingHours[dayKeys[index] as keyof typeof siteConfig.openingHours];
                return (
                  <div
                    key={day}
                    className="flex justify-between items-center pb-3 border-b border-paniers-border last:border-0"
                  >
                    <span className="font-medium text-paniers-dark">{day}</span>
                    <span className="text-paniers-dark opacity-80">
                      {hours
                        ? `${hours.open} - ${hours.close} | ${hours.evening} - ${hours.closeEvening}`
                        : 'Closed'}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 border border-paniers-border h-fit">
          <h2 className="font-serif font-bold text-2xl text-paniers-dark mb-6">
            Send us a Message
          </h2>

          {submitted ? (
            <div className="bg-paniers-light border border-paniers-red rounded-lg p-8 text-center space-y-3">
              <div className="text-3xl text-paniers-red">✓</div>
              <h3 className="font-semibold text-paniers-dark">Thank You!</h3>
              <p className="text-paniers-dark opacity-80">
                We've received your message and will respond shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-paniers-border rounded-lg focus:outline-none focus:ring-2 focus:ring-paniers-red"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-paniers-border rounded-lg focus:outline-none focus:ring-2 focus:ring-paniers-red"
              />

              <textarea
                name="message"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                required
                className="w-full px-4 py-3 border border-paniers-border rounded-lg focus:outline-none focus:ring-2 focus:ring-paniers-red resize-none"
              />

              <Button type="submit" size="lg" variant="primary" className="w-full">
                Send Message
              </Button>
            </form>
          )}
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <h3 className="font-serif font-bold text-xl text-paniers-dark mb-3">
              Visit Us
            </h3>
            <p className="text-paniers-dark opacity-80">
              Come experience the warmth of our restaurant in person. We're located in the heart of Paris, easily accessible by public transport.
            </p>
          </Card>

          <Card>
            <h3 className="font-serif font-bold text-xl text-paniers-dark mb-3">
              Restaurant Guidelines
            </h3>
            <p className="text-paniers-dark opacity-80">
              We accommodate all dietary preferences and allergies. Please inform us when making your reservation so we can prepare accordingly.
            </p>
          </Card>
        </div>

        <div className="bg-paniers-light rounded-lg p-8 text-center">
          <h2 className="font-serif font-bold text-2xl text-paniers-dark mb-4">
            Private Dining
          </h2>
          <p className="text-paniers-dark opacity-90 max-w-2xl mx-auto mb-6">
            Interested in hosting a private event or having exclusive use of our restaurant? Contact us to discuss your requirements and availability.
          </p>
          <a href={`mailto:${siteConfig.contact.email}`} className="inline-block">
            <Button variant="primary">
              Inquire About Private Events
            </Button>
          </a>
        </div>
      </Section>

      <Section className="bg-paniers-dark text-paniers-cream">
        <div className="text-center space-y-4">
          <Clock className="mx-auto text-paniers-red" size={40} />
          <h2 className="font-serif font-bold text-3xl">
            Experience Les Paniers
          </h2>
          <p className="opacity-90 max-w-2xl mx-auto">
            Join us for an unforgettable dining experience featuring authentic, seasonal French cuisine in a warm and welcoming atmosphere.
          </p>
          <a href={siteConfig.thefork.reservationUrl} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-paniers-red hover:bg-paniers-terracotta text-white mx-auto mt-4"
            >
              Reserve Your Table
            </Button>
          </a>
        </div>
      </Section>
    </main>
  );
}
