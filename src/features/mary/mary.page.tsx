import { HomeHeader } from "../home";
import { MaryBanner } from "./ui/mary-banner";
import { MaryBannerInformation } from "./ui/mary-banner-information";
import { MaryFooter } from "./ui/mary-footer";
import { MaryPros } from "./ui/mary-pros";

const MaryPage = () => {
  return (
    <>
      {" "}
      <div className="flex flex-col px-8 pb-10">
        <HomeHeader />
        <div className="flex flex-col gap-20 py-5">
          <MaryBanner />
          <MaryBannerInformation />
          <MaryPros />
        </div>
      </div>
      <MaryFooter />
    </>
  );
};

export const Component = MaryPage;
