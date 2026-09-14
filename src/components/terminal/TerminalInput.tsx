import React, { useState } from 'react';

interface TerminalInputProps {
  onSendCommand: (command: string) => void;
  disabled?: boolean;
}

export const TerminalInput: React.FC<TerminalInputProps> = ({ 
  onSendCommand,
  disabled = false
}) => {
  const [inputVal, setInputVal] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim() || disabled) return;
    onSendCommand(inputVal.trim());
    setInputVal('');
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex items-center gap-2 font-mono text-xs sm:text-sm">
      {/* Prompt Prefix */}
      <span className="text-[#33FF66] font-bold tracking-wider whitespace-nowrap text-glow-green select-none">
        SYS-6000:\&gt;
      </span>

      {/* Command Input Box */}
      <div className="relative flex-1">
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          disabled={disabled}
          placeholder="Type command here (help, specs, roster, ping)..."
          className="w-full px-3 py-1.5 rounded bg-[#061208] border border-[#1E4D27] text-[#33FF66] placeholder-[#1E592A] focus:outline-none focus:border-[#33FF66] focus:shadow-[0_0_8px_rgba(51,255,102,0.4)] transition-all"
        />
      </div>

      {/* Send Action Button */}
      <button
        type="submit"
        disabled={disabled || !inputVal.trim()}
        className="px-4 py-1.5 rounded bg-[#33FF66] hover:bg-[#4EFA8A] active:bg-[#28CC52] text-[#061208] font-mono text-xs font-black uppercase tracking-wider transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-[0_0_10px_rgba(51,255,102,0.5)] active:translate-y-[1px]"
      >
        SEND
      </button>
    </form>
  );
};

