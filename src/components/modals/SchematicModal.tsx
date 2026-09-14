import React from 'react';
import { ProjectCartridge } from '../../types';
import { HardwareScrew } from '../ui/HardwareScrew';
import { X, Cpu, Layers, Zap, Activity } from 'lucide-react';

interface SchematicModalProps {
  project: ProjectCartridge | null;
  onClose: () => void;
}

export const SchematicModal: React.FC<SchematicModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const { schematicData } = project;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl rounded-lg bg-[#D9CDB8] border-2 border-[#B8A992] chassis-bevel p-4 sm:p-6 select-none max-h-[90vh] flex flex-col">
        {/* Corner Screws */}
        <div className="absolute top-2.5 left-2.5 z-20">
          <HardwareScrew angle={40} size="sm" />
        </div>
        <div className="absolute top-2.5 right-2.5 z-20">
          <HardwareScrew angle={130} size="sm" />
        </div>
        <div className="absolute bottom-2.5 left-2.5 z-20">
          <HardwareScrew angle={220} size="sm" />
        </div>
        <div className="absolute bottom-2.5 right-2.5 z-20">
          <HardwareScrew angle={310} size="sm" />
        </div>

        {/* Modal Header */}
        <div className="flex items-start justify-between border-b border-[#B8A992] pb-3 mb-4">
          <div>
            <div className="text-[10px] font-mono text-[#C05634] font-bold tracking-widest uppercase">
              // HARDWARE SCHEMATIC BLUEPRINT: {project.hash}
            </div>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-[#18181B] tracking-wide">
              {project.title}
            </h2>
            <p className="text-xs font-mono text-[#554C3E] mt-0.5">
              BOARD ID: {schematicData.boardId} &bull; STATUS: {project.status}
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

        {/* Blueprint Specs Box */}
        <div className="flex-1 overflow-y-auto space-y-4 pr-1 font-mono text-xs">
          {/* Blueprint Diagram Representation */}
          <div className="p-3 rounded bg-[#0A110B] border border-[#1E4D27] text-[#33FF66] shadow-inner font-mono text-[11px] overflow-x-auto">
            <div className="text-center text-xs font-bold text-glow-green border-b border-[#1E4D27] pb-1.5 mb-2">
              [TOPOLOGY DIAGRAM // BUS ROUTING]
            </div>
            <pre className="text-[10px] leading-tight text-[#33FF66]/90 whitespace-pre">
{`+-------------------------------------------------------------+
| [MAIN BUS] <===> [LEVEL SHIFTER] <===> [ANALOG MATRIX CORE] |
|       |                     |                   |           |
|  [VCC +5V]            [CLOCK 128MHz]       [S&H BUFFER]     |
|       |                     |                   |           |
| [GND PLANE] <==> [TERMINATION RESISTORS] <==> [HASH: ${project.hash}] |
+-------------------------------------------------------------+`}
            </pre>
          </div>

          {/* Technical Metadata Matrix */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div className="p-2.5 rounded bg-[#18181B] border border-[#27272A] text-white">
              <div className="flex items-center gap-1.5 text-[#33FF66] text-[10px] font-bold uppercase mb-1">
                <Cpu size={12} />
                <span>BUS INTERFACE</span>
              </div>
              <div className="text-xs text-[#E4E4E7] font-semibold">{schematicData.busType}</div>
            </div>

            <div className="p-2.5 rounded bg-[#18181B] border border-[#27272A] text-white">
              <div className="flex items-center gap-1.5 text-[#EAB308] text-[10px] font-bold uppercase mb-1">
                <Layers size={12} />
                <span>PCB FABRICATION</span>
              </div>
              <div className="text-xs text-[#E4E4E7] font-semibold">{schematicData.pcbLayers}</div>
            </div>

            <div className="p-2.5 rounded bg-[#18181B] border border-[#27272A] text-white">
              <div className="flex items-center gap-1.5 text-[#06B6D4] text-[10px] font-bold uppercase mb-1">
                <Activity size={12} />
                <span>CLOCK &amp; TIMING</span>
              </div>
              <div className="text-xs text-[#E4E4E7] font-semibold">{schematicData.operatingFreq}</div>
            </div>

            <div className="p-2.5 rounded bg-[#18181B] border border-[#27272A] text-white">
              <div className="flex items-center gap-1.5 text-[#C05634] text-[10px] font-bold uppercase mb-1">
                <Zap size={12} />
                <span>POWER RAILS</span>
              </div>
              <div className="text-xs text-[#E4E4E7] font-semibold">{schematicData.powerRails}</div>
            </div>
          </div>

          {/* Subsystems List */}
          <div className="p-3 rounded bg-[#CAC0AD] border border-[#B0A28E] text-[#221C16]">
            <div className="font-bold uppercase tracking-wider text-[11px] mb-2 text-[#18181B]">
              CRITICAL SUBSYSTEM STAGES:
            </div>
            <ul className="space-y-1 text-xs list-disc list-inside">
              {schematicData.subsystems.map((sub, idx) => (
                <li key={idx} className="font-mono text-[#332B22]">
                  {sub}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer Controls */}
        <div className="mt-4 pt-3 border-t border-[#B8A992] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded bg-[#18181B] hover:bg-[#27272A] text-white font-mono text-xs font-bold uppercase tracking-wider shadow"
          >
            [CLOSE SCHEMATIC]
          </button>
        </div>
      </div>
    </div>
  );
};

