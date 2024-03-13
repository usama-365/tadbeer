import Link from "next/link";

import Logo from "@/components/general/logo";
import { Button } from "@/components/ui/button";
import PATHS from "@/lib/paths";

export default function Navbar() {
  return (
    <nav className="flex w-full items-center border-b bg-white px-4 shadow-sm">
      <div className="mx-auto flex w-full items-center justify-between md:max-w-screen-2xl">
        <Logo />
        <div className="flex w-full items-center justify-between space-x-4 md:block md:w-auto">
          <Button size={"sm"} variant={"outline"} asChild>
            <Link href={PATHS.signIn()}>Login</Link>
          </Button>
          <Button size={"sm"} asChild>
            <Link href={PATHS.signUp()}>Get Tadbeer for free</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
