import { ChronoEvent } from '../types';

export const chronoEvents: ChronoEvent[] = [
  {
    id: "evt-01",
    code: "EVT-8821 // CRCE",
    date: "OCTOBER 14-16, 2026",
    title: "CELL-HACK: 36-HOUR RETRO COMPUTING HACKATHON",
    location: "CRCE MAIN AUDITORIUM & HARDWARE LAB",
    status: "TRANSMITTING",
    statusColor: "#33FF66",
    eventType: "HARDWARE & SOFTWARE HACKATHON",
    description: "Flagship 36-hour sprint where teams build tangible embedded hardware prototypes, custom operating kernels, and retro-futuristic interactive interfaces.",
    specs: {
      frequency: "142.0 MHz BEACON",
      bandwidth: "64 TEAMS CAPACITY",
      slots: "REGISTRATION LIVE"
    }
  },
  {
    id: "evt-02",
    code: "EVT-8835 // WORKSHOP",
    date: "NOVEMBER 05, 2026",
    title: "DISCRETE LOGIC & GATE-ARRAY BREADBOARDING",
    location: "ELECTRONICS & TELECOM LAB 304",
    status: "SCHEDULED",
    statusColor: "#EAB308",
    eventType: "TECHNICAL WORKSHOP",
    description: "Hands-on laboratory session constructing 8-bit arithmetic logic units from 7400-series TTL chips without microcontrollers or pre-built modules.",
    specs: {
      frequency: "433.92 MHz ISM",
      bandwidth: "40 BENCH STATIONS",
      slots: "OPEN ENROLLMENT"
    }
  },
  {
    id: "evt-03",
    code: "EVT-8849 // FIELD-TEST",
    date: "DECEMBER 12, 2026",
    title: "AIR-GAPPED PACKET RADIO BALLOON TELEMETRY",
    location: "BANDRA FORT CLIFF / ROOFTOP STATION",
    status: "SCHEDULED",
    statusColor: "#06B6D4",
    eventType: "FIELD EXPERIMENT",
    description: "Deployment of custom sub-GHz telemetry transceivers mounted on high-altitude weather payloads with real-time CRT ground station packet decoding.",
    specs: {
      frequency: "868.0 MHz LORA / FSK",
      bandwidth: "24.5 KM RADIUS",
      slots: "FIELD CREW ONLY"
    }
  },
  {
    id: "evt-04",
    code: "EVT-8810 // SYMPOSIUM",
    date: "SEPTEMBER 02, 2026",
    title: "CRT PHOSPHOR & ANALOG VIDEO RESTORATION",
    location: "PROJECT CELL WORKBENCH CRCE",
    status: "ARCHIVED",
    statusColor: "#A1A1AA",
    eventType: "ARCHIVED LOG",
    description: "Comprehensive restoration clinic covering high-voltage flyback transformers, deflection yoke convergence, and phosphor persistence decay calibration.",
    specs: {
      frequency: "15.734 kHz H-SYNC",
      bandwidth: "LOG ARCHIVED",
      slots: "RECORDED"
    }
  }
];
