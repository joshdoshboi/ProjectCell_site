import React, { useState, useEffect } from 'react';
import { HardwareScrew } from '../ui/HardwareScrew';
import { StatusIndicator } from '../ui/StatusIndicator';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  crtFxEnabled: boolean;
  onToggleCrtFx: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({
  crtFxEnabled,
  onToggleCrtFx,
  activeSection
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cpuUsage, setCpuUsage] = useState(54);

  // Subtle CPU fluctuation for dynamic telemetry feel
  useEffect(() => {
    const interval = setInterval(() => {
      setCpuUsage(prev => {
        const delta = Math.floor(Math.random() * 5) - 2;
        const next = prev + delta;
        return Math.min(68, Math.max(48, next));
      });
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { label: '[HOME]', href: '#hero', id: 'hero' },
    { label: '[ABOUT]', href: '#about', id: 'about' },
    { label: '[TEAM]', href: '#team', id: 'team' },
    { label: '[PROJECTS]', href: '#projects', id: 'projects' },
    { label: '[EVENTS]', href: '#events', id: 'events' },
    { label: '[GALLERY]', href: '#gallery', id: 'gallery' },
    { label: '[CONTACT]', href: '#contact', id: 'contact', isAccent: true }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-2 z-50 w-full max-w-6xl mx-auto px-2 sm:px-4 mb-4">
      <div className="relative rounded-lg bg-[#D9CDB8] border border-[#B8A992] chassis-bevel p-2.5 sm:p-3 select-none">
        {/* 4 Corner Screws */}
        <div className="absolute top-2 left-2 z-20">
          <HardwareScrew angle={45} size="sm" />
        </div>
        <div className="absolute top-2 right-2 z-20">
          <HardwareScrew angle={135} size="sm" />
        </div>
        <div className="absolute bottom-2 left-2 z-20">
          <HardwareScrew angle={220} size="sm" />
        </div>
        <div className="absolute bottom-2 right-2 z-20">
          <HardwareScrew angle={85} size="sm" />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 px-4">
          {/* Left System Identification Plate */}
          <div className="flex flex-col gap-1.5">
            {/* Top Plate */}
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#18181B] rounded border border-[#3F3F46] shadow-[inset_0_2px_4px_rgba(0,0,0,0.8),0_1px_0_rgba(255,255,255,0.4)]">
              <StatusIndicator color="green" size="sm" pulse />
              <span className="font-mono text-xs sm:text-sm text-[#33FF66] font-bold tracking-wider text-glow-green">
                ORXIR // SYS-6000
              </span>
              <span className="ml-1 px-1.5 py-0.5 rounded-[2px] bg-[#C05634] text-[#111111] font-mono text-[9px] font-extrabold tracking-widest uppercase">
                9600 BAUD
              </span>
            </div>

            {/* Sub-Indicators (CPU Load & CRT FX Toggle) */}
            <div className="flex items-center gap-2 text-[10px] font-mono text-[#38322A]">
              {/* CPU Meter */}
              <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#CAC0AD] border border-[#B0A28E] shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]">
                <span className="font-bold tracking-wider">CPU</span>
                <div className="w-12 h-1.5 bg-[#1F1D19] rounded-sm overflow-hidden p-[0.5px]">
                  <div 
                    className="h-full bg-[#33FF66] transition-all duration-700 ease-out"
                    style={{ width: `${cpuUsage}%` }}
                  />
                </div>
                <span className="font-semibold">{cpuUsage}%</span>
              </div>

              {/* CRT FX Button */}
              <button
                onClick={onToggleCrtFx}
                type="button"
                className={`flex items-center gap-1.5 px-2 py-0.5 rounded border text-[10px] font-mono tracking-wider transition-all ${
                  crtFxEnabled 
                    ? 'bg-[#18181B] text-[#33FF66] border-[#33FF66]/50 shadow-[0_0_8px_rgba(51,255,102,0.3)]' 
                    : 'bg-[#CAC0AD] text-[#554D41] border-[#B0A28E] hover:bg-[#DDD3C2]'
                }`}
                title="Toggle Scanlines and Phosphor Screen Effects"
              >
                <StatusIndicator color={crtFxEnabled ? "green" : "red"} size="sm" />
                <span className="font-bold">CRT FX</span>
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden self-end -mt-8">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="hardware-switch px-2.5 py-1 rounded text-xs font-mono font-bold flex items-center gap-1"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={14} /> : <Menu size={14} />}
              <span>SYS-NAV</span>
            </button>
          </div>

          {/* Desktop Navigation Switches */}
          <nav className="hidden sm:flex items-center flex-wrap gap-1.5">
            {navItems.map((item) => {
              const isCurrent = activeSection === item.id;
              if (item.isAccent) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="px-3 py-1 rounded bg-[#C05634] hover:bg-[#D46947] text-white border border-[#9C3E20] font-mono text-xs font-bold tracking-wider transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_2px_3px_rgba(0,0,0,0.3)] active:translate-y-[1px]"
                  >
                    {item.label}
                  </a>
                );
              }
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`hardware-switch px-2.5 py-1 rounded font-mono text-xs tracking-wider uppercase font-semibold ${
                    isCurrent ? 'bg-[#C7BAA5] border-[#7F705C] shadow-inner text-black font-bold' : ''
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="sm:hidden mt-3 pt-3 border-t border-[#B8A992] flex flex-col gap-1.5">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`px-3 py-1.5 rounded font-mono text-xs tracking-wider text-center ${
                  item.isAccent 
                    ? 'bg-[#C05634] text-white font-bold' 
                    : 'hardware-switch font-medium'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

