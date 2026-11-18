/** Experience, skills and education, as stated on the résumé. */

export type Role = {
  period: string;
  current?: boolean;
  title: string;
  org: string;
  /** Set in type on the logo plate when no logo file exists. */
  short?: string;
  place: string;
  summary: string;
  tags: string[];
};

export const experience: Role[] = [
  {
    period: "Jan 2026 – present",
    current: true,
    title: "Master's thesis, robotic motion planning",
    org: "Institute FAPS, FAU",
    place: "Nürnberg, Germany",
    summary:
      "Building a ROS 1 / ROS 2 control framework for a UR10e: task-oriented motion planning, pose generation, collision-aware trajectories and MoveIt Servo for real-time control, tested in Gazebo and RViz before hardware.",
    tags: ["ROS 2", "MoveIt Servo", "UR10e", "Isaac Sim"],
  },
  {
    period: "May 2025 – present",
    current: true,
    title: "Working student, precision machining",
    org: "Schaeffler AG",
    place: "Herzogenaurach, Germany",
    summary:
      "Acquiring live CNC machine data for the Smart Turning project and correlating it with tool wear in MATLAB / Simulink. Built Power BI dashboards that higher management uses, and wrote training materials. Daily work in German.",
    tags: ["MATLAB / Simulink", "Power BI", "CNC"],
  },
  {
    period: "Jun 2025 – Nov 2025",
    title: "Project thesis, algorithmic robotic path planning",
    org: "Institute FAPS, FAU",
    place: "Nürnberg, Germany",
    summary:
      "Designed a Python and PythonOCC pipeline that generates collision-free robot trajectories from FreeCAD coil geometry for non-planar fusion coil winding, and validated winding feasibility in numerical simulation.",
    tags: ["Python", "PythonOCC", "FreeCAD"],
  },
  {
    period: "Jul 2022 – Mar 2023",
    title: "Mechanical engineer, apprenticeship",
    org: "ADSS",
    place: "Pune, India",
    summary:
      "Supported installation and commissioning at 4+ customer sites across India and tested mechanical and electrical components. Led a Kaizen, 5S and value stream mapping initiative that saved about 40 man-hours and roughly $2,000 in process costs within 6 months.",
    tags: ["Commissioning", "Kaizen", "5S", "VSM"],
  },
  {
    period: "Jun 2021 – Jun 2022",
    title: "Mechanical design engineer",
    org: "Penta Designers & Engineers Pvt. Ltd.",
    short: "Penta Designers & Engineers",
    place: "Pune, India",
    summary:
      "Designed jigs, fixtures and custom assemblies from concept to GD&T documentation. The redesigns cut $1,000 to $1,500 per production batch and about 20 man-hours per cycle within tolerance.",
    tags: ["SOLIDWORKS", "Creo", "CATIA V5", "Ansys"],
  },
  {
    period: "Jun 2021 – Dec 2021",
    title: "Engineering intern",
    org: "CAD infield Technologies",
    short: "CAD infield",
    place: "Pune, India",
    summary:
      "Produced 50+ production-ready technical drawings and bills of materials in CATIA V5 to GD&T standards, and supported prototype development for automotive and mechatronics components.",
    tags: ["CATIA V5", "GD&T", "BOM"],
  },
];

export type SkillGroup = {
  name: string;
  /** How the skill was gained, so hands-on work and working knowledge are not mixed. */
  basis: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    name: "Robotics and motion planning",
    basis: "Thesis work at FAPS",
    items: [
      "ROS 1 / ROS 2",
      "MoveIt Servo",
      "UR10 robot programming",
      "Motion planning",
      "Trajectory generation",
      "Collision-aware planning",
    ],
  },
  {
    name: "Simulation",
    basis: "Thesis work at FAPS",
    items: ["NVIDIA Omniverse", "Isaac Sim", "Gazebo", "RViz", "Numerical simulation"],
  },
  {
    name: "Programming and data",
    basis: "Used at FAPS and Schaeffler",
    items: ["Python", "PythonOCC", "MATLAB", "Simulink", "Power BI", "Git", "Microsoft Office 365"],
  },
  {
    name: "Mechanical design, CAD and CAE",
    basis: "2+ years in industry",
    items: [
      "SOLIDWORKS",
      "Creo",
      "CATIA V5",
      "Autodesk Inventor",
      "FreeCAD",
      "Ansys",
      "FEA",
      "GD&T",
      "Design for manufacturing",
    ],
  },
  {
    name: "Manufacturing and process",
    basis: "Industry and Schaeffler",
    items: [
      "CNC machining (Zerspanung)",
      "Lean manufacturing",
      "Kaizen",
      "5S",
      "Value stream mapping",
      "SMED",
      "SPC",
      "Root cause analysis",
    ],
  },
  {
    name: "AI-assisted engineering",
    basis: "Working knowledge",
    items: [
      "Agentic AI workflows",
      "Multi-agent collaboration",
      "Model Context Protocol (MCP)",
      "LLM-assisted engineering",
    ],
  },
];

export const degrees = [
  {
    degree: "M.Sc. Electromobility",
    school: "Friedrich-Alexander-Universität Erlangen-Nürnberg (FAU)",
    short: "FAU",
    place: "Germany",
    period: "Expected 2026",
    detail:
      "Electric powertrains, battery systems, mechanical product design, numerical simulation, quality management, MATLAB.",
    work: "Project thesis and master's thesis at the Institute FAPS, both in robot path and motion planning.",
  },
  {
    degree: "B.E. Mechanical Engineering",
    school: "Savitribai Phule Pune University",
    short: "SPPU",
    place: "India",
    period: "2017 – 2021",
    detail:
      "Manufacturing operations, geometric modelling, design thinking, industrial engineering, CAD.",
    work: "",
  },
];

export const certificates = [
  { name: "McKinsey Forward Program", issuer: "McKinsey & Company", date: "Dec 2024" },
  { name: "Google Project Management Professional Certificate", issuer: "Google / Coursera", date: "Aug 2024" },
  { name: "Goethe-Zertifikat B1 (Deutsch)", issuer: "Goethe-Institut", date: "Advancing to B2" },
  { name: "Goethe-Zertifikat A2 (Deutsch)", issuer: "Goethe-Institut", date: "" },
];

export const languages = [
  { name: "English", level: "Fluent, C1" },
  { name: "German", level: "B1, working toward B2" },
  { name: "Hindi and Marathi", level: "Native" },
];
