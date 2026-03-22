import { useState, useEffect } from 'react';
import { Grape, AlertCircle } from 'lucide-react';
import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { useLanguage } from '../contexts/LanguageContext';
import { supabase, MenuItem as DBMenuItem } from '../lib/supabase';

interface DisplayMenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  winePairing?: string;
}

export function Menu() {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'starters' | 'mains' | 'desserts' | 'wines'>('starters');
  const [menuItems, setMenuItems] = useState<DBMenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const fetchMenuItems = async () => {
    try {
      const { data, error } = await supabase
        .from('menu_items')
        .select('*')
        .eq('available', true)
        .order('display_order', { ascending: true });

      if (error) throw error;
      setMenuItems(data || []);
      setError(false);
    } catch (err) {
      console.error('Error fetching menu:', err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const tabs = [
    { id: 'starters' as const, label: t.menu.starters },
    { id: 'mains' as const, label: t.menu.mains },
    { id: 'desserts' as const, label: t.menu.desserts },
    { id: 'wines' as const, label: t.menu.wines },
  ];

  const getMenuItems = (): DisplayMenuItem[] => {
    return menuItems
      .filter(item => item.category === activeTab)
      .map(item => ({
        id: item.id,
        name: language === 'fr' ? item.name_fr : item.name_en,
        description: language === 'fr' ? item.description_fr : item.description_en,
        price: `${item.price.toFixed(2)} €`,
      }));
  };

  const isWineTab = activeTab === 'wines';

  return (
    <main className="bg-paniers-cream">
      <Section className="bg-gradient-to-b from-paniers-light to-paniers-cream text-center py-16">
        <h1 className="font-display font-bold text-5xl md:text-6xl text-paniers-dark mb-4">
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

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-paniers-red border-t-transparent"></div>
            <p className="mt-4 text-paniers-dark opacity-70">
              {language === 'fr' ? 'Chargement du menu...' : 'Loading menu...'}
            </p>
          </div>
        ) : error ? (
          <div className="bg-red-50 border border-red-200 rounded-lg p-8 text-center">
            <AlertCircle className="mx-auto mb-4 text-red-500" size={48} />
            <h3 className="font-bold text-lg text-red-800 mb-2">
              {language === 'fr' ? 'Erreur de chargement' : 'Loading Error'}
            </h3>
            <p className="text-red-700">
              {language === 'fr'
                ? 'Impossible de charger le menu. Veuillez réessayer plus tard.'
                : 'Unable to load menu. Please try again later.'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {getMenuItems().length === 0 ? (
              <div className="col-span-2 text-center py-12 text-paniers-dark opacity-70">
                {language === 'fr'
                  ? 'Aucun plat disponible dans cette catégorie'
                  : 'No items available in this category'}
              </div>
            ) : (
              getMenuItems().map((item) => (
                <Card key={item.id} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-display font-bold text-xl text-paniers-dark pr-4">
                      {item.name}
                    </h3>
                    <span className="text-paniers-red font-bold text-lg flex-shrink-0">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-paniers-dark opacity-80 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              ))
            )}
          </div>
        )}
      </Section>
    </main>
  );
}
