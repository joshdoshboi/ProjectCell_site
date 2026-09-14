import React from 'react';

interface StatusIndicatorProps {
  color?: 'green' | 'orange' | 'yellow' | 'cyan' | 'purple' | 'red';
  size?: 'sm' | 'md' | 'lg';
  pulse?: boolean;
  className?: string;
}

export const StatusIndicator: React.FC<StatusIndicatorProps> = ({
  color = 'green',
  size = 'md',
  pulse = false,
  className = ''
}) => {
  const colorMap = {
    green: {
      bg: 'bg-[#33FF66]',
      glow: 'shadow-[0_0_8px_#33FF66,inset_0_1px_1px_rgba(255,255,255,0.8)]',
      pulseColor: 'bg-[#33FF66]/40'
    },
    orange: {
      bg: 'bg-[#C05634]',
      glow: 'shadow-[0_0_8px_#C05634,inset_0_1px_1px_rgba(255,255,255,0.8)]',
      pulseColor: 'bg-[#C05634]/40'
    },
    yellow: {
      bg: 'bg-[#EAB308]',
      glow: 'shadow-[0_0_8px_#EAB308,inset_0_1px_1px_rgba(255,255,255,0.8)]',
      pulseColor: 'bg-[#EAB308]/40'
    },
    cyan: {
      bg: 'bg-[#06B6D4]',
      glow: 'shadow-[0_0_8px_#06B6D4,inset_0_1px_1px_rgba(255,255,255,0.8)]',
      pulseColor: 'bg-[#06B6D4]/40'
    },
    purple: {
      bg: 'bg-[#A855F7]',
      glow: 'shadow-[0_0_8px_#A855F7,inset_0_1px_1px_rgba(255,255,255,0.8)]',
      pulseColor: 'bg-[#A855F7]/40'
    },
    red: {
      bg: 'bg-[#EF4444]',
      glow: 'shadow-[0_0_8px_#EF4444,inset_0_1px_1px_rgba(255,255,255,0.8)]',
      pulseColor: 'bg-[#EF4444]/40'
    }
  };

  const sizeClasses = {
    sm: 'w-1.5 h-1.5',
    md: 'w-2 h-2',
    lg: 'w-2.5 h-2.5'
  };

  const selected = colorMap[color];

  return (
    <span className={`relative inline-flex items-center justify-center ${className}`}>
      {pulse && (
        <span 
          className={`absolute inline-flex h-full w-full rounded-full animate-ping opacity-75 ${selected.pulseColor}`} 
        />
      )}
      <span 
        className={`relative inline-block rounded-full ${sizeClasses[size]} ${selected.bg} ${selected.glow}`} 
      />
    </span>
  );
};
