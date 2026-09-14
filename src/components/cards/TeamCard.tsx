import React from 'react';
import { TeamDivision } from '../../types';

interface TeamCardProps {
  division: TeamDivision;
  onInspectRoster: (division: TeamDivision) => void;
}

export const TeamCard: React.FC<TeamCardProps> = ({ division, onInspectRoster }) => {
  return (
    <div className="relative rounded-md bg-[#18181B] border border-[#27272A] p-3.5 sm:p-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_4px_12px_rgba(0,0,0,0.5)] flex flex-col justify-between transition-all duration-200 hover:border-[#3F3F46]">
      {/* Top 4 Drive Bay Notch Slots */}
      <div className="flex items-center gap-1.5 mb-3">
        <span className="flex-1 h-1 rounded-full bg-[#111111] border border-[#27272A] shadow-inner" />
        <span className="flex-1 h-1 rounded-full bg-[#111111] border border-[#27272A] shadow-inner" />
        <span className="flex-1 h-1 rounded-full bg-[#111111] border border-[#27272A] shadow-inner" />
        <span className="flex-1 h-1 rounded-full bg-[#111111] border border-[#27272A] shadow-inner" />
      </div>

      {/* Slot Header Row */}
      <div className="flex items-center justify-between gap-2 mb-2 font-mono text-[10px]">
        {/* Slot Pill with Status Dot */}
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#111111] border border-[#27272A] text-[#A1A1AA]">
          <span 
            className="w-1.5 h-1.5 rounded-full inline-block"
            style={{ backgroundColor: division.statusDotColor, boxShadow: `0 0 6px ${division.statusDotColor}` }}
          />
          <span className="font-semibold tracking-wider">{division.slotTag}</span>
        </div>

        {/* Capacity */}
        <div className="text-[#71717A] tracking-wider font-semibold">
          {division.capacity}
        </div>
      </div>

      {/* Division Name */}
      <h3 className="font-display font-bold text-base sm:text-lg text-white tracking-wide mb-3">
        {division.name}
      </h3>

      {/* Technical Metadata Table */}
      <div className="space-y-1 font-mono text-[11px] mb-4 text-[#A1A1AA] border-t border-[#27272A] pt-2">
        <div className="flex justify-between items-center">
          <span className="text-[#71717A] tracking-wider">SERIAL:</span>
          <span className="text-[#D4D4D8] font-medium">{division.serial}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[#71717A] tracking-wider">MEMBERS:</span>
          <span 
            className="font-bold tracking-wider" 
            style={{ color: division.membersColor }}
          >
            {division.membersText}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[#71717A] tracking-wider">CLEARANCE:</span>
          <span 
            className="font-bold tracking-wider" 
            style={{ color: division.clearanceColor }}
          >
            {division.clearance}
          </span>
        </div>
      </div>

      {/* Sled Eject & Inspect Controls */}
      <div className="pt-2 border-t border-[#27272A]">
        <div className="flex items-center justify-between text-[10px] font-mono">
          <button
            onClick={() => onInspectRoster(division)}
            className="flex items-center gap-1 text-[#D4D4D8] hover:text-white transition-colors"
          >
            <span className="text-[9px]">▲</span>
            <span className="tracking-wider uppercase font-semibold">PULL SLED</span>
          </button>
          <button
            onClick={() => onInspectRoster(division)}
            className="text-[#71717A] hover:text-[#33FF66] tracking-wider uppercase transition-colors"
          >
            [INSPECT ROSTER]
          </button>
        </div>

        {/* Drive Sled Amber Pull Handle Bar */}
        <div className="w-16 h-1 mx-auto mt-2 rounded-full bg-[#C05634] opacity-80 shadow-[0_0_4px_#C05634]" />
      </div>
    </div>
  );
};
