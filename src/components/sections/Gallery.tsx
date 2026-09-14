import React, { useState, useRef } from 'react';
import { HardwareFrame } from '../layout/HardwareFrame';
import { GalleryCard } from '../cards/GalleryCard';
import { galleryArtifacts } from '../../data/gallery';
import { GalleryArtifact } from '../../types';
import { HardwareScrew } from '../ui/HardwareScrew';
import { X, ArrowUp, ArrowDown } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [inspectedArtifact, setInspectedArtifact] = useState<GalleryArtifact | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollUp = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ top: -260, behavior: 'smooth' });
    }
  };

  const scrollDown = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ top: 260, behavior: 'smooth' });
    }
  };

  return (
    <div id="gallery" className="w-full px-2 sm:px-4 mb-8">
      <HardwareFrame>
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-[#B8A992] pb-3 mb-4">
          <div>
            <div className="text-[11px] font-mono text-[#C05634] font-bold tracking-widest uppercase">
              // PHOTO ARCHIVE &amp; PROTOTYPE VAULT
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-black text-[#18181B] tracking-wide mt-0.5">
              OUR GALLERY
            </h2>
          </div>

          {/* Scroll Controls (Matching screenshot 5) */}
          <div className="flex items-center gap-2 self-start sm:self-center">
            <button
              onClick={scrollUp}
              className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#18181B] hover:bg-[#27272A] border border-[#3F3F46] text-[#33FF66] font-mono text-[10px] sm:text-xs font-bold tracking-wider uppercase transition-colors shadow-inner"
            >
              <ArrowUp size={12} />
              <span>SCROLL UP</span>
            </button>
            <button
              onClick={scrollDown}
              className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#18181B] hover:bg-[#27272A] border border-[#3F3F46] text-[#33FF66] font-mono text-[10px] sm:text-xs font-bold tracking-wider uppercase transition-colors shadow-inner"
            >
              <span>SCROLL DOWN</span>
              <ArrowDown size={12} />
            </button>
          </div>
        </div>

        {/* Subtitle */}
        <p className="max-w-3xl font-mono text-xs sm:text-sm text-[#4A4237] leading-relaxed mb-6">
          Scroll vertically through the artifact log to inspect raw physical prototypes, CRT screen tests, wire harness routing, and die-cast chassis manufacturing.
        </p>

        {/* Scrollable Gallery Cards Viewport */}
        <div 
          ref={scrollContainerRef}
          className="max-h-[580px] overflow-y-auto pr-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {galleryArtifacts.map((artifact) => (
            <GalleryCard
              key={artifact.id}
              artifact={artifact}
              onInspect={(art) => setInspectedArtifact(art)}
            />
          ))}
        </div>

        {/* Feed Metadata Footer (Matching screenshot 5) */}
        <div className="flex items-center justify-between border-t border-[#B8A992] pt-3 mt-5 font-mono text-[10px] text-[#4A4237]">
          <span>FEED: VERTICAL PROTO ARCHIVE // BUFFER ACTIVE</span>
          <span className="text-[#33FF66] font-bold tracking-wider text-glow-green">
            5 ARTIFACTS LOADED
          </span>
        </div>

        {/* Artifact Inspection Modal */}
        {inspectedArtifact && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="relative w-full max-w-xl rounded-lg bg-[#D9CDB8] border-2 border-[#B8A992] chassis-bevel p-5 select-none">
              {/* Corner Screws */}
              <div className="absolute top-2.5 left-2.5 z-20">
                <HardwareScrew angle={20} size="sm" />
              </div>
              <div className="absolute top-2.5 right-2.5 z-20">
                <HardwareScrew angle={110} size="sm" />
              </div>
              <div className="absolute bottom-2.5 left-2.5 z-20">
                <HardwareScrew angle={200} size="sm" />
              </div>
              <div className="absolute bottom-2.5 right-2.5 z-20">
                <HardwareScrew angle={290} size="sm" />
              </div>

              {/* Modal Header */}
              <div className="flex items-start justify-between border-b border-[#B8A992] pb-3 mb-4">
                <div>
                  <div className="text-[10px] font-mono text-[#C05634] font-bold tracking-widest uppercase">
                    // VAULT ARTIFACT INSPECTOR: {inspectedArtifact.figNumber}
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#18181B] tracking-wide mt-0.5">
                    {inspectedArtifact.title}
                  </h3>
                </div>

                <button
                  onClick={() => setInspectedArtifact(null)}
                  className="hardware-switch p-1.5 rounded text-[#18181B]"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Body */}
              <p className="font-mono text-xs text-[#2A241C] leading-relaxed mb-4 p-3 rounded bg-[#CAC0AD] border border-[#B0A28E]">
                {inspectedArtifact.description}
              </p>

              {/* Metadata Table */}
              {inspectedArtifact.metadata && (
                <div className="p-3 rounded bg-[#18181B] border border-[#27272A] font-mono text-xs space-y-1.5 mb-4 text-[#A1A1AA]">
                  <div className="text-[10px] text-[#33FF66] font-bold tracking-wider uppercase mb-2">
                    HARDWARE LAB DIAGNOSTICS:
                  </div>
                  {Object.entries(inspectedArtifact.metadata).map(([key, val]) => (
                    <div key={key} className="flex justify-between items-center text-[11px]">
                      <span className="text-[#71717A]">{key}:</span>
                      <span className="text-white font-semibold">{val}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Modal Close Button */}
              <div className="flex justify-end">
                <button
                  onClick={() => setInspectedArtifact(null)}
                  className="px-4 py-1.5 rounded bg-[#18181B] hover:bg-[#27272A] text-white font-mono text-xs font-bold uppercase tracking-wider"
                >
                  [CLOSE ARTIFACT]
                </button>
              </div>
            </div>
          </div>
        )}
      </HardwareFrame>
    </div>
  );
};

