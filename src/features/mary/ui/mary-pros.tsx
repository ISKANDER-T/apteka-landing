import { butilkaImg, listokImg, naushnik } from "@/shared/assets";
import { cn } from "@/shared/lib/css";
import { ProsCard, TitleBlock } from "@/shared/ui";

export const MaryPros = () => {
  return (
    <div className="flex flex-col gap-5">
      <TitleBlock className="text-[#000000E5]" text="Biz usınıs etemiz" />
      <div className={cn("grid grid-cols-1", "md:grid-cols-2 gap-5")}>
        <ProsCard
          text={
            <>
              Balanıń ósip-óniwi ushın kerek bolatuǵın azıqlar, salamatlıǵı
              ushın krem, shampun hám basqa da gigiena ónimleri.
            </>
          }
          imgUrl={butilkaImg}
          title="Ana hám bala bólimi"
          className="bg-[#FFF0E5]"
        />
        <ProsCard
          text={
            <>
              Termometrler, tanometrler, ingalyatorlar hám taǵı da salamatlıqtı
              baqlap barıwǵa arnalǵan, qolaylı, isenimli úskeneler.
            </>
          }
          imgUrl={naushnik}
          title="Medicinalıq úskeneler"
          className="bg-[#FFF0E5]"
        />
      </div>
      <ProsCard
        text={
          <>
            Immunitetti qollap-quwatlaw ushın vitaminler hám tábiyiw
            qosımshalar. Tek ǵana tekserilgen hám sertifikatlanǵan ónimler.
          </>
        }
        imgUrl={listokImg}
        title="Biologiyalıq aktiv qosımshalar"
        className="bg-[#FFF0E5]"
      />
    </div>
  );
};
