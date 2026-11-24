import {
  buttonFaceStyles,
  buttonIconColor,
  buttonShadowStyles,
  buttonStyles,
} from "@/_styles/button-styles";
import { ButtonProps } from "@/_types/button-types";
import { ChevronRight } from "lucide-react";
import classNames from "classnames";
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
      className={buttonStyles(cssClasses, disabled, false)}
      aria-label={ariaLabel}
      target={target}
    >
      <span className={buttonShadowStyles(primaryButton)} />
      <span className={buttonFaceStyles(disabled, false, primaryButton)}>
        <span
          className={classNames(
            "flex-1 text-center font-semibold",
            primaryButton ? "text-white" : "text-blue",
          )}
        >
          {children}
        </span>
        <ChevronRight
          size={22}
          strokeWidth={2.25}
          color={buttonIconColor(primaryButton)}
        />
      </span>
    </Link>
  );
};

export default ButtonLink;
