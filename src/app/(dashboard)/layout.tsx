import Sidebar from "@/components/dashboard/Sidebar";
import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "../globals.css";
import RootProvider from "@/provider/RootProvider";

const onest = Onest({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard layout",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={onest.className}>
        <RootProvider>
          <div className="flex bg-neutral-100">
            <Sidebar />
            <div className="flex-1">{children}</div>
          </div>
        </RootProvider>
      </body>
    </html>
  );
}
