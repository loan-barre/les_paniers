import { Calendar, Users, Clock } from 'lucide-react';
import { Section } from '../components/Section';
import { siteConfig } from '../siteConfig';

export function Reservation() {
  return (
    <main className="bg-paniers-cream">
      <Section className="bg-paniers-dark text-paniers-cream text-center py-16">
        <div className="space-y-4">
          <h1 className="font-display font-bold text-5xl md:text-6xl">Book a Table</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Reserve your table at Les Paniers
          </p>
        </div>
      </Section>

      <Section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <h2 className="font-display font-bold text-3xl text-paniers-dark mb-4">
              Reservation Options
            </h2>
            <p className="text-paniers-dark opacity-90 mb-6">
              Book your table through our preferred booking platform or contact us directly. We welcome groups, special occasions, and regular guests.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4">
              <Calendar className="text-paniers-red flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-semibold text-paniers-dark mb-1">Online Booking</h3>
                <p className="text-paniers-dark opacity-80">
                  Book instantly through TheFork for immediate confirmation
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Users className="text-paniers-red flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-semibold text-paniers-dark mb-1">Group Reservations</h3>
                <p className="text-paniers-dark opacity-80">
                  For groups of 8 or more, please call us directly
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="text-paniers-red flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-semibold text-paniers-dark mb-1">Special Occasions</h3>
                <p className="text-paniers-dark opacity-80">
                  Let us know about birthdays, anniversaries, or special celebrations
                </p>
              </div>
            </div>
          </div>

          <div className="bg-paniers-light rounded-lg p-6 space-y-3">
            <h3 className="font-semibold text-paniers-dark">Contact Information</h3>
            <p className="text-paniers-dark opacity-90">
              <strong>Phone:</strong><br />
              <a href={`tel:${siteConfig.contact.phone}`} className="text-paniers-red hover:underline">
                {siteConfig.contact.phone}
              </a>
            </p>
            <p className="text-paniers-dark opacity-90">
              <strong>Email:</strong><br />
              <a href={`mailto:${siteConfig.contact.email}`} className="text-paniers-red hover:underline">
                {siteConfig.contact.email}
              </a>
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 border border-paniers-border h-fit">
          <div className="space-y-6">
            <div>
              <h3 className="font-display font-bold text-2xl text-paniers-dark mb-2">
                Book Through TheFork
              </h3>
              <p className="text-paniers-dark opacity-80 mb-6">
                Use the form below to reserve your table instantly. You'll receive a confirmation email with your booking details.
              </p>
            </div>

            <iframe
              src="https://www.thefork.com/restaurant/les-paniers-paris-placeholder/reserve"
              className="w-full h-96 border border-paniers-border rounded-lg"
              title="TheFork Booking Widget"
              frameBorder="0"
              allow="payment"
            />

            <div className="text-center">
              <p className="text-sm text-paniers-dark opacity-70">
                Powered by
              </p>
              <svg className="w-12 h-8 mx-auto" viewBox="0 0 100 40" fill="none">
                <text x="5" y="30" fontSize="20" fontWeight="bold" fill="#C41E3A">
                  TheFork
                </text>
              </svg>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-paniers-light">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="bg-paniers-red text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 font-bold text-lg">
              1
            </div>
            <h3 className="font-semibold text-paniers-dark mb-2">Choose Date & Time</h3>
            <p className="text-sm text-paniers-dark opacity-80">
              Select your preferred date and dining time
            </p>
          </div>

          <div className="text-center">
            <div className="bg-paniers-red text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 font-bold text-lg">
              2
            </div>
            <h3 className="font-semibold text-paniers-dark mb-2">Select Party Size</h3>
            <p className="text-sm text-paniers-dark opacity-80">
              Let us know how many guests will be dining
            </p>
          </div>

          <div className="text-center">
            <div className="bg-paniers-red text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 font-bold text-lg">
              3
            </div>
            <h3 className="font-semibold text-paniers-dark mb-2">Confirm Details</h3>
            <p className="text-sm text-paniers-dark opacity-80">
              Provide your contact information
            </p>
          </div>

          <div className="text-center">
            <div className="bg-paniers-red text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 font-bold text-lg">
              ✓
            </div>
            <h3 className="font-semibold text-paniers-dark mb-2">Confirmed!</h3>
            <p className="text-sm text-paniers-dark opacity-80">
              Receive your booking confirmation
            </p>
          </div>
        </div>
      </Section>
    </main>
  );
}
