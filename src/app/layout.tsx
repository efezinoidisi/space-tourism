import Header from "@/components/header/header";
import type { Metadata } from "next";
import { fontBarlow, fontBarlowCondensed, fontBellefair } from "./fonts";
import "./globals.css";
export const metadata: Metadata = {
  title: "Frontend Mentor | Space tourism website",
  description:
    "A frontend mentor challenge of a simple multi-page space tourism website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${fontBarlow.variable} ${fontBarlowCondensed.variable} ${fontBellefair.variable} font-barlow  text-primary`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
