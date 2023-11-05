"use client";
import { themes } from "@/constants";
import { useTheme } from "@/context/ThemeProvider";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
} from "@radix-ui/react-menubar";
import clsx from "clsx";
import Image from "next/image";
import React from "react";

const Theme = () => {
  const { mode, setMode } = useTheme();

  const handleThemeChange = (theme: string) => {
    setMode(theme);
    if (theme !== "system") {
      localStorage.theme = theme;
    } else {
      localStorage.removeItem("theme");
    }
  };

  return (
    <Menubar className="relative border-none bg-transparent shadow-none">
      <MenubarMenu>
        <MenubarTrigger className="focus:bg-light-900 data-[state=open]:bg-light-900 dark:focus:bg-dark-200  dark:data-[state=open]:bg-dark-200">
          {mode === "light" ? (
            <Image
              src="/assets/icons/sun.svg"
              width={20}
              height={20}
              alt="light theme"
              className="active-theme"
            />
          ) : (
            <Image
              src="/assets/icons/moon.svg"
              width={20}
              height={20}
              alt="dark theme"
              className="active-theme"
            />
          )}
        </MenubarTrigger>
        <MenubarContent className="absolute right-[-3rem] mt-3 min-w-[120px] rounded border py-2 dark:border-dark-400 dark:bg-dark-300">
          {themes.map((theme) => {
            return (
              <MenubarItem
                className="flex cursor-pointer items-center gap-4 px-2.5 py-2 dark:focus:bg-dark-400"
                key={theme.value}
                onClick={() => handleThemeChange(theme.value)}
              >
                <Image
                  src={theme.icon}
                  width={16}
                  height={16}
                  alt={theme.value}
                  className={clsx({ "active-theme": theme.value === mode })}
                />
                <p
                  className={clsx(
                    "body-semibold text-dark100_light900 text-light-500",
                    {
                      "text-primary-500": theme.value === mode,
                    }
                  )}
                >
                  {theme.label}
                </p>
              </MenubarItem>
            );
          })}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default Theme;
