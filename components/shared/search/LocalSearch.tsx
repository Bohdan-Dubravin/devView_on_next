"use client";
import { Input } from "@/components/ui/input";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

interface LocalSearchProps {
  route: string;
  iconPosition?: "left" | "right";
  imgIcon: string;
  placeholder: string;
  classes?: string;
}

const LocalSearch = ({
  route,
  iconPosition = "left",
  imgIcon,
  placeholder,
  classes,
}: LocalSearchProps) => {
  const [value, setValue] = useState("");

  return (
    <div
      className={clsx(
        "background-light800_darkgradient relative flex min-h-[56px] w-full grow items-center gap-4 rounded-xl px-4",
        classes
      )}
    >
      {iconPosition === "left" && (
        <Image
          src={imgIcon}
          width={24}
          height={24}
          alt="search"
          className="cursor-pointer"
        />
      )}
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="paragraph-regular no-focus placeholder background-light800_darkgradient border-none shadow-none outline-none"
      />
      {iconPosition === "right" && (
        <Image
          src={imgIcon}
          width={24}
          height={24}
          alt="search"
          className="cursor-pointer"
        />
      )}
    </div>
  );
};

export default LocalSearch;
