import { useState, useEffect } from "react";
import { Button } from "@/shared/ui/kit/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@radix-ui/react-navigation-menu";
import { useLocation, useNavigate } from "react-router-dom";
import { SheetTrigger, SheetContent, Sheet } from "@/shared/ui/kit/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/shared/lib/css";

const navMenu: { text: string; href: string }[] = [
  { href: "#darixana", text: "Dárixana haqqında" },
  { href: "#filial", text: "Filiallar" },
  { href: "#baylanis", text: "Baylanıs" },
];

export const HomeMenu = () => {
  const { hash, pathname } = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState(hash);

  useEffect(() => {
    setActiveSection(hash);
  }, [hash]);

  const isActive = (href: string) => activeSection === href;

  return (
    <div className="flex items-center gap-10 text-[17px]">
      <Button
        onClick={() => navigate(pathname === "/mary" ? "/" : "/mary")}
        className={cn(
          "bg-[#FF791F] ml-3 hover:bg-[#e56a1a] transition-colors duration-200",
          "sm:hidden",
        )}
      >
        {pathname === "/mary" ? "Apteka" : "Mary Shop"}
      </Button>
      <Sheet>
        <SheetTrigger className="hidden" asChild>
          <Button variant="ghost">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <NavigationMenu className="flex flex-col justify-start items-start gap-5 py-10">
            <NavigationMenuList className="flex flex-col gap-5 items-start">
              {navMenu.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink
                    className={`
                  py-2 px-4 rounded-md transition-colors duration-200
                  ${
                    isActive(item.href)
                      ? " text-[#EA473B] font-medium"
                      : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  }
                `}
                  >
                    <a
                      href={item.href}
                      onClick={() => setActiveSection(item.href)}
                    >
                      {item.text}
                    </a>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
            <Button
              onClick={() => navigate(pathname === "/mary" ? "/" : "/mary")}
              className="bg-[#FF791F] ml-3 hover:bg-[#e56a1a] transition-colors duration-200"
            >
              {pathname === "/mary" ? "Apteka" : "Mary Shop"}
            </Button>
          </NavigationMenu>
        </SheetContent>
      </Sheet>
      <NavigationMenu className="hidden sm:flex gap-5 items-center">
        <NavigationMenuList className="flex sm:gap-5 items-center">
          {navMenu.map((item) => (
            <NavigationMenuItem key={item.href}>
              <NavigationMenuLink
                className={`
                  py-2 px-4 rounded-md transition-colors duration-200
                  ${
                    isActive(item.href)
                      ? " text-[#EA473B] font-medium"
                      : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  }
                `}
              >
                <a href={item.href} onClick={() => setActiveSection(item.href)}>
                  {item.text}
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
        <Button
          onClick={() => navigate(pathname === "/mary" ? "/" : "/mary")}
          className="bg-[#FF791F] hover:bg-[#e56a1a] transition-colors duration-200"
        >
          {pathname === "/mary" ? "Apteka" : "Mary Shop"}
        </Button>
      </NavigationMenu>
    </div>
  );
};
