import { cn } from "@/shared/lib/css";
import { ReactNode } from "react";

export const Banner = ({
  className,
  imgUrl,
  text,
  title,
}: {
  title: ReactNode;
  text: ReactNode;
  className?: string;
  imgUrl: string;
}) => {
  return (
    <div
      className={cn(
        "p-3 rounded-[12px] flex flex-col gap-2 relative",
        "sm:rounded-[24px] sm:p-5 sm:pt-7 sm:gap-5",
        "md:p-10 md:pt-[60px]",
        "lg:pb-96 lg:gap-8",
        className,
      )}
    >
      <div
        className={cn(
          "text-[28px] leading-9 text-[#000000E5] font-semibold",
          "sm:text-6xl sm:leading-16",
          "lg:text-8xl lg:w-full lg:leading-[110px]",
        )}
      >
        {title}
      </div>
      <div
        className={cn(
          "text-[13px] leading-[17px] w-[186px] text-[#00000099]",
          "sm:text-2xl sm:leading-9 sm:w-[300px]",
          "lg:w-[700px]",
        )}
      >
        {text}
      </div>
      <img
        src={imgUrl}
        className={cn(
          "w-[162px] h-[177px] absolute bottom-0 right-0",
          "sm:w-[300px] sm:h-[300px]",
          "md:w-[350px] md:h-[350px]",
          "lg:right-5 lg:w-[579px] lg:h-[633px]",
        )}
      />
    </div>
  );
};

export const Layout = ({
  content,
  footer,
  header,
}: {
  header: ReactNode;
  content: ReactNode;
  footer: ReactNode;
}) => {
  return (
    <>
      <div className={cn("flex flex-col px-3 pb-10", "md:px-8")}>
        {header}
        <div className={cn("flex flex-col gap-10 py-5", "sm:gap-20")}>
          {content}
        </div>
      </div>
      {footer}
    </>
  );
};

export const BannerInformation = ({
  imgUrl1,
  imgUrl2,
  text,
  title,
  className,
}: {
  title: ReactNode;
  text: ReactNode;
  imgUrl1: string;
  imgUrl2: string;
  className?: string;
}) => {
  return (
    <div
      className={cn("flex flex-col gap-5", "lg:flex-row w-full")}
      id="darixana"
    >
      <div
        className={cn(
          "p-3 pb-36 rounded-[12px] flex flex-col gap-2 relative",
          "sm:rounded-[24px] sm:p-5 sm:pt-7 sm:gap-2",
          "md:p-10",
          "lg:gap-0 lg:w-[60%]",
          className,
        )}
      >
        <div
          className={cn(
            "text-[28px] leading-9 font-semibold",
            "sm:text-4xl sm:leading-16",
            "lg:text-[64px] lg:w-full lg:leading-[110px]",
          )}
        >
          {title}
        </div>
        <div
          className={cn(
            "text-[13px] leading-[17px]",
            "sm:text-2xl sm:leading-9 sm:w-[300px]",
            "lg:w-[700px]",
          )}
        >
          {text}
        </div>
        <img
          src={imgUrl1}
          className={cn(
            "w-[161px] h-[159px] absolute right-3 bottom-0",
            "sm:w-[273px] sm:h-[269px]",
            "lg:right-5",
          )}
        />
      </div>
      <img src={imgUrl2} className="lg:w-[40%]" />
    </div>
  );
};

export const TitleBlock = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "font-semibold text-[28px]",
        "sm:text-5xl",
        "lg:text-[64px]",
        className,
      )}
    >
      {text}
    </div>
  );
};

export const ProsCard = ({
  text,
  title,
  imgUrl,
  className,
}: {
  title: string;
  text: ReactNode;
  imgUrl: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "p-3 rounded-[12px] flex flex-col gap-2 relative",
        "sm:rounded-[24px] sm:p-5 sm:pt-7 sm:gap-2",
        "md:p-10",
        className,
      )}
    >
      <div
        className={cn(
          "text-[28px] leading-9 font-semibold",
          "sm:text-4xl sm:leading-10",
          "lg:w-full lg:leading-[110px]",
        )}
      >
        {title}
      </div>
      <div className={cn("flex flex-col", "sm:flex-row sm:justify-between")}>
        <div
          className={cn(
            "text-[13px] w-[302px] leading-[17px]",
            "sm:text-2xl sm:leading-9 sm:w-[400px]",
            "lg:w-[700px]",
          )}
        >
          {text}
        </div>
        <div
          className={cn(
            "flex justify-end items-end",
            "sm:items-center sm:justify-center",
          )}
        >
          <img
            src={imgUrl}
            className={cn(
              "w-[88px] h-[88px]",
              "sm:w-[128px] sm:h-[128px]",
              "lg:right-5",
            )}
          />
        </div>
      </div>
    </div>
  );
};

export const Footer = ({
  ImgUrlLogo,
  title,
  ImgUrl1,
  ImgUrl2,
  ImgUrl3,
  ImgUrl4,
  text1,
  text2,
  text3,
  text4,
}: {
  title: string;
  ImgUrlLogo: string;
  ImgUrl1: string;
  ImgUrl2: string;
  ImgUrl3: string;
  ImgUrl4: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
}) => {
  const ImgText = ({ imgUrl, text }: { imgUrl: string; text: string }) => {
    return (
      <div
        className={cn(
          "text-[#FFFFFF99] text-[17px] flex gap-5",
          "md:text-2xl ",
        )}
      >
        <img src={imgUrl} className={cn("w-[24px] h-[24px]", "")} />{" "}
        <span>{text}</span>
      </div>
    );
  };
  return (
    <div
      className={cn(
        "bg-[#2C3033] p-3 pt-5 flex flex-col gap-5 relative",
        "sm:p-5 sm:pt-7 sm:gap-2",
        "md:p-10",
      )}
    >
      <div className="flex flex-row justify-between items-center">
        <div className="text-[28px] font-bold text-white">{title}</div>
        <img src={ImgUrlLogo} className="hidden lg:block" />
      </div>

      <div className="leading-9 flex flex-col gap-3">
        <ImgText imgUrl={ImgUrl1} text={text1} />
        <ImgText imgUrl={ImgUrl2} text={text2} />
        <ImgText imgUrl={ImgUrl3} text={text3} />
        <ImgText imgUrl={ImgUrl4} text={text4} />
        <img src={ImgUrlLogo} className="w-[51px] h-[32px] lg:hidden" />
      </div>
    </div>
  );
};
