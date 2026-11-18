/**
 * Logo registry. Files live in /public/logos. Sources: thesvg.org and
 * Wikimedia Commons. Product names and logos are trademarks of their owners
 * and are shown only to name the tools and organisations involved.
 *
 * kind "mark": a symbol shown beside the name.
 * kind "wordmark": the logo already spells the name, so it is shown alone
 * (the name stays available to screen readers).
 * ratio: width / height of the file's viewBox, used for width and height
 * attributes so the page does not shift while logos load.
 */

export type Logo = {
  src: string;
  kind: "mark" | "wordmark";
  ratio: number;
  /** Height on an organisation plate, for logos whose drawing leaves a lot of empty space. */
  plate?: number;
};

const L = (file: string, kind: Logo["kind"], ratio: number): Logo => ({
  src: `/logos/${file}`,
  kind,
  ratio,
});

const ros = L("ros.svg", "mark", 1);
const nvidia = L("nvidia.svg", "mark", 1.51);
const matlab = L("matlab.svg", "mark", 1);
const mathworks = L("mathworks.svg", "mark", 1);
const python = L("python.svg", "mark", 1);
const fau = L("fau.svg", "wordmark", 6.98);

/** Tools and products, keyed by the exact names used in the data files. */
const tools: Record<string, Logo> = {
  // Robotics and simulation
  "ROS 1 / ROS 2": ros,
  "ROS 1": ros,
  "ROS 2": ros,
  "NVIDIA Omniverse": nvidia,
  "Isaac Sim": nvidia,
  Gazebo: L("gazebo.svg", "mark", 1),
  // Programming and data
  Python: python,
  MATLAB: matlab,
  "MATLAB / Simulink": matlab,
  Simulink: mathworks,
  "Power BI": L("power-bi.svg", "mark", 1),
  Git: L("git.svg", "mark", 1),
  "Microsoft Office 365": L("microsoft-office.svg", "mark", 0.82),
  // CAD and CAE
  SOLIDWORKS: L("solidworks.svg", "wordmark", 8.75),
  "Autodesk Inventor": L("autodesk.svg", "mark", 1),
  "CATIA V5": L("dassault-systemes.svg", "mark", 1),
  FreeCAD: L("freecad.svg", "mark", 1),
  Ansys: L("ansys.svg", "wordmark", 3.22),
  // AI
  "Model Context Protocol (MCP)": L("mcp.svg", "mark", 0.92),
  // Robots (LeRobot is a Hugging Face project)
  "LeRobot SO-101": L("hugging-face.svg", "mark", 1.08),
};

/** Organisations, keyed by the names used in the data files. */
const orgs: Record<string, Logo> = {
  "Institute FAPS, FAU": fau,
  "Friedrich-Alexander-Universität Erlangen-Nürnberg (FAU)": fau,
  "Schaeffler AG": L("schaeffler.svg", "wordmark", 8.94),
  "McKinsey & Company": L("mckinsey.svg", "wordmark", 8),
  "Google / Coursera": L("google.svg", "mark", 0.98),
  // Supplied by Aditya (Penta, CAD infield); ADSS is a generic mark with the name, not the company's own logo.
  "Penta Designers & Engineers Pvt. Ltd.": L("penta.png", "wordmark", 2.6),
  "CAD infield Technologies": { ...L("cad-infield.png", "wordmark", 2.13), plate: 48 },
  ADSS: L("adss.svg", "wordmark", 3.13),
};

export function toolLogo(name: string): Logo | undefined {
  return tools[name];
}

export function orgLogo(name: string): Logo | undefined {
  return orgs[name];
}

export const socialLogos = {
  linkedin: L("linkedin.svg", "mark", 1),
  github: L("github.svg", "mark", 1),
};
