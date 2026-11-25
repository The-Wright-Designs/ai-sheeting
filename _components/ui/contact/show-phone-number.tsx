"use client";

import Link from "next/link";
import { useState } from "react";
import classNames from "classnames";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { fetchPhone } from "@/_actions/contact-actions";
import { ShowPhoneNumberProps } from "@/_types/general-types";

const ShowPhoneNumber = ({
  index = 0,
  buttonClasses,
  linkClasses,
}: ShowPhoneNumberProps) => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [showPhone, setShowPhone] = useState("Show phone number");
  const [showSpinnerPhone, setShowSpinnerPhone] = useState(false);

  const handleShowPhoneNumber = async () => {
    setShowSpinnerPhone(true);
    try {
      let recaptchaToken: string | undefined;
      if (executeRecaptcha) {
        recaptchaToken = await executeRecaptcha("fetch_phone");
      }
      const phoneNumber =
        (await fetchPhone(recaptchaToken, index)) || "Phone number not found";
      setShowPhone(phoneNumber);
    } catch (error) {
      console.error("Error fetching phone:", error);
      setShowPhone("Phone not available");
    }
    setShowSpinnerPhone(false);
  };

  if (showPhone === "Show phone number") {
    return (
      <button
        onClick={handleShowPhoneNumber}
        className={classNames(
          "text-left italic self-start text-[#3366CC] desktop:hover:cursor-pointer desktop:hover:opacity-90",
          buttonClasses,
        )}
        aria-label="Show phone number"
      >
        {showSpinnerPhone ? (
          <div className="pt-1">
            <div className="spinner"></div>
          </div>
        ) : (
          showPhone
        )}
      </button>
    );
  }

  return (
    <Link
      href={`tel:${showPhone}`}
      className={classNames(
        "self-start text-[#3366CC] desktop:hover:opacity-90",
        linkClasses,
      )}
    >
      {showPhone}
    </Link>
  );
};

export default ShowPhoneNumber;
