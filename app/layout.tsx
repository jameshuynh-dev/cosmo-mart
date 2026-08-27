import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Monoton } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const monoton = Monoton({
  variable: "--font-neon",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cosmo Mart",
  description:
    "Surreal, mildly dangerous goods for humans and aliens alike. Powered by Gleb.",
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
      className={`${geistSans.variable} ${geistMono.variable} ${monoton.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
