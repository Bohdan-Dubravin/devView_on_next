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
    <section className="flex flex-col gap-6 pt-16">
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
              " flex items-center justify-start gap-4 bg-transparent p-4",
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
        );
      })}
    </section>
  );
};

const SideBar = () => {
  return (
    <section>
      <div className="background-light900_dark200 fixed mt-16 min-h-screen w-[266px] border-none px-6 pb-8 pt-10 max-sm:hidden">
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
                <span className="primary-text-gradient ">Log In</span>
              </Button>
            </Link>

            <Link href="/sign-up">
              <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                Sign Up
              </Button>
            </Link>
          </div>
        </SignedOut>
      </div>
    </section>
  );
};

export default SideBar;
