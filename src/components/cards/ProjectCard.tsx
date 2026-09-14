import React from 'react';
import { ProjectCartridge } from '../../types';
import { HardwareScrew } from '../ui/HardwareScrew';

interface ProjectCardProps {
  project: ProjectCartridge;
  onOpenSchematic: (project: ProjectCartridge) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenSchematic }) => {
  return (
    <div className="relative rounded-md bg-[#18181B] border border-[#27272A] p-4 sm:p-5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_4px_12px_rgba(0,0,0,0.5)] flex flex-col justify-between transition-all duration-200 hover:border-[#3F3F46]">
      {/* Top Right Hardware Mounting Screw */}
      <div className="absolute top-3 right-3 z-10">
        <HardwareScrew angle={55} size="sm" />
      </div>

      <div>
        {/* Module Badge */}
        <div className="inline-block mb-3 font-mono text-[10px] font-bold tracking-wider">
          <span 
            className="px-2 py-0.5 rounded bg-[#111111] border border-[#27272A]"
            style={{ color: project.statusColor }}
          >
            {project.modNumber}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-base sm:text-lg text-white tracking-wide mb-2 pr-6">
          {project.title}
        </h3>

        {/* Description */}
        <p className="font-mono text-xs text-[#A1A1AA] leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Technical Specifications */}
        <div className="space-y-1.5 font-mono text-xs border-t border-[#27272A] pt-3 mb-4">
          {project.specs.map((spec) => (
            <div key={spec.label} className="flex justify-between items-center text-[11px]">
              <span className="text-[#71717A] tracking-wider">{spec.label}</span>
              <span 
                className="font-bold tracking-wider"
                style={{ color: spec.color || '#D4D4D8' }}
              >
                {spec.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Cartridge Footer: Hash & Schematics Action */}
      <div className="flex items-center justify-between border-t border-[#27272A] pt-3 font-mono text-xs">
        <span className="text-[10px] text-[#71717A] tracking-wider">
          HASH: {project.hash}
        </span>
        <button
          onClick={() => onOpenSchematic(project)}
          className="font-bold tracking-wider transition-colors flex items-center gap-1 text-[11px]"
          style={{ color: project.statusColor }}
        >
          <span>SCHEMATICS</span>
          <span>&rarr;</span>
        </button>
      </div>
    </div>
  );
};
