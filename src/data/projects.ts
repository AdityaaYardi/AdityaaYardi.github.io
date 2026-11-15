/**
 * Project content. Every statement here is taken from the résumé; nothing is
 * estimated or filled in. Where the résumé gives no measured figure, none is shown.
 *
 * To add a project: append an entry, put its pictures in /public/images and
 * reference them in `image`. Set `hasPage: true` to generate a case-study page.
 */

export type DiagramNode = { label: string; sub?: string; main?: boolean };
/** A diagram is a list of columns; each column holds one or more nodes. */
export type Diagram = { label: string; columns: DiagramNode[][] };

export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Shown on the picture so a simulation is never mistaken for hardware results. */
  kind: string;
};

export type Project = {
  slug: string;
  title: string;
  kicker: string;
  period: string;
  status?: string;
  summary: string;
  tags: string[];
  image?: ProjectImage;
  diagram?: Diagram;
  figure?: "coil";
  hasPage: boolean;
  /** Case-study content (only when hasPage is true). */
  lead?: string;
  facts?: { label: string; value: string }[];
  problem?: string[];
  role?: string[];
  system?: { intro: string; steps: { title: string; body: string }[] };
  challenges?: { title: string; body: string }[];
  resultsHeading?: string;
  results?: string[];
  tools?: { group: string; items: string[] }[];
};

