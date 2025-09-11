import { maryImg } from "@/shared/assets";
import { Banner } from "@/shared/ui";

export const MaryBanner = () => {
  return (
    <Banner
      className="bg-[#FF9046]"
      imgUrl={maryImg}
      title={<span className="text-white">Mary shop</span>}
      text={
        <span className="text-white">
          Mary shop — balalar azıǵı hám gigiena ónimleri dúkanı. Dúkanımız tek
          ǵana joqarı sapadaǵı hám qadaǵalawdan ótken, qáwipsiz ónimlerdi usınıs
          etedi. Perzentińizdiń densawlıǵı hám komfortı ushın kerek bolatuǵın
          barlıq ónimler bizde tabıladı.
        </span>
      }
    />
  );
};
