import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FlavorProvider } from "@/contexts/FlavorContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daniel Joseph Bryant",
  description: "Portfolio site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " mocha macchiato frappe latte bg-base"}>
        <FlavorProvider>{children}</FlavorProvider>
      </body>
    </html>
  );
}
