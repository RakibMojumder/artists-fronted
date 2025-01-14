
import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "../globals.css";
import ClientLayout from "@/components/ClientLayout";

const onest = Onest({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={onest.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
