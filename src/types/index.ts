export interface TeamMember {
  name: string;
  callsign: string;
  role: string;
  clearance: string;
  specialization: string;
}

export interface TeamDivision {
  slot: string;
  name: string;
  slotTag: string;
  serial: string;
  membersText: string;
  membersCount: number;
  membersColor: string;
  statusDotColor: string;
  clearance: string;
  clearanceColor: string;
  capacity: string;
  description: string;
  roster: TeamMember[];
}

export interface ProjectSpec {
  label: string;
  value: string;
  color?: string;
}

export interface ProjectCartridge {
  id: string;
  modNumber: string;
  status: 'ACTIVE' | 'TESTING' | 'DEPLOYED' | 'STANDBY';
  statusColor: string;
  title: string;
  description: string;
  specs: ProjectSpec[];
  hash: string;
  schematicData: {
    boardId: string;
    busType: string;
    pcbLayers: string;
    operatingFreq: string;
    logicDensity: string;
    powerRails: string;
    overview: string;
    subsystems: string[];
  };
}

export interface ChronoEvent {
  id: string;
  code: string;
  date: string;
  title: string;
  location: string;
  status: 'SCHEDULED' | 'TRANSMITTING' | 'ARCHIVED';
  statusColor: string;
  eventType: string;
  description: string;
  specs: {
    frequency: string;
    bandwidth: string;
    slots: string;
  };
}

export interface GalleryArtifact {
  id: string;
  figNumber: string;
  figTag: string;
  tagColor: string;
  title: string;
  description: string;
  artifactType: 'console' | 'circuit' | 'oscilloscope' | 'cooling' | 'switches';
  metadata?: Record<string, string>;
}

export interface TerminalOutputLine {
  id: string;
  type: 'prompt' | 'response' | 'error' | 'system';
  text: string;
  color?: string;
}

