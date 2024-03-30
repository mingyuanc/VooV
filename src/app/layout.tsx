import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
// import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VooV",
  description: "Zoom to your office with VooV",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Toaster richColors position="bottom-center" expand={false} closeButton />
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <body className={inter.className}>{children}</body>
      {/* </Suspense> */}
    </html>
  );
}
