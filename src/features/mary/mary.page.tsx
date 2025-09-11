import { Layout } from "@/shared/ui";
import { HomeHeader } from "../home";
import { MaryBanner } from "./ui/mary-banner";
import { MaryBannerInformation } from "./ui/mary-banner-information";
import { MaryFooter } from "./ui/mary-footer";
import { MaryPros } from "./ui/mary-pros";

const MaryPage = () => {
  return (
    <Layout
      header={<HomeHeader />}
      content={
        <>
          <MaryBanner />
          <MaryBannerInformation />
          <MaryPros />
        </>
      }
      footer={<MaryFooter />}
    />
  );
};

export const Component = MaryPage;
