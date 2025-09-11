import { questionImg } from "@/shared/assets";
import { ZayavkaForm } from "./zayavka-form";
import { cn } from "@/shared/lib/css";

export const Forma = () => {
  return (
    <div
      id="baylanis"
      className={cn(
        "bg-[#D9ECFA] p-3 rounded-[12px] flex flex-col gap-5 relative",
        "sm:rounded-[24px] sm:p-5 sm:pt-7 sm:gap-10",
        "md:p-10",
        "lg:pt-16 lg:pb-36",
      )}
    >
      <div
        className={cn(
          "text-[28px] text-[#000000E5] leading-9 font-semibold",
          "sm:text-4xl sm:leading-10",
          "lg:text-[64px] lg:w-full lg:leading-[110px]",
        )}
      >
        Baylanıs
      </div>
      <div
        className={cn(
          "text-[13px] text-[#00000099] w-[302px] leading-[17px]",
          "sm:text-2xl sm:leading-9 sm:w-[400px]",
          "lg:w-[500px]",
        )}
      >
        Bizge sorawlarıńızdı tikkeley sayt arqalı, usı formanı toltırıw arqalı
        jollasańız boladı.
      </div>
      <img
        src={questionImg}
        className="hidden lg:block absolute left-1/3 bottom-0"
      />
      <div className="lg:absolute lg:right-20">
        <ZayavkaForm />
      </div>
    </div>
  );
};
