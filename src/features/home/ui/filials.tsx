import { aptekaImg } from "@/shared/assets";
import { TitleBlock } from "@/shared/ui";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/shared/ui/kit/carousel";

const filialsData: { text: string }[] = [
  {
    text: "26-mikrorayon",
  },
  {
    text: "Xojeli filialı",
  },
  {
    text: "Nókis rayonı",
  },
  {
    text: "Qońırat rayonı",
  },
];

export const Filials = () => {
  return (
    <div className="flex flex-col gap-5" id="filial">
      <TitleBlock text="Filiallar" />
      <Carousel className="w-full">
        <CarouselContent className="-ml-1">
          {filialsData.map((item, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/4"
            >
              <div className="p-1">
                <img src={aptekaImg} />
                <div className="text-2xl font-semibold pt-2">{item.text}</div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
