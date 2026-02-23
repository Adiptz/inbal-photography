import galleries from '@/data/galleries.json';
import type { Gallery } from '@/lib/types';
import GalleryDetailContent from './GalleryDetailContent';

interface GalleryDetailPageProps {
  params: { slug: string };
}

export default function GalleryDetailPage({ params }: GalleryDetailPageProps) {
  const gallery = (galleries as Gallery[]).find((g) => g.slug === params.slug);

  if (!gallery) {
    return null;
  }

  return <GalleryDetailContent gallery={gallery} />;
}

// Generate static params for all galleries
export function generateStaticParams() {
  return (galleries as Gallery[]).map((gallery) => ({
    slug: gallery.slug,
  }));
}
