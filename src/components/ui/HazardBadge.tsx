import React from 'react';

interface HazardBadgeProps {
  label?: string;
  className?: string;
}

export const HazardBadge: React.FC<HazardBadgeProps> = ({
  label = "MIL-SPEC 810G",
  className = ""
}) => {
  return (
    <div className={`inline-flex items-center gap-1.5 p-0.5 bg-[#1F1B16] rounded border border-[#5E5242] shadow-[inset_0_1px_2px_rgba(0,0,0,0.8)] ${className}`}>
      {/* Hazard Diagonal Stripe Bar */}
      <div 
        className="w-16 h-4 rounded-sm border border-[#111111] overflow-hidden"
        style={{
          background: 'repeating-linear-gradient(-45deg, #EAB308, #EAB308 6px, #18181B 6px, #18181B 12px)'
        }}
      />
      {/* Label Box */}
      <div className="px-2 py-0.5 bg-[#14120F] text-[#D8D2C5] font-mono text-[10px] tracking-wider font-semibold border border-[#3D352B] rounded-sm">
        {label}
      </div>
    </div>
  );
};

