import React, { useState, useEffect } from 'react';
import { StatusIndicator } from '../ui/StatusIndicator';
import { HardwareScrew } from '../ui/HardwareScrew';
import { Vent } from '../ui/Vent';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const [uptimeSeconds, setUptimeSeconds] = useState(14892);

  useEffect(() => {
    const timer = setInterval(() => {
      setUptimeSeconds(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatUptime = (total: number) => {
    const h = Math.floor(total / 3600);
    const m = Math.floor((total % 3600) / 60);
    const s = total % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full max-w-6xl mx-auto px-2 sm:px-4 mt-8 mb-6 select-none">
      <div className="relative rounded-lg bg-[#D9CDB8] border border-[#B8A992] chassis-bevel p-4 sm:p-6 text-xs font-mono text-[#423A30]">
        {/* Corner Screws */}
        <div className="absolute top-2.5 left-2.5 z-20">
          <HardwareScrew angle={60} size="sm" />
        </div>
        <div className="absolute top-2.5 right-2.5 z-20">
          <HardwareScrew angle={140} size="sm" />
        </div>
        <div className="absolute bottom-2.5 left-2.5 z-20">
          <HardwareScrew angle={230} size="sm" />
        </div>
        <div className="absolute bottom-2.5 right-2.5 z-20">
          <HardwareScrew angle={315} size="sm" />
        </div>

        {/* Top Vent */}
        <div className="flex justify-center mb-4">
          <Vent slots={32} height="h-2.5" />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-[#B8A992]/80 pb-4">
          {/* Main Identifier */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="flex items-center gap-2">
              <span className="font-display font-black text-xl text-[#18181B] tracking-wider">
                PROJECT CELL
              </span>
              <span className="px-2 py-0.5 rounded bg-[#C05634] text-white font-mono text-[10px] font-bold">
                REV 4.2.0-CRCE
              </span>
            </div>
            <p className="text-[11px] text-[#63594B] text-center md:text-left">
              Fr. Conceicao Rodrigues College of Engineering &bull; Bandra West, Mumbai
            </p>
          </div>

          {/* Center Telemetry Status */}
          <div className="flex items-center gap-3 px-3 py-1.5 rounded bg-[#18181B] border border-[#3F3F46] text-[#33FF66] shadow-inner">
            <StatusIndicator color="green" size="md" pulse />
            <span className="font-bold tracking-wider text-glow-green text-xs">
              SYSTEM ONLINE
            </span>
            <span className="text-[#A1A1AA] text-[10px] border-l border-[#3F3F46] pl-2">
              UPTIME {formatUptime(uptimeSeconds)}
            </span>
          </div>

          {/* Back to Top Switch */}
          <button
            onClick={scrollToTop}
            className="hardware-switch px-3 py-1.5 rounded flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider"
          >
            <ArrowUp size={14} />
            <span>RETURN TO CONSOLE</span>
          </button>
        </div>

        {/* Bottom Hardware Metadata Bar */}
        <div className="pt-3 flex flex-wrap items-center justify-between gap-2 text-[10px] text-[#665B4C]">
          <div>
            &copy; {new Date().getFullYear()} PROJECT CELL. ALL SCHEMATICS &amp; PROTOCOLS LICENSED UNDER OPEN HARDWARE.
          </div>
          <div className="flex items-center gap-3">
            <span>MEM: 64MB SRAM</span>
            <span>BUS: 32-BIT ECL</span>
            <span>CLOCK: 64.0 MHz</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

