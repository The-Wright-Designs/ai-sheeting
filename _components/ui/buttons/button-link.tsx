import { buttonStyles } from "@/_styles/button-styles";
import { ButtonProps } from "@/_types/button-types";
import Link from "next/link";

const ButtonLink = ({
  children,
  onClick,
  cssClasses,
  href = "#",
  disabled,
  ariaLabel,
  primaryButton = false,
  target = "_self",
}: ButtonProps) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={buttonStyles(cssClasses, disabled, false, primaryButton)}
      aria-label={ariaLabel}
      target={target}
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
