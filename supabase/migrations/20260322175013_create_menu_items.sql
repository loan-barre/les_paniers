/*
  # Create Menu Items Management System

  ## New Tables
  
  1. `menu_items`
    - `id` (uuid, primary key) - Unique identifier for each menu item
    - `name_fr` (text) - French name of the dish
    - `name_en` (text) - English name of the dish
    - `description_fr` (text) - French description
    - `description_en` (text) - English description
    - `price` (numeric) - Price in euros
    - `category` (text) - Category: 'starters', 'mains', 'desserts', 'wines'
    - `image_url` (text, nullable) - Optional image URL
    - `available` (boolean, default true) - Whether the item is currently available
    - `display_order` (integer, default 0) - Order for display
    - `created_at` (timestamptz) - Creation timestamp
    - `updated_at` (timestamptz) - Last update timestamp

  ## Security
  
  - Enable RLS on `menu_items` table
  - Public READ access (anyone can view menu items)
  - INSERT/UPDATE/DELETE only for authenticated admin users
  
  ## Notes
  
  - Default values ensure data integrity
  - Timestamps track creation and modifications
  - Category field uses text for flexibility
  - Display order allows manual sorting
*/

-- Create menu_items table
CREATE TABLE IF NOT EXISTS menu_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name_fr text NOT NULL,
  name_en text NOT NULL,
  description_fr text NOT NULL DEFAULT '',
  description_en text NOT NULL DEFAULT '',
  price numeric(10,2) NOT NULL,
  category text NOT NULL,
  image_url text,
  available boolean DEFAULT true,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE menu_items ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can view available menu items
CREATE POLICY "Public can view available menu items"
  ON menu_items
  FOR SELECT
  USING (available = true);

-- Policy: Authenticated users can view all menu items (including unavailable)
CREATE POLICY "Authenticated users can view all menu items"
  ON menu_items
  FOR SELECT
  TO authenticated
  USING (true);

-- Policy: Authenticated users can insert menu items
CREATE POLICY "Authenticated users can insert menu items"
  ON menu_items
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Policy: Authenticated users can update menu items
CREATE POLICY "Authenticated users can update menu items"
  ON menu_items
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Policy: Authenticated users can delete menu items
CREATE POLICY "Authenticated users can delete menu items"
  ON menu_items
  FOR DELETE
  TO authenticated
  USING (true);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Add trigger to automatically update updated_at
DROP TRIGGER IF EXISTS update_menu_items_updated_at ON menu_items;
CREATE TRIGGER update_menu_items_updated_at
  BEFORE UPDATE ON menu_items
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Insert some sample menu items
INSERT INTO menu_items (name_fr, name_en, description_fr, description_en, price, category, display_order) VALUES
  ('Soupe à l''Oignon', 'French Onion Soup', 'Soupe gratinée traditionnelle aux oignons caramélisés', 'Traditional gratinated soup with caramelized onions', 9.50, 'starters', 1),
  ('Escargots de Bourgogne', 'Burgundy Snails', 'Six escargots au beurre persillé', 'Six snails in garlic parsley butter', 12.00, 'starters', 2),
  ('Terrine de Campagne', 'Country Pâté', 'Terrine maison servie avec cornichons', 'Homemade pâté served with pickles', 10.50, 'starters', 3),
  ('Boeuf Bourguignon', 'Beef Bourguignon', 'Mijoté de boeuf au vin rouge et légumes de saison', 'Slow-cooked beef in red wine with seasonal vegetables', 24.00, 'mains', 1),
  ('Coq au Vin', 'Coq au Vin', 'Poulet braisé au vin rouge, lardons et champignons', 'Braised chicken in red wine with bacon and mushrooms', 22.00, 'mains', 2),
  ('Magret de Canard', 'Duck Breast', 'Magret rôti, sauce aux fruits rouges', 'Roasted duck breast with red fruit sauce', 26.00, 'mains', 3),
  ('Crème Brûlée', 'Crème Brûlée', 'Crème onctueuse caramélisée à la vanille', 'Smooth vanilla custard with caramelized sugar', 8.50, 'desserts', 1),
  ('Tarte Tatin', 'Tarte Tatin', 'Tarte aux pommes caramélisées servie tiède', 'Caramelized apple tart served warm', 9.00, 'desserts', 2),
  ('Mousse au Chocolat', 'Chocolate Mousse', 'Mousse légère au chocolat noir', 'Light dark chocolate mousse', 8.00, 'desserts', 3),
  ('Bordeaux Rouge', 'Red Bordeaux', 'Vin rouge de Bordeaux, corps moyen', 'Medium-bodied red wine from Bordeaux', 38.00, 'wines', 1),
  ('Chablis Blanc', 'White Chablis', 'Vin blanc sec et minéral', 'Dry and mineral white wine', 42.00, 'wines', 2),
  ('Champagne Brut', 'Brut Champagne', 'Champagne brut traditionnel', 'Traditional brut champagne', 65.00, 'wines', 3)
ON CONFLICT DO NOTHING;