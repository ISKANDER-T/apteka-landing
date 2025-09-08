import {
  instagramImg,
  logoImg2,
  phone2,
  punkt,
  vakansya,
} from "@/shared/assets";

export const Footer = () => {
  return (
    <div className="bg-[#2C3033] p-8 py-10 flex flex-col gap-8">
      <div className="flex flex-row justify-between items-center">
        <div className="text-[28px] font-bold text-white">
          Ájiniyaz Qaraqalpaq
        </div>
        <img src={logoImg2} />
      </div>

      <div className="leading-9 flex flex-col gap-8">
        <div className="text-[#FFFFFF99] text-2xl flex gap-5">
          <img src={phone2} /> <span>+998 95 609 77 87</span>
        </div>
        <div className="text-[#FFFFFF99] text-2xl flex gap-5">
          <img src={instagramImg} /> <span>@ajiniyaz_qaraqalpaq_pharm</span>
        </div>
        <div className="text-[#FFFFFF99] text-2xl flex gap-5">
          <img src={punkt} />{" "}
          <span>A. Dosnazarov, 123, Nókis, Qaraqalpaqstan</span>
        </div>
        <div className="text-[#FFFFFF99] text-2xl flex gap-5">
          <img src={vakansya} /> <span>Vakansya</span>
        </div>
      </div>
    </div>
  );
};
