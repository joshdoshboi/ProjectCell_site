# PROJECT CELL // SYS-6000 CRT TERMINAL WORKBENCH

> A production-grade retro-industrial CRT / hardware console web application for **Project Cell**, Father Conceicao Rodrigues College of Engineering (CRCE), Bandra, Mumbai.

Built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**.

---

## ⚡ Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Launch the local development server
npm run dev

# 3. Compile a production build
npm run build
```

---

## 🖥️ Design Language & Aesthetics

- **Retro Industrial Chassis**: Warm beige die-cast casing (`#D9CDB8`) with bevels, Phillips/slotted screw fasteners, and intake cooling vents.
- **CRT Monitor Command Center**: P1 Phosphor dual-mode terminal with scanlines, barrel vignette curvature, green glow (`#33FF66`), and status telemetry.
- **Toggleable CRT FX**: Click the `● CRT FX` switch in the top header bar to toggle scanlines and phosphor bloom in real-time.
- **Physical Hardware Switches**: Keycap-style beveled switches (`[HOME]`, `[ABOUT]`, `[TEAM]`, `[PROJECTS]`, etc.) with tactile press physics.
- **Hot-Swappable Drive Bay Sleds**: 6 modular SSD drive caddies with pull sled animations and interactive operator roster inspection.
- **PCI-E Expansion Cartridges**: Modular hardware projects with technical telemetry and schematic blueprint inspection.
- **Typography**: 
  - Monospace & Hardware: `Share Tech Mono`
  - Display Headings & Subsystems: `Chakra Petch`

---

## 📁 Project & Component Architecture

```
ProjectCell_site/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx         # Hardware top bar with SYS-6000 badge, CRT toggle, nav
│   │   │   ├── Footer.tsx         # Hardware base plate, status indicators, live clock
│   │   │   └── HardwareFrame.tsx  # Reusable beige chassis with screws, vents, and badges
│   │   ├── ui/
│   │   │   ├── HardwareScrew.tsx  # Slotted/Phillips metallic screw component
│   │   │   ├── Vent.tsx           # Multi-slot industrial cooling vent
│   │   │   ├── StatusIndicator.tsx# Glowing LED dot (green, amber, cyan, purple, red)
│   │   │   └── HazardBadge.tsx    # Diagonal black/yellow caution stripes & mil-spec badge
│   │   ├── terminal/
│   │   │   ├── CRTScreen.tsx      # CRT monitor bezel, curvature, phosphor glow, scanlines
│   │   │   ├── Terminal.tsx       # Working terminal logic, command history, execution
│   │   │   ├── TerminalInput.tsx  # Prompt, command input, SEND button
│   │   │   └── TerminalOutput.tsx # Scrollable history output display
│   │   ├── cards/
│   │   │   ├── TeamCard.tsx       # Hot-swappable SSD drive bay sled card
│   │   │   ├── ProjectCard.tsx    # PCI-e expansion cartridge card with hash & schematics
│   │   │   ├── EventCard.tsx      # Chrono telemetry event card with status & specs
│   │   │   └── GalleryCard.tsx    # Photo archive vault card with technical diagram/image
│   │   ├── modals/
│   │   │   ├── RosterModal.tsx    # Ejected sled drawer showing division team members
│   │   │   └── SchematicModal.tsx # Technical blueprint / schematics inspection modal
│   │   └── sections/
│   │       ├── Hero.tsx           # CRT command center section (Screenshot 1)
│   │       ├── About.tsx          # Schematics & protocol specification (Screenshot 2)
│   │       ├── Team.tsx           # Hot-swappable drive bay backplane (Screenshot 3)
│   │       ├── Projects.tsx       # Lab projects cartridges (Screenshot 4)
│   │       ├── Events.tsx         # Chrono events telemetry section
│   │       ├── Gallery.tsx        # Photo archive & prototype vault (Screenshot 5)
│   │       └── Contact.tsx        # Comm-link transmitter & contact form
│   ├── data/
│   │   ├── team.ts                # Team divisions and operator roster
│   │   ├── projects.ts            # Lab projects & expansion cartridges specifications
│   │   ├── events.ts              # Chrono events telemetry schedule & locations
│   │   ├── gallery.ts             # Hardware prototype vault artifacts & specs
│   │   └── terminalCommands.ts    # Command definitions & output generator
│   ├── types/
│   │   └── index.ts               # Shared TypeScript models
│   ├── pages/
│   │   └── Home.tsx               # Main landing page
│   ├── App.tsx                    # Top-level shell with CRT FX state and scroll observer
│   ├── main.tsx                   # React 18 DOM mount
│   └── index.css                  # Custom CRT scanlines, bevels, text glows
```

---

## 🛠️ Guide for Teammates & Contributors

Content is decoupled into dedicated files in `src/data/` so teammates can update records without editing JSX:

### 1. Modifying Team Divisions & Rosters
Edit [`src/data/team.ts`](file:///c:/development/pcell/ProjectCell_site/src/data/team.ts).
Each division contains its slot identifier, serial, clearance, members count, and full operator list (name, callsign, role, clearance, and specialization).

### 2. Adding / Updating Lab Projects
Edit [`src/data/projects.ts`](file:///c:/development/pcell/ProjectCell_site/src/data/projects.ts).
Modify architecture, power draw, throughput, hash, or expand `schematicData` (board ID, bus type, PCB layers, subsystems).

### 3. Updating Chrono Events & Telemetry
Edit [`src/data/events.ts`](file:///c:/development/pcell/ProjectCell_site/src/data/events.ts).
Update dates, status (`TRANSMITTING`, `SCHEDULED`, `ARCHIVED`), venues, and bandwidth/frequency telemetry.

### 4. Updating the Photo Archive & Prototype Vault
Edit [`src/data/gallery.ts`](file:///c:/development/pcell/ProjectCell_site/src/data/gallery.ts).
Add or edit artifacts with `figNumber`, `artifactType` (`console`, `circuit`, `oscilloscope`, `cooling`, `switches`), and diagnostics metadata.

### 5. Extending Terminal Commands
Edit [`src/data/terminalCommands.ts`](file:///c:/development/pcell/ProjectCell_site/src/data/terminalCommands.ts).
Add new commands into `executeTerminalCommand`. The component supports formatted lines, colors, and custom trigger actions.

---

## 📱 Responsive Verification

The layout has been designed and verified for:
- Desktop: `1440px`, `1280px`
- Tablets: `1024px`, `768px`
- Mobile: `480px`, `375px`
- Mobile navigation drawer collapses cleanly into a hardware switch tray.
- Zero horizontal overflow.

