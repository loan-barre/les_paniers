import { useState } from 'react';
import { Utensils } from 'lucide-react';
import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

export function Catering() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    guestCount: '',
    eventType: 'Wedding',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const cateringGallery = [
    { id: 1, title: 'Mini Appetizers', image: 'catering-appetizers.jpg' },
    { id: 2, title: 'Charcuterie Board', image: 'catering-charcuterie.jpg' },
    { id: 3, title: 'Gourmet Desserts', image: 'catering-desserts.jpg' },
    { id: 4, title: 'Cheese Selection', image: 'catering-cheese.jpg' },
    { id: 5, title: 'Entrée Platters', image: 'catering-entrees.jpg' },
    { id: 6, title: 'Buffet Setup', image: 'catering-buffet.jpg' },
    { id: 7, title: 'Cocktail Bites', image: 'catering-cocktail.jpg' },
    { id: 8, title: 'Sweet Station', image: 'catering-sweets.jpg' },
  ];

  const eventTypes = ['Wedding', 'Business Event', 'Birthday Party', 'Cocktail Reception', 'Anniversary', 'Graduation'];

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
        eventType: 'Wedding',
        message: '',
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <main className="bg-paniers-cream">
      <Section className="bg-paniers-dark text-paniers-cream text-center py-16">
        <div className="space-y-4">
          <h1 className="font-serif font-bold text-5xl md:text-6xl">Catering Services</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Let us bring our seasonal cuisine to your special event
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="font-serif font-bold text-4xl text-paniers-dark mb-6">
              Celebrate Your Occasion
            </h2>
            <p className="text-paniers-dark opacity-90 mb-4 leading-relaxed">
              At Les Paniers, we bring our culinary expertise to your celebrations. Whether you're planning an intimate gathering or a grand affair, our catering team will create an unforgettable gastronomic experience tailored to your vision.
            </p>
            <p className="text-paniers-dark opacity-90 mb-6 leading-relaxed">
              Every menu is custom-designed using entirely homemade dishes and the finest seasonal ingredients. We handle everything from consultation to service, allowing you to focus on enjoying your event.
            </p>
            <div className="space-y-3">
              <div className="flex gap-3">
                <span className="text-paniers-red font-bold">✓</span>
                <span className="text-paniers-dark">Custom menu design</span>
              </div>
              <div className="flex gap-3">
                <span className="text-paniers-red font-bold">✓</span>
                <span className="text-paniers-dark">Professional setup & service</span>
              </div>
              <div className="flex gap-3">
                <span className="text-paniers-red font-bold">✓</span>
                <span className="text-paniers-dark">Wine pairing recommendations</span>
              </div>
              <div className="flex gap-3">
                <span className="text-paniers-red font-bold">✓</span>
                <span className="text-paniers-dark">Flexible delivery options</span>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-paniers-light to-paniers-border rounded-lg h-96 flex items-center justify-center">
            <img
              src="/images/catering-header.jpg"
              alt="Catering presentation"
              className="w-full h-full object-cover rounded-lg"
              onError={(e) => {
                e.currentTarget.style.background = '#D2691E';
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="text-paniers-cream text-center">
              <Utensils size={48} className="mx-auto opacity-50 mb-2" />
              <p className="text-sm opacity-50">catering-header.jpg</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-serif font-bold text-4xl text-paniers-dark mb-8 text-center">
            Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cateringGallery.map((item) => (
              <div
                key={item.id}
                className="bg-gradient-to-br from-paniers-light to-paniers-border rounded-lg h-48 flex items-center justify-center overflow-hidden group cursor-pointer"
              >
                <img
                  src={`/images/${item.image}`}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  onError={(e) => {
                    e.currentTarget.style.background = '#D4A574';
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity flex items-center justify-center rounded-lg">
                  <p className="text-paniers-cream font-semibold">{item.title}</p>
                </div>
                <div className="text-paniers-brown text-center">
                  <p className="text-sm opacity-50">{item.image}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-serif font-bold text-3xl text-paniers-dark mb-8">
              Request Your Event
            </h2>
            {submitted ? (
              <div className="bg-paniers-light border border-paniers-red rounded-lg p-8 text-center space-y-3">
                <div className="text-3xl text-paniers-red">✓</div>
                <h3 className="font-semibold text-paniers-dark">Thank You!</h3>
                <p className="text-paniers-dark opacity-80">
                  We've received your catering inquiry. Our team will contact you shortly to discuss your event.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 border border-paniers-border rounded-lg focus:outline-none focus:ring-2 focus:ring-paniers-red"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 border border-paniers-border rounded-lg focus:outline-none focus:ring-2 focus:ring-paniers-red"
                  />
                </div>

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
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
                    placeholder="Number of Guests"
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
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>

                <textarea
                  name="message"
                  placeholder="Tell us about your event and any special requests"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-paniers-border rounded-lg focus:outline-none focus:ring-2 focus:ring-paniers-red"
                />

                <Button type="submit" size="lg" variant="primary" className="w-full">
                  Submit Inquiry
                </Button>
              </form>
            )}
          </div>

          <div className="space-y-6">
            <Card>
              <h3 className="font-serif font-bold text-xl text-paniers-dark mb-3">
                Wedding Receptions
              </h3>
              <p className="text-paniers-dark opacity-80">
                Celebrate your special day with custom menus designed to reflect your style. From intimate dinners to grand celebrations, we handle every detail.
              </p>
            </Card>

            <Card>
              <h3 className="font-serif font-bold text-xl text-paniers-dark mb-3">
                Corporate Events
              </h3>
              <p className="text-paniers-dark opacity-80">
                Impress your clients and employees with sophisticated menus and professional service. Perfect for conferences, team dinners, and celebrations.
              </p>
            </Card>

            <Card>
              <h3 className="font-serif font-bold text-xl text-paniers-dark mb-3">
                Private Parties
              </h3>
              <p className="text-paniers-dark opacity-80">
                Celebrate milestones with friends and family. Our flexible approach accommodates any group size and dietary preferences.
              </p>
            </Card>

            <Card>
              <h3 className="font-serif font-bold text-xl text-paniers-dark mb-3">
                Cocktail Receptions
              </h3>
              <p className="text-paniers-dark opacity-80">
                Passed hors d'oeuvres, stationary displays, and elegant presentations designed to delight your guests throughout the evening.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      <Section className="bg-paniers-light">
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <h2 className="font-serif font-bold text-3xl text-paniers-dark">
            Pricing & Packages
          </h2>
          <p className="text-paniers-dark opacity-90">
            We offer flexible pricing based on your event type, guest count, and menu selections. Each catering package is customized to your needs and budget.
          </p>
          <p className="text-paniers-dark opacity-80 italic">
            Contact us for a detailed quote and personalized recommendations for your event.
          </p>
        </div>
      </Section>
    </main>
  );
}
