import { useEffect, useState } from 'react';

/**
 * Tracks which section is currently in view and returns its id.
 * Used to highlight the active link in the navbar.
 */
export function useScrollSpy(sectionIds: string[], offset = 0.4): string {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: `-${offset * 100}% 0px -${(1 - offset) * 100}% 0px` }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds, offset]);

  return activeId;
}
