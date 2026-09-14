import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HardwareScrew } from '../ui/HardwareScrew';
import { Vent } from '../ui/Vent';
import { StatusIndicator } from '../ui/StatusIndicator';

export interface LoadingScreenProps {
  onComplete?: () => void;
  /** Total boot progress duration in milliseconds (default: 3400ms) */
  duration?: number;
  /** Title text displayed beneath logo (default: "PROJECT CELL") */
  title?: string;
  /** Operator session metadata in CRT top bar */
  sessionTag?: string;
  /** Subheader tag text */
  subHeader?: string;
  /** Custom logo component override if desired */
  logo?: React.ReactNode;
  /** Delay in milliseconds after reaching 100% before triggering exit animation */
  autoDismissDelay?: number;
}

/**
 * Default Project Cell Interconnected 4-Node Phosphor Logo
 * Faithfully matches the exact vector symbol seen in the screen recording.
 */
export const ProjectCellLogo: React.FC<{ className?: string }> = ({ className = "w-20 h-20" }) => (
  <svg 
    viewBox="0 0 100 100" 
    className={`${className} overflow-visible`}
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <filter id="phosphor-glow" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur stdDeviation="3.5" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* Connecting Circuit Traces */}
    <g stroke="#33FF66" strokeWidth="2.5" strokeLinecap="round" opacity="0.85" filter="url(#phosphor-glow)">
      {/* Outer cross links */}
      <line x1="50" y1="24" x2="74" y2="50" />
      <line x1="74" y1="50" x2="50" y2="76" />
      <line x1="50" y1="76" x2="26" y2="50" />
      <line x1="26" y1="50" x2="50" y2="24" />
      
      {/* Central cross connections */}
      <line x1="50" y1="24" x2="50" y2="76" strokeDasharray="3 3" opacity="0.6" />
      <line x1="26" y1="50" x2="74" y2="50" strokeDasharray="3 3" opacity="0.6" />
    </g>

    {/* 4 Interconnected Nodes */}
    {/* Top Node */}
    <g filter="url(#phosphor-glow)">
      <circle cx="50" cy="24" r="8" stroke="#33FF66" strokeWidth="2.5" fill="#08140B" />
      <circle cx="50" cy="24" r="3.5" fill="#33FF66" />
    </g>

    {/* Right Node */}
    <g filter="url(#phosphor-glow)">
      <circle cx="74" cy="50" r="8" stroke="#33FF66" strokeWidth="2.5" fill="#08140B" />
      <circle cx="74" cy="50" r="3.5" fill="#33FF66" />
    </g>

    {/* Bottom Node */}
    <g filter="url(#phosphor-glow)">
      <circle cx="50" cy="76" r="8" stroke="#33FF66" strokeWidth="2.5" fill="#08140B" />
      <circle cx="50" cy="76" r="3.5" fill="#33FF66" />
    </g>

    {/* Left Node */}
    <g filter="url(#phosphor-glow)">
      <circle cx="26" cy="50" r="8" stroke="#33FF66" strokeWidth="2.5" fill="#08140B" />
      <circle cx="26" cy="50" r="3.5" fill="#33FF66" />
    </g>

    {/* Center Core Hub */}
    <circle cx="50" cy="50" r="2.5" fill="#33FF66" opacity="0.9" filter="url(#phosphor-glow)" />
  </svg>
);

