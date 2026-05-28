import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Slack Deep Work Enforcer — Block Distractions During Focus Sessions",
  description: "Browser extension that intelligently blocks Slack notifications and channels during deep work sessions, with smart urgency detection for true emergencies.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="de705906-9af3-43bb-b712-139605d07dda"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
