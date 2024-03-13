import type { ReactNode } from "react";

import Navbar from "@/app/(marketing)/_components/navbar";
import Footer from "@/app/(marketing)/_components/footer";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid h-svh grid-rows-[56px_1fr_min-content]">
      <Navbar />
      <main className="flex flex-col items-center justify-center overflow-y-auto overflow-x-hidden bg-slate-100 py-4">
        {children}
      </main>
      <Footer />
    </div>
  );
}
