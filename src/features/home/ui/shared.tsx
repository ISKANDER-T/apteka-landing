import { phone, sharedImg, symbolImg2 } from "@/shared/assets";
import { cn } from "@/shared/lib/css";

export const Shared = () => {
  return (
    <div
      className={cn(
        "bg-[#FFEFEE] p-3 rounded-[12px] flex flex-col gap-2 relative",
        "sm:rounded-[24px] sm:p-5 sm:pt-7 sm:gap-2",
        "md:p-10",
        "lg:pt-16",
      )}
    >
      <div
        className={cn(
          "text-[28px] text-[#000000E5] leading-9 font-semibold",
          "sm:text-4xl sm:leading-10",
          "lg:text-[64px] lg:w-full lg:leading-[110px]",
        )}
      >
        Mobil qosımsha
      </div>
      <div className={cn("flex flex-col gap-5", "lg:gap-20")}>
        <div
          className={cn(
            "text-[13px] text-[#00000099] w-[302px] leading-[17px]",
            "sm:text-2xl sm:leading-9 sm:w-[400px]",
            "lg:w-[572px]",
          )}
        >
          Mobil qosımshamız arqalı da xızmetlerimizden paydalanıwıńız hám bonus
          ballarıńızdı basqarıp <br /> barıwıńız múmkin.
        </div>
        <div>
          <img
            src={sharedImg}
            className={cn("w-[160px] h-[48px]", "lg:right-5")}
          />
        </div>
      </div>
      <img
        src={symbolImg2}
        className="hidden lg:block absolute right-96 bottom-0"
      />
      <img src={phone} className="hidden lg:block absolute right-16 bottom-0" />
    </div>
  );
};
