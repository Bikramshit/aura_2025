

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from 'react-hot-toast';
import AuthProvider from "@/utils/authProvider";
 
import React from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "AURA - 2025 | Aliah University",
  description: "Aura is Aliah University’s flagship technical festival that celebates innovation, creativity and collaboration among students and researchers. started in 2024, AURA has become a hub for technical excellence, inspiring young minds to push boundaries in hardware innovations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {




  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
        {children}
        </AuthProvider>
    

        <Toaster />
      </body>
    </html>
  );
}
