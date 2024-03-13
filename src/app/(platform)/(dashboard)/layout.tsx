import type { ReactNode } from "react";

import Navbar from "@/app/(platform)/(dashboard)/_components/navbar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
