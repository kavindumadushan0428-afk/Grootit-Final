import type { Metadata } from "next";
import { DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GROOTIT — Creative Technology Studio",
  description:
    "Creative technology studio bringing together visual storytelling, digital experiences, and intelligent solutions.",
  openGraph: {
    title: "GROOTIT — Creative Technology Studio",
    description:
      "Creative technology studio bringing together visual storytelling, digital experiences, and intelligent solutions.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GROOTIT — Creative Technology Studio",
    description:
      "Creative technology studio bringing together visual storytelling, digital experiences, and intelligent solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${dmSans.variable}`}
    >
      <body className="min-h-screen bg-white text-[#091326] antialiased selection:bg-[#0D6EFF]/15 selection:text-[#0D6EFF]">
        {children}
      </body>
    </html>
  );
}
