import { aptekaImg, babyImg } from "@/shared/assets";
import { BannerInformation } from "@/shared/ui";

export const MaryBannerInformation = () => {
  return (
    <BannerInformation
      imgUrl1={babyImg}
      imgUrl2={aptekaImg}
      text={
        <span>
          Biz ana hám bala salamatlıǵı ushın kerek bolatuǵın barlıq paydalı
          tovarlardı: azıqlar, gigiena ónimleri, zamanagóy medicinalıq
          texnikalar, organizmdi qollap-quwatlaw ushın biologiyalıq aktiv
          qosımshalardı usınıs etemiz.
          <br />
          <br />
          Biz tek ǵana isenimli islep shıǵarıwshılardıń qadaǵalawdan ótken
          tovarların tańlaymız.
        </span>
      }
      title={<span>Dúkanımız haqqında</span>}
      className="bg-[#D9ECFA]"
    />
  );
};
