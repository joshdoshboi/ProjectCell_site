import React from 'react';
import { StatusIndicator } from '../ui/StatusIndicator';

interface CRTScreenProps {
  children: React.ReactNode;
  crtFxEnabled?: boolean;
  className?: string;
}

export const CRTScreen: React.FC<CRTScreenProps> = ({
  children,
  crtFxEnabled = true,
  className = ''
}) => {
  return (
    <div className={`relative rounded-xl p-2.5 sm:p-4 bg-[#141417] border-4 border-[#242429] shadow-[inset_0_4px_12px_rgba(0,0,0,0.9),0_10px_25px_rgba(0,0,0,0.6)] ${className}`}>
      {/* Outer monitor bezel bevel highlight */}
      <div className="absolute inset-0 rounded-lg pointer-events-none border border-white/5" />

      {/* Screen Enclosure */}
      <div className="relative rounded-lg overflow-hidden bg-[#08140B] border border-[#16381C] shadow-[inset_0_0_30px_rgba(0,0,0,0.85)] p-3 sm:p-5 md:p-6">
        {/* CRT Scanline Overlay */}
        {crtFxEnabled && (
          <div className="absolute inset-0 crt-scanlines z-30 pointer-events-none opacity-80" />
        )}

        {/* CRT Vignette / Curvature Shadow */}
        <div className="absolute inset-0 crt-vignette z-30 pointer-events-none" />

        {/* CRT Glass Reflection Glare */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-white/[0.03] to-transparent rounded-full blur-2xl pointer-events-none z-20" />

        {/* Monitor Top Status Telemetry Bar */}
        <div className="relative z-20 flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-[#1A4222] font-mono text-[11px] text-[#2EDB65]">
          <div className="flex items-center gap-2">
            <span className="px-1.5 py-0.5 rounded-[2px] bg-[#14331A] text-[#33FF66] font-bold border border-[#20522B]">
              TTY1
            </span>
            <span className="text-[#33FF66]/80 tracking-wider">
              SESSION: OPERATOR@ORXIR-MAINFRAME
            </span>
          </div>

          <div className="flex items-center gap-3 text-[10px]">
            <span className="text-[#2EDB65]/80">MODE: DUAL-PHOSPHOR</span>
            <div className="flex items-center gap-1.5 px-1.5 py-0.5 bg-[#0C1F11] rounded border border-[#1A4222]">
              <StatusIndicator color="green" size="sm" pulse />
              <span className="text-[#33FF66] font-bold tracking-widest">REC [BUFFER]</span>
            </div>
          </div>
        </div>

        {/* Sub-header Initialized Tag */}
        <div className="relative z-20 mb-4 inline-block">
          <div className="px-2.5 py-1 rounded-[2px] bg-[#0C2213] border border-[#1E4D27] text-[#33FF66] font-mono text-[11px] tracking-wider text-glow-green">
            HARDWARE ARCHIVE &amp; LAB REPOSITORY // INITIALIZED
          </div>
        </div>

        {/* CRT Inner Content */}
        <div className="relative z-20">
          {children}
        </div>
      </div>
    </div>
  );
};
