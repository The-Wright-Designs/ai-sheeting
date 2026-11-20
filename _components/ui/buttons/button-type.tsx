"use client";

import { useFormStatus } from "react-dom";
import { ChevronRight } from "lucide-react";
import { ButtonProps } from "@/_types/button-types";
import {
  buttonFaceStyles,
  buttonIconColor,
  buttonShadowStyles,
  buttonStyles,
} from "@/_styles/button-styles";

const ButtonType = ({
  children,
  onClick,
  cssClasses,
  type = "submit",
  disabled = false,
  primaryButton = false,
  ariaLabel,
  title,
}: ButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      className={buttonStyles(cssClasses, disabled, pending)}
      disabled={disabled || pending}
      title={title}
    >
      <span className={buttonShadowStyles(primaryButton)} />
      <span className={buttonFaceStyles(disabled, pending, primaryButton)}>
        {pending && type === "submit" ? (
          <span className="flex flex-1 items-center justify-center">
            <span className="spinner"></span>
          </span>
        ) : (
          <>
            <span className="flex-1 text-center">{children}</span>
            <ChevronRight size={16} color={buttonIconColor(primaryButton)} />
          </>
        )}
      </span>
    </button>
  );
};

export default ButtonType;
