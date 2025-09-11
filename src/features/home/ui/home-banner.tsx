import { symbolImg } from "@/shared/assets";
import { Banner } from "@/shared/ui";

export const HomeBanner = () => {
  return (
    <Banner
      className="bg-[#FFEFEE]"
      title="«Ájiniyaz qaraqalpaq» dárixanası"
      text="«Ájiniyaz qaraqalpaq» Qaraqalpaqstandaǵı eń iri dárixanalar tarmaǵınıń
          biri bolıp, biziń maqsetimiz — xalqımızdı arzan hám sapalı dári-darmaq
          ónimleri menen támiyinlew."
      imgUrl={symbolImg}
    />
  );
};
