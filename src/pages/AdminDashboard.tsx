import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase, MenuItem } from '../lib/supabase';
import { Plus, CreditCard as Edit2, Trash2, LogOut, Save, X } from 'lucide-react';

export function AdminDashboard() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newItem, setNewItem] = useState<Partial<MenuItem>>({
    name_fr: '',
    name_en: '',
    description_fr: '',
    description_en: '',
    price: 0,
    category: 'starters',
    available: true,
    display_order: 0,
  });
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
    fetchMenuItems();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      navigate('/gestion-interne-paniers');
    }
  };

  const fetchMenuItems = async () => {
    try {
      const { data, error } = await supabase
        .from('menu_items')
        .select('*')
        .order('category', { ascending: true })
        .order('display_order', { ascending: true });

      if (error) throw error;
      setMenuItems(data || []);
    } catch (error) {
      console.error('Error fetching menu items:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/gestion-interne-paniers');
  };

  const handleAdd = async () => {
    try {
      const { error } = await supabase.from('menu_items').insert([newItem]);
      if (error) throw error;

      setShowAddForm(false);
      setNewItem({
        name_fr: '',
        name_en: '',
        description_fr: '',
        description_en: '',
        price: 0,
        category: 'starters',
        available: true,
        display_order: 0,
      });
      fetchMenuItems();
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  const handleUpdate = async () => {
    if (!editingItem) return;

    try {
      const { error } = await supabase
        .from('menu_items')
        .update(editingItem)
        .eq('id', editingItem.id);

      if (error) throw error;
      setEditingItem(null);
      fetchMenuItems();
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cet élément ?')) return;

    try {
      const { error } = await supabase.from('menu_items').delete().eq('id', id);
      if (error) throw error;
      fetchMenuItems();
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const getCategoryLabel = (category: string) => {
    const labels: Record<string, string> = {
      starters: 'Entrées',
      mains: 'Plats',
      desserts: 'Desserts',
      wines: 'Vins',
    };
    return labels[category] || category;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-paniers-cream flex items-center justify-center">
        <div className="text-paniers-dark">Chargement...</div>
      </div>
    );
  }

  return (
    <>
      <meta name="robots" content="noindex, nofollow" />
      <div className="min-h-screen bg-paniers-cream">
        <header className="bg-white shadow-sm border-b border-paniers-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <h1 className="font-serif font-bold text-2xl text-paniers-dark">
              Gestion du Menu - Les Paniers
            </h1>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-paniers-dark hover:text-paniers-red transition-colors"
            >
              <LogOut size={20} />
              <span>Déconnexion</span>
            </button>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-6">
            <button
              onClick={() => setShowAddForm(true)}
              className="bg-paniers-red text-white px-6 py-3 rounded-lg font-semibold hover:bg-paniers-terracotta transition-colors flex items-center gap-2"
            >
              <Plus size={20} />
              Ajouter un plat
            </button>
          </div>

          {showAddForm && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-serif font-bold text-xl text-paniers-dark">
                    Nouveau plat
                  </h2>
                  <button onClick={() => setShowAddForm(false)}>
                    <X size={24} className="text-paniers-dark" />
                  </button>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Nom (FR)</label>
                      <input
                        type="text"
                        value={newItem.name_fr}
                        onChange={(e) => setNewItem({ ...newItem, name_fr: e.target.value })}
                        className="w-full px-3 py-2 border border-paniers-border rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Nom (EN)</label>
                      <input
                        type="text"
                        value={newItem.name_en}
                        onChange={(e) => setNewItem({ ...newItem, name_en: e.target.value })}
                        className="w-full px-3 py-2 border border-paniers-border rounded-lg"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Description (FR)</label>
                    <textarea
                      value={newItem.description_fr}
                      onChange={(e) => setNewItem({ ...newItem, description_fr: e.target.value })}
                      className="w-full px-3 py-2 border border-paniers-border rounded-lg"
                      rows={2}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Description (EN)</label>
                    <textarea
                      value={newItem.description_en}
                      onChange={(e) => setNewItem({ ...newItem, description_en: e.target.value })}
                      className="w-full px-3 py-2 border border-paniers-border rounded-lg"
                      rows={2}
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Prix (€)</label>
                      <input
                        type="number"
                        step="0.01"
                        value={newItem.price}
                        onChange={(e) => setNewItem({ ...newItem, price: parseFloat(e.target.value) })}
                        className="w-full px-3 py-2 border border-paniers-border rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Catégorie</label>
                      <select
                        value={newItem.category}
                        onChange={(e) => setNewItem({ ...newItem, category: e.target.value as any })}
                        className="w-full px-3 py-2 border border-paniers-border rounded-lg"
                      >
                        <option value="starters">Entrées</option>
                        <option value="mains">Plats</option>
                        <option value="desserts">Desserts</option>
                        <option value="wines">Vins</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Ordre</label>
                      <input
                        type="number"
                        value={newItem.display_order}
                        onChange={(e) => setNewItem({ ...newItem, display_order: parseInt(e.target.value) })}
                        className="w-full px-3 py-2 border border-paniers-border rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={newItem.available}
                      onChange={(e) => setNewItem({ ...newItem, available: e.target.checked })}
                      className="rounded"
                    />
                    <label className="text-sm">Disponible</label>
                  </div>
                  <button
                    onClick={handleAdd}
                    className="w-full bg-paniers-red text-white py-2 rounded-lg font-semibold hover:bg-paniers-terracotta"
                  >
                    Ajouter
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="bg-white rounded-lg shadow-sm border border-paniers-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-paniers-light border-b border-paniers-border">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold text-sm">Nom</th>
                    <th className="text-left px-4 py-3 font-semibold text-sm">Catégorie</th>
                    <th className="text-left px-4 py-3 font-semibold text-sm">Prix</th>
                    <th className="text-left px-4 py-3 font-semibold text-sm">Statut</th>
                    <th className="text-left px-4 py-3 font-semibold text-sm">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {menuItems.map((item) => (
                    <tr key={item.id} className="border-b border-paniers-border last:border-0">
                      <td className="px-4 py-3">
                        <div>
                          <div className="font-medium">{item.name_fr}</div>
                          <div className="text-sm text-gray-500">{item.name_en}</div>
                        </div>
                      </td>
                      <td className="px-4 py-3">{getCategoryLabel(item.category)}</td>
                      <td className="px-4 py-3">{item.price.toFixed(2)} €</td>
                      <td className="px-4 py-3">
                        <span
                          className={`px-2 py-1 rounded text-xs font-semibold ${
                            item.available
                              ? 'bg-green-100 text-green-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {item.available ? 'Disponible' : 'Indisponible'}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex gap-2">
                          <button
                            onClick={() => setEditingItem(item)}
                            className="text-blue-600 hover:text-blue-800"
                          >
                            <Edit2 size={18} />
                          </button>
                          <button
                            onClick={() => handleDelete(item.id)}
                            className="text-red-600 hover:text-red-800"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {editingItem && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-serif font-bold text-xl text-paniers-dark">
                    Modifier le plat
                  </h2>
                  <button onClick={() => setEditingItem(null)}>
                    <X size={24} className="text-paniers-dark" />
                  </button>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Nom (FR)</label>
                      <input
                        type="text"
                        value={editingItem.name_fr}
                        onChange={(e) => setEditingItem({ ...editingItem, name_fr: e.target.value })}
                        className="w-full px-3 py-2 border border-paniers-border rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Nom (EN)</label>
                      <input
                        type="text"
                        value={editingItem.name_en}
                        onChange={(e) => setEditingItem({ ...editingItem, name_en: e.target.value })}
                        className="w-full px-3 py-2 border border-paniers-border rounded-lg"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Description (FR)</label>
                    <textarea
                      value={editingItem.description_fr}
                      onChange={(e) => setEditingItem({ ...editingItem, description_fr: e.target.value })}
                      className="w-full px-3 py-2 border border-paniers-border rounded-lg"
                      rows={2}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Description (EN)</label>
                    <textarea
                      value={editingItem.description_en}
                      onChange={(e) => setEditingItem({ ...editingItem, description_en: e.target.value })}
                      className="w-full px-3 py-2 border border-paniers-border rounded-lg"
                      rows={2}
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Prix (€)</label>
                      <input
                        type="number"
                        step="0.01"
                        value={editingItem.price}
                        onChange={(e) => setEditingItem({ ...editingItem, price: parseFloat(e.target.value) })}
                        className="w-full px-3 py-2 border border-paniers-border rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Catégorie</label>
                      <select
                        value={editingItem.category}
                        onChange={(e) => setEditingItem({ ...editingItem, category: e.target.value as any })}
                        className="w-full px-3 py-2 border border-paniers-border rounded-lg"
                      >
                        <option value="starters">Entrées</option>
                        <option value="mains">Plats</option>
                        <option value="desserts">Desserts</option>
                        <option value="wines">Vins</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Ordre</label>
                      <input
                        type="number"
                        value={editingItem.display_order}
                        onChange={(e) => setEditingItem({ ...editingItem, display_order: parseInt(e.target.value) })}
                        className="w-full px-3 py-2 border border-paniers-border rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={editingItem.available}
                      onChange={(e) => setEditingItem({ ...editingItem, available: e.target.checked })}
                      className="rounded"
                    />
                    <label className="text-sm">Disponible</label>
                  </div>
                  <button
                    onClick={handleUpdate}
                    className="w-full bg-paniers-red text-white py-2 rounded-lg font-semibold hover:bg-paniers-terracotta flex items-center justify-center gap-2"
                  >
                    <Save size={18} />
                    Enregistrer
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </>
  );
}
