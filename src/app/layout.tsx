import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://teskel.ai"),
  title: {
    default: "Teskel — Secure every AI agent before production",
    template: "%s · Teskel",
  },
  description:
    "Teskel is the AI security control plane for enterprise teams. Automated red-teaming, policy guardrails, data masking, sandboxed runtime, and observability for modern LLM applications.",
  keywords: [
    "AI security",
    "LLM security",
    "AI gateway",
    "red team",
    "prompt injection",
    "AI governance",
    "AI compliance",
    "agent security",
  ],
  authors: [{ name: "Teskel" }],
  openGraph: {
    title: "Teskel — Secure every AI agent before production",
    description:
      "The AI security control plane for enterprise teams. Build, red-team, govern, and deploy AI safely at global scale.",
    type: "website",
    url: "https://teskel.ai",
    siteName: "Teskel",
  },
  twitter: {
    card: "summary_large_image",
    title: "Teskel — Secure every AI agent before production",
    description:
      "The AI security control plane for enterprise teams.",
  },
};

export const viewport: Viewport = {
  themeColor: "#05060A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
