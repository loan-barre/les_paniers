export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  winePairing?: string;
}

export interface WineItem {
  id: number;
  name: string;
  type: string;
  region: string;
  description: string;
  price: string;
}

export interface MenuData {
  starters: MenuItem[];
  mains: MenuItem[];
  desserts: MenuItem[];
  wines: WineItem[];
}

export const menuEn: MenuData = {
  starters: [
    {
      id: 1,
      name: 'Burrata & Heirloom Tomatoes',
      description: 'Creamy burrata with seasonal tomatoes, basil oil, and aged balsamic',
      price: '14€',
      winePairing: 'White',
    },
    {
      id: 2,
      name: 'Pan-Seared Foie Gras',
      description: 'Served with brioche and fig compote',
      price: '18€',
      winePairing: 'White',
    },
    {
      id: 3,
      name: 'Cured Ham & Melon',
      description: 'Jamón ibérico with fresh seasonal melon',
      price: '16€',
      winePairing: 'Rosé',
    },
    {
      id: 4,
      name: 'Wild Mushroom Bisque',
      description: 'Creamy soup with truffle oil and crispy bread',
      price: '12€',
      winePairing: 'White',
    },
  ],
  mains: [
    {
      id: 5,
      name: 'Duck Confit with Root Vegetables',
      description: 'Slow-cooked duck leg served with seasonal root vegetables and pan sauce',
      price: '28€',
      winePairing: 'Red',
    },
    {
      id: 6,
      name: 'Pan-Seared Sea Bass',
      description: 'Fresh market fish with lemon beurre blanc and seasonal vegetables',
      price: '26€',
      winePairing: 'White',
    },
    {
      id: 7,
      name: 'Beef Tartare',
      description: 'Hand-cut beef with capers, cornichons, and quail egg',
      price: '22€',
      winePairing: 'Red',
    },
    {
      id: 8,
      name: 'Vegetable Tart',
      description: 'Seasonal vegetables in handmade puff pastry with goat cheese',
      price: '18€',
      winePairing: 'White',
    },
  ],
  desserts: [
    {
      id: 9,
      name: 'Chocolate Soufflé',
      description: 'Dark chocolate soufflé with vanilla cream',
      price: '10€',
      winePairing: 'Dessert Wine',
    },
    {
      id: 10,
      name: 'Lemon Tart',
      description: 'Crispy pastry with tangy lemon curd and meringue',
      price: '9€',
      winePairing: 'Dessert Wine',
    },
    {
      id: 11,
      name: 'Panna Cotta',
      description: 'Silky vanilla panna cotta with seasonal berry compote',
      price: '8€',
      winePairing: 'Moscato',
    },
    {
      id: 12,
      name: 'Cheese Selection',
      description: 'Curated selection of French artisanal cheeses with crackers and jam',
      price: '12€',
      winePairing: 'Red',
    },
  ],
  wines: [
    {
      id: 13,
      name: 'Sancerre Blanc 2022',
      type: 'White',
      region: 'Loire Valley',
      description: 'Crisp and mineral with citrus notes',
      price: '32€',
    },
    {
      id: 14,
      name: 'Burgundy Pinot Noir 2019',
      type: 'Red',
      region: 'Burgundy',
      description: 'Elegant and complex with cherry flavors',
      price: '48€',
    },
    {
      id: 15,
      name: 'Provence Rosé 2023',
      type: 'Rosé',
      region: 'Provence',
      description: 'Dry and refreshing with stone fruit notes',
      price: '28€',
    },
    {
      id: 16,
      name: 'Côtes du Rhône 2020',
      type: 'Red',
      region: 'Rhône Valley',
      description: 'Fruity and approachable with peppery finish',
      price: '35€',
    },
    {
      id: 17,
      name: 'Sauvignon Blanc 2023',
      type: 'White',
      region: 'Loire Valley',
      description: 'Vibrant and aromatic with herbaceous notes',
      price: '30€',
    },
    {
      id: 18,
      name: 'Alsatian Riesling 2021',
      type: 'White',
      region: 'Alsace',
      description: 'Semi-dry with floral and stone fruit characteristics',
      price: '38€',
    },
  ],
};

