import {
  naushnik,
  skidkaImg,
  stakan,
  tabletkaImg2,
  tabletkaImg3,
} from "@/shared/assets";
import { Card } from "@/shared/ui/kit/card";
import { ReactNode } from "react";

const CardCustom = ({
  content,
  title,
  imgUrl,
}: {
  title: string;
  content: ReactNode;
  imgUrl: string;
}) => {
  return (
    <Card className="bg-[#FFEFEE] shadow-none flex flex-row items-center justify-between px-8">
      <div className="flex flex-col gap-4">
        <div className="text-4xl font-semibold">{title}</div>
        <div className="text-2xl leading-9 relative  text-[#00000099]">
          {content}
        </div>
      </div>
      <div>
        <img src={imgUrl} />
      </div>
    </Card>
  );
};

export const Pros = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="text-[64px] font-semibold">
        Biziń artıqmashılıqlarımız
      </div>
      <div className="grid grid-cols-2 gap-5">
        <CardCustom
          content={
            <>
              Biz tek ǵana sertifikatlanǵan hám joqarı <br />
              sapadaǵı dári ónimlerin usınıs etemiz.
            </>
          }
          imgUrl={tabletkaImg2}
          title="Sapalı dári ónimleri"
        />
        <CardCustom
          content={
            <>
              Bizdegi dáriler qol jetimli bahada bolıp, siz <br />
              artıqsha qárejetlerdi oylamasańız da boladı.
            </>
          }
          imgUrl={skidkaImg}
          title="Arzan bahadaǵı dáriler"
        />
        <CardCustom
          content={
            <>
              BBiziń farmacevtlerimiz kóp jıllıq <br /> tájiriybege iye hám olar
              sizge kerekli <br /> dárini tańlawıńızǵa járdem beredi.
            </>
          }
          imgUrl={tabletkaImg3}
          title="Tájiriybeli farmacevtler"
        />
        <CardCustom
          content={
            <>
              Dárixanamız hám onıń filiallarında <br /> arterial qan basımın
              biypul ólshew <br /> xızmeti jolǵa qoyılǵan.
            </>
          }
          imgUrl={naushnik}
          title="Qan basımın ólshew"
        />
      </div>
      <CardCustom
        content={
          <>
            Sizge organizmińizge paydalı bolǵan <br /> ishimliklerdi (moxito,
            kompot) usınıs <br /> etemiz.
          </>
        }
        imgUrl={stakan}
        title="Paydalı ishimlikler"
      />
    </div>
  );
};
