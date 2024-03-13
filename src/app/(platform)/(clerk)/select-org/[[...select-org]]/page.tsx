import PATHS from "@/lib/paths";
import { OrganizationList } from "@clerk/nextjs";

export default function CreateOrganizationPage() {
  return (
    <OrganizationList
      hidePersonal
      afterSelectOrganizationUrl={PATHS.organization()}
      afterCreateOrganizationUrl={PATHS.organization()}
    />
  );
}
