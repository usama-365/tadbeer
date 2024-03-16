"use client";

import { useOrganizationList } from "@clerk/nextjs";
import { useParams } from "next/navigation";
import { useEffect } from "react";

/**
 * To update the active organization based on URL params
 */
export default function OrgControl() {
  const params = useParams();
  const { setActive } = useOrganizationList();

  useEffect(() => {
    if (!setActive) return;
    setActive({ organization: params.organizationId as string });
  }, [setActive, params.organizationId]);

  return null;
}
