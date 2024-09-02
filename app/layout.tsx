import type { Metadata } from "next";
import "./globals.css";

import { Roboto } from "next/font/google";
import StoreProvider from "@/providers/StoreProvider";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trakio",
  description: "Streamline your workflow today",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={`${roboto.className}`}>{children}</body>
      </html>
    </StoreProvider>
  );
}
