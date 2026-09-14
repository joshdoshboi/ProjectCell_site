import React, { useState } from 'react';
import { HardwareFrame } from '../layout/HardwareFrame';
import { ProjectCard } from '../cards/ProjectCard';
import { SchematicModal } from '../modals/SchematicModal';
import { projectCartridges } from '../../data/projects';
import { ProjectCartridge } from '../../types';

export const Projects: React.FC = () => {
  const [activeSchematic, setActiveSchematic] = useState<ProjectCartridge | null>(null);

  return (
    <div id="projects" className="w-full px-2 sm:px-4 mb-8">
      <HardwareFrame>
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-[#B8A992] pb-3 mb-5">
          <div>
            <div className="text-[11px] font-mono text-[#C05634] font-bold tracking-widest uppercase">
              // HARDWARE EXPANSION CARTRIDGES
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-black text-[#18181B] tracking-wide mt-0.5">
              LAB PROJECTS
            </h2>
          </div>

          <div className="self-start sm:self-center">
            <div className="px-3 py-1.5 rounded bg-[#18181B] border border-[#3F3F46] text-[#33FF66] font-mono text-[10px] sm:text-xs font-bold tracking-wider uppercase text-glow-green shadow-inner">
              PCI-E GEN-0 INDUSTRIAL
            </div>
          </div>
        </div>

        {/* 3 Cartridges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projectCartridges.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenSchematic={(proj) => setActiveSchematic(proj)}
            />
          ))}
        </div>

        {/* Schematic Inspection Modal */}
        <SchematicModal
          project={activeSchematic}
          onClose={() => setActiveSchematic(null)}
        />
      </HardwareFrame>
    </div>
  );
};

