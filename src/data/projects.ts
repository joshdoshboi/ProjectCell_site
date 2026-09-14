import { ProjectCartridge } from '../types';

export const projectCartridges: ProjectCartridge[] = [
  {
    id: "mod-01",
    modNumber: "MOD-01 // ACTIVE",
    status: "ACTIVE",
    statusColor: "#33FF66",
    title: "NEURAL-VORTEX ACCELERATOR",
    description: "Discrete analog matrix multiplier fabricated for sub-millisecond edge classification without digital quantizer overhead. Operates entirely at 5V logic.",
    specs: [
      { label: "ARCHITECTURE:", value: "SYSTOLIC ARRAY", color: "#33FF66" },
      { label: "POWER DRAW:", value: "18.4 WATTS", color: "#A1A1AA" },
      { label: "THROUGHPUT:", value: "420 GOP/S", color: "#A1A1AA" }
    ],
    hash: "991-A2",
    schematicData: {
      boardId: "NVA-500-ALPHA",
      busType: "PCI-E 32-BIT CUSTOM HARDWARE BUS",
      pcbLayers: "6-LAYER FR4 HIGH-FREQUENCY DIELECTRIC",
      operatingFreq: "128 MHz ASYNCHRONOUS PIPELINE",
      logicDensity: "16x16 MAC RESISTOR LADDER MATRIX",
      powerRails: "+5.0V DC REGULATED (ISOLATED TRANSIENT)",
      overview: "Direct analog domain matrix product computation designed to eliminate ADC conversion latencies on edge sensor arrays.",
      subsystems: [
        "Analog Multiplier Crossbar Array (16x16)",
        "Zero-Drift Operational Integrators",
        "High-Speed Output Sample & Hold Stage",
        "SPI Configuration & Calibration Bus"
      ]
    }
  },
  {
    id: "mod-02",
    modNumber: "MOD-02 // TESTING",
    status: "TESTING",
    statusColor: "#EAB308",
    title: "SILICON-MESH TRANSCEIVER",
    description: "Encrypted point-to-point packet radio cartridge utilizing packet burst switching over 433 MHz ISM band for air-gapped terminal synchronization.",
    specs: [
      { label: "BAND:", value: "433.92 MHz", color: "#EAB308" },
      { label: "ENCRYPTION:", value: "OTP HARDWARE XOR", color: "#A1A1AA" },
      { label: "RANGE:", value: "14.2 KM LOS", color: "#A1A1AA" }
    ],
    hash: "442-B9",
    schematicData: {
      boardId: "SMT-433-BRAVO",
      busType: "DUAL UART + DMA SYNCHRONOUS SERIAL",
      pcbLayers: "4-LAYER ROGERS 4003C RF SUBSTRATE",
      operatingFreq: "433.92 MHz CARRIER / 250 KBPS FSK",
      logicDensity: "DISCRETE HARDWARE PSEUDO-RANDOM RNG",
      powerRails: "+3.3V DC RF LDO REGULATED",
      overview: "Air-gapped resilient transmission cartridge capable of surviving electromagnetic interference across long campus distances.",
      subsystems: [
        "Direct Upconversion Quadrature Mixer",
        "Hardware One-Time-Pad Cryptographic Unit",
        "Quarter-Wave Monopole Impedance Matcher",
        "Low-Noise Pre-Amplifier (1.2 dB NF)"
      ]
    }
  },
  {
    id: "mod-03",
    modNumber: "MOD-03 // DEPLOYED",
    status: "DEPLOYED",
    statusColor: "#06B6D4",
    title: "SUB-ZERO LIQUID PIPELINE",
    description: "Closed loop fluorocarbon chilling manifold built to keep phosphor screen high-voltage transformers and ECL logic cold under sustained computational stress.",
    specs: [
      { label: "COOLANT:", value: "FC-770 INERT", color: "#06B6D4" },
      { label: "PRESSURE:", value: "2.2 BAR NOMINAL", color: "#A1A1AA" },
      { label: "FLOW RATE:", value: "3.0 L/MIN", color: "#A1A1AA" }
    ],
    hash: "808-Z1",
    schematicData: {
      boardId: "SZL-770-GAMMA",
      busType: "CAN BUS 2.0B TELEMETRY MANIFOLD",
      pcbLayers: "HEAVY COPPER 2OZ MIL-SPEC PLATING",
      operatingFreq: "DYNAMIC PWM CLOSED-LOOP PUMP CONTROLLER",
      logicDensity: "8x SOLID-STATE TEMPERATURE SENSOR NODES",
      powerRails: "+12.0V HIGH-CURRENT BRUSHLESS DRIVE",
      overview: "Non-conductive dielectric cooling loop specifically engineered for zero evaporation and active phase stabilization under thermal spikes.",
      subsystems: [
        "Micro-channel Copper Cold Plates (0.15mm fins)",
        "Dual Magnetic Impeller Brushless Pumps",
        "Ultrasonic Flow & Density Transducer",
        "Emergency Automatic Pressure Relief Valve"
      ]
    }
  }
];

