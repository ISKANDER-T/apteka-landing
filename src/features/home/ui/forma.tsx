import { questionImg } from "@/shared/assets";
import { Card, CardContent, CardHeader } from "@/shared/ui/kit/card";
import { ZayavkaForm } from "./zayavka-form";

export const Forma = () => {
  return (
    <Card
      id="baylanis"
      className="flex flex-row justify-between py-24 pr-20 shadow-none bg-[#D9ECFA] relative "
    >
      <div>
        <CardHeader className="text-[64px] font-semibold">Baylanıs</CardHeader>
        <CardContent className="text-[#00000099] leading-9 text-2xl">
          Bizge sorawlarıńızdı tikkeley sayt arqalı, usı <br />
          formanı toltırıw arqalı jollasańız boladı.
        </CardContent>
      </div>
      <img src={questionImg} className="absolute left-1/3 bottom-0" />
      <div className="">
        <ZayavkaForm />
      </div>
    </Card>
  );
};
