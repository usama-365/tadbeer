import { Plus } from "lucide-react";

import Logo from "@/components/general/logo";
import { Button } from "@/components/ui/button";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import PATHS from "@/lib/paths";

const AVATAR_BOX_DIMENSION = 30;

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 flex h-14 w-full items-center border-b bg-white px-4 shadow-sm">
      {/* TODO: Mobile sidebar */}
      {/* Desktop sidebar */}
      <div className="flex items-center gap-x-4">
        <div className="hidden md:flex">
          <Logo />
        </div>

        <Button
          variant={"primary"}
          size={"sm"}
          className="hidden h-auto rounded-sm px-2 py-1.5 md:block"
        >
          Create
        </Button>

        <Button
          variant={"primary"}
          size={"sm"}
          className="block rounded-sm md:hidden"
        >
          <Plus className="size-4" />
        </Button>
      </div>

      <div className="ml-auto flex items-center gap-x-2">
        <OrganizationSwitcher
          hidePersonal
          afterCreateOrganizationUrl={PATHS.organization()}
          afterSelectOrganizationUrl={PATHS.organization()}
          afterLeaveOrganizationUrl={PATHS.selectOrganization()}
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
            },
          }}
        />

        <UserButton
          afterSignOutUrl={PATHS.home()}
          appearance={{
            elements: {
              avatarBox: {
                height: AVATAR_BOX_DIMENSION,
                width: AVATAR_BOX_DIMENSION,
              },
            },
          }}
        />
      </div>
    </nav>
  );
}
