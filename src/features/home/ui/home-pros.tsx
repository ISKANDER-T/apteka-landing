import {
  naushnik,
  skidkaImg,
  stakan,
  tabletkaImg2,
  tabletkaImg3,
} from "@/shared/assets";
import { cn } from "@/shared/lib/css";
import { ProsCard, TitleBlock } from "@/shared/ui";

export const Pros = () => {
  return (
    <div className="flex flex-col gap-5">
      <TitleBlock
        className="text-[#000000E5]"
        text="Biziń artıqmashılıqlarımız"
      />
      <div className={cn("grid grid-cols-1", "md:grid-cols-2 gap-5")}>
        <ProsCard
          text={
            <span className="text-[#00000099]">
              Biz tek ǵana sertifikatlanǵan hám joqarı sapadaǵı dári ónimlerin
              usınıs etemiz.
            </span>
          }
          imgUrl={tabletkaImg2}
          title="Sapalı dári ónimleri"
          className="bg-[#FFEFEE]"
        />
        <ProsCard
          text={
            <span className="text-[#00000099]">
              Bizdegi dáriler qol jetimli bahada bolıp, siz artıqsha
              qárejetlerdi oylamasańız da boladı.
            </span>
          }
          imgUrl={skidkaImg}
          title="Arzan bahadaǵı dáriler"
          className="bg-[#FFEFEE]"
        />
        <ProsCard
          text={
            <span className="text-[#00000099]">
              Biziń farmacevtlerimiz kóp jıllıq tájiriybege iye hám olar sizge
              kerekli dárini tańlawıńızǵa járdem beredi.
            </span>
          }
          imgUrl={tabletkaImg3}
          title="Tájiriybeli farmacevtler"
          className="bg-[#FFEFEE]"
        />
        <ProsCard
          text={
            <span className="text-[#00000099]">
              Dárixanamız hám onıń filiallarında arterial qan basımın biypul
              ólshew xızmeti jolǵa qoyılǵan.
            </span>
          }
          imgUrl={naushnik}
          title="Qan basımın ólshew"
          className="bg-[#FFEFEE]"
        />
      </div>
      <ProsCard
        text={
          <span className="text-[#00000099]">
            Sizge organizmińizge paydalı bolǵan ishimliklerdi <br /> (moxito,
            kompot) usınıs etemiz.
          </span>
        }
        imgUrl={stakan}
        title="Paydalı ishimlikler"
        className="bg-[#FFEFEE]"
      />
    </div>
  );
};
