'use client';

import { useState, useEffect } from 'react';

interface UseScrollSpyOptions {
  sectionIds: string[];
  offset?: number; // offset for fixed header
  threshold?: number; // how much of section needs to be visible (0-1)
}

export function useScrollSpy({
  sectionIds,
  offset = 80,
  threshold = 0.3,
}: UseScrollSpyOptions): string | null {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const visibleSections = new Map<string, number>();

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              visibleSections.set(id, entry.intersectionRatio);
            } else {
              visibleSections.delete(id);
            }

            // Find the section with highest visibility
            let maxRatio = 0;
            let maxSection: string | null = null;

            visibleSections.forEach((ratio, sectionId) => {
              if (ratio > maxRatio) {
                maxRatio = ratio;
                maxSection = sectionId;
              }
            });

            // If no section is significantly visible, check scroll position
            if (!maxSection || maxRatio < 0.1) {
              const scrollY = window.scrollY;
              if (scrollY < 100) {
                maxSection = sectionIds[0]; // First section (hero)
              }
            }

            setActiveSection(maxSection);
          });
        },
        {
          rootMargin: `-${offset}px 0px -40% 0px`,
          threshold: [0, 0.1, 0.2, 0.3, 0.5, 0.7, 1],
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    // Initial check
    const scrollY = window.scrollY;
    if (scrollY < 100) {
      setActiveSection(sectionIds[0]);
    }

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [sectionIds, offset, threshold]);

  return activeSection;
}

export function scrollToSection(sectionId: string, offset = 64) {
  const element = document.getElementById(sectionId);
  if (element) {
    const top = element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({
      top,
      behavior: 'smooth',
    });
  }
}
