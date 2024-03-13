import Logo from "@/components/general/logo";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className=" w-full border-t bg-slate-100 p-4">
      <div className="mx-auto flex w-full items-center justify-between md:max-w-screen-2xl">
        <Logo />
        <div className="flex w-full items-center justify-between space-x-4 md:block md:w-auto">
          <Button size={"sm"} variant={"ghost"}>
            Privacy Policy
          </Button>
          <Button size={"sm"} variant={"ghost"}>
            Terms of Service
          </Button>
        </div>
      </div>
    </footer>
  );
}