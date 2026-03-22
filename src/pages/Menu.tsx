import { useState } from 'react';
import { Grape } from 'lucide-react';
import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { useLanguage } from '../contexts/LanguageContext';
import { menuEn, menuFr, MenuItem, WineItem } from '../data/menuData';

export function Menu() {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'starters' | 'mains' | 'desserts' | 'wines'>('starters');

  const menuData = language === 'fr' ? menuFr : menuEn;

  const tabs = [
    { id: 'starters' as const, label: t.menu.starters },
    { id: 'mains' as const, label: t.menu.mains },
    { id: 'desserts' as const, label: t.menu.desserts },
    { id: 'wines' as const, label: t.menu.wines },
  ];

  const getMenuItems = () => {
    switch (activeTab) {
      case 'starters':
        return menuData.starters;
      case 'mains':
        return menuData.mains;
      case 'desserts':
        return menuData.desserts;
      default:
        return [];
    }
  };

  const isWineTab = activeTab === 'wines';

  return (
    <main className="bg-paniers-cream">
      <Section className="bg-gradient-to-b from-paniers-light to-paniers-cream text-center py-16">
        <h1 className="font-serif font-bold text-5xl md:text-6xl text-paniers-dark mb-4">
          {t.menu.title}
        </h1>
        <p className="text-lg text-paniers-brown max-w-2xl mx-auto">
          {t.menu.subtitle}
        </p>
      </Section>

      <Section className="bg-white">
        <div className="flex flex-wrap gap-2 mb-12 justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-paniers-red text-white'
                  : 'bg-paniers-light text-paniers-dark hover:bg-paniers-border'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {!isWineTab ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {getMenuItems().map((item) => (
              <Card key={item.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-serif font-bold text-xl text-paniers-dark pr-4">
                    {item.name}
                  </h3>
                  <span className="text-paniers-red font-bold text-lg flex-shrink-0">
                    {item.price}
                  </span>
                </div>
                <p className="text-paniers-dark opacity-80 text-sm leading-relaxed mb-3">
                  {item.description}
                </p>
                {item.winePairing && (
                  <div className="flex items-center gap-2 text-paniers-brown text-sm">
                    <Grape size={16} />
                    <span>{item.winePairing}</span>
                  </div>
                )}
              </Card>
            ))}
          </div>
        ) : (
          <div className="space-y-8">
            {['White', 'Red'].map((type) => (
              <div key={type}>
                <h3 className="font-serif font-bold text-2xl text-paniers-dark mb-6">
                  {type === 'White' ? t.menu.white : t.menu.red}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {menuData.wines
                    .filter((wine) => wine.type === (language === 'fr' ? (type === 'White' ? 'Blanc' : 'Rouge') : type))
                    .map((wine) => (
                      <Card key={wine.id} className="p-6 hover:shadow-lg transition-shadow">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-serif font-bold text-lg text-paniers-dark pr-4">
                            {wine.name}
                          </h4>
                          <span className="text-paniers-red font-bold text-lg flex-shrink-0">
                            {wine.price}
                          </span>
                        </div>
                        <p className="text-paniers-brown text-sm mb-2">{wine.region}</p>
                        <p className="text-paniers-dark opacity-80 text-sm leading-relaxed">
                          {wine.description}
                        </p>
                      </Card>
                    ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </Section>
    </main>
  );
}
