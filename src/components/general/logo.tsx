import Link from "next/link";
import Image from "next/image";

import PATHS from "@/lib/paths";
import logo from "@/../public/logo.svg";
import { cn } from "@/lib/utils";
import { headingFont } from "@/lib/fonts";

const LOGO_DIMENSIONS = 30;

export default function Logo() {
  return (
    <Link href={PATHS.home()}>
      <div className="hidden items-center gap-x-2 transition hover:opacity-75 md:flex ">
        <Image
          src={logo}
          alt="Logo"
          height={LOGO_DIMENSIONS}
          width={LOGO_DIMENSIONS}
        />
        <p
          className={cn(
            "pt-0.5 text-lg text-neutral-700",
            headingFont.className,
          )}
        >
          Tadbeer
        </p>
      </div>
    </Link>
  );
}
