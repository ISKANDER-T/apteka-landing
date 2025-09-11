import {
  instagramImg,
  logoImg2,
  phone2,
  punkt,
  vakansya,
} from "@/shared/assets";
import { Footer } from "@/shared/ui";

export const HomeFooter = () => {
  return (
    <Footer
      title="Ájiniyaz Qaraqalpaq"
      ImgUrlLogo={logoImg2}
      ImgUrl1={phone2}
      ImgUrl2={instagramImg}
      ImgUrl3={punkt}
      ImgUrl4={vakansya}
      text1="+998 95 609 77 87"
      text2="@ajiniyaz_qaraqalpaq_pharm"
      text3="A. Dosnazarov, 123, Nókis, Qaraqalpaqstan"
      text4="Vakansya"
    />
  );
};
