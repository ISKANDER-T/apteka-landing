import { phone, sharedImg, symbolImg2 } from "@/shared/assets";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/shared/ui/kit/card";

export const Shared = () => {
  return (
    <Card className="shadow-none bg-[#FFEFEE] relative pb-48">
      <CardHeader className="font-semibold text-[64px]">
        Mobil qosımsha
      </CardHeader>
      <CardContent className="leading-9 text-[#00000099] text-2xl">
        Mobil qosımshamız arqalı da xızmetlerimizden <br /> paydalanıwıńız hám
        bonus ballarıńızdı basqarıp <br />
        barıwıńız múmkin.
      </CardContent>
      <CardFooter>
        <img src={sharedImg} className="absolute bottom-10" />
      </CardFooter>
      <img src={symbolImg2} className="absolute right-96 bottom-0" />
      <img src={phone} className="absolute right-16 bottom-0" />
    </Card>
  );
};
