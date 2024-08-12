"use client"
import React from "react";
import Image from "next/image";
import logo from "../../public/logo.jpeg";

import { ModeToggle } from "./ModeToggle";
import Link from "next/link";


type Props = {};

const Header = () => {
 
  return (
    <div className="container flex justify-between items-center py-4 bg-slate-200">
      {/* logo */}
      <div>
        <Link href="/" className="flex justify-center items-center gap-4">
          <Image
            src={logo}
            alt="Logo"
            className="w-[60px] h-[60px] rounded-full "
          />
          <h1 className="">Anime Finder</h1>
        </Link>
      </div>

      <div>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Header;
