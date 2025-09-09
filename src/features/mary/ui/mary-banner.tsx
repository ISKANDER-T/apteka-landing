import { maryImg } from "@/shared/assets";

export const MaryBanner = () => {
  return (
    <div className="bg-[#FF9046] rounded-[24px] px-10 pt-[60px] pb-96 flex flex-col gap-9 relative">
      <div className="text-8xl text-white font-semibold leading-[110px]">
        Mary shop
      </div>
      <div className="text-2xl text-white leading-9">
        Mary shop — balalar azıǵı hám gigiena ónimleri dúkanı. <br /> Dúkanımız
        tek ǵana joqarı sapadaǵı hám qadaǵalawdan <br /> ótken, qáwipsiz
        ónimlerdi usınıs etedi. Perzentińizdiń <br /> densawlıǵı hám komfortı
        ushın kerek bolatuǵın barlıq ónimler <br /> bizde tabıladı.
      </div>
      <img src={maryImg} className="absolute bottom-0 right-5" />
    </div>
  );
};
