/**
 * Profile and contact details. Everything here comes from the résumé.
 * Deliberately left out of the public site: phone number and postal code.
 */
export const site = {
  name: "Aditya Yardi",
  role: "Mechanical and robotics engineer",
  title: "Aditya Yardi: mechanical and robotics engineer in Fürth, Germany",
  description:
    "Portfolio of Aditya Yardi, a mechanical engineer working on ROS 2 motion planning for a UR10e, CAD-based robot path planning and precision machining data.",
  location: "Fürth, Germany",
  availability: "Available full-time from Q4 2026",
  email: "adityayardi98@gmail.com",
  linkedin: "https://www.linkedin.com/in/adityayardi",
  /**
   * No CV is published yet. Put a public version in /public (for example
   * /public/aditya-yardi-cv.pdf), set this to "/aditya-yardi-cv.pdf", and the
   * download link appears in the hero and footer.
   */
  cv: null as string | null,
  /** Shown in the hero and footer. Set to null to hide the link. */
  github: "https://github.com/AdityaaYardi" as string | null,
  /** The published address; used for canonical and share URLs. */
  url: "https://adityaayardi.github.io" as string | null,
} as const;

export const mailto = `mailto:${site.email}`;

export const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Skills", href: "/#skills" },
  { label: "Education", href: "/#education" },
] as const;
