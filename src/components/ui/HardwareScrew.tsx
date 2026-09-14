import React from 'react';

interface HardwareScrewProps {
  className?: string;
  angle?: number;
  size?: 'sm' | 'md' | 'lg';
}

export const HardwareScrew: React.FC<HardwareScrewProps> = ({ 
  className = '', 
  angle = 35,
  size = 'md'
}) => {
  const sizeClasses = {
    sm: 'w-2.5 h-2.5',
    md: 'w-3.5 h-3.5',
    lg: 'w-4 h-4'
  };

  const slotSize = {
    sm: 'w-1.5 h-[1.5px]',
    md: 'w-2.5 h-[2px]',
    lg: 'w-3 h-[2px]'
  };

  return (
    <div 
      className={`relative inline-flex items-center justify-center rounded-full bg-gradient-to-br from-[#E2D8C6] via-[#B8A892] to-[#786B5A] shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_1px_2px_rgba(0,0,0,0.5)] border border-[#8C7D6B] select-none ${sizeClasses[size]} ${className}`}
      aria-hidden="true"
    >
      {/* Screw head slot indentation */}
      <div 
        className={`bg-[#332D25] rounded-[0.5px] shadow-[inset_0_1px_1px_rgba(0,0,0,0.9)] ${slotSize[size]}`}
        style={{ transform: `rotate(${angle}deg)` }}
      />
    </div>
  );
};

