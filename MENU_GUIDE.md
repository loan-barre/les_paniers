# Menu Management Guide

This guide explains how to easily update the restaurant menu without touching any code.

## How to Add or Update Menu Items

All menu items are stored in **two locations** that need to be kept in sync:

1. `src/data/menu.json` - English version (currently not used but kept for reference)
2. `src/data/menuData.ts` - Both English and French versions (actively used)

### Menu Structure

The menu is organized into four categories:
- **Starters** (Entrées)
- **Mains** (Plats principaux)
- **Desserts** (Desserts)
- **Wines** (Vins)

## Adding a New Dish

### For Food Items (Starters, Mains, Desserts)

Open `src/data/menuData.ts` and add a new entry to the appropriate array:

```typescript
{
  id: 99,  // Use a unique number
  name: 'Your Dish Name',
  description: 'A delicious description of the dish',
  price: '24€',
  winePairing: 'Red',  // Optional: 'White', 'Red', 'Rosé', etc.
}
```

**Important**: Add the dish in BOTH `menuEn` and `menuFr` sections with appropriate translations.

### For Wines

```typescript
{
  id: 99,  // Use a unique number
  name: 'Wine Name 2023',
  type: 'White',  // 'White' or 'Red' (use 'Blanc' or 'Rouge' in French section)
  region: 'Loire Valley',
  description: 'Tasting notes and characteristics',
  price: '35€',
}
```

## Example: Adding a New Main Course

```typescript
// In menuEn.mains array:
{
  id: 21,
  name: 'Grilled Salmon',
  description: 'Fresh Atlantic salmon with herb butter and asparagus',
  price: '24€',
  winePairing: 'White',
}

// In menuFr.mains array:
{
  id: 21,
  name: 'Saumon Grillé',
  description: 'Saumon frais de l\'Atlantique au beurre d\'herbes et asperges',
  price: '24€',
  winePairing: 'Blanc',
}
```

## Removing a Dish

Simply delete the entire dish object from both `menuEn` and `menuFr` arrays.

## Updating Prices

Find the dish by its `id` or `name` and update the `price` field in both language versions.

## Tips

- Always use unique IDs for new items
- Keep both English and French versions synchronized
- Use the same ID for the same dish in both languages
- Price format should always include the € symbol (e.g., '24€')
- Wine pairing is optional (you can omit the field or set it to empty string)

## After Making Changes

The changes will appear automatically on the website. No build or deployment step is needed during development.
