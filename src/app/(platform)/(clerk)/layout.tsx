import type { ReactNode } from "react";

export default function ClerkLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-svh items-center justify-center py-4">
      {children}
    </div>
  );
}
