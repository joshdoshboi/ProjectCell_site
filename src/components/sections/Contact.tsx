import React, { useState } from 'react';
import { HardwareFrame } from '../layout/HardwareFrame';
import { Mail, MapPin, Radio, Send, CheckCircle2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [transmitting, setTransmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setTransmitting(true);
    setTimeout(() => {
      setTransmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1200);
  };

  return (
    <div id="contact" className="w-full px-2 sm:px-4 mb-8">
      <HardwareFrame>
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-[#B8A992] pb-3 mb-4">
          <div>
            <div className="text-[11px] font-mono text-[#C05634] font-bold tracking-widest uppercase">
              // COMM-LINK TRANSMITTER &amp; UPLINK
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-black text-[#18181B] tracking-wide mt-0.5">
              CONTACT
            </h2>
          </div>

          <div className="self-start sm:self-center">
            <div className="px-3 py-1.5 rounded bg-[#C05634] text-white font-mono text-[10px] sm:text-xs font-bold tracking-wider uppercase shadow-inner">
              DIRECT DISPATCH
            </div>
          </div>
        </div>

        {/* Subtitle */}
        <p className="max-w-3xl font-mono text-xs sm:text-sm text-[#4A4237] leading-relaxed mb-6">
          Transmit a packet to the Project Cell engineering team. Whether you wish to collaborate, propose an exploratory experiment, or join our lab bench, our receiver is open.
        </p>

        {/* Form and Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Left Column: Lab Coordinates & Transceiver Channels */}
          <div className="space-y-4">
            {/* Coordinates Card */}
            <div className="p-4 rounded-md bg-[#18181B] border border-[#27272A] font-mono text-xs text-[#A1A1AA] shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_4px_12px_rgba(0,0,0,0.5)]">
              <div className="text-[11px] text-[#33FF66] font-bold tracking-wider uppercase mb-3 flex items-center gap-1.5">
                <Radio size={14} />
                <span>BENCH COORDINATES &amp; FREQUENCIES:</span>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-2.5">
                  <MapPin size={16} className="text-[#EAB308] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-white font-semibold">Project Cell Hardware Lab</div>
                    <div className="text-[11px] text-[#71717A]">
                      Fr. Conceicao Rodrigues College of Engineering (CRCE)<br />
                      Father Agnel Ashram, Bandstand, Bandra (W), Mumbai - 400050
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 border-t border-[#27272A] pt-2.5">
                  <Mail size={16} className="text-[#33FF66] flex-shrink-0" />
                  <div>
                    <span className="text-[11px] text-[#71717A] block">DISPATCH EMAIL:</span>
                    <a 
                      href="mailto:contact@projectcell.crce.ac.in" 
                      className="text-[#33FF66] hover:underline font-semibold"
                    >
                      contact@projectcell.crce.ac.in
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Transceiver Network */}
            <div className="p-4 rounded-md bg-[#18181B] border border-[#27272A] font-mono text-xs text-[#A1A1AA]">
              <div className="text-[11px] text-[#EAB308] font-bold tracking-wider uppercase mb-3">
                // EXTERNAL PACKET RELAYS:
              </div>
              <div className="grid grid-cols-3 gap-2">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center justify-center p-2.5 rounded bg-[#111111] hover:bg-[#27272A] border border-[#27272A] transition-colors text-center group"
                >
                  <svg className="w-[18px] h-[18px] fill-current text-white group-hover:text-[#33FF66] transition-colors" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  <span className="text-[10px] mt-1 font-bold text-[#E4E4E7]">GITHUB</span>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center justify-center p-2.5 rounded bg-[#111111] hover:bg-[#27272A] border border-[#27272A] transition-colors text-center group"
                >
                  <svg className="w-[18px] h-[18px] fill-current text-white group-hover:text-[#C05634] transition-colors" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span className="text-[10px] mt-1 font-bold text-[#E4E4E7]">INSTAGRAM</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center justify-center p-2.5 rounded bg-[#111111] hover:bg-[#27272A] border border-[#27272A] transition-colors text-center group"
                >
                  <svg className="w-[18px] h-[18px] fill-current text-white group-hover:text-[#06B6D4] transition-colors" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span className="text-[10px] mt-1 font-bold text-[#E4E4E7]">LINKEDIN</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Terminal Transmission Form */}
          <div className="p-4 sm:p-5 rounded-md bg-[#18181B] border border-[#27272A] shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_4px_12px_rgba(0,0,0,0.5)]">
            <div className="text-[11px] font-mono text-[#C05634] font-bold tracking-wider uppercase mb-3 flex items-center justify-between border-b border-[#27272A] pb-2">
              <span>// OPERATOR TRANSMISSION CONSOLE</span>
              <span className="text-[#33FF66]">CH-01 READY</span>
            </div>

            {submitted ? (
              <div className="py-10 text-center font-mono">
                <CheckCircle2 size={36} className="text-[#33FF66] mx-auto mb-3 animate-bounce" />
                <div className="text-[#33FF66] font-bold text-sm tracking-wider text-glow-green">
                  TRANSMISSION BUFFER FLUSHED: ACK 200 OK
                </div>
                <p className="text-xs text-[#A1A1AA] mt-2">
                  Your message has been captured into the CRCE Project Cell terminal mailbox.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 font-mono text-xs">
                <div>
                  <label className="block text-[#A1A1AA] text-[10px] uppercase font-bold tracking-wider mb-1">
                    OPERATOR NAME / CALLSIGN:
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Doe / OPERATOR-07"
                    className="w-full px-3 py-1.5 rounded bg-[#111111] border border-[#27272A] text-white placeholder-[#52525B] focus:outline-none focus:border-[#C05634] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[#A1A1AA] text-[10px] uppercase font-bold tracking-wider mb-1">
                    RETURN FREQUENCY (EMAIL):
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="operator@domain.com"
                    className="w-full px-3 py-1.5 rounded bg-[#111111] border border-[#27272A] text-white placeholder-[#52525B] focus:outline-none focus:border-[#C05634] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[#A1A1AA] text-[10px] uppercase font-bold tracking-wider mb-1">
                    MESSAGE PAYLOAD:
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Enter project proposal, lab inquiry, or transmission telemetry..."
                    className="w-full px-3 py-1.5 rounded bg-[#111111] border border-[#27272A] text-white placeholder-[#52525B] focus:outline-none focus:border-[#C05634] transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={transmitting}
                    className="w-full py-2 rounded bg-[#C05634] hover:bg-[#D46947] active:bg-[#9C3E20] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-[0_2px_4px_rgba(0,0,0,0.4)] disabled:opacity-50"
                  >
                    <Send size={14} />
                    <span>{transmitting ? 'TRANSMITTING PACKET...' : 'TRANSMIT MESSAGE →'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </HardwareFrame>
    </div>
  );
};
