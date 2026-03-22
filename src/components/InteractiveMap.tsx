import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { siteConfig } from '../siteConfig';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const customIcon = L.divIcon({
  className: 'custom-icon',
  html: '<div style="background-color: #FF821B; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 6px rgba(0,0,0,0.1);"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg></div>',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

export function InteractiveMap() {
  const { t } = useLanguage();
  const position: [number, number] = [48.8566, 2.3522];

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
      <div className="p-8 md:p-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-paniers-orange rounded-full flex items-center justify-center">
            <MapPin className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-paniers-dark">
            {t.language === 'fr' ? 'Comment nous trouver' : 'Find Us'}
          </h2>
        </div>
        <div className="space-y-2 mb-8">
          <p className="text-lg text-paniers-dark font-medium">
            {siteConfig.contact.address}
          </p>
          <p className="text-base text-paniers-dark/70">
            {t.language === 'fr'
              ? 'Venez nous rendre visite au cœur de Paris'
              : 'Come visit us in the heart of Paris'}
          </p>
        </div>
      </div>

      <div className="h-96 w-full">
        <MapContainer
          center={position}
          zoom={15}
          scrollWheelZoom={false}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={customIcon}>
            <Popup>
              <div className="text-center p-2">
                <strong className="text-paniers-orange text-lg">Les Paniers</strong>
                <br />
                <span className="text-sm text-paniers-dark">{siteConfig.contact.address}</span>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}
