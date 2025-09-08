import { logoImg } from "@/shared/assets";
import { HomeMenu } from "./home-menu";

export const HomeHeader = () => {
  return (
    <div className="flex flex-row justify-between items-center h-20">
      <div>
        <img src={logoImg} width={86} height={54} />
      </div>
      <HomeMenu />
    </div>
  );
};
