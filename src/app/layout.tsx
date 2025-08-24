import type { Metadata } from "next";
import { JetBrains_Mono, Orbitron, Rajdhani } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700", "900"],
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "K@DE",
  description: "Kai Nguyen's Portfolio - Software Engineer & Developer",
  icons: {
    icon: [
      { url: "/img/k@de.svg", type: "image/svg+xml" },
      { url: "/img/k@de.png", type: "image/png" },
    ],
    shortcut: "/img/k@de.svg",
    apple: "/img/k@de.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link rel="icon" href="/img/k@de.svg?v=1" />
        <link rel="shortcut icon" href="/img/k@de.svg?v=1" />
        <link rel="apple-touch-icon" href="/img/k@de.svg?v=1" />
      </head>
      <body
        className={`${jetbrainsMono.variable} ${orbitron.variable} ${rajdhani.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
