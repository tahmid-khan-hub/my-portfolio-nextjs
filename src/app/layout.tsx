import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal portfolio showcasing my projects and skills in full-stack web development.",
  icons: {
    icon: "/My Portfolio logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased `}>
        <div className="min-h-screen w-full bg-black relative">
          {/* Blue Spotlight Background */}
          <div
            className="absolute inset-0 z-0 pointer-events-none"
          />
          {/* Content */}
          <Navbar></Navbar>
          {children}
        </div>
      </body>
    </html>
  );
}
