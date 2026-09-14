import React from 'react';
import { GalleryArtifact } from '../../types';

interface GalleryCardProps {
  artifact: GalleryArtifact;
  onInspect?: (artifact: GalleryArtifact) => void;
}

export const GalleryCard: React.FC<GalleryCardProps> = ({ artifact, onInspect }) => {
  // Render visual graphic display matching screenshot 5
  const renderVisual = () => {
    switch (artifact.artifactType) {
      case 'console':
        return (
          <div className="relative w-full h-44 rounded bg-[#0A0C0A] border border-[#27272A] overflow-hidden flex flex-col items-center justify-center p-2 group-hover:border-[#33FF66]/50 transition-colors">
            {/* CRT Console Graphic */}
            <div className="relative w-36 h-36 flex flex-col items-center justify-center">
              {/* Top CRT screen casing */}
              <div className="w-28 h-20 rounded-md bg-[#D9CDB8] border-2 border-[#8C7D69] p-1.5 shadow-md flex items-center justify-center">
                <div className="w-full h-full rounded bg-[#061208] border border-[#1E4D27] p-1 flex flex-col justify-between crt-scanlines">
                  <div className="text-[6px] font-mono text-[#33FF66] leading-none text-glow-green">
                    SYS-6000 BOOT OK<br />
                    RAM: 64MB OK<br />
                    TTY1: ONLINE
                  </div>
                  <div className="w-2 h-0.5 bg-[#33FF66] animate-pulse" />
                </div>
              </div>
              {/* Keyboard console base */}
              <div className="w-32 h-9 -mt-1 rounded-sm bg-[#CAC0AD] border-2 border-[#8C7D69] p-1 flex items-center justify-between shadow">
                <div className="grid grid-cols-6 gap-0.5 w-20">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <span key={i} className="w-2.5 h-1.5 bg-[#27272A] rounded-[1px]" />
                  ))}
                </div>
                <div className="flex gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#C05634]" />
                  <span className="w-2 h-2 rounded-full bg-[#EAB308]" />
                </div>
              </div>
            </div>

            {/* Badge pill */}
            <div className="absolute bottom-2 left-2 z-10">
              <span className="px-2 py-0.5 rounded bg-[#111111] border border-[#27272A] text-[#33FF66] font-mono text-[9px] font-bold">
                {artifact.figNumber}
              </span>
            </div>
          </div>
        );

      case 'circuit':
        return (
          <div className="relative w-full h-44 rounded bg-[#061009] border border-[#1E4D27] overflow-hidden flex flex-col items-center justify-center p-3 text-center crt-scanlines group-hover:border-[#EAB308]/60 transition-colors">
            <div className="text-xl mb-1 text-[#EAB308] animate-pulse">⚡</div>
            <div className="font-display text-base font-bold text-[#EAB308] tracking-widest text-glow-yellow">
              4096-GATE ARRAY
            </div>
            <div className="font-mono text-[10px] text-[#A1A1AA] tracking-wider mt-1">
              WIRE-WRAPPED MOTHERBOARD PROTO 03
            </div>
            <div className="flex items-center gap-1.5 mt-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EAB308]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#EAB308]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#EAB308]" />
            </div>

            <div className="absolute bottom-2 left-2 z-10">
              <span className="px-2 py-0.5 rounded bg-[#111111] border border-[#27272A] text-[#EAB308] font-mono text-[9px] font-bold">
                {artifact.figNumber}
              </span>
            </div>
          </div>
        );

      case 'oscilloscope':
        return (
          <div className="relative w-full h-44 rounded bg-[#051108] border border-[#1E4D27] overflow-hidden flex flex-col items-center justify-center p-3 text-center crt-scanlines group-hover:border-[#33FF66] transition-colors">
            {/* Vector XY Deflection Visual */}
            <div className="font-mono text-sm text-[#33FF66] text-glow-green mb-1 tracking-widest">
              \ (0) |---| (0) /
            </div>
            <div className="font-mono text-[10px] text-[#33FF66]/80 tracking-wider">
              ==== XY-DEFLECTION ====
            </div>
            <div className="font-mono text-[9px] text-[#33FF66]/70 mt-0.5">
              BEAM INTENSITY: 80%
            </div>

            <div className="absolute bottom-2 left-2 z-10">
              <span className="px-2 py-0.5 rounded bg-[#111111] border border-[#27272A] text-[#33FF66] font-mono text-[9px] font-bold">
                {artifact.figNumber}
              </span>
            </div>
          </div>
        );

      case 'cooling':
        return (
          <div className="relative w-full h-44 rounded bg-[#081416] border border-[#164E63] overflow-hidden flex flex-col justify-between p-3 group-hover:border-[#06B6D4] transition-colors">
            <div className="flex justify-between items-center font-mono text-[10px]">
              <span className="text-[#06B6D4] font-bold tracking-wider">COOLING LOOP</span>
              <span className="text-[#33FF66] font-bold">FLOW: OPTIMAL</span>
            </div>

            {/* Radiator Fins Array */}
            <div className="flex items-center justify-center gap-1.5 h-24 bg-[#050D0E] rounded p-2 border border-[#164E63]/40 shadow-inner">
              {Array.from({ length: 22 }).map((_, i) => (
                <div key={i} className="w-1 h-full bg-[#06B6D4]/40 rounded-t-sm shadow-[0_0_2px_#06B6D4]" />
              ))}
            </div>

            <div className="font-mono text-[9px] text-[#A1A1AA] flex justify-between">
              <span>DELTA-T: 14.2 C</span>
              <span>PRESSURE: 2.2 BAR</span>
            </div>
          </div>
        );

      case 'switches':
        return (
          <div className="relative w-full h-44 rounded bg-[#141210] border border-[#3F3F46] overflow-hidden flex flex-col items-center justify-center p-3 text-center group-hover:border-[#C05634] transition-colors">
            {/* 3 Color Swatch Chips */}
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-6 h-6 rounded-sm bg-[#C05634] shadow border border-white/20" />
              <span className="w-6 h-6 rounded-sm bg-[#27272A] shadow border border-white/20" />
              <span className="w-6 h-6 rounded-sm bg-[#EAB308] shadow border border-white/20" />
            </div>

            <div className="font-display font-bold text-xs text-[#E4E4E7] tracking-wider uppercase">
              CHERRY MX VINTAGE GREY
            </div>
            <div className="font-mono text-[10px] text-[#A1A1AA] mt-1">
              80g ACTUATION FORCE
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div 
      onClick={() => onInspect?.(artifact)}
      className="group relative rounded-md bg-[#18181B] border border-[#27272A] p-3 sm:p-3.5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_4px_12px_rgba(0,0,0,0.5)] flex flex-col justify-between transition-all duration-200 hover:border-[#3F3F46] cursor-pointer"
    >
      {/* Visual Display Container */}
      <div className="mb-3">
        {renderVisual()}
      </div>

      {/* Info Details */}
      <div>
        <h3 className="font-display font-bold text-sm text-white tracking-wide mb-1 group-hover:text-[#33FF66] transition-colors">
          {artifact.title}
        </h3>
        <p className="font-mono text-xs text-[#A1A1AA] leading-relaxed line-clamp-2">
          {artifact.description}
        </p>
      </div>
    </div>
  );
};
