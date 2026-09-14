import React from 'react';
import { TeamDivision } from '../../types';
import { HardwareScrew } from '../ui/HardwareScrew';
import { X, Shield, Cpu, User } from 'lucide-react';

interface RosterModalProps {
  division: TeamDivision | null;
  onClose: () => void;
}

export const RosterModal: React.FC<RosterModalProps> = ({ division, onClose }) => {
  if (!division) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl rounded-lg bg-[#D9CDB8] border-2 border-[#B8A992] chassis-bevel p-4 sm:p-6 select-none max-h-[90vh] flex flex-col">
        {/* Corner Screws */}
        <div className="absolute top-2.5 left-2.5 z-20">
          <HardwareScrew angle={30} size="sm" />
        </div>
        <div className="absolute top-2.5 right-2.5 z-20">
          <HardwareScrew angle={120} size="sm" />
        </div>
        <div className="absolute bottom-2.5 left-2.5 z-20">
          <HardwareScrew angle={210} size="sm" />
        </div>
        <div className="absolute bottom-2.5 right-2.5 z-20">
          <HardwareScrew angle={300} size="sm" />
        </div>

        {/* Modal Header */}
        <div className="flex items-start justify-between border-b border-[#B8A992] pb-3 mb-4">
          <div>
            <div className="text-[10px] font-mono text-[#C05634] font-bold tracking-widest uppercase">
              // DRIVE SLED EJECTED: {division.slotTag}
            </div>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-[#18181B] tracking-wide">
              {division.name}
            </h2>
            <p className="text-xs font-mono text-[#554C3E] mt-0.5">
              SERIAL: {division.serial} &bull; CAPACITY: {division.capacity} &bull; {division.clearance}
            </p>
          </div>

          <button
            onClick={onClose}
            className="hardware-switch p-1.5 rounded text-[#18181B] hover:text-black transition-colors"
            aria-label="Close modal"
          >
            <X size={16} />
          </button>
        </div>

        {/* Overview Description */}
        <div className="p-3 rounded bg-[#CAC0AD] border border-[#B0A28E] font-mono text-xs text-[#2A241C] mb-4">
          {division.description}
        </div>

        {/* Roster Operators List */}
        <div className="flex-1 overflow-y-auto space-y-2.5 pr-1 font-mono text-xs">
          <div className="text-[11px] font-bold text-[#18181B] tracking-wider uppercase mb-2">
            ACTIVE OPERATORS ROSTER ({division.roster.length} MOUNTED):
          </div>

          {division.roster.map((member) => (
            <div
              key={member.callsign}
              className="p-3 rounded bg-[#18181B] border border-[#27272A] text-white shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
            >
              <div className="flex items-start gap-2.5">
                <div className="p-2 rounded bg-[#111111] border border-[#3F3F46] text-[#33FF66]">
                  <User size={16} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-[#F4F4F5]">{member.name}</span>
                    <span className="px-1.5 py-0.2 rounded bg-[#27272A] text-[#33FF66] text-[10px] font-bold tracking-wider">
                      {member.callsign}
                    </span>
                  </div>
                  <div className="text-xs text-[#A1A1AA] mt-0.5">{member.role}</div>
                  <div className="text-[11px] text-[#71717A] flex items-center gap-1 mt-1">
                    <Cpu size={12} className="text-[#33FF66]" />
                    <span>SPEC: {member.specialization}</span>
                  </div>
                </div>
              </div>

              <div className="self-end sm:self-center">
                <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-[#111111] border border-[#3F3F46] text-[#EAB308] text-[10px] font-semibold">
                  <Shield size={10} />
                  <span>{member.clearance}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Footer Controls */}
        <div className="mt-4 pt-3 border-t border-[#B8A992] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded bg-[#C05634] hover:bg-[#D46947] text-white font-mono text-xs font-bold uppercase tracking-wider shadow"
          >
            [SEAT SLED &amp; RETURN]
          </button>
        </div>
      </div>
    </div>
  );
};

