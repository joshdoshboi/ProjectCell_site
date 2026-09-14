import { TeamDivision } from '../types';

export const teamDivisions: TeamDivision[] = [
  {
    slot: "01",
    name: "CORE DIVISION",
    slotTag: "SLOT 01 // NVMe",
    serial: "ORX-CR-9920",
    membersText: "4 OPERATORS",
    membersCount: 4,
    membersColor: "#33FF66", // green
    statusDotColor: "#33FF66",
    clearance: "LEVEL-5 [EXEC]",
    clearanceColor: "#EAB308",
    capacity: "ACT 4.0TB",
    description: "Central command, system orchestration, roadmap architecture, and cross-functional operations.",
    roster: [
      { name: "Aarav Sharma", callsign: "NEXUS-01", role: "President & Chief Architect", clearance: "L5-EXEC", specialization: "Systems Engineering & Infrastructure" },
      { name: "Riya Desai", callsign: "CIPHER-02", role: "Vice President & Operations", clearance: "L5-EXEC", specialization: "Resource Allocation & Protocol" },
      { name: "Kabir Mehta", callsign: "VECTOR-03", role: "Technical Lead", clearance: "L5-EXEC", specialization: "Low-Level Kernel & Hardware Design" },
      { name: "Tanvi Joshi", callsign: "PULSE-04", role: "Creative & Brand Director", clearance: "L5-EXEC", specialization: "Hardware Ergonomics & Industrial UI" }
    ]
  },
  {
    slot: "02",
    name: "CREATIVE LABS",
    slotTag: "SLOT 02 // VISUAL ARRAY",
    serial: "ORX-CR-8831",
    membersText: "5 OPERATORS",
    membersCount: 5,
    membersColor: "#C05634", // orange
    statusDotColor: "#EAB308",
    clearance: "LEVEL-3 [VISUAL]",
    clearanceColor: "#EAB308",
    capacity: "ACT 2.0TB",
    description: "Industrial visual identity, UI/UX interaction paradigms, schematic blueprints, and media synthesizers.",
    roster: [
      { name: "Aditya Patil", callsign: "RENDER-01", role: "Visual Array Lead", clearance: "L3-VISUAL", specialization: "Retro Graphics & Vector Deflection" },
      { name: "Sanya Roy", callsign: "PALETTE-02", role: "Chassis & Ergonomics Designer", clearance: "L3-VISUAL", specialization: "Die-Cast Tooling & CAD Modeling" },
      { name: "Devansh Nair", callsign: "GLYPH-03", role: "Typography & Print Specialist", clearance: "L3-VISUAL", specialization: "Monospace Glyphs & Schematics" },
      { name: "Pooja Hegde", callsign: "SYNTH-04", role: "Motion & CRT FX Artist", clearance: "L3-VISUAL", specialization: "Phosphor Shader Logic & Timing" },
      { name: "Varun Verma", callsign: "KINETIC-05", role: "Interactive Media Designer", clearance: "L3-VISUAL", specialization: "Tactile Feedback & Switch Acoustics" }
    ]
  },
  {
    slot: "03",
    name: "TECH & HARDWARE",
    slotTag: "SLOT 03 // LOGIC MESH",
    serial: "ORX-TK-4402",
    membersText: "6 OPERATORS",
    membersCount: 6,
    membersColor: "#06B6D4", // cyan
    statusDotColor: "#06B6D4",
    clearance: "LEVEL-4 [LOGIC]",
    clearanceColor: "#EAB308",
    capacity: "ACT 8.0TB",
    description: "PCB prototyping, discrete logic breadboarding, high-speed telemetry, and low-level firmware integration.",
    roster: [
      { name: "Siddharth Rao", callsign: "SILICON-01", role: "Hardware Systems Lead", clearance: "L4-LOGIC", specialization: "FPGA Fabric & ECL Logic" },
      { name: "Ananya Iyer", callsign: "BUS-02", role: "PCB & Routing Engineer", clearance: "L4-LOGIC", specialization: "High-Speed Differential Pairs" },
      { name: "Rohan Kulkarni", callsign: "FIRMWARE-03", role: "Embedded Systems Specialist", clearance: "L4-LOGIC", specialization: "Bare-Metal C & RISC-V Assembly" },
      { name: "Meera Sen", callsign: "RF-04", role: "Radio Frequency Specialist", clearance: "L4-LOGIC", specialization: "ISM Band Antennas & Transceivers" },
      { name: "Kunal Shah", callsign: "THERMAL-05", role: "Cooling & Power Systems", clearance: "L4-LOGIC", specialization: "Fluorocarbon Chilling & VRMs" },
      { name: "Isha Kapoor", callsign: "GATE-06", role: "Logic Array Developer", clearance: "L4-LOGIC", specialization: "Gate Array Synthesis & Test Benches" }
    ]
  },
  {
    slot: "04",
    name: "SR. ADVISORS",
    slotTag: "SLOT 04 // ARCHIVAL",
    serial: "ORX-SR-1004",
    membersText: "3 VETERANS",
    membersCount: 3,
    membersColor: "#A855F7", // purple
    statusDotColor: "#A855F7",
    clearance: "LEVEL-5 [MASTERS]",
    clearanceColor: "#EAB308",
    capacity: "ACT 16TB",
    description: "Strategic veterans, architectural oversight, past lab directors, and deep industry liaisons.",
    roster: [
      { name: "Dr. Vikram Seth", callsign: "ARCHON-01", role: "Chief Technical Advisor", clearance: "L5-MASTERS", specialization: "Distributed Systems & Telemetry" },
      { name: "Natasha Fernandes", callsign: "CHRONO-02", role: "Senior Hardware Consultant", clearance: "L5-MASTERS", specialization: "ASIC Foundry & Silicon Fab" },
      { name: "Arjun Singhania", callsign: "SENTINEL-03", role: "Network Architecture Advisor", clearance: "L5-MASTERS", specialization: "Air-gapped Protocol Verification" }
    ]
  },
  {
    slot: "05",
    name: "JR. ADVISORS",
    slotTag: "SLOT 05 // EXPANSION BUS",
    serial: "ORX-JR-5509",
    membersText: "4 RESEARCHERS",
    membersCount: 4,
    membersColor: "#33FF66", // green
    statusDotColor: "#33FF66",
    clearance: "LEVEL-2 [CADET]",
    clearanceColor: "#EAB308",
    capacity: "ACT 2.0TB",
    description: "Emerging engineers, exploratory prototype runners, sensor bus testers, and peer mentors.",
    roster: [
      { name: "Kavya Menon", callsign: "SPARK-01", role: "Junior Research Fellow", clearance: "L2-CADET", specialization: "Analog Signal Acquisition" },
      { name: "Pranav Pillai", callsign: "PROBE-02", role: "Testbench Engineer", clearance: "L2-CADET", specialization: "Oscilloscope Waveform Capture" },
      { name: "Simran Kaur", callsign: "TRACE-03", role: "Firmware Apprentice", clearance: "L2-CADET", specialization: "Serial UART & I2C Drivers" },
      { name: "Dhruv Bansal", callsign: "WIRE-04", role: "Prototype Builder", clearance: "L2-CADET", specialization: "Wire-Wrapping & Breadboard Harness" }
    ]
  },
  {
    slot: "06",
    name: "FACULTY",
    slotTag: "SLOT 06 // ROOT BIOS",
    serial: "ORX-FC-0001",
    membersText: "2 FELLOWS",
    membersCount: 2,
    membersColor: "#C05634", // orange
    statusDotColor: "#C05634",
    clearance: "ROOT [GODMODE]",
    clearanceColor: "#C05634",
    capacity: "ACT ROM",
    description: "Academic mentors, lab patrons, institutional patrons, and departmental root authority.",
    roster: [
      { name: "Prof. S. R. Kulkarni", callsign: "ROOT-0", role: "Faculty In-Charge & Convener", clearance: "ROOT [GODMODE]", specialization: "Computer Engineering & CRCE Labs" },
      { name: "Prof. M. B. D'Souza", callsign: "BIOS-1", role: "Departmental Patron", clearance: "ROOT [GODMODE]", specialization: "Embedded Systems & Signal Theory" }
    ]
  }
];

