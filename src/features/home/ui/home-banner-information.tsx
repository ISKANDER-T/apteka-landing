import { aptekaImg, tabletkaImg } from "@/shared/assets";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/shared/ui/kit/card";

export const HomeBannerInformation = () => {
  return (
    <div className="flex justify-between items-center gap-5" id="darixana">
      <Card className="bg-[#D9ECFA] basis-[60%] pb-24 shadow-none">
        <CardHeader className="text-[64px] font-semibold">
          Dárixanamız haqqında
        </CardHeader>
        <CardContent className="text-2xl text-[#00000099] leading-9">
          Biziń birinshi dárixanamız 2017‑jılı «Ájiniyaz-Nukus» atı menen <br />{" "}
          ashılǵan. 2019‑jıldan baslap biz «Ájiniyaz qaraqalpaq» atı <br />{" "}
          menen óz xızmetlerimizdi kórsetip kiyatırmız.
        </CardContent>
        <CardFooter className="flex justify-end">
          <img src={tabletkaImg} className="-my-24" />
        </CardFooter>
      </Card>
      <img src={aptekaImg} />
    </div>
  );
};
