"use client";

import { useFormStatus } from "react-dom";
import { ButtonProps } from "@/_types/button-types";
import { buttonStyles } from "@/_styles/button-styles";

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
      className={buttonStyles(cssClasses, disabled, pending, primaryButton)}
      disabled={disabled || pending}
      title={title}
    >
      {pending && type === "submit" ? (
        <div className="flex items-center justify-center">
          <div className="spinner"></div>
        </div>
      ) : (
        <>{children}</>
      )}
    </button>
  );
};

export default ButtonType;