export const menuFr: MenuData = {
  starters: [
    {
      id: 1,
      name: 'Burrata & Tomates Anciennes',
      description: 'Burrata crémeuse avec tomates de saison, huile de basilic et vinaigre balsamique vieilli',
      price: '14€',
      winePairing: 'Blanc',
    },
    {
      id: 2,
      name: 'Foie Gras Poêlé',
      description: 'Servi avec brioche et compote de figues',
      price: '18€',
      winePairing: 'Blanc',
    },
    {
      id: 3,
      name: 'Jambon Cru & Melon',
      description: 'Jamón ibérico avec melon frais de saison',
      price: '16€',
      winePairing: 'Rosé',
    },
    {
      id: 4,
      name: 'Velouté de Champignons Sauvages',
      description: 'Soupe crémeuse à l\'huile de truffe et pain croustillant',
      price: '12€',
      winePairing: 'Blanc',
    },
  ],
  mains: [
    {
      id: 5,
      name: 'Confit de Canard aux Légumes Racines',
      description: 'Cuisse de canard confite servie avec légumes racines de saison et jus de cuisson',
      price: '28€',
      winePairing: 'Rouge',
    },
    {
      id: 6,
      name: 'Bar Poêlé',
      description: 'Poisson du marché avec beurre blanc au citron et légumes de saison',
      price: '26€',
      winePairing: 'Blanc',
    },
    {
      id: 7,
      name: 'Tartare de Bœuf',
      description: 'Bœuf coupé à la main avec câpres, cornichons et œuf de caille',
      price: '22€',
      winePairing: 'Rouge',
    },
    {
      id: 8,
      name: 'Tarte aux Légumes',
      description: 'Légumes de saison dans une pâte feuilletée maison avec fromage de chèvre',
      price: '18€',
      winePairing: 'Blanc',
    },
  ],
  desserts: [
    {
      id: 9,
      name: 'Soufflé au Chocolat',
      description: 'Soufflé au chocolat noir avec crème vanille',
      price: '10€',
      winePairing: 'Vin de Dessert',
    },
    {
      id: 10,
      name: 'Tarte au Citron',
      description: 'Pâte croustillante avec crème au citron et meringue',
      price: '9€',
      winePairing: 'Vin de Dessert',
    },
    {
      id: 11,
      name: 'Panna Cotta',
      description: 'Panna cotta vanille soyeuse avec compote de fruits rouges de saison',
      price: '8€',
      winePairing: 'Moscato',
    },
    {
      id: 12,
      name: 'Sélection de Fromages',
      description: 'Sélection de fromages artisanaux français avec crackers et confiture',
      price: '12€',
      winePairing: 'Rouge',
    },
  ],
  wines: [
    {
      id: 13,
      name: 'Sancerre Blanc 2022',
      type: 'Blanc',
      region: 'Vallée de la Loire',
      description: 'Frais et minéral avec des notes d\'agrumes',
      price: '32€',
    },
    {
      id: 14,
      name: 'Pinot Noir de Bourgogne 2019',
      type: 'Rouge',
      region: 'Bourgogne',
      description: 'Élégant et complexe avec des saveurs de cerise',
      price: '48€',
    },
    {
      id: 15,
      name: 'Rosé de Provence 2023',
      type: 'Rosé',
      region: 'Provence',
      description: 'Sec et rafraîchissant avec des notes de fruits à noyau',
      price: '28€',
    },
    {
      id: 16,
      name: 'Côtes du Rhône 2020',
      type: 'Rouge',
      region: 'Vallée du Rhône',
      description: 'Fruité et accessible avec une finale poivrée',
      price: '35€',
    },
    {
      id: 17,
      name: 'Sauvignon Blanc 2023',
      type: 'Blanc',
      region: 'Vallée de la Loire',
      description: 'Vibrant et aromatique avec des notes herbacées',
      price: '30€',
    },
    {
      id: 18,
      name: 'Riesling d\'Alsace 2021',
      type: 'Blanc',
      region: 'Alsace',
      description: 'Demi-sec avec des caractéristiques florales et de fruits à noyau',
      price: '38€',
    },
  ],
};
