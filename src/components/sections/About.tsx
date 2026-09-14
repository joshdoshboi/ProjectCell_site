import React from 'react';
import { HardwareFrame } from '../layout/HardwareFrame';
import { HazardBadge } from '../ui/HazardBadge';

export const About: React.FC = () => {
  const telemetryData = [
    { label: "WEB DEVELOPMENT", value: "64.0 MHz SYNCHRONOUS", color: "#A1A1AA" },
    { label: "MOBILE APPS", value: "ECL QUAD-GATES 74F", color: "#A1A1AA" },
    { label: "HACKATHONS", value: "50Hz INTERLACED (P1 PHOSPHOR)", color: "#EAB308" },
    { label: "AI & MACHINE LEARNING", value: "6x SOLID-STATE REMOVABLE", color: "#33FF66" },
    { label: "IoT PROJECTS", value: "COPPER SINK + TWIN BLOWERS", color: "#A1A1AA" },
    { label: "OPEN SOURCE", value: "64.0 MHz SYNCHRONOUS", color: "#A1A1AA" },
    { label: "TECH WORKSHOPS", value: "ECL QUAD-GATES 74F", color: "#A1A1AA" },
    { label: "HARDWARE", value: "50Hz INTERLACED (P1 PHOSPHOR)", color: "#EAB308" },
    { label: "RESEARCH PROJECTS", value: "6x SOLID-STATE REMOVABLE", color: "#33FF66" },
    { label: "TECH SESSIONS", value: "COPPER SINK + TWIN BLOWERS", color: "#A1A1AA" }
  ];

  return (
    <div id="about" className="w-full px-2 sm:px-4 mb-8">
      <HardwareFrame>
        {/* Section Top Header & Hazard Mil-Spec Badge */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-[#B8A992] pb-3 mb-5">
          <div>
            <div className="text-[11px] font-mono text-[#C05634] font-bold tracking-widest uppercase">
              // HARDWARE SCHEMATICS &amp; PROTOCOL SPECIFICATION
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-black text-[#18181B] tracking-wide mt-0.5">
              ABOUT US
            </h2>
          </div>

          <div className="self-start sm:self-center">
            <HazardBadge label="MIL-SPEC 810G" />
          </div>
        </div>

        {/* 3 Dark Industrial Technical Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 01 // TACTILE PHILOSOPHY */}
          <div className="rounded-md bg-[#18181B] border border-[#27272A] p-4 sm:p-5 flex flex-col justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_4px_12px_rgba(0,0,0,0.5)]">
            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between font-mono text-xs mb-3 pb-2 border-b border-[#27272A]">
                <span className="text-[#EAB308] font-bold tracking-wider">
                  01 // TACTILE PHILOSOPHY
                </span>
                <span className="text-[#71717A] tracking-wider text-[11px]">
                  REV. 89
                </span>
              </div>

              {/* Body */}
              <p className="font-mono text-xs text-[#A1A1AA] leading-relaxed mb-4">
                Project Cell is a dynamic student-led technology club dedicated to fostering innovation, creativity, and technical excellence. We bring together passionate minds to explore cutting-edge technologies and build solutions that matter.
              </p>

              {/* Bullet Points */}
              <div className="space-y-2 font-mono text-xs mb-4">
                <div className="flex items-start gap-2 text-[#E4E4E7]">
                  <span className="w-1.5 h-1.5 rounded-[1px] bg-[#33FF66] mt-1.5 flex-shrink-0" />
                  <span>Phosphor CRT persistence over LED bloom</span>
                </div>
                <div className="flex items-start gap-2 text-[#E4E4E7]">
                  <span className="w-1.5 h-1.5 rounded-[1px] bg-[#33FF66] mt-1.5 flex-shrink-0" />
                  <span>Modular, swappable drive enclosures</span>
                </div>
                <div className="flex items-start gap-2 text-[#E4E4E7]">
                  <span className="w-1.5 h-1.5 rounded-[1px] bg-[#33FF66] mt-1.5 flex-shrink-0" />
                  <span>Zero vendor lock-in; open schematics</span>
                </div>
              </div>
            </div>

            {/* Card Metadata Footer */}
            <div className="flex items-center justify-between border-t border-[#27272A] pt-3 font-mono text-[10px] text-[#71717A]">
              <span>BOARD ID: 0x449-ALPHA</span>
              <span>COPPER TRACES: DUAL-LAYER</span>
            </div>
          </div>

          {/* Card 02 // WHAT WE DO (Telemetry Matrix) */}
          <div className="rounded-md bg-[#18181B] border border-[#27272A] p-4 sm:p-5 flex flex-col justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_4px_12px_rgba(0,0,0,0.5)]">
            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between font-mono text-xs mb-3 pb-2 border-b border-[#27272A]">
                <span className="text-[#33FF66] font-bold tracking-wider">
                  02 // WHAT WE DO
                </span>
                <span className="text-[#06B6D4] font-bold tracking-wider text-[11px]">
                  TELEMETRY
                </span>
              </div>

              {/* Telemetry Matrix Rows */}
              <div className="space-y-1.5 font-mono text-[10px]">
                {telemetryData.map((row) => (
                  <div key={row.label} className="flex justify-between items-center py-0.5 border-b border-[#27272A]/40">
                    <span className="text-[#71717A] tracking-wider uppercase font-semibold">
                      {row.label}
                    </span>
                    <span 
                      className="font-bold tracking-wider text-right"
                      style={{ color: row.color }}
                    >
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 03 // OUR MISSION */}
          <div className="rounded-md bg-[#18181B] border border-[#27272A] p-4 sm:p-5 flex flex-col justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_4px_12px_rgba(0,0,0,0.5)]">
            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between font-mono text-xs mb-3 pb-2 border-b border-[#27272A]">
                <span className="text-[#06B6D4] font-bold tracking-wider">
                  03 // OUR MISSION
                </span>
                <span className="text-[#06B6D4] tracking-wider text-[11px] font-semibold">
                  DIE-CAST
                </span>
              </div>

              {/* Body */}
              <p className="font-mono text-xs text-[#A1A1AA] leading-relaxed mb-4">
                To create a collaborative environment where students can learn, experiment, and push the boundaries of technology. We believe in learning by doing, building real projects, and making a positive impact on our community.
              </p>

              {/* Highlighted Inter-Module Bus Box */}
              <div className="p-3 rounded bg-[#111111] border border-[#27272A] mb-4">
                <div className="text-[11px] font-mono font-bold text-[#C05634] tracking-wider mb-1">
                  INTER-MODULE BUS:
                </div>
                <p className="text-[11px] font-mono text-[#D4D4D8] leading-snug">
                  Direct copper spine connection for high-throughput sensor streams and real-time audio synthesis.
                </p>
              </div>
            </div>

            {/* Card Metadata Footer */}
            <div className="flex items-center justify-between border-t border-[#27272A] pt-3 font-mono text-[10px]">
              <span className="text-[#71717A]">WEIGHT: 34.2 KG</span>
              <span className="text-[#33FF66] font-bold tracking-wider">STATUS: CERTIFIED</span>
            </div>
          </div>
        </div>
      </HardwareFrame>
    </div>
  );
};
