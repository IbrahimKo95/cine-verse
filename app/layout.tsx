import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import NavBar from "@/app/components/NavBar";

const outfit = Outfit({
  weight: "400",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "CineVerse",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
          <NavBar />
          {children}
      </body>
    </html>
  );
}
