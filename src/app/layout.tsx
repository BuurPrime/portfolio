import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import "@/styles/globals.css";
import "@/styles/animations.css";
import "@/styles/typography.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sofie Buur - Portfolio",
  description: "A collection of my work as a frontend developer and UI/UX designer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" >
      <body className={`${inter.className} pt-32`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}