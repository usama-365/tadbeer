import { Medal } from "lucide-react";
import Link from "next/link";

import PATHS from "@/lib/paths";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { headingFont, textFont } from "@/lib/fonts";

export default function MarketingPage() {
  return (
    <>
      {/* Heading font */}
      <div
        className={cn(
          "flex flex-col items-center justify-center",
          headingFont.className,
        )}
      >
        {/* Badge */}
        <p className="mb-4 flex items-center gap-2 rounded-full border bg-amber-100 p-4 uppercase text-amber-700 shadow-sm">
          <Medal className="size-6" />
          The best task management app
        </p>

        {/* Main heading */}
        <h1 className="space-y-6 text-center text-3xl  md:text-6xl">
          <span className="block text-neutral-800">Tadbeer helps teamwork</span>
          <span className="mx-auto block w-fit rounded-md bg-gradient-to-r from-fuchsia-600 to-pink-600 p-2 px-4 pb-4 text-white">
            move forward.
          </span>
        </h1>
      </div>

      {/* Subtext */}
      <p
        className={cn(
          "mx-auto mt-4 max-w-xs text-center text-sm text-neutral-400 md:max-w-2xl md:text-xl",
          textFont.className,
        )}
      >
        Collaborate, manage projects, and reach new productivity peaks. From
        high-rises to the home office, the way your team works is unique -
        accomplish it all with Tadbeer.
      </p>

      {/* CTA */}
      <Button size={"lg"} className="mt-6" asChild>
        <Link href={PATHS.signUp()}>Get Tadbeer for free</Link>
      </Button>
    </>
  );
}
