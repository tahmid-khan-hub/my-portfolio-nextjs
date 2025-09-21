import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Portfolio",
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
            style={{
              background: `
              radial-gradient(
                circle at center,
                rgba(59, 130, 246, 0.12) 0%,
                rgba(59, 130, 246, 0.06) 20%,
                rgba(0, 0, 0, 0.0) 60%
              )
            `,
            }}
          />
          {/* Content */}
          <Navbar></Navbar>
          {children}
        </div>
      </body>
    </html>
  );
}
