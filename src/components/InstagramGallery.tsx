import { useLanguage } from '../contexts/LanguageContext';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80',
    alt: 'Fresh salad',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    url: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80',
    alt: 'Healthy bowl',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    url: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80',
    alt: 'Vegetable soup',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    url: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80',
    alt: 'Fresh ingredients',
    span: 'md:col-span-1 md:row-span-2',
  },
  {
    url: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=800&q=80',
    alt: 'Breakfast bowl',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    url: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=800&q=80',
    alt: 'Organic vegetables',
    span: 'md:col-span-2 md:row-span-1',
  },
];

export function InstagramGallery() {
  const { t } = useLanguage();

  return (
    <div className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-paniers-brown mb-4">
          {t.gallery.title}
        </h2>
        <p className="text-lg text-paniers-brown/80 max-w-2xl mx-auto">
          {t.gallery.description}
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className={`group relative overflow-hidden rounded-2xl ${image.span} gallery-item`}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-semibold">{image.alt}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
