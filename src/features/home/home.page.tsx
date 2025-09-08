import { Filials } from "./ui/filials";
import { Footer } from "./ui/home-footer";
import { Forma } from "./ui/forma";
import { HomeBanner } from "./ui/home-banner";
import { HomeBannerInformation } from "./ui/home-banner-information";
import { HomeHeader } from "./ui/home-header";
import { Pros } from "./ui/home-pros";
import { Shared } from "./ui/shared";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col px-8 pb-10">
        <HomeHeader />
        <div className="flex flex-col gap-20 py-5">
          <HomeBanner />
          <HomeBannerInformation />
          <Filials />
          <Pros />
          <Shared />
          <Forma />
        </div>
      </div>
      <Footer />
    </>
  );
};

export const Component = HomePage;
