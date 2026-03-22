import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, Wine, Clock, ChevronDown } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Button } from '../components/Button';
import { Section } from '../components/Section';
import { Card } from '../components/Card';
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
      image: 'dish-highlight-1.jpg',
    },
    {
      id: 2,
      title: { en: 'Fresh Seafood', fr: 'Fruits de Mer Frais' },
      description: { en: 'Daily market catch prepared with care', fr: 'Pêche du jour préparée avec soin' },
      image: 'dish-highlight-2.jpg',
    },
    {
      id: 3,
      title: { en: 'Artisanal Desserts', fr: 'Desserts Artisanaux' },
      description: { en: 'Handmade sweet creations daily', fr: 'Créations sucrées faites maison chaque jour' },
      image: 'dish-highlight-3.jpg',
    },
  ];

  useGSAP(() => {
    if (!heroRef.current || !logoRef.current || !contentRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: '+=150%',
        scrub: 1.5,
        pin: true,
        anticipatePin: 1,
      },
    });

    tl.to(logoRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 0.3,
      ease: 'power2.inOut',
    })
    .to(scrollIndicatorRef.current, {
      opacity: 0,
      duration: 0.2,
    }, 0)
    .to(contentRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.7,
      ease: 'power2.out',
    }, 0.2);

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
        className="relative h-screen w-screen overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-paniers-light via-paniers-cream to-paniers-light">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#FF821B_1px,_transparent_1px)] bg-[length:50px_50px]"></div>
          </div>
        </div>

        <div
          ref={logoRef}
          className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4"
        >
          <div className="text-center space-y-8 max-w-4xl w-full">
            <div className="space-y-6">
              <div className="flex items-center justify-center mb-8">
                <img
                  src="/Logo_les_paniers.png"
                  alt="Les Paniers"
                  className="h-24 md:h-32 w-auto object-contain"
                />
              </div>
              <p className="text-2xl md:text-3xl text-paniers-orange font-medium">
                {t.home.hero.subtitle}
              </p>
            </div>
            <p className="text-paniers-dark text-lg md:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
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
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-paniers-orange opacity-60"
        >
          <span className="text-sm font-medium tracking-wide">{language === 'en' ? 'Scroll' : 'Défiler'}</span>
          <ChevronDown size={24} strokeWidth={2} />
        </div>

        <div
          ref={contentRef}
          className="absolute inset-0 flex items-center justify-center opacity-0 translate-y-full pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, rgba(255,250,247,0) 0%, rgba(255,250,247,1) 20%)' }}
        >
          <div className="h-full w-full" />
        </div>
      </div>

      <Section className="bg-white animate-section" id="about">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif font-bold text-4xl mb-6 text-paniers-dark">
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
          <div className="bg-gradient-to-br from-paniers-light to-paniers-border rounded-lg h-96 flex items-center justify-center">
            <img
              src="/images/about-interior.jpg"
              alt="Restaurant interior"
              className="w-full h-full object-cover rounded-lg"
              onError={(e) => {
                e.currentTarget.style.background = '#D4A574';
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="text-paniers-brown text-center">
              <ChefHat size={48} className="mx-auto opacity-50 mb-2" />
              <p className="text-sm opacity-50">about-interior.jpg</p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-paniers-light animate-section" id="highlights">
        <div className="mb-12">
          <h2 className="font-serif font-bold text-4xl text-paniers-dark mb-3">
            {t.home.highlights.title}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-paniers-wood to-paniers-terracotta h-48 flex items-center justify-center relative rounded-t-lg">
                <img
                  src={`/images/${item.image}`}
                  alt={item.title[language]}
                  className="w-full h-full object-cover absolute inset-0"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="relative z-10 text-white text-center bg-paniers-dark bg-opacity-50 p-2 rounded">
                  <Wine size={32} className="mx-auto opacity-50" />
                  <p className="text-xs opacity-50 mt-1">{item.image}</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif font-bold text-xl text-paniers-dark mb-2">
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

      <Section className="bg-white animate-section" id="wine">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-gradient-to-br from-paniers-light to-paniers-border rounded-lg h-96 flex items-center justify-center order-2 md:order-1">
            <img
              src="/images/wine-shelves.jpg"
              alt="Wine collection"
              className="w-full h-full object-cover rounded-lg"
              onError={(e) => {
                e.currentTarget.style.background = '#D4A574';
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="text-paniers-brown text-center">
              <Wine size={48} className="mx-auto opacity-50 mb-2" />
              <p className="text-sm opacity-50">wine-shelves.jpg</p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="font-serif font-bold text-4xl mb-6 text-paniers-dark">
              {t.home.wine.title}
            </h2>
            <p className="text-paniers-dark opacity-90 mb-6 leading-relaxed">
              {t.home.wine.description}
            </p>
            <Link to="/menu">
              <Button variant="outline">
                {t.home.wine.cta}
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      <Section className="bg-paniers-light animate-section" id="visit">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif font-bold text-4xl text-center mb-12 text-paniers-dark">
            {t.contact.getInTouch}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <div className="bg-paniers-orange bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock size={32} className="text-paniers-orange" />
              </div>
              <h3 className="font-serif font-bold text-lg mb-2 text-paniers-dark">{t.reservation.hours}</h3>
              <p className="text-sm text-paniers-dark opacity-80">{t.reservation.lunch}: 12:00 - 14:30</p>
              <p className="text-sm text-paniers-dark opacity-80">{t.reservation.dinner}: 19:00 - 22:00</p>
            </Card>
            <Card className="text-center">
              <div className="bg-paniers-orange bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ChefHat size={32} className="text-paniers-orange" />
              </div>
              <h3 className="font-serif font-bold text-lg mb-2 text-paniers-dark">{t.menu.title}</h3>
              <p className="text-sm text-paniers-dark opacity-80 mb-4">{t.menu.subtitle}</p>
              <Link to="/menu">
                <Button variant="outline" size="sm">
                  {t.common.viewMenu}
                </Button>
              </Link>
            </Card>
            <Card className="text-center">
              <div className="bg-paniers-orange bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wine size={32} className="text-paniers-orange" />
              </div>
              <h3 className="font-serif font-bold text-lg mb-2 text-paniers-dark">{t.reservation.title}</h3>
              <p className="text-sm text-paniers-dark opacity-80 mb-4">{t.reservation.subtitle}</p>
              <a href={siteConfig.thefork.reservationUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="primary" size="sm">
                  {t.common.bookNow}
                </Button>
              </a>
            </Card>
          </div>
        </div>
      </Section>
    </main>
  );
}
