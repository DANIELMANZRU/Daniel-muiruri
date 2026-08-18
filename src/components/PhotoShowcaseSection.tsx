import React, { useState, useRef } from 'react';
import { Camera, Sliders, Image as ImageIcon, Sparkles, Eye, SunMedium, Palette, MapPin, ZoomIn, X, ChevronLeft, ChevronRight, ArrowRight, Video, Film, SlidersHorizontal, Volume2, Layers, MonitorPlay, Play, CheckCircle2 } from 'lucide-react';

import imgSkylineNight from '../assets/images/gtc_night_skyline_1785228886203.jpg';
import imgPrismTower from '../assets/images/prism_pwc_twilight_1785228945932.jpg';
import imgAerialSkyline from '../assets/images/kicc_aerial_cityscape_1785228959907.jpg';
import imgKenyaJersey from '../assets/images/kenya_jersey_portrait_1785228974959.jpg';
import imgSwagBoy from '../assets/images/swag_coming_soon_1785228988232.jpg';

interface GalleryPhoto {
  id: string;
  title: string;
  category: 'architecture' | 'portrait' | 'cityscape';
  categoryLabel: string;
  location: string;
  imgUrl: string;
  description: string;
  cameraSettings: string;
  editingNotes: string[];
}

const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'photo-1',
    title: 'GTC & Westlands Night Skyline',
    category: 'cityscape',
    categoryLabel: 'Urban Night Cityscape',
    location: 'Westlands, Nairobi',
    imgUrl: imgSkylineNight,
    description: 'Cinematic long-exposure night view of the GTC Residence and Westlands skyscraper skyline glowing warmly against the evening dark.',
    cameraSettings: 'ISO 100 • f/8.0 • 4.0s exposure • 50mm Prime',
    editingNotes: ['Tone Curve Highlight Roll-off', 'Shadow Recovery & Dehaze', 'Warm Architectural Lighting Balance']
  },
  {
    id: 'photo-5',
    title: 'Prism Tower & PwC Building Twilight',
    category: 'architecture',
    categoryLabel: 'Real Estate & Architecture',
    location: 'Upper Hill / CBD, Nairobi',
    imgUrl: imgPrismTower,
    description: 'Architectural dusk framing showcasing the iconic curved glass Kings Prism Tower and PwC regional headquarters.',
    cameraSettings: 'ISO 100 • f/11.0 • 1.5s • 24-70mm Zoom',
    editingNotes: ['Perspective Geometry Grid Fix', 'Blue Hour Glass Reflection Boost', 'Shadow Noise Reduction']
  },
  {
    id: 'photo-6',
    title: 'KICC & CBD Aerial Horizon',
    category: 'cityscape',
    categoryLabel: 'Cityscape & Aerial View',
    location: 'Nairobi Central Business District',
    imgUrl: imgAerialSkyline,
    description: 'High-altitude panoramic view capturing the iconic KICC tower, Parliament buildings, and Nairobi city center horizon.',
    cameraSettings: 'ISO 100 • f/5.6 • 1/1000s • 16-35mm Wide',
    editingNotes: ['Atmospheric Haze Elimination', 'Building Facade Sharpening', 'Natural Sky Graduated Filter']
  },
  {
    id: 'photo-7',
    title: 'Authentic KENYA Football Jersey Portrait',
    category: 'portrait',
    categoryLabel: 'Cultural & Fashion Portrait',
    location: 'Nairobi Outdoor Set',
    imgUrl: imgKenyaJersey,
    description: 'National Kenya football jersey styled with traditional beaded jewelry and gold accents in front of hanging outdoor linens.',
    cameraSettings: 'ISO 200 • f/2.5 • 1/500s • 85mm Portrait',
    editingNotes: ['Melanin Skin Tone Glow Calibration', 'Red Jersey Saturation Balance', 'Soft Background Bokeh']
  },
  {
    id: 'photo-8',
    title: 'SWAG COMING SOON Selective Color Portrait',
    category: 'portrait',
    categoryLabel: 'Monochrome & Selective Color',
    location: 'Urban Concept Set',
    imgUrl: imgSwagBoy,
    description: 'Conceptual portrait featuring black & white desaturation with selective red rose cap embroidery pop and sign contrast.',
    cameraSettings: 'ISO 100 • f/1.8 • 1/1600s • 50mm Prime',
    editingNotes: ['Selective Color Masking (Red Cap Embroidery)', 'High Contrast Monochromatic Curve', 'Eye & Cap Sharpening']
  }
];

