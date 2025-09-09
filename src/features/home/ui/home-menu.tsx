import { useState, useEffect } from "react";
import { Button } from "@/shared/ui/kit/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@radix-ui/react-navigation-menu";
import { useLocation, useNavigate } from "react-router-dom";

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
      <NavigationMenu className="flex gap-10 items-center">
        <NavigationMenuList className="flex gap-10 items-center">
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
