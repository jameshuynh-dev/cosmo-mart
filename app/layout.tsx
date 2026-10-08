import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Tilt_Neon } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const tiltNeon = Tilt_Neon({
  variable: "--font-neon",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cosmo Mart",
  description:
    "Galactic grocery store selling space goods. Powered by Gleb.",
  icons: { icon: "/gleb.png" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${tiltNeon.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