interface BeforeAfterSample {
  id: string;
  title: string;
  category: string;
  description: string;
  beforeImg: string;
  afterImg: string;
  toolsUsed: string[];
}

const SAMPLES: BeforeAfterSample[] = [
  {
    id: 'gtc-night',
    title: 'GTC & Westlands Night Skyline',
    category: 'Urban Night Cityscape',
    description: 'Long exposure lighting recovery, perspective geometry grid alignment, and clean dark shadow noise reduction.',
    beforeImg: imgSkylineNight,
    afterImg: imgSkylineNight,
    toolsUsed: ['Adobe Lightroom Classic', 'Dehaze Filter', 'Perspective Fix']
  },
  {
    id: 'melanin-portrait',
    title: 'Authentic KENYA Jersey & Melanin Glow',
    category: 'Cultural Fashion Portrait',
    description: 'Frequency separation skin smoothing, eye pop, split-toning warm highlights, and rich cinematic melanin shadow tones.',
    beforeImg: imgKenyaJersey,
    afterImg: imgKenyaJersey,
    toolsUsed: ['Photoshop', 'Lightroom Classic', 'Frequency Separation', 'Melanin Retouching']
  },
  {
    id: 'prism-twilight',
    title: 'Prism Tower & PwC Building Twilight',
    category: 'Real Estate & Architecture',
    description: 'Blue hour light balance, vertical line alignment, and glass window reflection contrast curves.',
    beforeImg: imgPrismTower,
    afterImg: imgPrismTower,
    toolsUsed: ['Adobe Lightroom', 'Geometry Alignment', 'Tone Curve']
  },
  {
    id: 'swag-portrait',
    title: 'SWAG COMING SOON Selective Color',
    category: 'Monochrome & Selective Color',
    description: 'Black & white desaturation, selective color masking for red cap embroidery, and eye sharpening.',
    beforeImg: imgSwagBoy,
    afterImg: imgSwagBoy,
    toolsUsed: ['Photoshop', 'Selective Color Masking', 'High Contrast Curve']
  }
];

const EDITING_TOOLS = [
  { name: 'Adobe Premiere Pro & DaVinci', level: 'Elite Master', desc: 'Cinematic cutting, multi-cam pacing, 4K timeline rendering, audio mastering & colorist grading' },
  { name: 'Adobe After Effects & Motion', level: 'Advanced / VFX', desc: 'Keyframing, kinetic title typography, visual effects, dynamic lower-thirds & motion design' },
  { name: 'CapCut Pro & Short-Form Suite', level: 'Viral Social Pacing', desc: 'High-retention vertical 9:16 reels, TikToks, Shorts, auto-subtitles & beat-sync audio rhythm' },
  { name: 'Adobe Lightroom Classic', level: 'Advanced / Master', desc: 'Color grading, RAW curve processing, tone curves & batch preset styling' },
  { name: 'Adobe Photoshop', level: 'Advanced / Master', desc: 'Frequency separation skin retouching, object removal & compositing' },
  { name: 'Photoshop Express & Snapseed', level: 'Expert Mobile', desc: 'On-the-go quick retouching, mobile layer blending & quick touchups' },
  { name: 'Digital Image & Video Enhancers', level: 'Modern Workflow', desc: 'Noise reduction, 60fps frame interpolation, upscaling & lighting reconstruction' },
  { name: 'Camera Framing & Direction', level: 'Practicing & Learning', desc: 'Actively honing DSLR/mirrorless camera settings, studio lighting & composition' }
];

