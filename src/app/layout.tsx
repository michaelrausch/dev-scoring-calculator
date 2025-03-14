import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Priority Scoring Tool",
  description: "Score features and bugs using ICE framework",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950`}>
        <div className="min-h-screen bg-grid-zinc-800/[0.04] bg-[size:40px_40px]">
          {children}
        </div>
      </body>
    </html>
  );
}
