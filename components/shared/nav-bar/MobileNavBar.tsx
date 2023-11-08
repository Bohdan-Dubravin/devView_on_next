"use client";
import { Button } from "@/components/ui/button";
import {
  SheetTrigger,
  SheetContent,
  Sheet,
  SheetClose,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { SignedOut } from "@clerk/nextjs";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavContent = () => {
  const pathName = usePathname();

  return (
    <section className="flex  flex-col  gap-6 pt-16">
      {sidebarLinks.map((sideBarLink) => {
        const isActive =
          (pathName.includes(sideBarLink.route) &&
            sideBarLink.route.length > 1) ||
          pathName === sideBarLink.route;

        return (
          <SheetClose key={sideBarLink.route} asChild>
            <Link
              href={sideBarLink.route}
              className={clsx(
                "flex items-center justify-start gap-4 bg-transparent p-4",
                {
                  "primary-gradient rounded-lg text-light-900": isActive,
                  "text-dark300_light900": !isActive,
                }
              )}
            >
              <Image
                src={sideBarLink.imgURL}
                width={20}
                height={20}
                alt={sideBarLink.label}
                className={clsx({ "invert-colors": !isActive })}
              />
              <p
                className={clsx({
                  "base-bold": isActive,
                  "base-medium": !isActive,
                })}
              >
                {sideBarLink.label}
              </p>
            </Link>
          </SheetClose>
        );
      })}
    </section>
  );
};

const MobileNavBar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/assets/icons/hamburger.svg"
          width={36}
          height={36}
          alt="menu"
          className="invert-colors sm:hidden"
        />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="background-light900_dark200 border-none"
      >
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/assets/images/site-logo.svg"
            width={23}
            height={23}
            alt="DevFlow logo"
          />
          <p className="h2-bold text-dark100_light900 font-spaceGrotesk  ">
            Dev<span className="text-primary-500">Flow</span>
          </p>
        </Link>
        <SheetClose asChild>
          <NavContent />
        </SheetClose>
        <SignedOut>
          <div className="flex flex-col gap-3">
            <SheetClose asChild>
              <Link href="/sign-in">
                <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                  <span className="primary-text-gradient ">Log In</span>
                </Button>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href="/sign-up">
                <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                  Sign Up
                </Button>
              </Link>
            </SheetClose>
          </div>
        </SignedOut>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavBar;
