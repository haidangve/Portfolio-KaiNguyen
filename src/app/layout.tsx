import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "K@DE - Software Engineer Portfolio",
  description:
    "Interactive terminal-style portfolio of Kai Nguyen, a Software Engineer specializing in full-stack development, React, Node.js, and modern web technologies.",
  keywords: [
    "Kai Nguyen",
    "Software Engineer",
    "Full Stack Developer",
    "React",
    "Node.js",
    "Portfolio",
    "Web Development",
  ],
  authors: [{ name: "Kai Nguyen" }],
  creator: "Kai Nguyen",
  openGraph: {
    title: "Kai Nguyen - Software Engineer Portfolio",
    description:
      "Interactive terminal-style portfolio showcasing full-stack development projects and skills",
    type: "website",
    url: "https://portfolio-kai-nguyen.vercel.app",
    images: [
      {
        url: "/img/avatar.png",
        width: 1200,
        height: 630,
        alt: "Kai Nguyen - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kai Nguyen - Software Engineer Portfolio",
    description:
      "Interactive terminal-style portfolio showcasing full-stack development projects and skills",
    images: ["/img/avatar.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
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
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
        <link rel="icon" href="/img/k@de.svg?v=1" />
        <link rel="shortcut icon" href="/img/k@de.svg?v=1" />
        <link rel="apple-touch-icon" href="/img/k@de.svg?v=1" />
      </head>
      <body className={`${jetbrainsMono.variable} antialiased`}>
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            // Scale production to 90% to match dev appearance
            if (window.location.hostname !== 'localhost') {
              document.body.style.transform = 'scale(0.9)';
              document.body.style.transformOrigin = 'top left';
              document.body.style.width = '111.11%';
              document.body.style.height = '111.11%';
            }
          `,
          }}
        />
      </body>
    </html>
  );
}