export const projects: Project[] = [
  {
    slug: "coil-winding-path-planning",
    title: "Robot path planning for non-planar coil winding",
    kicker: "Project thesis · Institute FAPS, FAU",
    period: "Jun 2025 – Nov 2025",
    summary:
      "A Python and PythonOCC pipeline that generates collision-free robot trajectories directly from FreeCAD coil geometry.",
    tags: ["Python", "PythonOCC", "FreeCAD", "Trajectory generation", "Numerical simulation"],
    image: {
      src: "/images/ur10e-coil-winding.png",
      alt: "Simulation view of a UR10e robot arm guiding a coil former along a closed winding path next to a winding fixture",
      width: 780,
      height: 636,
      kind: "Simulation",
    },
    figure: "coil",
    diagram: {
      label:
        "Pipeline: FreeCAD coil geometry is processed in Python with PythonOCC into a collision-free robot trajectory, which is then checked in numerical simulation",
      columns: [
        [{ label: "Coil geometry", sub: "FreeCAD" }],
        [{ label: "Path pipeline", sub: "Python + PythonOCC", main: true }],
        [{ label: "Robot trajectory", sub: "Collision-free" }],
        [{ label: "Feasibility check", sub: "Numerical simulation" }],
      ],
    },
    hasPage: true,
    lead: "A research project at the FAPS institute that connects CAD geometry, numerical simulation and robot control for winding non-planar fusion coils.",
    facts: [
      { label: "Type", value: "Project thesis" },
      { label: "Where", value: "Institute FAPS, FAU, Nürnberg" },
      { label: "When", value: "June to November 2025" },
      { label: "Output", value: "Pipeline, simulations, technical report" },
    ],
    problem: [
      "A non-planar fusion coil follows a curved 3D surface, so its winding path cannot be laid out as a flat pattern. Programming the robot path by hand for each coil geometry takes time.",
      "The objective was to generate the robot trajectory directly from the coil's CAD model, and to verify that the winding is feasible before any physical trial.",
    ],
    role: [
      "I designed and implemented the pipeline, built and validated the numerical simulations, wrote the technical report in English and presented the findings to the FAPS research team.",
    ],
    system: {
      intro:
        "The pipeline takes one input, the coil's CAD geometry, and ends with a trajectory that has been checked in simulation.",
      steps: [
        {
          title: "Coil geometry from FreeCAD",
          body: "The coil is modelled in FreeCAD. That geometry is the single source for everything downstream.",
        },
        {
          title: "Path generation in Python and PythonOCC",
          body: "Python and PythonOCC read the coil geometry and derive the robot trajectory directly from it.",
        },
        {
          title: "Collision-free robot trajectory",
          body: "The pipeline's output is a collision-free trajectory for the robot.",
        },
        {
          title: "Feasibility check in simulation",
          body: "Numerical simulations verify that the winding works on the complex 3D surface before a physical trial is run.",
        },
      ],
    },
    challenges: [
      {
        title: "Path programming by hand does not scale",
        body: "Programming a winding path by hand takes time. Generating trajectories directly from the FreeCAD model significantly reduced manual path-programming time.",
      },
      {
        title: "Feasibility on complex 3D surfaces",
        body: "Whether a winding is feasible on a non-planar surface is hard to judge from the model alone. Numerical simulations answered that before physical trials, which cut iteration cycles.",
      },
    ],
    resultsHeading: "Results",
    results: [
      "Collision-free robot trajectories generated directly from FreeCAD coil geometries.",
      "Manual path-programming time significantly reduced.",
      "Winding feasibility on complex 3D surfaces verified in simulation before physical trials, cutting iteration cycles.",
      "Approach and results documented in an English technical report and presented to the FAPS research team.",
    ],
    tools: [
      { group: "Software", items: ["Python", "PythonOCC", "FreeCAD"] },
      { group: "Methods", items: ["Trajectory generation", "Collision checking", "Numerical simulation"] },
    ],
  },
  {
    slug: "ur10e-motion-control",
    title: "ROS 2 motion planning and control for a UR10e",
    kicker: "Master's thesis · Institute FAPS, FAU",
    period: "Jan 2026 – present",
    status: "In progress",
    summary:
      "A ROS-based framework for task-oriented motion planning, with MoveIt Servo for real-time control and a path from simulation to hardware.",
    tags: ["ROS 2", "MoveIt Servo", "UR10e", "Gazebo", "RViz", "Isaac Sim"],
    diagram: {
      label:
        "Architecture: a task is turned into poses and a collision-aware trajectory, MoveIt Servo controls the motion in real time, and the same workflow runs in Gazebo and RViz, in an Isaac Sim scene and on the UR10e",
      columns: [
        [{ label: "Task", sub: "Pose generation" }],
        [{ label: "Motion planning", sub: "Collision-aware" }],
        [{ label: "MoveIt Servo", sub: "Real-time control", main: true }],
        [
          { label: "Gazebo / RViz", sub: "Simulation" },
          { label: "Isaac Sim", sub: "Pick and place" },
          { label: "UR10e", sub: "Hardware" },
        ],
      ],
    },
    hasPage: true,
    lead: "My master's thesis develops and evaluates a ROS-based motion planning and control framework for a UR10e robot arm.",
    facts: [
      { label: "Type", value: "Master's thesis" },
      { label: "Where", value: "Institute FAPS, FAU, Nürnberg" },
      { label: "When", value: "Since January 2026" },
      { label: "Status", value: "In progress" },
    ],
    problem: [
      "The thesis develops and evaluates a motion planning and control framework for a UR10e robot arm, built on ROS 1 and ROS 2.",
      "The focus is safe manipulation, task accuracy and a control architecture that scales to industrial deployment.",
    ],
    role: [
      "I am building the control framework: task-oriented motion planning for precise end-effector movement, pose generation and collision-aware trajectory planning.",
      "I integrate MoveIt Servo for real-time motion control and prepare the workflows that carry a motion from simulation to the real robot.",
    ],
    system: {
      intro:
        "One planning and control chain feeds three targets: the Gazebo and RViz test setup, an Isaac Sim scene and the UR10e itself.",
      steps: [
        {
          title: "Task-oriented planning",
          body: "A task is expressed as end-effector poses. Pose generation and collision-aware trajectory planning turn it into a motion the arm can execute.",
        },
        {
          title: "Real-time control with MoveIt Servo",
          body: "MoveIt Servo is integrated for real-time control of the robot's motion.",
        },
        {
          title: "Simulation before hardware",
          body: "Workflows are tested in Gazebo and RViz first, and prepared so that the same workflow runs on the real UR10e.",
        },
        {
          title: "Pick and place in Isaac Sim",
          body: "A pick-and-place application connects the ROS 2 workflow to an NVIDIA Omniverse / Isaac Sim scene with a UR10e model, a table and a few simple objects. It generates a collision-aware path and simulates the robot picking and placing an object.",
        },
      ],
    },
    challenges: [
      {
        title: "From simulation to the real arm",
        body: "A motion that works in Gazebo and RViz still has to run on hardware. The workflows are simulation-driven and built to bridge that step.",
      },
      {
        title: "Accuracy and safety together",
        body: "Precision end-effector movement has to stay collision-aware. Planning, pose generation and trajectory checks are designed around both.",
      },
    ],
    resultsHeading: "Status",
    results: [
      "The thesis has been running since January 2026 and is not finished.",
      "The Isaac Sim pick-and-place application documents its setup, results and limitations.",
      "The evaluation of the framework is part of the thesis and is not published yet.",
    ],
    tools: [
      { group: "Robot", items: ["UR10e"] },
      { group: "Software", items: ["ROS 1", "ROS 2", "MoveIt Servo"] },
      { group: "Simulation", items: ["Gazebo", "RViz", "NVIDIA Omniverse", "Isaac Sim"] },
    ],
  },
  {
    slug: "smart-turning",
    title: "Tool-wear monitoring from live CNC data",
    kicker: "Working student · Schaeffler AG",
    period: "May 2025 – present",
    status: "Ongoing",
    summary:
      "For the Smart Turning project I acquire live CNC machine data and correlate it with actual tool wear in MATLAB and Simulink.",
    tags: ["MATLAB", "Simulink", "CNC machining", "Power BI"],
    diagram: {
      label:
        "Data flow: live CNC machine data and the tool wear actually observed are correlated in MATLAB and Simulink to enable process monitoring",
      columns: [
        [
          { label: "CNC machine", sub: "Live data" },
          { label: "Cutting tool", sub: "Actual wear" },
        ],
        [{ label: "Correlation", sub: "MATLAB / Simulink", main: true }],
        [{ label: "Process monitoring", sub: "Data-driven" }],
      ],
    },
    hasPage: true,
    lead: "At Schaeffler's precision machining division I contribute to Smart Turning, a project that uses machine data to monitor the turning process.",
    facts: [
      { label: "Role", value: "Working student (Werkstudent)" },
      { label: "Where", value: "Schaeffler AG, Herzogenaurach" },
      { label: "When", value: "Since May 2025" },
      { label: "Language", value: "Daily work in German" },
    ],
    problem: [
      "Smart Turning aims at data-driven process monitoring in precision machining (Zerspanung).",
      "To get there, the data a CNC machine produces while cutting has to be related to how the tool actually wears.",
    ],
    role: [
      "I acquire live CNC machine data and correlate it with actual tool-wear behaviour in MATLAB and Simulink.",
      "Alongside that I built Power BI dashboards for production KPIs, machine performance and project metrics, and wrote internal training materials.",
    ],
    system: {
      intro: "Two sources meet in one analysis.",
      steps: [
        {
          title: "Live CNC machine data",
          body: "Data is acquired from the CNC machine while it runs.",
        },
        {
          title: "Actual tool wear",
          body: "The wear behaviour of the tool is the reference the machine data is compared against.",
        },
        {
          title: "Correlation in MATLAB and Simulink",
          body: "Both are correlated in MATLAB and Simulink, the basis for monitoring the process from data.",
        },
      ],
    },
    challenges: [
      {
        title: "Making the numbers usable for decisions",
        body: "The Power BI dashboards visualise production KPIs, machine performance and project metrics. Higher management uses them for operational decisions.",
      },
      {
        title: "Knowledge transfer in German",
        body: "I created internal training materials (Schulungen) and supported cross-functional project coordination, documentation and progress tracking, all in German.",
      },
    ],
    resultsHeading: "Status",
    results: [
      "The work is ongoing.",
      "Power BI dashboards are in use by higher management for operational decision-making.",
      "No production data or process figures are published on this site.",
    ],
    tools: [
      { group: "Analysis", items: ["MATLAB", "Simulink"] },
      { group: "Reporting", items: ["Power BI"] },
      { group: "Domain", items: ["CNC turning", "Precision machining"] },
    ],
  },
  {
    slug: "jig-fixture-redesign",
    title: "Jig and fixture redesign for batch production",
    kicker: "Mechanical design engineer · Penta Designers & Engineers",
    period: "Jun 2021 – Jun 2022",
    summary:
      "Redesigned jigs and fixtures cut $1,000 to $1,500 per production batch and about 20 man-hours per cycle while holding tolerance.",
    tags: ["SOLIDWORKS", "Creo", "CATIA V5", "Ansys FEA", "GD&T"],
    diagram: {
      label:
        "Design process: concept, 3D model, motion analysis, FEA in Ansys, then technical documentation with GD&T callouts",
      columns: [
        [{ label: "Concept" }],
        [{ label: "3D model", sub: "SOLIDWORKS, Creo, CATIA V5" }],
        [{ label: "Motion analysis" }],
        [{ label: "FEA", sub: "Ansys", main: true }],
        [{ label: "Documentation", sub: "GD&T callouts" }],
      ],
    },
    hasPage: true,
    lead: "My first full-time role: jigs, fixtures and custom mechanical assemblies, designed GD&T-first and with cost in mind.",
    facts: [
      { label: "Role", value: "Mechanical design engineer" },
      { label: "Where", value: "Penta Designers & Engineers Pvt. Ltd., Pune" },
      { label: "When", value: "June 2021 to June 2022" },
      { label: "Scope", value: "Concept to documentation" },
    ],
    problem: [
      "Jigs and fixtures decide how long a production batch takes and what it costs. The task was to redesign them so that each batch became cheaper and faster without giving up tolerance.",
    ],
    role: [
      "I owned the designs end to end: concept, 3D modelling in SOLIDWORKS, Creo and CATIA V5, motion analysis, FEA in Ansys and the technical documentation with GD&T callouts.",
      "I also ran root-cause analyses on failed components and proposed corrective design revisions.",
    ],
    system: {
      intro: "Every design went through the same five stages.",
      steps: [
        { title: "Concept", body: "The fixture concept, driven by the tolerances the part has to hold and by cost." },
        {
          title: "3D modelling",
          body: "Parts and assemblies modelled in SOLIDWORKS, Creo or CATIA V5.",
        },
        { title: "Motion analysis", body: "The assembly's movement checked before anything is made." },
        { title: "FEA in Ansys", body: "Structural checks on the loaded components." },
        {
          title: "Documentation with GD&T",
          body: "Technical documentation with GD&T callouts for manufacture.",
        },
      ],
    },
    challenges: [
      {
        title: "Lower cost without losing tolerance",
        body: "The redesigned jigs and fixtures saved cost and time per batch while the tolerance specifications were maintained.",
      },
      {
        title: "Recurring component failures",
        body: "Root-cause analyses on failed components led to corrective design revisions, which improved first-pass yield on recurring issues.",
      },
    ],
    resultsHeading: "Results",
    results: [
      "$1,000 to $1,500 lower cost per production batch.",
      "About 20 man-hours saved per cycle.",
      "Tolerance specifications maintained.",
      "First-pass yield improved on recurring issues through corrective design revisions.",
    ],
    tools: [
      { group: "CAD", items: ["SOLIDWORKS", "Creo", "CATIA V5"] },
      { group: "CAE", items: ["Ansys FEA", "Motion analysis"] },
      { group: "Standards", items: ["GD&T", "Design for manufacturing"] },
    ],
  },
  {
    slug: "two-arm-chess-cell",
    title: "Two robot arms at one chessboard",
    kicker: "Simulation study",
    period: "",
    summary: "Two robot arms, R2 and D2, face each other across a chessboard in simulation.",
    tags: ["Simulation", "Two-arm cell"],
    image: {
      src: "/images/chess-cell-perspective.png",
      alt: "Simulation of a yellow and a blue robot arm on pedestals, facing each other across a chessboard with all pieces set up",
      width: 987,
      height: 613,
      kind: "Simulation",
    },
    hasPage: false,
  },
];

export const featured = projects[0];
export const caseStudies = projects.filter((p) => p.hasPage);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug && p.hasPage);
}
