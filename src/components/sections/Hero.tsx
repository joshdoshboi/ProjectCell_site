import React from 'react';
import { HardwareFrame } from '../layout/HardwareFrame';
import { CRTScreen } from '../terminal/CRTScreen';
import { Terminal } from '../terminal/Terminal';

interface HeroProps {
  crtFxEnabled?: boolean;
}

export const Hero: React.FC<HeroProps> = ({ crtFxEnabled = true }) => {
  return (
    <div id="hero" className="w-full px-2 sm:px-4 mb-8">
      <HardwareFrame 
        showTopVent={true}
        showBottomBar={true}
        bottomLabel="PROJECT CELL"
        accessLabel="ACCESS SSD CADDIES 0"
      >
        {/* Enclosed CRT Monitor Display */}
        <CRTScreen crtFxEnabled={crtFxEnabled}>
          {/* Main Hero Header Group */}
          <div className="mb-4">
            {/* Giant Phosphor Green Title */}
            <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl text-[#33FF66] tracking-wider text-glow-green mb-2 leading-none uppercase select-none">
              PROJECT CELL
            </h1>

            {/* Workbench CRCE on Translucent Dark Green Block */}
            <div className="inline-block px-4 py-2 rounded-sm bg-[#0E2C17]/80 border-l-4 border-[#33FF66] mb-4">
              <div className="font-display font-black text-2xl sm:text-4xl text-white tracking-widest leading-none">
                WORKBENCH
              </div>
              <div className="font-display font-black text-2xl sm:text-4xl text-white tracking-widest leading-none mt-1">
                CRCE
              </div>
            </div>

            {/* Club Mission / Intro Description */}
            <p className="max-w-3xl font-mono text-xs sm:text-sm text-[#2EDB65] leading-relaxed mb-6 select-text opacity-95">
              A student-led community driven by innovation, experimentation, creativity, and the desire to create something meaningful. We bring together passionate students who are curious about technology and eager to go beyond classrooms and theory.
            </p>
          </div>

          {/* Interactive Working Terminal & Macros Subsystem */}
          <div className="w-full">
            <Terminal />
          </div>
        </CRTScreen>
      </HardwareFrame>
    </div>
  );
};

