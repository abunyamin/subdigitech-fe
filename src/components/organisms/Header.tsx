import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Header = () => {
  const menus = [
    {
      href: "/",
      title: "Home",
    },
    { href: "/about", title: "About" },
    { href: "/services", title: "Services" },
    { href: "/portofolios", title: "Portofolios" },
    { href: "/contact", title: "Contact" },
  ];

  return (
    <div className="flex justify-between items-center px-4 py-8 border-b border-gray-200">
      <div>
        <h1 className="text-4xl font-bold">
          <span className="text-orange-500">Sub</span>
          <span className="text-[#032737]">DigiTech</span>
        </h1>
      </div>
      <NavigationMenu className="hidden lg:block" viewport={false}>
        <NavigationMenuList>
          {menus.map((item, index) => (
            <NavigationMenuItem
              className="transition duration-300 ease-in-out hover:scale-105"
              key={index}
            >
              <Link href={item.href} passHref>
                <NavigationMenuLink className="px-4 py-2 text-gray-900 hover:text-orange-500 flex flex-row gap-1 items-center space-x-2">
                  <span className="hover:text-orange-500 font-medium text-base">
                    {item.title}
                  </span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <div>
        <Button
          size="lg"
          variant="outline"
          className="border-emerald-800 bg-transparent text-emerald-800 hover:bg-emerald-800 hover:text-white hover:border-emerald-800 cursor-pointer"
        >
          Contact Me
        </Button>
      </div>
    </div>
  );
};

export default Header;
