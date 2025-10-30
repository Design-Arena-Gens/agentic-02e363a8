import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

import { IBM_Plex_Sans, Fira_Code } from "next/font/google";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-sans"
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-fira-code"
});

export const metadata: Metadata = {
  title: "Quantum Compass | Learn Quantum Computing",
  description:
    "Interactive learning hub to build intuition for quantum computing, qubits, and algorithms through guided modules and resources.",
  keywords: [
    "quantum computing",
    "learn quantum",
    "qubits",
    "quantum algorithms",
    "quantum mechanics"
  ]
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={`${plexSans.variable} ${firaCode.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
