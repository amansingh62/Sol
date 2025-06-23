import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "SolDart: The Web3 Social Experience",
    template: "%s | SolEcho"
  },
  description: "SolDart - Your Next-Generation Platform",
  icons: {
    icon: '/soldart_svg.png',
    shortcut: '/soldart_svg.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style>
          @import url(&apos;https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700&display=swap&apos;);
        </style>
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}