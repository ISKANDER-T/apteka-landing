import { aptekaImg, tabletkaImg } from "@/shared/assets";
import { BannerInformation } from "@/shared/ui";

export const HomeBannerInformation = () => {
  return (
    <BannerInformation
      className="bg-[#D9ECFA]"
      imgUrl1={tabletkaImg}
      imgUrl2={aptekaImg}
      title={<span className="text-[#000000E5]">Dárixanamız haqqında</span>}
      text={
        <span className="text-[#00000099]">
          Biziń birinshi dárixanamız 2017‑jılı «Ájiniyaz-Nukus» atı menen
          ashılǵan. 2019‑jıldan baslap biz «Ájiniyaz qaraqalpaq» atı menen óz
          xızmetlerimizdi kórsetip kiyatırmız.
        </span>
      }
    />
  );
};
