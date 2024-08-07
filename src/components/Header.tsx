import React from "react";
import { Input } from "./ui/input";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import Image from "next/image";
import logo from "../../public/logo.jpeg";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "./ModeToggle";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="container flex justify-between items-center py-4">
      {/* logo */}
      <div className="flex justify-center items-center gap-4">
        <Image src={logo} alt="Logo" className="w-[60px] h-[60px] rounded-full " />
        <h1 className="">
            Anime Finder
        </h1>
      </div>

      <Input placeholder="Search name anime or manga" className="w-[400px]"/>

      <div>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Header;
