'use client';

import "./globals.css";
import NavBar from "@/components/NavBar";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
      <html lang="pl">
      <body className="bg-neutral-100">
      <NavBar />
      <AnimatePresence mode="wait" initial={true}>
        <main key={pathname} className="pt-20">
          {children}
        </main>
      </AnimatePresence>
      </body>
      </html>
  );
}
