import React from 'react';
import { ChronoEvent } from '../../types';
import { StatusIndicator } from '../ui/StatusIndicator';
import { Radio, Calendar, MapPin } from 'lucide-react';

interface EventCardProps {
  event: ChronoEvent;
  onSelectEvent?: (event: ChronoEvent) => void;
}

export const EventCard: React.FC<EventCardProps> = ({ event, onSelectEvent }) => {
  return (
    <div className="relative rounded-md bg-[#18181B] border border-[#27272A] p-4 sm:p-5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_4px_12px_rgba(0,0,0,0.5)] flex flex-col justify-between transition-all duration-200 hover:border-[#3F3F46]">
      <div>
        {/* Header Telemetry Code & Status */}
        <div className="flex items-center justify-between gap-2 mb-2 font-mono text-[10px]">
          <span className="text-[#33FF66] font-bold tracking-wider">
            {event.code}
          </span>
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#111111] border border-[#27272A]">
            <StatusIndicator 
              color={event.status === 'TRANSMITTING' ? 'green' : event.status === 'SCHEDULED' ? 'yellow' : 'cyan'} 
              size="sm" 
              pulse={event.status === 'TRANSMITTING'} 
            />
            <span className="font-bold tracking-wider" style={{ color: event.statusColor }}>
              {event.status}
            </span>
          </div>
        </div>

        {/* Date & Location */}
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#EAB308] mb-2">
          <div className="flex items-center gap-1">
            <Calendar size={13} />
            <span className="font-semibold">{event.date}</span>
          </div>
          <div className="flex items-center gap-1 text-[#A1A1AA]">
            <MapPin size={13} />
            <span>{event.location}</span>
          </div>
        </div>

        {/* Event Title */}
        <h3 className="font-display font-bold text-base sm:text-lg text-white tracking-wide mb-2">
          {event.title}
        </h3>

        {/* Description */}
        <p className="font-mono text-xs text-[#A1A1AA] leading-relaxed mb-4">
          {event.description}
        </p>

        {/* Telemetry Specs */}
        <div className="grid grid-cols-3 gap-1.5 p-2 rounded bg-[#111111] border border-[#27272A] font-mono text-[10px] mb-4 text-[#A1A1AA]">
          <div>
            <span className="text-[#71717A] block">FREQ:</span>
            <span className="text-[#E4E4E7] font-semibold">{event.specs.frequency}</span>
          </div>
          <div>
            <span className="text-[#71717A] block">BANDWIDTH:</span>
            <span className="text-[#E4E4E7] font-semibold">{event.specs.bandwidth}</span>
          </div>
          <div>
            <span className="text-[#71717A] block">STATUS:</span>
            <span className="font-bold text-[#33FF66]">{event.specs.slots}</span>
          </div>
        </div>
      </div>

      {/* Action Bar */}
      <div className="flex items-center justify-between border-t border-[#27272A] pt-3 font-mono text-xs">
        <span className="text-[10px] text-[#71717A] tracking-wider uppercase">
          TYPE: {event.eventType}
        </span>
        <button
          onClick={() => onSelectEvent?.(event)}
          className="px-3 py-1 rounded bg-[#27272A] hover:bg-[#3F3F46] text-white text-[11px] font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5"
        >
          <Radio size={12} className="text-[#33FF66]" />
          <span>UPLINK TELEMETRY &rarr;</span>
        </button>
      </div>
    </div>
  );
};

