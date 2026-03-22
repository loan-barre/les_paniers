import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import { MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const customIcon = L.divIcon({
  className: 'custom-icon',
  html: '<div style="background-color: #f97316; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 6px rgba(0,0,0,0.1);"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg></div>',
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
          <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
            <MapPin className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-paniers-brown">
            {t.language === 'fr' ? 'Notre Zone de Service' : 'Our Service Area'}
          </h2>
        </div>
        <p className="text-lg text-paniers-brown/80 mb-8">
          {t.language === 'fr'
            ? 'Nous livrons dans un rayon de 10km autour de notre point de collecte'
            : 'We deliver within 10km around our collection point'}
        </p>
      </div>

      <div className="h-96 w-full">
        <MapContainer
          center={position}
          zoom={12}
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
                <strong className="text-orange-500">Les Paniers</strong>
                <br />
                {t.language === 'fr' ? 'Point de collecte' : 'Collection Point'}
              </div>
            </Popup>
          </Marker>
          <Circle
            center={position}
            radius={10000}
            pathOptions={{
              fillColor: '#f97316',
              fillOpacity: 0.1,
              color: '#f97316',
              weight: 2,
            }}
          />
        </MapContainer>
      </div>
    </div>
  );
}
