import { MenuItemType } from "@/lib/interface";
import Link from "next/link";
import React from "react";
import Cart from "../ShoppingCart/Cart";

interface MenuProps {
  links: MenuItemType[];
}

export const DesktopMenu: React.FC<MenuProps> = ({ links }) => {
  return (
    <>
      <ul className="col-start-1 flex items-center gap-6 md:text-[1.25rem]">
        {links.map((link: MenuItemType) => (
          <Link href={link.url} key={link.id}>
            {link.title}
          </Link>
        ))}
      </ul>
      <Link
        href="/"
        className="object-fit justify-self-center cols-starts-2 md:w-36"
      >
        <img src="/logo1.jpg" alt="logo" />
      </Link>
      <Cart />
    </>
  );
};

export const MobileMenu: React.FC<MenuProps> = ({ links }) => {
  return <div>Mobile menu</div>;
};
