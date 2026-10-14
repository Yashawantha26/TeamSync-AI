import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
title: "TeamSync AI | One Workspace. One Team.",
description:
"TeamSync AI transforms team discussions into organized tasks, meeting summaries, and actionable project plans. Built by Team Tech Titans at Rajeev Institute of Technology, Hassan.",
applicationName: "TeamSync AI",
};

export const viewport: Viewport = {
width: "device-width",
initialScale: 1,
themeColor: "#080B16",
};

export default function RootLayout({
children,
}: Readonly<{
children: React.ReactNode;
}>) {
return ( <html lang="en"> <body>{children}</body> </html>
);
}
