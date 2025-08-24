import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
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
