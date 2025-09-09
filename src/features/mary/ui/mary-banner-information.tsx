import { aptekaImg, babyImg } from "@/shared/assets";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/shared/ui/kit/card";

export const MaryBannerInformation = () => {
  return (
    <div className="flex justify-between items-center gap-5" id="darixana">
      <Card className="bg-[#D9ECFA] basis-[60%] shadow-none pb-7">
        <CardHeader className="text-[64px] font-semibold">
          Dúkanımız haqqında
        </CardHeader>
        <CardContent className="text-2xl text-[#00000099] leading-9 flex flex-col gap-10">
          Biz ana hám bala salamatlıǵı ushın kerek bolatuǵın <br /> barlıq
          paydalı tovarlardı: azıqlar, gigiena ónimleri, <br /> zamanagóy
          medicinalıq texnikalar, organizmdi <br /> qollap-quwatlaw ushın
          biologiyalıq aktiv <br /> qosımshalardı usınıs etemiz.
          <span>
            Biz tek ǵana isenimli islep shıǵarıwshılardıń <br /> qadaǵalawdan
            ótken tovarların tańlaymız.
          </span>
        </CardContent>
        <CardFooter className="flex justify-end relative">
          <img src={babyImg} className="absolute -bottom-7" />
        </CardFooter>
      </Card>
      <img src={aptekaImg} />
    </div>
  );
};
