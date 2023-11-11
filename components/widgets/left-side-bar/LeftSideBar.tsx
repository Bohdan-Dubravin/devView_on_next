"use client";
import { Button } from "@/components/ui/button";
import { sidebarLinks } from "@/constants";
import { SignedOut } from "@clerk/nextjs";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavContent = () => {
  const pathName = usePathname();

  return (
    <section className="flex flex-col gap-6">
      {sidebarLinks.map((sideBarLink) => {
        const isActive =
          (pathName.includes(sideBarLink.route) &&
            sideBarLink.route.length > 1) ||
          pathName === sideBarLink.route;

        return (
          <Link
            key={sideBarLink.route}
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
              className={clsx("max-lg:hidden", {
                "base-bold": isActive,
                "base-medium": !isActive,
              })}
            >
              {sideBarLink.label}
            </p>
          </Link>
        );
      })}
    </section>
  );
};

const LeftSideBar = () => {
  return (
    <section className="background-light900_dark200 light-border sticky left-0 top-0 flex h-screen  flex-col  justify-between overflow-y-auto border-r px-6 pb-8 pt-36 shadow-light-300 dark:shadow-none max-lg:w-[100px] max-sm:hidden lg:w-[266px]">
      {/* <Link href="/" className="flex items-center gap-1">
          <Image
            src="/assets/images/site-logo.svg"
            width={23}
            height={23}
            alt="DevFlow logo"
          />
          <p className="h2-bold text-dark100_light900 font-spaceGrotesk  ">
            Dev<span className="text-primary-500">Flow</span>
          </p>
        </Link> */}
      <NavContent />
      <SignedOut>
        <div className="mt-20 flex flex-col gap-3">
          <Link href="/sign-in">
            <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
              <Image
                className="invert-colors  lg:hidden"
                src="/assets/icons/account.svg"
                width={20}
                height={20}
                alt="login"
              />
              <span className="primary-text-gradient max-lg:hidden">
                Log In
              </span>
            </Button>
          </Link>

          <Link href="/sign-up">
            <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
              <Image
                className="invert-colors lg:hidden"
                src="/assets/icons/sign-up.svg"
                width={20}
                height={20}
                alt="login"
              />

              <span className=" max-lg:hidden">Sign Up</span>
            </Button>
          </Link>
        </div>
      </SignedOut>
    </section>
  );
};

export default LeftSideBar;
