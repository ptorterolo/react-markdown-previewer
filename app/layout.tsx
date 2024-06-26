import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import './markdown.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Markdown Previewer",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={inter.className}>{children}
      <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js" defer></script>
      </body>
    </html>
  );
}
