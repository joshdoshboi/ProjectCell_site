import React from 'react';
import { HardwareScrew } from '../ui/HardwareScrew';
import { Vent } from '../ui/Vent';
import { StatusIndicator } from '../ui/StatusIndicator';

interface HardwareFrameProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  showTopVent?: boolean;
  showBottomBar?: boolean;
  bottomLabel?: string;
  accessLabel?: string;
}

export const HardwareFrame: React.FC<HardwareFrameProps> = ({
  id,
  children,
  className = '',
  innerClassName = '',
  showTopVent = false,
  showBottomBar = true,
  bottomLabel = 'PROJECT CELL',
  accessLabel = 'ACCESS SSD CADDIES 0'
}) => {
  return (
    <section 
      id={id}
      className={`relative w-full max-w-6xl mx-auto rounded-lg bg-[#D9CDB8] border border-[#B8A992] chassis-bevel p-3 sm:p-5 md:p-6 select-none ${className}`}
    >
      {/* 4 Corner Chassis Screws with varied angles for authentic realism */}
      <div className="absolute top-2.5 left-2.5 z-20">
        <HardwareScrew angle={28} size="md" />
      </div>
      <div className="absolute top-2.5 right-2.5 z-20">
        <HardwareScrew angle={115} size="md" />
      </div>
      <div className="absolute bottom-2.5 left-2.5 z-20">
        <HardwareScrew angle={210} size="md" />
      </div>
      <div className="absolute bottom-2.5 right-2.5 z-20">
        <HardwareScrew angle={75} size="md" />
      </div>

      {/* Optional Top Vent (as seen above the CRT in Hero) */}
      {showTopVent && (
        <div className="w-full flex justify-center mb-4 sm:mb-5">
          <Vent slots={28} height="h-3 sm:h-3.5" />
        </div>
      )}

      {/* Main Content Enclosure */}
      <div className={`relative z-10 ${innerClassName}`}>
        {children}
      </div>

      {/* Hardware Bottom Status Area (present in all screenshots!) */}
      {showBottomBar && (
        <div className="mt-5 sm:mt-6 pt-3 sm:pt-4 border-t border-[#B8A992]/60 flex flex-wrap items-center justify-between gap-3 text-xs">
          {/* Left: Project Cell Badge + 3 Rivet Indents */}
          <div className="flex items-center gap-2">
            <div className="px-2.5 py-0.5 rounded bg-[#C05634] text-white font-display font-semibold text-[11px] tracking-wider shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_1px_2px_rgba(0,0,0,0.3)]">
              {bottomLabel}
            </div>
            <div className="flex items-center gap-1.5 ml-1">
              <span className="w-2.5 h-2.5 rounded-full bg-[#18181B] shadow-[inset_0_1px_2px_rgba(0,0,0,0.8),0_1px_0_rgba(255,255,255,0.3)] inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#18181B] shadow-[inset_0_1px_2px_rgba(0,0,0,0.8),0_1px_0_rgba(255,255,255,0.3)] inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#18181B] shadow-[inset_0_1px_2px_rgba(0,0,0,0.8),0_1px_0_rgba(255,255,255,0.3)] inline-block" />
            </div>
          </div>

          {/* Center: Intake Vent */}
          <div className="hidden sm:flex items-center justify-center flex-1 max-w-[200px]">
            <Vent slots={22} height="h-3" />
          </div>

          {/* Right: Access SSD Caddies Plate */}
          <div className="flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#E4DAC9] border border-[#B8A992] text-[#4A4237] font-mono text-[10px] tracking-wide shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_1px_2px_rgba(0,0,0,0.15)]">
            <StatusIndicator color="green" size="sm" pulse />
            <span className="uppercase font-medium">{accessLabel}</span>
          </div>
        </div>
      )}
    </section>
  );
};

