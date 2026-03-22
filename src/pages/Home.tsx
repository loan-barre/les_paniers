import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, Wine, ChevronDown } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Button } from '../components/Button';
import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { Newsletter } from '../components/Newsletter';
import { InteractiveMap } from '../components/InteractiveMap';
import { InstagramGallery } from '../components/InstagramGallery';
import { ReviewsCarousel } from '../components/ReviewsCarousel';
import { siteConfig } from '../siteConfig';
import { useLanguage } from '../contexts/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export function Home() {
  const { t, language } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  const highlights = [
    {
      id: 1,
      title: { en: 'Pan-Seared Duck', fr: 'Canard Poêlé' },
      description: { en: 'Slow-cooked duck with seasonal root vegetables', fr: 'Canard mijoté avec légumes racines de saison' },
      // TODO: Remplacer par l'image définitive
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=600&fit=crop&q=80',
    },
    {
      id: 2,
      title: { en: 'Fresh Seafood', fr: 'Fruits de Mer Frais' },
      description: { en: 'Daily market catch prepared with care', fr: 'Pêche du jour préparée avec soin' },
      // TODO: Remplacer par l'image définitive
      image: 'https://images.unsplash.com/photo-1559737558-2f56c6e37c56?w=800&h=600&fit=crop&q=80',
    },
    {
      id: 3,
      title: { en: 'Artisanal Desserts', fr: 'Desserts Artisanaux' },
      description: { en: 'Handmade sweet creations daily', fr: 'Créations sucrées faites maison chaque jour' },
      // TODO: Remplacer par l'image définitive
      image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&h=600&fit=crop&q=80',
    },
  ];

  useGSAP(() => {
    if (!heroRef.current || !logoRef.current || !contentRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: '+=75%',
        scrub: 0.5,
        pin: true,
        anticipatePin: 1,
      },
    });

    tl.to(logoRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 0.2,
      ease: 'power2.inOut',
    })
    .to(scrollIndicatorRef.current, {
      opacity: 0,
      duration: 0.1,
    }, 0)
    .to(contentRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.4,
      ease: 'power2.out',
    }, 0.1);

    gsap.fromTo(
      scrollIndicatorRef.current,
      { y: 0 },
      {
        y: 10,
        duration: 1.5,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
      }
    );

    const sections = gsap.utils.toArray('.animate-section');
    sections.forEach((section: any) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 0.5,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <main className="bg-paniers-cream">
      <div
        ref={heroRef}
        className="relative h-screen w-full overflow-hidden mb-0"
      >
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="French cuisine"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div
          ref={logoRef}
          className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4"
        >
          <div className="text-center space-y-8 max-w-4xl w-full">
            <div className="space-y-6">
              <div className="flex items-center justify-center mb-8">
                <img
                  src="/Group_1.svg"
                  alt="Les Paniers"
                  className="h-20 md:h-24 w-auto drop-shadow-2xl"
                />
              </div>
              <p className="text-2xl md:text-4xl text-white font-medium drop-shadow-lg">
                {t.home.hero.subtitle}
              </p>
            </div>
            <p className="text-white text-lg md:text-xl max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
              {t.home.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link to="/menu">
                <Button size="lg" variant="primary">
                  {t.common.viewMenu}
                </Button>
              </Link>
              <a href={siteConfig.thefork.reservationUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="secondary">
                  {t.home.hero.cta}
                </Button>
              </a>
            </div>
          </div>
        </div>

        <div
          ref={scrollIndicatorRef}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white opacity-80"
        >
          <span className="text-sm font-medium tracking-wide drop-shadow-lg">{language === 'en' ? 'Scroll' : 'Défiler'}</span>
          <ChevronDown size={24} strokeWidth={2} />
        </div>

        <div
          ref={contentRef}
          className="absolute inset-0 flex items-center justify-center opacity-0 translate-y-full pointer-events-none"
        >
        </div>
      </div>

      <Section className="bg-white animate-section pt-12 mt-0" id="about">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display font-bold text-4xl mb-6 text-paniers-dark">
              {t.home.about.title}
            </h2>
            <p className="text-paniers-dark opacity-90 mb-4 leading-relaxed">
              {t.home.about.description}
            </p>
            <p className="text-paniers-dark opacity-90 mb-6 leading-relaxed">
              {t.home.about.mission}
            </p>
            <Link to="/menu">
              <Button variant="outline">
                {t.home.highlights.viewMenu}
              </Button>
            </Link>
          </div>
          <div className="bg-gradient-to-br from-paniers-light to-paniers-border rounded-lg h-96 flex items-center justify-center overflow-hidden">
            {/* TODO: Remplacer par l'image définitive */}
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=800&fit=crop&q=80"
              alt="Restaurant interior"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </Section>

      <Section className="bg-paniers-light animate-section" id="highlights">
        <div className="mb-12">
          <h2 className="font-display font-bold text-4xl text-paniers-dark mb-3">
            {t.home.highlights.title}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-paniers-wood to-paniers-terracotta h-48 flex items-center justify-center relative rounded-t-lg overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title[language]}
                  className="w-full h-full object-cover absolute inset-0"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-xl text-paniers-dark mb-2">
                  {item.title[language]}
                </h3>
                <p className="text-paniers-dark opacity-80 text-sm">
                  {item.description[language]}
                </p>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/menu">
            <Button variant="primary" size="lg">
              {t.home.highlights.viewMenu}
            </Button>
          </Link>
        </div>
      </Section>

      <Section className="bg-paniers-light animate-section" id="gallery">
        <InstagramGallery />
      </Section>

      <Section className="bg-white animate-section" id="reviews">
        <ReviewsCarousel />
      </Section>

      <Section className="bg-paniers-light animate-section" id="map">
        <InteractiveMap />
      </Section>

      <Section className="bg-white animate-section" id="newsletter">
        <Newsletter />
      </Section>
    </main>
  );
}
