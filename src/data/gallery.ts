import { GalleryArtifact } from '../types';

export const galleryArtifacts: GalleryArtifact[] = [
  {
    id: "art-01",
    figNumber: "FIG 01 // Y1K2 MASTER",
    figTag: "Y1K2 MASTER",
    tagColor: "#33FF66",
    title: "Y1K2 6000 CONSOLE SNAPSHOT",
    description: "Full workstation apparatus showing dual top CRT pods, keyboard enclosure, and safety handles.",
    artifactType: "console",
    metadata: {
      "CHASSIS": "DIE-CAST BEIGE POLYCARBONATE",
      "MONITOR": "DUAL 9-INCH P1 PHOSPHOR CRT",
      "BUS": "VME-64 PARALLEL BACKPLANE"
    }
  },
  {
    id: "art-02",
    figNumber: "FIG 02 // LOGIC CORE",
    figTag: "LOGIC CORE",
    tagColor: "#EAB308",
    title: "DISCRETE LOGIC HARNESS",
    description: "Manual point-to-point Kynar wire wraps linking the 64MHz timing circuit with the NVRAM bus.",
    artifactType: "circuit",
    metadata: {
      "WIRE": "30 AWG SILVER-PLATED KYNAR",
      "GATES": "4,096 DISCRETE TTL NODES",
      "CLOCK": "64.000 MHz CRYSTAL OSC"
    }
  },
  {
    id: "art-03",
    figNumber: "FIG 03 // PHOSPHOR P1",
    figTag: "PHOSPHOR P1",
    tagColor: "#33FF66",
    title: "CRT PHOSPHOR CALIBRATION",
    description: "High-voltage flyback transformer test yielding sustained green glow with 120ms decay persistence.",
    artifactType: "oscilloscope",
    metadata: {
      "ANODE": "14.5 kV POTENTIAL",
      "DEFLECTION": "MAGNETIC TOROIDAL YOKE",
      "PERSISTENCE": "P1 MEDIUM (120ms)"
    }
  },
  {
    id: "art-04",
    figNumber: "FIG 04 // THERMAL LOOP",
    figTag: "COOLING BUS",
    tagColor: "#06B6D4",
    title: "COOLING LOOP FLOW: OPTIMAL",
    description: "Liquid fluorocarbon circulation chamber maintaining thermal equilibrium across high-voltage raster coils.",
    artifactType: "cooling",
    metadata: {
      "COOLANT": "FC-770 FLUORINERT",
      "DELTA-T": "14.2 DEG C PEAK LOAD",
      "FLOW": "3.0 L/MIN NOMINAL"
    }
  },
  {
    id: "art-05",
    figNumber: "FIG 05 // TACTILE BUS",
    figTag: "KEY MATRIX",
    tagColor: "#C05634",
    title: "CHERRY MX VINTAGE GREY",
    description: "80g actuation force heavy tactile switches selected for positive feedback during operator terminal inputs.",
    artifactType: "switches",
    metadata: {
      "ACTUATION": "80g LINEAR / TACTILE",
      "TRAVEL": "4.0mm PRE-TRAVEL 2.0mm",
      "KEYCAP": "DOUBLESHOT THICK ABS"
    }
  }
];
