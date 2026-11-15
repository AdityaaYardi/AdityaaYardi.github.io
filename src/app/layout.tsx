import type { Metadata, Viewport } from "next";
import { Work_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { site } from "@/data/site";
import "./globals.css";

// One variable family for headlines and text, self-hosted by next/font.
const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: site.url ? new URL(site.url) : undefined,
  title: {
    default: site.title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  authors: [{ name: site.name, url: site.linkedin }],
  keywords: [
    "robotics engineer",
    "mechanical engineer",
    "ROS 2",
    "MoveIt Servo",
    "UR10e",
    "motion planning",
    "automation",
    "Aditya Yardi",
  ],
  openGraph: {
    type: "website",
    title: site.title,
    description: site.description,
    siteName: site.name,
    locale: "en",
    images: [
      {
        url: "/images/ur10e-coil-winding.png",
        width: 780,
        height: 636,
        alt: "Simulation of a UR10e robot arm on a coil winding path",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["/images/ur10e-coil-winding.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#f0f0ee",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={workSans.variable}>
      <body>
        <Nav />
        <main id="top">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
