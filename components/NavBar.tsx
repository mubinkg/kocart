"use client";

import React from "react";
import { Menu, Navigation, Search } from "lucide-react";
import logo from "@/assets/kocart_logo.png";
import Image from "next/image";
import navbarItems from "@/constants/navbar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import MenuModal from "./MenuModal";

type Props = {};

const NavBar = (props: Props) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="flex items-center justify-between px-5 lg:px-10 py-4 bg-white shadow-md">
      <div className="w-14 sm:w-20 lg:w-24 hover:cursor-pointer">
        <Image alt="KoCart Logo" src={logo} />
      </div>
      <NavigationMenu className="hidden lg:block pl-14">
        <NavigationMenuList className="flex gap-1">
          {navbarItems.map((item, key) => {
            if (item.subItems.length > 0) {
              return (
                <NavigationMenuItem key={key}>
                  <NavigationMenuTrigger className="text-base font-normal">
                    {item.text}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="flex flex-col px-3 py-2 ">
                    {item.subItems.map((subItem, key) => (
                      <NavigationMenuLink
                        key={key}
                        href={subItem.url}
                        className="py-1 px-6 rounded-sm hover:text-white hover:bg-primaryc"
                      >
                        {subItem.text}
                      </NavigationMenuLink>
                    ))}
                  </NavigationMenuContent>
                </NavigationMenuItem>
              );
            } else {
              return (
                <NavigationMenuItem key={key}>
                  <NavigationMenuLink
                    href={item.url}
                    className="px-1 hover:text-secoundaryc"
                  >
                    {item.text}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            }
          })}
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex gap-10 items-center justify-between lg:justify-end lg:w-4/5">
        <div className="flex items-center border border-secoundaryc border-opacity-45 px-4 py-3 rounded-2xl w-full lg:w-2/3">
          <Search stroke="#008ECC" className="hover:cursor-pointer" />
          <input
            type="text"
            placeholder="Search for any Korean Product..."
            className="px-2 py-1 text-sm focus:outline-none w-full"
          />
        </div>
        <Menu className="lg:hidden" onClick={() => setIsMenuOpen(true)} />
        {isMenuOpen && <MenuModal setIsMenuOpen={setIsMenuOpen} />}
      </div>
    </header>
  );
};

export default NavBar;
