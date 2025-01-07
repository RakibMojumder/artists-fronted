"use client";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/sections/Footer";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import RootProvider from "@/provider/RootProvider";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useSmoothScroll();

  return (
    <RootProvider>
      <Navbar />
      {children}
      <Footer />
    </RootProvider>
  );
}
