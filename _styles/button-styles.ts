import classNames from "classnames";

export const buttonStyles = (
  cssClasses?: string,
  disabled?: boolean,
  pending?: boolean,
  primaryButton?: boolean,
) =>
  classNames(
    "border-2 flex text-subheading text-center px-10 py-3 justify-center ease-in-out duration-300 rounded-md",
    cssClasses,
    {
      "opacity-50 cursor-not-allowed": pending || disabled,
      "desktop:hover:cursor-pointer": !(disabled || pending),
      "bg-blue text-white border-blue": primaryButton,
      "desktop:hover:bg-white desktop:hover:text-blue":
        primaryButton && !(disabled || pending),
      "bg-white text-black border-blue": !primaryButton,
      "desktop:hover:bg-blue desktop:hover:text-white":
        !primaryButton && !(disabled || pending),
    },
  );
