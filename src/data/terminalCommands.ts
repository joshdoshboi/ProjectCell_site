export interface TerminalResponse {
  lines: string[];
  color?: string;
  action?: string;
}

export const executeTerminalCommand = (rawCommand: string): TerminalResponse => {
  const trimmed = rawCommand.trim().toLowerCase();
  const args = trimmed.split(' ');
  const command = args[0];

  switch (command) {
    case 'help':
      return {
        lines: [
          "SYS-6000 TERMINAL SUBSYSTEM // COMMAND REFERENCE",
          "---------------------------------------------------",
          "  help      - Display this command index",
          "  specs     - Hardware architecture & bus telemetry",
          "  roster    - List active drive bays & division operators",
          "  projects  - Inspect hot-plug expansion cartridges",
          "  events    - Chrono telemetry & upcoming operations",
          "  gallery   - Photo archive & prototype vault index",
          "  ping      - Test network latency to CRCE mainframe",
          "  status    - Live telemetry of CPU, memory, and CRT",
          "  mount     - Mount or query drive bay storage sleds",
          "  whoami    - Current terminal operator clearance",
          "  date      - Current system timestamp & RTC synchronization",
          "  clear/cls - Clear terminal display buffer",
          "---------------------------------------------------",
          "EXEC MACROS: [run status] [mount drives] [launch archive] [cls]"
        ],
        color: "#33FF66"
      };

    case 'specs':
      return {
        lines: [
          "[HARDWARE SPECIFICATION - WORKBENCH CRCE]",
          "  CHASSIS: Die-cast reinforced polycarbonate (MIL-SPEC 810G)",
          "  PROCESSOR: Dual ECL Micro-array @ 64.0 MHz synchronous",
          "  CRT DISPLAY: 12-inch P1 Phosphor Tube, 50Hz interlaced",
          "  BUS INTERFACE: Custom 32-bit PCI-E Gen-0 Industrial",
          "  STORAGE: 6x Hot-Swappable NVMe sled bays (32 TB Total Array)",
          "  COOLING: Fluorocarbon FC-770 closed loop, 2.2 bar pressure",
          "  STATUS: NOMINAL // ALL VOLTAGE RAILS WITHIN 0.2% TOLERANCE"
        ],
        color: "#06B6D4"
      };

    case 'roster':
      return {
        lines: [
          "[ACTIVE DIVISION ROSTER // 6 DRIVE BAYS MOUNTED]",
          "  SLOT #1: CORE DIVISION        [4 OPERATORS]  LEVEL-5 [EXEC]",
          "  SLOT #2: CREATIVE LABS        [5 OPERATORS]  LEVEL-3 [VISUAL]",
          "  SLOT #3: TECH & HARDWARE      [6 OPERATORS]  LEVEL-4 [LOGIC]",
          "  SLOT #4: SR. ADVISORS         [3 VETERANS]   LEVEL-5 [MASTERS]",
          "  SLOT #5: JR. ADVISORS         [4 RESEARCHERS] LEVEL-2 [CADET]",
          "  SLOT #6: FACULTY              [2 FELLOWS]    ROOT [GODMODE]",
          "  >> Type 'inspect [slot]' or scroll down to Team Divisions."
        ],
        color: "#33FF66"
      };

    case 'projects':
      return {
        lines: [
          "[HARDWARE EXPANSION CARTRIDGES DETECTED]",
          "  MOD-01: NEURAL-VORTEX ACCELERATOR  [ACTIVE]   (420 GOP/S)",
          "  MOD-02: SILICON-MESH TRANSCEIVER   [TESTING]  (433.92 MHz)",
          "  MOD-03: SUB-ZERO LIQUID PIPELINE   [DEPLOYED] (FC-770 INERT)",
          "  >> All modules seated and reporting valid parity checksums."
        ],
        color: "#EAB308"
      };

    case 'events':
      return {
        lines: [
          "[CHRONO TELEMETRY LOGS & SCHEDULE]",
          "  EVT-8821: CELL-HACK 36-HR HACKATHON  [TRANSMITTING] (OCT 14-16)",
          "  EVT-8835: LOGIC BREADBOARD WORKSHOP  [SCHEDULED]    (NOV 05)",
          "  EVT-8849: PACKET RADIO BALLOON TEST  [SCHEDULED]    (DEC 12)",
          "  EVT-8810: CRT PHOSPHOR RESTORATION   [ARCHIVED]     (SEP 02)"
        ],
        color: "#33FF66"
      };

    case 'gallery':
      return {
        lines: [
          "[PHOTO ARCHIVE & PROTOTYPE VAULT INDEX]",
          "  FIG 01: Y1K2 6000 CONSOLE SNAPSHOT (Dual CRT pod enclosure)",
          "  FIG 02: DISCRETE LOGIC HARNESS     (4096-gate wire wrap)",
          "  FIG 03: CRT PHOSPHOR CALIBRATION   (XY deflection beam test)",
          "  FIG 04: COOLING LOOP FLOW          (Radiator fin assembly)",
          "  FIG 05: CHERRY MX VINTAGE GREY     (80g tactile keyswitch)",
          "  >> Scroll to Section 7 for high-resolution inspection."
        ],
        color: "#06B6D4"
      };

    case 'status':
    case 'run':
      if (args[1] === 'status' || command === 'status') {
        return {
          lines: [
            "[REAL-TIME TELEMETRY DIAGNOSTICS]",
            "  CPU LOAD: 54% [==================          ]",
            "  RASTER REFRESH: 50.02 Hz STABLE",
            "  HIGH VOLTAGE ANODE: 14.48 kV",
            "  TEMPERATURE: 38.4 C (COOLANT INLET: 19.1 C)",
            "  MEMORY POOL: 64 MB / 128 MB ALLOCATED (SRAM)",
            "  NETWORK BAUD: 9600 BAUD DUPLEX // PACKET LOSS: 0.00%",
            "  DIAGNOSTIC VERDICT: ALL SYSTEMS GO."
          ],
          color: "#33FF66"
        };
      }
      return {
        lines: [`Unknown run parameter: ${args.slice(1).join(' ')}. Try 'run status'.`],
        color: "#C05634"
      };

    case 'mount':
      return {
        lines: [
          "[MOUNTING DRIVE BAYS BACKPLANE...]",
          "  /dev/bay1 -> /mnt/core_div       [OK 4.0TB]",
          "  /dev/bay2 -> /mnt/creative_labs  [OK 2.0TB]",
          "  /dev/bay3 -> /mnt/tech_hw        [OK 8.0TB]",
          "  /dev/bay4 -> /mnt/sr_advisors    [OK 16TB]",
          "  /dev/bay5 -> /mnt/jr_advisors    [OK 2.0TB]",
          "  /dev/bay6 -> /mnt/faculty_bios   [OK ROM]",
          "  ALL 6 SLEDS SYNCHRONIZED TO STORAGE CONTROLLER."
        ],
        color: "#33FF66"
      };

    case 'archive':
    case 'launch':
      return {
        lines: [
          "[LAUNCHING VAULT ARTIFACT INDEX...]",
          "  Loading image manifests... 5 items verified.",
          "  Display buffer initialized.",
          "  >> See Gallery section below."
        ],
        color: "#EAB308",
        action: "scroll-gallery"
      };

    case 'ping':
      return {
        lines: [
          "PING mainframe.crce.edu (10.42.0.1): 56 data bytes",
          "64 bytes from 10.42.0.1: icmp_seq=1 ttl=64 time=1.42 ms",
          "64 bytes from 10.42.0.1: icmp_seq=2 ttl=64 time=1.18 ms",
          "64 bytes from 10.42.0.1: icmp_seq=3 ttl=64 time=1.25 ms",
          "--- mainframe.crce.edu ping statistics ---",
          "3 packets transmitted, 3 packets received, 0.0% packet loss",
          "round-trip min/avg/max = 1.18/1.28/1.42 ms"
        ],
        color: "#33FF66"
      };

    case 'whoami':
      return {
        lines: [
          "OPERATOR: GUEST_ENGINEER",
          "TERMINAL: TTY1 /dev/ttyS0",
          "CLEARANCE: LEVEL-4 [LOGIC GUEST]",
          "HOST: ORXIR-SYS6000.CRCE.LOCAL"
        ],
        color: "#A1A1AA"
      };

    case 'date':
      return {
        lines: [
          `SYSTEM TIME: ${new Date().toUTCString()}`,
          "HARDWARE RTC: 32.768 kHz QUARTZ ACCURACY (+/- 0.02 PPM)",
          "EPOCH TICK: " + Math.floor(Date.now() / 1000)
        ],
        color: "#A1A1AA"
      };

    case 'echo':
      return {
        lines: [args.slice(1).join(' ') || ""],
        color: "#33FF66"
      };

    case 'clear':
    case 'cls':
      return {
        lines: [],
        action: 'clear'
      };

    default:
      return {
        lines: [
          `COMMAND NOT RECOGNIZED: "${rawCommand}"`,
          "Type 'help' to view available system instructions or use the macro buttons below."
        ],
        color: "#C05634"
      };
  }
};
