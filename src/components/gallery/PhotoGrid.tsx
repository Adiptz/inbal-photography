'use client';

import Image from 'next/image';

interface PhotoGridProps {
  images: string[];
  onImageClick: (index: number) => void;
  galleryTitle: string;
}

export default function PhotoGrid({ images, onImageClick, galleryTitle }: PhotoGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {images.map((image, index) => (
        <button
          key={index}
          onClick={() => onImageClick(index)}
          className="group relative aspect-[4/5] overflow-hidden bg-surface focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
        >
          <Image
            src={image}
            alt={`${galleryTitle} - Photo ${index + 1}`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Subtle overlay on hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        </button>
      ))}
    </div>
  );
}
