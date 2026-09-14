import React, { useState } from 'react';
import { TerminalOutput } from './TerminalOutput';
import { TerminalInput } from './TerminalInput';
import { TerminalOutputLine } from '../../types';
import { executeTerminalCommand } from '../../data/terminalCommands';

export const Terminal: React.FC = () => {
  const [history, setHistory] = useState<TerminalOutputLine[]>([
    {
      id: 'boot-1',
      type: 'system',
      text: '> Bootstrapped hardware architecture snapshot loaded.',
      color: '#33FF66'
    },
    {
      id: 'boot-2',
      type: 'system',
      text: '> Type help or select a command button below to interface with the subsystem.',
      color: '#33FF66'
    }
  ]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    // Handle clear/cls
    if (trimmed.toLowerCase() === 'clear' || trimmed.toLowerCase() === 'cls') {
      setHistory([]);
      return;
    }

    // Append user input to history
    const userLine: TerminalOutputLine = {
      id: `cmd-${Date.now()}`,
      type: 'prompt',
      text: `SYS-6000:\\> ${cmd}`,
      color: '#4EFA8A'
    };

    // Execute command
    const res = executeTerminalCommand(cmd);

    if (res.action === 'clear') {
      setHistory([]);
      return;
    }

    if (res.action === 'scroll-gallery') {
      const el = document.getElementById('gallery');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }

    const responseLines: TerminalOutputLine[] = res.lines.map((text, idx) => ({
      id: `res-${Date.now()}-${idx}`,
      type: 'response',
      text: text,
      color: res.color || '#33FF66'
    }));

    setHistory(prev => [...prev, userLine, ...responseLines]);
  };

  const macros = [
    { label: 'run status', cmd: 'run status', isDanger: false },
    { label: 'mount drives', cmd: 'mount drives', isDanger: false },
    { label: 'launch archive', cmd: 'gallery', isDanger: false },
    { label: 'cls', cmd: 'cls', isDanger: true }
  ];

  return (
    <div className="w-full flex flex-col gap-3 font-mono">
      {/* Scrollable Output Terminal Screen */}
      <TerminalOutput history={history} />

      {/* Macro Action Buttons Row */}
      <div className="flex flex-wrap items-center gap-2 text-xs">
        <span className="text-[#33FF66] font-bold tracking-wider select-none text-[11px]">
          EXEC MACROS:
        </span>
        {macros.map(m => (
          <button
            key={m.label}
            onClick={() => handleCommand(m.cmd)}
            className={`px-2.5 py-0.5 rounded text-[11px] font-mono tracking-wider transition-all active:translate-y-[0.5px] ${
              m.isDanger
                ? 'bg-[#291414] text-[#EF4444] border border-[#EF4444]/60 hover:bg-[#3D1A1A] hover:border-[#EF4444]'
                : 'bg-[#0E2614] text-[#33FF66] border border-[#1E592A] hover:bg-[#163D20] hover:border-[#33FF66]'
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>

      {/* Terminal Input Row */}
      <div className="pt-1 border-t border-[#16381C]">
        <TerminalInput onSendCommand={handleCommand} />
      </div>
    </div>
  );
};
