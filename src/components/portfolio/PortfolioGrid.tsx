'use client';

import { useState } from 'react';
import Lightbox from '@/components/gallery/Lightbox';
import type { PortfolioImage } from '@/lib/types';
import { getImagePath } from '@/lib/utils';

interface PortfolioGridProps {
  images: PortfolioImage[];
}

// Pattern for varied grid sizes: tall, wide, large, normal
const getSizeClass = (index: number) => {
  const pattern = index % 12;
  if (pattern === 0) return 'md:row-span-2'; // tall
  if (pattern === 3) return 'md:col-span-2'; // wide
  if (pattern === 7) return 'md:col-span-2 md:row-span-2'; // large
  if (pattern === 10) return 'md:row-span-2'; // tall
  return ''; // normal
};

export default function PortfolioGrid({ images }: PortfolioGridProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-1 auto-rows-[200px] md:auto-rows-[250px] grid-flow-dense">
        {images.map((image, index) => (
          <div
            key={image.id}
            onClick={() => setLightboxIndex(index)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`cursor-pointer overflow-hidden bg-neutral-100 transition-all duration-300 ease-out
              ${getSizeClass(index)}
              ${hoveredIndex !== null && hoveredIndex !== index ? 'opacity-50' : ''}
              ${hoveredIndex === index ? 'z-10 shadow-[0_0_30px_rgba(0,0,0,0.3)]' : ''}
            `}
          >
            <img
              src={getImagePath(image.src)}
              alt={image.alt}
              loading={index < 8 ? 'eager' : 'lazy'}
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={images.map(img => getImagePath(img.src))}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex(prev => prev !== null && prev > 0 ? prev - 1 : prev)}
          onNext={() => setLightboxIndex(prev => prev !== null && prev < images.length - 1 ? prev + 1 : prev)}
          galleryTitle="Portfolio"
        />
      )}
    </>
  );
}
