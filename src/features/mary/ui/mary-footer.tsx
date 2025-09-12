import {
  instagramImg,
  maryLogoImg,
  phone2,
  punkt,
  vakansya,
} from "@/shared/assets";
import { Footer } from "@/shared/ui";

export const MaryFooter = () => {
  return (
    <Footer
      title="Mary Shop"
      ImgUrlLogo={maryLogoImg}
      ImgUrl1={phone2}
      ImgUrl2={instagramImg}
      ImgUrl3={punkt}
      ImgUrl4={vakansya}
      text1="+998 94 695 77 87"
      text2={
        <a href="https://www.instagram.com/mary_shop.nks/" target="_blank">
          @mary_shop.nks
        </a>
      }
      text3="A. Dosnazarov, 123, Nókis, Qaraqalpaqstan"
      text4="Vakansya"
    />
  );
};
