import React from 'react';

interface VentProps {
  slots?: number;
  className?: string;
  height?: string;
}

export const Vent: React.FC<VentProps> = ({ 
  slots = 24, 
  className = '',
  height = 'h-3.5'
}) => {
  return (
    <div 
      className={`inline-flex items-center justify-center gap-[2.5px] px-2 py-0.5 bg-[#1C1814] rounded-sm border border-[#52483C] shadow-[inset_0_2px_4px_rgba(0,0,0,0.9),0_1px_0_rgba(255,255,255,0.2)] ${height} ${className}`}
      role="presentation"
    >
      {Array.from({ length: slots }).map((_, i) => (
        <div 
          key={i} 
          className="w-[3px] h-full bg-[#0D0B09] shadow-[inset_0_1px_2px_rgba(0,0,0,1)] border-r border-[#2C241B]/40"
        />
      ))}
    </div>
  );
};
