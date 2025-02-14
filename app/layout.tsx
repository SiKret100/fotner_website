import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "Fotner Studio",
  description: "Fotner Studio portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body>

        <NavBar />

        <main className={"bg-gray-50"} >{children}</main>

      </body>
    </html>
  );
}