export const LoadingScreen: React.FC<LoadingScreenProps> = ({
  onComplete,
  duration = 3400,
  title = "PROJECT CELL",
  sessionTag = "SESSION: OPERATOR@PROJECT-CELL",
  subHeader = "HARDWARE ARCHIVE & LAB REPOSITORY // BOOT INITIALIZER",
  logo,
  autoDismissDelay = 700
}) => {
  const [progress, setProgress] = useState(0);
  const [stageText, setStageText] = useState("INITIALIZING CRT BIAS...");
  const [isExiting, setIsExiting] = useState(false);
  const [isReady, setIsReady] = useState(false);

  // Drive the realistic hardware boot telemetry progression
  useEffect(() => {
    const startTime = performance.now();

    const interval = setInterval(() => {
      const elapsed = performance.now() - startTime;
      const rawProgress = Math.min(100, Math.floor((elapsed / duration) * 100));

      setProgress(rawProgress);

      // Dynamic telemetry status messages
      if (rawProgress < 22) {
        setStageText("INITIALIZING CRT BIAS...");
      } else if (rawProgress < 46) {
        setStageText("BOOTSTRAPPING KERNEL MATRIX...");
      } else if (rawProgress < 70) {
        setStageText("MOUNTING STORAGE BACKPLANE...");
      } else if (rawProgress < 90) {
        setStageText("CALIBRATING PHOSPHOR RASTER...");
      } else if (rawProgress < 100) {
        setStageText("VERIFYING ECL PARITY CHECKSUM...");
      } else {
        setStageText("INITIALIZATION COMPLETE // ALL BUSES READY");
        setIsReady(true);
        clearInterval(interval);

        // Auto transition after hold
        setTimeout(() => {
          setIsExiting(true);
        }, autoDismissDelay);
      }
    }, 45);

    return () => clearInterval(interval);
  }, [duration, autoDismissDelay]);

  // Handle immediate manual trigger if user clicks ACCESS GRANTED
  const handleManualEnter = () => {
    if (!isExiting) {
      setIsExiting(true);
    }
  };

  // Block count for segmented progress bar (32 blocks matching video)
  const totalBlocks = 32;
  const activeBlocks = Math.floor((progress / 100) * totalBlocks);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!isExiting && (
        <motion.div
          key="project-cell-loader-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.03,
            filter: "brightness(1.4) blur(4px)",
            transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] }
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0C0E0D] p-3 sm:p-5 select-none overflow-hidden"
          style={{ touchAction: 'none' }}
        >
          {/* Subtle Ambient Scanline Overlay */}
          <div className="absolute inset-0 crt-scanlines pointer-events-none opacity-30 z-10" />

          {/* Large Retro Hardware Chassis Enclosure (Matching Reference Video) */}
          <motion.div 
            initial={{ scale: 0.96, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl rounded-lg bg-[#D9CDB8] border-2 border-[#B8A992] chassis-bevel p-3 sm:p-5 md:p-6 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] flex flex-col justify-between"
          >
            {/* 4 Corner Screws */}
            <div className="absolute top-2.5 left-2.5 z-20">
              <HardwareScrew angle={35} size="md" />
            </div>
            <div className="absolute top-2.5 right-2.5 z-20">
              <HardwareScrew angle={125} size="md" />
            </div>
            <div className="absolute bottom-2.5 left-2.5 z-20">
              <HardwareScrew angle={215} size="md" />
            </div>
            <div className="absolute bottom-2.5 right-2.5 z-20">
              <HardwareScrew angle={305} size="md" />
            </div>

            {/* Top Chassis Cooling Vent */}
            <div className="w-full flex justify-center mb-3 sm:mb-4">
              <Vent slots={28} height="h-3 sm:h-3.5" />
            </div>

            {/* Inner Dark Monitor Bezel Frame */}
            <div className="relative rounded-xl p-2.5 sm:p-4 bg-[#141417] border-4 border-[#242429] shadow-[inset_0_4px_12px_rgba(0,0,0,0.95),0_10px_30px_rgba(0,0,0,0.7)]">
              {/* Inner CRT Screen Glass with Phosphor Glow & Vignette */}
              <div className="relative rounded-lg overflow-hidden bg-[#08140B] border border-[#16381C] shadow-[inset_0_0_40px_rgba(0,0,0,0.9)] p-3.5 sm:p-6 flex flex-col justify-between min-h-[360px] sm:min-h-[420px]">
                {/* Internal Scanlines & Vignette */}
                <div className="absolute inset-0 crt-scanlines z-30 pointer-events-none opacity-75" />
                <div className="absolute inset-0 crt-vignette z-30 pointer-events-none" />

                {/* CRT Monitor Top Status Telemetry Bar */}
                <div className="relative z-20 flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-[#1A4222] font-mono text-[11px] text-[#2EDB65]">
                  <div className="flex items-center gap-2">
                    <span className="px-1.5 py-0.5 rounded-[2px] bg-[#14331A] text-[#33FF66] font-bold border border-[#20522B]">
                      TTY1
                    </span>
                    <span className="text-[#33FF66]/90 tracking-wider">
                      {sessionTag}
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

                {/* Subheader Initialized Tag */}
                <div className="relative z-20 mt-3 inline-block">
                  <div className="px-2.5 py-0.5 rounded-[2px] bg-[#0C2213] border border-[#1E4D27] text-[#33FF66] font-mono text-[10px] sm:text-[11px] tracking-wider text-glow-green">
                    {subHeader}
                  </div>
                </div>

                {/* Center Animated Logo & Branding (Matching Screen Recording) */}
                <div className="relative z-20 my-auto py-4 flex flex-col items-center justify-center text-center">
                  {/* Glowing 4-Node Logo with subtle pulsing animation */}
                  <motion.div
                    animate={{ 
                      scale: [1, 1.04, 1],
                      filter: [
                        "drop-shadow(0 0 10px rgba(51, 255, 102, 0.5))",
                        "drop-shadow(0 0 18px rgba(51, 255, 102, 0.85))",
                        "drop-shadow(0 0 10px rgba(51, 255, 102, 0.5))"
                      ]
                    }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                    className="mb-2"
                  >
                    {logo || <ProjectCellLogo className="w-16 h-16 sm:w-20 sm:h-20" />}
                  </motion.div>

                  {/* Project Cell Main Heading */}
                  <h1 className="font-display font-black text-3xl sm:text-5xl text-[#33FF66] tracking-widest text-glow-green uppercase select-none">
                    {title}
                  </h1>
                </div>

                {/* Progress Bar & Telemetry Section */}
                <div className="relative z-20 w-full mt-auto space-y-2">
                  {/* Stage Label & Percentage Row */}
                  <div className="flex items-center justify-between font-mono text-xs text-[#33FF66] tracking-wider">
                    <span className="text-glow-green font-semibold">
                      {stageText}
                    </span>
                    <span className="font-bold text-glow-green tabular-nums">
                      {progress.toString().padStart(3, '0')}%
                    </span>
                  </div>

                  {/* Segmented Block Progress Bar (Exact Match with Reference Video) */}
                  <div className="w-full h-6 sm:h-7 rounded bg-[#040C06] border border-[#1E4D27] p-1 flex items-center gap-[2px] shadow-[inset_0_2px_4px_rgba(0,0,0,0.9)] overflow-hidden">
                    {Array.from({ length: totalBlocks }).map((_, i) => {
                      const isFilled = i < activeBlocks;
                      return (
                        <div
                          key={i}
                          className={`flex-1 h-full rounded-[1px] transition-all duration-75 ${
                            isFilled
                              ? 'bg-[#33FF66] shadow-[0_0_6px_#33FF66]'
                              : 'bg-[#0A1D0F]/40'
                          }`}
                        />
                      );
                    })}
                  </div>

                  {/* Lower Telemetry Statistics */}
                  <div className="flex flex-wrap items-center justify-between text-[10px] font-mono text-[#2EDB65]/80 pt-1 border-t border-[#16381C]">
                    <span>BUS: 64.0 MHz ECL</span>
                    <span className="hidden sm:inline">CHECKSUM: 0x88F1A VALID</span>
                    <span>SYNC: ACTIVE</span>
                  </div>
                </div>

                {/* Bottom Terminal Row & Access Granted Button */}
                <div className="relative z-20 flex items-center justify-between pt-3 mt-2 border-t border-[#16381C] font-mono text-xs">
                  {/* Prompt with blinking block cursor */}
                  <div className="flex items-center gap-1.5 text-[#33FF66]">
                    <span className="font-bold tracking-wider">SYS-6000:\&gt;</span>
                    <span className="inline-block w-2 h-3.5 bg-[#33FF66] animate-pulse" />
                  </div>

                  {/* Access Granted Button */}
                  <button
                    onClick={handleManualEnter}
                    className={`px-3 py-1 rounded font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                      isReady
                        ? 'bg-[#33FF66] text-[#08140B] shadow-[0_0_12px_rgba(51,255,102,0.8)] cursor-pointer hover:bg-[#4EFA8A] active:scale-95'
                        : 'bg-[#0E2614] text-[#33FF66]/70 border border-[#1E4D27] hover:text-[#33FF66]'
                    }`}
                  >
                    <span>{isReady ? 'ACCESS GRANTED // ENTER →' : 'BOOTING KERNEL...'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Chassis Bottom Hardware Bar */}
            <div className="mt-3 sm:mt-4 pt-2.5 border-t border-[#B8A992]/60 flex flex-wrap items-center justify-between gap-2 text-xs">
              {/* Left Badge + 3 Rivets */}
              <div className="flex items-center gap-2">
                <div className="px-2.5 py-0.5 rounded bg-[#C05634] text-white font-display font-semibold text-[11px] tracking-wider shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_1px_2px_rgba(0,0,0,0.3)]">
                  PROJECT CELL
                </div>
                <div className="flex items-center gap-1.5 ml-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#18181B] shadow-[inset_0_1px_2px_rgba(0,0,0,0.8),0_1px_0_rgba(255,255,255,0.3)] inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#18181B] shadow-[inset_0_1px_2px_rgba(0,0,0,0.8),0_1px_0_rgba(255,255,255,0.3)] inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#18181B] shadow-[inset_0_1px_2px_rgba(0,0,0,0.8),0_1px_0_rgba(255,255,255,0.3)] inline-block" />
                </div>
              </div>

              {/* Center Intake Vent */}
              <div className="hidden sm:flex items-center justify-center flex-1 max-w-[180px]">
                <Vent slots={20} height="h-2.5" />
              </div>

              {/* Right SSD Caddies Plate */}
              <div className="flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#E4DAC9] border border-[#B8A992] text-[#4A4237] font-mono text-[10px] tracking-wide">
                <StatusIndicator color="green" size="sm" pulse />
                <span className="uppercase font-medium">ACCESS SSD CADDIES 0</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
