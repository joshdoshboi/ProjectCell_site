import React, { useState } from 'react';
import { HardwareFrame } from '../layout/HardwareFrame';
import { StatusIndicator } from '../ui/StatusIndicator';
import { TeamCard } from '../cards/TeamCard';
import { RosterModal } from '../modals/RosterModal';
import { teamDivisions } from '../../data/team';
import { TeamDivision } from '../../types';

export const Team: React.FC = () => {
  const [selectedDivision, setSelectedDivision] = useState<TeamDivision | null>(null);

  return (
    <div id="team" className="w-full px-2 sm:px-4 mb-8">
      <HardwareFrame>
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-[#B8A992] pb-3 mb-4">
          <div>
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#4A4237] font-semibold tracking-wider">
              <StatusIndicator color="green" size="sm" pulse />
              <span>DRIVE BAY BACKPLANE // HOT-SWAPPABLE STORAGE</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-black text-[#18181B] tracking-wide mt-0.5">
              // TEAM DIVISIONS
            </h2>
          </div>

          <div className="self-start sm:self-center">
            <div className="px-3 py-1.5 rounded bg-[#18181B] border border-[#3F3F46] text-[#33FF66] font-mono text-[10px] sm:text-xs font-bold tracking-wider uppercase text-glow-green shadow-inner">
              CLICK ANY DRIVE TO EJECT &amp; INSPECT ROSTER
            </div>
          </div>
        </div>

        {/* Section Description */}
        <p className="max-w-3xl font-mono text-xs sm:text-sm text-[#4A4237] leading-relaxed mb-6">
          The minds behind Project Cell are a community of curious builders, creators, and problem-solvers working together to explore emerging technologies and bring ambitious ideas to life.
        </p>

        {/* 6 Drive Bay Sleds Grid (3 cols on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {teamDivisions.map((division) => (
            <TeamCard
              key={division.slot}
              division={division}
              onInspectRoster={(div) => setSelectedDivision(div)}
            />
          ))}
        </div>

        {/* Ejected Drive Sled Modal */}
        <RosterModal
          division={selectedDivision}
          onClose={() => setSelectedDivision(null)}
        />
      </HardwareFrame>
    </div>
  );
};

