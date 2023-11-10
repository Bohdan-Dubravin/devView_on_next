"use client";
import { MenubarShortcut } from "@/components/ui/menubar";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
} from "@radix-ui/react-menubar";
import Image from "next/image";

const Selector = () => {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger className="background-light800_dark300 flex-between body-semibold h-[56px] min-w-[170px] rounded-md px-5 py-2 shadow-sm ">
          File
          <Image
            src="/assets/icons/chevron-down.svg"
            width={20}
            height={20}
            alt="chevron-down"
          />
        </MenubarTrigger>
        <MenubarContent className="background-light800_dark300">
          <MenubarItem>
            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>New Window</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Share</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Print</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default Selector;
