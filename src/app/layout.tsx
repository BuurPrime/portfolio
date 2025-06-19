import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sofie Buur - Portfolio",
  description: "Portfolio website of Sofie Buur",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ scrollbarGutter: 'stable' }}>
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