export const PhotoShowcaseSection: React.FC = () => {
  const [activeSampleId, setActiveSampleId] = useState<string>(SAMPLES[0].id);
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [lightboxPhoto, setLightboxPhoto] = useState<GalleryPhoto | null>(null);

  const carouselRef = useRef<HTMLDivElement>(null);

  const activeSample = SAMPLES.find(s => s.id === activeSampleId) || SAMPLES[0];

  const filteredGallery = selectedFilter === 'all'
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter(p => p.category === selectedFilter);

  const scrollGallery = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging && e.buttons !== 1) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(percent);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
    const percent = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(percent);
  };

  return (
    <section id="photography" className="py-20 relative bg-[#08080a] border-t border-white/10 font-outfit">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-outfit uppercase tracking-[0.25em] font-semibold text-cyan-400 flex items-center gap-2">
            <Video className="w-4 h-4 text-cyan-400" />
            <span>Creative Media, Elite Video & Photo Studio</span>
          </p>
          <h2 className="text-3xl sm:text-5xl font-outfit font-extrabold text-white tracking-tight leading-tight">
            Elite <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-teal-300">Video Editing</span> & <span className="font-playfair italic font-normal text-cyan-300">Photo Retouching</span>
          </h2>
          <p className="text-white/70 text-base font-outfit font-light leading-relaxed">
            A showcase of elite professional video editing, cinematic post-production, Nairobi skyline architecture, and authentic cultural portraits. Delivering commercial-grade pacing, color grading, sound design, and viral social cuts.
          </p>
        </div>

        {/* 1. HORIZONTAL SIDE-TO-SIDE SCROLLING GALLERY SHOWCASE */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <h3 className="text-xl font-outfit font-bold text-white tracking-tight flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-cyan-400" />
                <span>Featured Photography Showcase ({GALLERY_PHOTOS.length} Shots)</span>
              </h3>
              <p className="text-xs text-white/50 font-outfit mt-1 flex items-center gap-1.5">
                <span>Scroll side-to-side or use arrows to view all photos</span>
                <ArrowRight className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              </p>
            </div>

            {/* Navigation & Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Category Filters */}
              <div className="flex items-center gap-1.5 bg-white/[0.03] p-1 rounded-full border border-white/10">
                {[
                  { id: 'all', label: 'All Shots' },
                  { id: 'cityscape', label: 'Cityscapes' },
                  { id: 'architecture', label: 'Architecture' },
                  { id: 'portrait', label: 'Portraits' }
                ].map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setSelectedFilter(f.id)}
                    className={`px-3.5 py-1 rounded-full text-xs font-outfit font-medium transition-all ${
                      selectedFilter === f.id
                        ? 'bg-cyan-400 text-black font-bold shadow-md'
                        : 'text-white/60 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>

              {/* Side-to-Side Carousel Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => scrollGallery('left')}
                  className="p-2.5 rounded-full bg-white/5 border border-white/15 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all active:scale-95 shadow-lg"
                  title="Scroll Left"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => scrollGallery('right')}
                  className="p-2.5 rounded-full bg-white/5 border border-white/15 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all active:scale-95 shadow-lg"
                  title="Scroll Right"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Horizontal Track Container */}
          <div className="relative group/carousel">
            <div
              ref={carouselRef}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 pt-2 no-scrollbar scroll-smooth"
            >
              {filteredGallery.map((photo) => (
                <div
                  key={photo.id}
                  onClick={() => setLightboxPhoto(photo)}
                  className="snap-start shrink-0 w-[290px] sm:w-[340px] md:w-[380px] group/card relative rounded-2xl overflow-hidden bg-[#0d0d10] border border-white/10 hover:border-cyan-500/60 transition-all duration-300 cursor-pointer flex flex-col justify-between shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-1.5"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-black/60">
                    <img
                      src={photo.imgUrl}
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-700 ease-out"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d10] via-black/20 to-transparent opacity-80 group-hover/card:opacity-50 transition-opacity"></div>
                    
                    {/* Location Badge */}
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/80 border border-white/20 text-cyan-300 text-[11px] font-outfit font-medium flex items-center gap-1.5 backdrop-blur-md shadow-md">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{photo.location}</span>
                    </span>

                    {/* Zoom Icon Hover Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity bg-black/40 backdrop-blur-xs">
                      <div className="w-12 h-12 rounded-full bg-cyan-400 text-black flex items-center justify-center shadow-xl group-hover/card:scale-110 transition-transform">
                        <ZoomIn className="w-6 h-6" />
                      </div>
                    </div>
                  </div>

                  {/* Card Content with Refined Outfit Typography */}
                  <div className="p-5 space-y-2 bg-[#0d0d10]">
                    <span className="text-[11px] font-outfit font-semibold text-cyan-400 uppercase tracking-widest block">
                      {photo.categoryLabel}
                    </span>
                    <h4 className="text-base font-outfit font-bold text-white group-hover/card:text-cyan-300 transition-colors line-clamp-1">
                      {photo.title}
                    </h4>
                    <p className="text-xs text-white/60 font-outfit font-light line-clamp-2 leading-relaxed">
                      {photo.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Horizontal Scroll Hint Progress Line */}
            <div className="flex items-center justify-between text-xs font-outfit text-white/50 pt-2 border-t border-white/5">
              <span>← Drag or use arrows to scroll horizontally →</span>
              <span className="text-cyan-400/90 font-outfit font-medium">Outfit Modern Typography Styling</span>
            </div>
          </div>
        </div>

        {/* 2. INTERACTIVE BEFORE / AFTER RETOUCHING COMPARISON SLIDER */}
        <div className="pt-8 border-t border-white/10 space-y-8">
          <div className="max-w-2xl space-y-2">
            <p className="text-xs font-outfit font-semibold text-cyan-400 uppercase tracking-widest flex items-center gap-2">
              <Sliders className="w-3.5 h-3.5" />
              <span>Interactive Retouching Slider</span>
            </p>
            <h3 className="text-2xl sm:text-3xl font-outfit font-extrabold text-white tracking-tight">
              RAW Exposure vs <span className="font-playfair italic font-normal text-cyan-300">Retouched Final</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Controls & Sample Selection */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-3">
                <h4 className="text-xs uppercase font-outfit font-semibold tracking-widest text-white/50 flex items-center gap-2">
                  <Sliders className="w-3.5 h-3.5 text-cyan-400" />
                  Select Retouching Sample
                </h4>
                
                <div className="space-y-2">
                  {SAMPLES.map((sample) => (
                    <button
                      key={sample.id}
                      onClick={() => {
                        setActiveSampleId(sample.id);
                        setSliderPosition(50);
                      }}
                      className={`w-full text-left p-3.5 rounded-lg border transition-all flex items-center justify-between ${
                        activeSampleId === sample.id
                          ? 'bg-cyan-500/10 border-cyan-500/50 text-white shadow-lg'
                          : 'bg-white/[0.02] border-white/5 text-white/60 hover:text-white hover:bg-white/[0.04]'
                      }`}
                    >
                      <div>
                        <p className="text-sm font-outfit font-bold">{sample.title}</p>
                        <p className="text-[11px] font-outfit text-white/40">{sample.category}</p>
                      </div>
                      {activeSampleId === sample.id && (
                        <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sample Details */}
              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-xs font-outfit font-semibold text-cyan-400 uppercase tracking-wider">
                  <SunMedium className="w-3.5 h-3.5" />
                  <span>Color & Retouching Breakdown</span>
                </div>
                <h4 className="text-lg font-outfit font-bold text-white">{activeSample.title}</h4>
                <p className="text-xs text-white/70 font-outfit leading-relaxed font-light">{activeSample.description}</p>
                
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {activeSample.toolsUsed.map((tool, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-outfit font-medium text-cyan-300">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Slider Comparison View */}
            <div className="lg:col-span-7 space-y-3">
              <div className="flex items-center justify-between text-xs font-outfit text-white/60 px-1">
                <span className="flex items-center gap-1.5 text-white/40">
                  <Eye className="w-3.5 h-3.5 text-red-400/70" />
                  <span>UNEDITED (RAW LOOK)</span>
                </span>
                <span className="text-[11px] text-cyan-400 font-outfit font-medium">Drag middle slider to compare</span>
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>RETOUCHED & GRADED</span>
                </span>
              </div>

              <div
                className="relative w-full h-[380px] sm:h-[480px] rounded-2xl overflow-hidden border border-white/15 shadow-2xl select-none cursor-ew-resize group bg-black"
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
              >
                {/* After Image */}
                <img
                  src={activeSample.afterImg}
                  alt={`${activeSample.title} - Retouched`}
                  className="absolute inset-0 w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-[10px] font-outfit font-semibold uppercase tracking-wider backdrop-blur-md">
                  Retouched & Color Graded
                </span>

                {/* Before Image */}
                <div
                  className="absolute top-0 bottom-0 left-0 overflow-hidden border-r-2 border-cyan-400 shadow-2xl"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img
                    src={activeSample.beforeImg}
                    alt={`${activeSample.title} - Unedited`}
                    className="absolute top-0 bottom-0 left-0 max-w-none h-full object-cover filter brightness-75 contrast-90 saturate-50"
                    style={{ width: '100%', minWidth: '100%' }}
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-black/80 border border-white/20 text-white/60 text-[10px] font-outfit font-semibold uppercase tracking-wider backdrop-blur-md">
                    Unedited (RAW Profile)
                  </span>
                </div>

                {/* Knob */}
                <div
                  className="absolute top-0 bottom-0 z-20 flex items-center justify-center -ml-4 pointer-events-none"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="w-8 h-8 rounded-full bg-cyan-400 text-black flex items-center justify-center shadow-2xl ring-4 ring-black/50">
                    <Sliders className="w-4 h-4 rotate-90" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 3. ELITE VIDEO EDITING & CINEMATIC POST-PRODUCTION SUITE */}
        <div className="pt-8 border-t border-white/5 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <p className="text-xs font-outfit uppercase tracking-[0.2em] font-semibold text-teal-400 flex items-center gap-2">
                <Film className="w-4 h-4" />
                <span>Cinematic Video Editing & Post-Production Standards</span>
              </p>
              <h3 className="text-2xl sm:text-3xl font-outfit font-extrabold text-white tracking-tight">
                Elite <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-300 to-sky-400">Video Editing Profession</span>
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-teal-400/10 text-teal-300 border border-teal-400/20 text-xs font-outfit font-medium">
                4K 60fps • 9:16 Reels • Multi-Cam Sync
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 hover:border-teal-500/40 transition-all space-y-3">
              <div className="w-9 h-9 rounded-lg bg-teal-400/10 border border-teal-400/20 flex items-center justify-center text-teal-300">
                <SlidersHorizontal className="w-5 h-5" />
              </div>
              <h4 className="text-base font-outfit font-bold text-white">Cinematic Color Grading</h4>
              <p className="text-xs text-white/60 font-outfit font-light leading-relaxed">
                Log/RAW conversions, 3D LUT mastering, film grain emulation, skin-tone isolation, and high dynamic range lighting balance in Premiere Pro & DaVinci Resolve.
              </p>
              <div className="pt-1 flex flex-wrap gap-1.5 text-[10px] text-teal-300/80 font-mono">
                <span className="bg-white/5 px-2 py-0.5 rounded border border-white/10">S-Log/Rec.709</span>
                <span className="bg-white/5 px-2 py-0.5 rounded border border-white/10">3D LUTs</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 hover:border-cyan-500/40 transition-all space-y-3">
              <div className="w-9 h-9 rounded-lg bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-300">
                <Film className="w-5 h-5" />
              </div>
              <h4 className="text-base font-outfit font-bold text-white">High-Retention Narrative Cuts</h4>
              <p className="text-xs text-white/60 font-outfit font-light leading-relaxed">
                Frame-accurate jumpcuts, J/L audio transitions, seamless B-roll cutaways, and dynamic pacing engineered for maximum viewer retention.
              </p>
              <div className="pt-1 flex flex-wrap gap-1.5 text-[10px] text-cyan-300/80 font-mono">
                <span className="bg-white/5 px-2 py-0.5 rounded border border-white/10">Pacing Rhythm</span>
                <span className="bg-white/5 px-2 py-0.5 rounded border border-white/10">Multi-Cam</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 hover:border-sky-500/40 transition-all space-y-3">
              <div className="w-9 h-9 rounded-lg bg-sky-400/10 border border-sky-400/20 flex items-center justify-center text-sky-300">
                <Volume2 className="w-5 h-5" />
              </div>
              <h4 className="text-base font-outfit font-bold text-white">Audio Foley & Sound Design</h4>
              <p className="text-xs text-white/60 font-outfit font-light leading-relaxed">
                Multi-layer sound staging, automatic music ducking under voiceovers, ambient Foley SFX, room noise gating, and crisp speech compression.
              </p>
              <div className="pt-1 flex flex-wrap gap-1.5 text-[10px] text-sky-300/80 font-mono">
                <span className="bg-white/5 px-2 py-0.5 rounded border border-white/10">SFX Staging</span>
                <span className="bg-white/5 px-2 py-0.5 rounded border border-white/10">Audio Ducking</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 hover:border-emerald-500/40 transition-all space-y-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center text-emerald-300">
                <MonitorPlay className="w-5 h-5" />
              </div>
              <h4 className="text-base font-outfit font-bold text-white">Viral Reels & 4K Masters</h4>
              <p className="text-xs text-white/60 font-outfit font-light leading-relaxed">
                Optimized 9:16 vertical formatting for TikTok/Instagram Reels/Shorts with animated captions, plus 4K Ultra-HD widescreen YouTube masters.
              </p>
              <div className="pt-1 flex flex-wrap gap-1.5 text-[10px] text-emerald-300/80 font-mono">
                <span className="bg-white/5 px-2 py-0.5 rounded border border-white/10">9:16 Reels</span>
                <span className="bg-white/5 px-2 py-0.5 rounded border border-white/10">Auto-Captions</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4. SOFTWARE & TOOLKIT GRID */}
        <div className="pt-8 border-t border-white/5 space-y-6">
          <div className="flex items-center gap-2">
            <Palette className="w-4 h-4 text-cyan-400" />
            <h3 className="text-lg font-outfit font-bold text-white">Software & Editing Toolkit</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {EDITING_TOOLS.map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/30 transition-all space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-outfit font-bold text-white">{item.name}</span>
                  <span className="text-[10px] font-outfit font-medium px-2 py-0.5 rounded bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">
                    {item.level}
                  </span>
                </div>
                <p className="text-xs text-white/60 font-outfit font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {lightboxPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 animate-fadeIn font-outfit"
          onClick={() => setLightboxPhoto(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-[#0c0c0e] border border-white/15 rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Box */}
            <div className="lg:w-7/12 relative bg-black flex items-center justify-center min-h-[300px] lg:min-h-[500px]">
              <img
                src={lightboxPhoto.imgUrl}
                alt={lightboxPhoto.title}
                className="max-h-[70vh] lg:max-h-[85vh] w-auto max-w-full object-contain p-2"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => setLightboxPhoto(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/70 border border-white/20 text-white hover:bg-white hover:text-black transition-all lg:hidden"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Sidebar Information */}
            <div className="lg:w-5/12 p-6 sm:p-8 space-y-6 overflow-y-auto border-t lg:border-t-0 lg:border-l border-white/10 bg-[#0e0e12] font-outfit">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-400/20 text-xs font-outfit font-semibold">
                  {lightboxPhoto.categoryLabel}
                </span>
                <button
                  onClick={() => setLightboxPhoto(null)}
                  className="hidden lg:flex p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div>
                <h3 className="text-2xl font-outfit font-extrabold text-white tracking-tight">{lightboxPhoto.title}</h3>
                <p className="text-xs font-outfit text-cyan-400 font-medium flex items-center gap-1.5 mt-2">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{lightboxPhoto.location}</span>
                </p>
              </div>

              <p className="text-sm text-white/70 font-outfit font-light leading-relaxed">
                {lightboxPhoto.description}
              </p>

              {/* Technical EXIF Settings */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
                <p className="text-[11px] font-outfit font-semibold uppercase tracking-wider text-white/50 flex items-center gap-1.5">
                  <Camera className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Camera & Exposure Specs</span>
                </p>
                <p className="text-xs font-outfit font-medium text-white/90">{lightboxPhoto.cameraSettings}</p>
              </div>

              {/* Editing Breakdown */}
              <div className="space-y-2">
                <p className="text-[11px] font-outfit font-semibold uppercase tracking-wider text-white/50 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Editing & Grading Techniques</span>
                </p>
                <ul className="space-y-1.5">
                  {lightboxPhoto.editingNotes.map((note, i) => (
                    <li key={i} className="text-xs text-white/80 flex items-center gap-2 font-outfit font-light">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0"></div>
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => setLightboxPhoto(null)}
                className="w-full py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-outfit font-bold text-xs uppercase tracking-wider transition-colors shadow-lg shadow-cyan-400/10"
              >
                Close High-Res Viewer
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
