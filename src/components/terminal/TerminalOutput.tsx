import React, { useEffect, useRef } from 'react';
import { TerminalOutputLine } from '../../types';

interface TerminalOutputProps {
  history: TerminalOutputLine[];
}

export const TerminalOutput: React.FC<TerminalOutputProps> = ({ history }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <div 
      ref={scrollRef}
      className="w-full min-h-[90px] max-h-[170px] overflow-y-auto rounded bg-[#061208] border border-[#1E4D27] p-3 font-mono text-xs text-[#33FF66] leading-relaxed shadow-[inset_0_2px_8px_rgba(0,0,0,0.8)]"
      role="log"
      aria-live="polite"
    >
      {history.map((line) => (
        <div 
          key={line.id} 
          className="whitespace-pre-wrap break-words mb-0.5"
          style={{ color: line.color || '#33FF66' }}
        >
          {line.text}
        </div>
      ))}
    </div>
  );
};
