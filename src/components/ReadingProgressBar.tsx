import React, { useEffect, useState, useRef, useCallback } from 'react';

interface SectionInfo {
  id: string;
  name: string;
}

const SECTIONS: SectionInfo[] = [
  { id: 'hero', name: 'Overview' },
  { id: 'experience', name: 'Experience' },
  { id: 'projects', name: 'Projects' },
  { id: 'skills', name: 'Skills Matrix' },
  { id: 'education', name: 'Education & Certs' },
  { id: 'photography', name: 'Media & Studio' },
  { id: 'estimator', name: 'Scope Estimator' },
  { id: 'faq', name: 'FAQ' },
  { id: 'contact', name: 'Contact' },
];

export const ReadingProgressBar: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState<string>('Overview');
  const [isScrolling, setIsScrolling] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hoverPosition, setHoverPosition] = useState<{ percent: number; x: number; sectionName: string } | null>(null);

  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const rafRef = useRef<number | null>(null);
  const barContainerRef = useRef<HTMLDivElement>(null);

  const calculateProgressAndSection = useCallback(() => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

    if (scrollHeight <= 0) {
      setProgress(0);
      return;
    }

    const currentPercent = Math.min(100, Math.max(0, (scrollTop / scrollHeight) * 100));
    setProgress(currentPercent);

    // Identify current visible section
    const viewportMiddle = scrollTop + window.innerHeight * 0.35;
    let currentSectionName = SECTIONS[0].name;

    for (const section of SECTIONS) {
      const el = document.getElementById(section.id);
      if (el) {
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (viewportMiddle >= top && viewportMiddle < top + height) {
          currentSectionName = section.name;
          break;
        } else if (viewportMiddle >= top) {
          currentSectionName = section.name;
        }
      }
    }

    setActiveSection(currentSectionName);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 1400);

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      rafRef.current = requestAnimationFrame(() => {
        calculateProgressAndSection();
      });
    };

    const handleResize = () => {
      calculateProgressAndSection();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    // Initial calculation
    calculateProgressAndSection();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [calculateProgressAndSection]);

  // Handle clicking on the bar to jump to section/position
  const handleBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, clickX / rect.width));
    const targetScroll = ratio * (document.documentElement.scrollHeight - window.innerHeight);

    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth',
    });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, clickX / rect.width));
    const targetScroll = ratio * (document.documentElement.scrollHeight - window.innerHeight);

    // Approximate section at that scroll position
    const estimatedMiddle = targetScroll + window.innerHeight * 0.35;
    let sectionAtPoint = SECTIONS[0].name;

    for (const section of SECTIONS) {
      const el = document.getElementById(section.id);
      if (el) {
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (estimatedMiddle >= top && estimatedMiddle < top + height) {
          sectionAtPoint = section.name;
          break;
        } else if (estimatedMiddle >= top) {
          sectionAtPoint = section.name;
        }
      }
    }

    setHoverPosition({
      percent: Math.round(ratio * 100),
      x: e.clientX,
      sectionName: sectionAtPoint,
    });
  };

  const roundedProgress = Math.round(progress);
  const showBadge = (isScrolling || isHovered) && progress > 1;

  return (
    <aside
      id="scroll-reading-progress-container"
      ref={barContainerRef}
      role="progressbar"
      aria-label="Page reading progress"
      aria-valuenow={roundedProgress}
      aria-valuemin={0}
      aria-valuemax={100}
      className="fixed top-0 left-0 right-0 z-50 pointer-events-none select-none"
    >
      {/* Interactive hover/click track area (allows subtle click-to-seek without interfering with clicks below) */}
      <div
        className="w-full h-3 cursor-pointer pointer-events-auto -mt-0.5 relative group"
        onClick={handleBarClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setHoverPosition(null);
        }}
        onMouseMove={handleMouseMove}
        title="Click to jump to this point on the page"
      >
        {/* Subtle track background only visible when hovering or actively scrolling */}
        <div
          className={`absolute top-0 left-0 right-0 h-[3px] bg-white/[0.04] transition-opacity duration-300 ${
            progress > 0 ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* The active progress fill bar */}
        <div
          id="scroll-reading-progress-bar"
          className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-emerald-500 via-teal-400 to-sky-400 transition-[width] duration-75 ease-out shadow-[0_0_10px_rgba(52,211,153,0.45)]"
          style={{ width: `${progress}%` }}
        >
          {/* Glowing pulse indicator at leading edge */}
          {progress > 0 && progress < 100 && (
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#34d399,0_0_14px_#38bdf8] opacity-90 animate-pulse" />
          )}
        </div>
      </div>

      {/* Hover preview tooltip */}
      {isHovered && hoverPosition && (
        <div
          className="absolute top-3.5 -translate-x-1/2 bg-[#0a0a0c]/95 backdrop-blur-md border border-white/15 px-2.5 py-1 rounded shadow-2xl text-[10px] font-mono pointer-events-none whitespace-nowrap text-white/90 z-50 flex items-center gap-2 transition-all duration-75"
          style={{
            left: `${Math.min(window.innerWidth - 70, Math.max(70, hoverPosition.x))}px`,
          }}
        >
          <span className="text-emerald-400 font-medium">{hoverPosition.sectionName}</span>
          <span className="text-white/40">•</span>
          <span className="text-white/70">{hoverPosition.percent}%</span>
        </div>
      )}

      {/* Floating Section Status Badge (shows when actively scrolling) */}
      <div
        className={`absolute top-2.5 right-4 pointer-events-none transition-all duration-300 transform ${
          showBadge && !isHovered
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-2'
        }`}
      >
        <div className="bg-[#0c0d10]/90 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded-full shadow-lg text-[10px] font-mono flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-white/80 font-medium">{activeSection}</span>
          <span className="text-white/30">|</span>
          <span className="text-emerald-400/90 font-mono font-semibold">{roundedProgress}%</span>
        </div>
      </div>
    </aside>
  );
};
