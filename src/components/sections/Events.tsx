import React, { useState } from 'react';
import { HardwareFrame } from '../layout/HardwareFrame';
import { EventCard } from '../cards/EventCard';
import { chronoEvents } from '../../data/events';
import { ChronoEvent } from '../../types';
import { Radio, CheckCircle } from 'lucide-react';

export const Events: React.FC = () => {
  const [registeredEvent, setRegisteredEvent] = useState<ChronoEvent | null>(null);

  return (
    <div id="events" className="w-full px-2 sm:px-4 mb-8">
      <HardwareFrame>
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-[#B8A992] pb-3 mb-4">
          <div>
            <div className="text-[11px] font-mono text-[#C05634] font-bold tracking-widest uppercase">
              // CHRONO EVENTS TELEMETRY
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-black text-[#18181B] tracking-wide mt-0.5">
              EVENTS
            </h2>
          </div>

          <div className="self-start sm:self-center">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-[#18181B] border border-[#3F3F46] text-[#EAB308] font-mono text-[10px] sm:text-xs font-bold tracking-wider uppercase shadow-inner">
              <Radio size={13} className="text-[#33FF66]" />
              <span>BEACON ACTIVE &bull; 142.0 MHz</span>
            </div>
          </div>
        </div>

        {/* Subtitle */}
        <p className="max-w-3xl font-mono text-xs sm:text-sm text-[#4A4237] leading-relaxed mb-6">
          Synchronize your chronometer with our upcoming laboratory hackathons, discrete logic workshops, and high-altitude radio experiments.
        </p>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {chronoEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onSelectEvent={(ev) => setRegisteredEvent(ev)}
            />
          ))}
        </div>

        {/* Telemetry Uplink Toast/Notification Modal */}
        {registeredEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="max-w-md w-full p-5 rounded-lg bg-[#18181B] border-2 border-[#33FF66] text-white font-mono shadow-[0_0_20px_rgba(51,255,102,0.4)]">
              <div className="flex items-center gap-2 text-[#33FF66] mb-3 text-glow-green">
                <CheckCircle size={20} />
                <span className="font-bold text-sm">TELEMETRY LINK ESTABLISHED</span>
              </div>
              <div className="text-xs text-[#A1A1AA] mb-4 space-y-1">
                <div>EVENT: <span className="text-white font-bold">{registeredEvent.title}</span></div>
                <div>DATE: <span className="text-[#EAB308]">{registeredEvent.date}</span></div>
                <div>COORDINATES: <span className="text-[#33FF66]">{registeredEvent.location}</span></div>
                <div className="pt-2 text-[11px] text-[#71717A]">
                  Your operator packet has been queued into the local CRCE dispatch buffer.
                </div>
              </div>
              <button
                onClick={() => setRegisteredEvent(null)}
                className="w-full py-1.5 rounded bg-[#33FF66] text-black font-bold uppercase tracking-wider text-xs hover:bg-[#4EFA8A] transition-colors"
              >
                ACKNOWLEDGE &amp; CLOSE
              </button>
            </div>
          </div>
        )}
      </HardwareFrame>
    </div>
  );
};
