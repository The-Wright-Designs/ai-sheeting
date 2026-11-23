import classNames from "classnames";

export const buttonStyles = (
  cssClasses?: string,
  disabled?: boolean,
  pending?: boolean,
) =>
  classNames("group relative flex rounded-2xl", cssClasses, {
    "opacity-50 cursor-not-allowed": pending || disabled,
    "desktop:hover:cursor-pointer": !(disabled || pending),
  });

export const buttonShadowStyles = (primaryButton?: boolean) =>
  classNames(
    "absolute inset-0 rounded-2xl -translate-x-[3px] translate-y-[7px]",
    {
      "bg-skyBlue/80": primaryButton,
      "bg-white/95": !primaryButton,
    },
  );

export const buttonFaceStyles = (
  disabled?: boolean,
  pending?: boolean,
  primaryButton?: boolean,
) =>
  classNames(
    "relative flex w-full items-center justify-between gap-3 rounded-2xl px-5 py-[12px] text-[15px] font-semibold ease-out duration-200 transition-transform",
    {
      "bg-blue text-white": primaryButton,
      "bg-skyBlue text-blue": !primaryButton,
      "desktop:group-hover:translate-y-[3px] desktop:group-hover:-translate-x-px":
        !(disabled || pending),
    },
  );

export const buttonIconColor = (primaryButton?: boolean) =>
  primaryButton ? "#FFFFFF" : "#293458";
