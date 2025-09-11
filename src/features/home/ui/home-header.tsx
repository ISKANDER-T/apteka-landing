import { logoImg } from "@/shared/assets";
import { HomeMenu } from "./home-menu";
import { cn } from "@/shared/lib/css";

export const HomeHeader = () => {
  return (
    <div
      className={cn(
        "flex justify-between items-center h-[56px]",
        "sm:h-[80px]",
      )}
    >
      <img
        src={logoImg}
        className={cn("w-[51px] h-[32px]", "sm:w-[86px] sm:h-[54px]")}
      />
      <HomeMenu />
    </div>
  );
};
