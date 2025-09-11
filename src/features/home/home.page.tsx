import { Filials } from "./ui/filials";
import { HomeFooter } from "./ui/home-footer";
import { Forma } from "./ui/forma";
import { HomeBanner } from "./ui/home-banner";
import { HomeBannerInformation } from "./ui/home-banner-information";
import { HomeHeader } from "./ui/home-header";
import { Pros } from "./ui/home-pros";
import { Shared } from "./ui/shared";
import { Layout } from "@/shared/ui";

const HomePage = () => {
  return (
    <Layout
      header={<HomeHeader />}
      content={
        <>
          <HomeBanner />
          <HomeBannerInformation />
          <Filials />
          <Pros />
          <Shared />
          <Forma />
        </>
      }
      footer={<HomeFooter />}
    />
  );
};

export const Component = HomePage;
