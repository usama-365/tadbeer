import OrgControl from "@/app/(platform)/(dashboard)/organization/[organizationId]/_components/org-control";
import type { ReactNode } from "react";

export default function OrganizationIdLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      {/* Contains useEffects logic */}
      <OrgControl />
      {children}
    </>
  );
}
