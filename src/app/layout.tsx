import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agent Baseline",
  description: "Minimal Next.js + Tailwind baseline",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
