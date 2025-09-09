import { butilkaImg, listokImg, naushnik } from "@/shared/assets";
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
    <Card className="bg-[#FFF0E5] shadow-none flex flex-row items-center justify-between px-8">
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

export const MaryPros = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="text-[64px] font-semibold">Biz usınıs etemiz</div>
      <div className="grid grid-cols-2 gap-5">
        <CardCustom
          content={
            <>
              Balanıń ósip-óniwi ushın kerek bolatuǵın <br />
              azıqlar, salamatlıǵı ushın krem, shampun <br />
              hám basqa da gigiena ónimleri.
            </>
          }
          imgUrl={butilkaImg}
          title="Ana hám bala bólimi"
        />
        <CardCustom
          content={
            <>
              Termometrler, tanometrler, ingalyatorlar <br /> hám taǵı da
              salamatlıqtı baqlap barıwǵa <br /> arnalǵan, qolaylı, isenimli
              úskeneler.
            </>
          }
          imgUrl={naushnik}
          title="Medicinalıq úskeneler"
        />
      </div>
      <CardCustom
        content={
          <>
            Immunitetti qollap-quwatlaw ushın vitaminler hám tábiyiw <br />
            qosımshalar. Tek ǵana tekserilgen hám sertifikatlanǵan <br />
            ónimler.
          </>
        }
        imgUrl={listokImg}
        title="Biologiyalıq aktiv qosımshalar"
      />
    </div>
  );
};
