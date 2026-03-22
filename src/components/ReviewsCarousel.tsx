import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Review {
  name: string;
  text: string;
  rating: number;
}

const reviewsFr: Review[] = [
  {
    name: 'Marie Dubois',
    text: "Les plats sont délicieux et toujours frais ! J'adore la variété des paniers de saison. Service impeccable et livraison ponctuelle.",
    rating: 5,
  },
  {
    name: 'Jean Martin',
    text: "Une découverte culinaire chaque semaine ! Les recettes sont créatives et les produits de qualité exceptionnelle. Je recommande vivement.",
    rating: 5,
  },
  {
    name: 'Sophie Laurent',
    text: "Parfait pour gagner du temps sans compromis sur la qualité. Les portions sont généreuses et tout est préparé avec soin.",
    rating: 5,
  },
  {
    name: 'Pierre Rousseau',
    text: "Je suis client depuis 6 mois et je ne suis jamais déçu. Les paniers sont toujours bien garnis et les plats sont savoureux.",
    rating: 5,
  },
];

const reviewsEn: Review[] = [
  {
    name: 'Marie Dubois',
    text: 'The dishes are delicious and always fresh! I love the variety of seasonal baskets. Impeccable service and punctual delivery.',
    rating: 5,
  },
  {
    name: 'Jean Martin',
    text: 'A culinary discovery every week! The recipes are creative and the products of exceptional quality. Highly recommend.',
    rating: 5,
  },
  {
    name: 'Sophie Laurent',
    text: 'Perfect for saving time without compromising on quality. Portions are generous and everything is prepared with care.',
    rating: 5,
  },
  {
    name: 'Pierre Rousseau',
    text: 'I have been a customer for 6 months and I am never disappointed. The baskets are always well stocked and the dishes are tasty.',
    rating: 5,
  },
];

export function ReviewsCarousel() {
  const { t } = useLanguage();
  const reviews = t.language === 'fr' ? reviewsFr : reviewsEn;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-paniers-brown mb-4">
          {t.language === 'fr' ? 'Avis de nos Clients' : 'Customer Reviews'}
        </h2>
        <p className="text-lg text-paniers-brown/80">
          {t.language === 'fr'
            ? 'Découvrez ce que nos clients pensent de nos paniers'
            : 'Discover what our customers think about our baskets'}
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <button
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center hover:bg-orange-600 transition-all duration-300 hover:scale-110 shadow-lg z-10"
          aria-label="Previous review"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {reviews.map((review, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 md:p-12">
                  <div className="flex justify-center mb-6">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-orange-500 text-orange-500" />
                    ))}
                  </div>
                  <p className="text-lg md:text-xl text-paniers-brown/90 text-center mb-6 italic">
                    "{review.text}"
                  </p>
                  <p className="text-center font-semibold text-orange-600 text-lg">
                    {review.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center hover:bg-orange-600 transition-all duration-300 hover:scale-110 shadow-lg z-10"
          aria-label="Next review"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-orange-500 w-8' : 'bg-orange-200'
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
