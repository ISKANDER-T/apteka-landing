import { symbolImg } from "@/shared/assets";

export const HomeBanner = () => {
  return (
    <div className="bg-[#FFEFEE] rounded-[24px] px-10 pt-[60px] pb-96 flex flex-col gap-9 relative">
      <div className="text-8xl text-[#000000E5] font-semibold leading-[110px]">
        «Ájiniyaz qaraqalpaq» dárixanası
      </div>
      <div className="text-2xl text-[#00000099] leading-9">
        «Ájiniyaz qaraqalpaq» Qaraqalpaqstandaǵı eń iri dárixanalar <br />{" "}
        tarmaǵınıń biri bolıp, biziń maqsetimiz — xalqımızdı arzan hám <br />{" "}
        sapalı dári-darmaq ónimleri menen támiyinlew.
      </div>
      <img src={symbolImg} className="absolute bottom-0 right-5" />
    </div>
  );
};
