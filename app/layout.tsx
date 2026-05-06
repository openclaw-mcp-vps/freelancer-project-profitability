import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ProfitTrack — True Freelance Profitability",
  description: "Combines time tracking with expense tracking to show real profit margins per client and project type. Built for freelancers, consultants, and small agencies."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="7c31db04-f65b-4a99-8288-aa7d5a1bf34e"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
