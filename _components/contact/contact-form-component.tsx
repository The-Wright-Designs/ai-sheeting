"use client";

import { useState } from "react";
import Image from "next/image";

import ButtonType from "../ui/buttons/button-type";
import { sendEmail } from "@/_actions/send-email-actions";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

import classNames from "classnames";

interface Props {
  cssClasses?: string;
  freeQuote?: boolean;
}

const ContactForm = ({ cssClasses, freeQuote }: Props) => {
  const [showName, setShowName] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showEmailSubmitted, setShowEmailSubmitted] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");
  const { executeRecaptcha } = useGoogleReCaptcha();

  return (
    <div
      className={classNames(`${cssClasses}`, {
        "tabletLarge:row-span-2": showName,
      })}
    >
      <h5 className={`font-500 text-[24px] ${!freeQuote ? "" : "hidden"}`}>
        Get a quote now!
      </h5>
      <section
        className={`bg-orange -mx-5 py-8 px-8 ${
          !freeQuote ? "mt-12 mb-8" : ""
        } tabletLarge:mx-0`}
      >
        {!showEmailSubmitted ? (
          <form
            action={async (formData) => {
              if (!executeRecaptcha) {
                setErrorMessage("Please try again in a moment.");
                return;
              }
              formData.set(
                "recaptchaToken",
                await executeRecaptcha("contact_form")
              );
              const result = await sendEmail(formData);
              if (result.success) {
                setShowEmailSubmitted(true);
              } else {
                setErrorMessage(result.error || "Failed to send email");
              }
            }}
            className="flex flex-col gap-8"
          >
            <input
              type="text"
              name="_honey"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-500">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Email address"
                  className="bg-grey placeholder-black/75 border border-black/60 italic px-2 py-1 font-light focus:bg-pink focus:placeholder-beige focus:text-beige"
                />
              </div>
              {!showMessage && !showName ? (
                <ButtonType
                  type="button"
                  onClick={() => setShowName(true)}
                  cssClasses="tablet:w-[135px]"
                >
                  Next
                </ButtonType>
              ) : (
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-500">
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Full name"
                    className="bg-grey placeholder-black/75 border border-black/60 italic px-2 py-1 font-light focus:bg-pink focus:placeholder-beige focus:text-beige"
                  />
                </div>
              )}
            </div>
            {!showMessage && showName && (
              <ButtonType
                type="button"
                onClick={() => setShowMessage(true)}
                cssClasses="tablet:w-[135px]"
              >
                Next
              </ButtonType>
            )}
            {showMessage && (
              <>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="font-500">
                    Message:
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    name="message"
                    placeholder="Type your message here..."
                    className="bg-grey placeholder-black/75 border border-black/60 italic px-2 py-1 font-light focus:bg-pink focus:placeholder-beige focus:text-beige"
                  ></textarea>
                </div>
                {errorMessage && <p className="text-white">{errorMessage}</p>}
                <ButtonType cssClasses="tablet:w-[150px]">
                  Submit
                </ButtonType>
              </>
            )}
          </form>
        ) : (
          <div className="flex flex-col gap-8 py-8">
            <h5 className="font-500 text-white text-heading text-left">
              Thank you for your message!
            </h5>
            <p className="text-white">
              We will get back to you as soon as possible.
            </p>
          </div>
        )}
      </section>
      <Image
        src="/images/projects/old-website/20180720_113017.jpg"
        alt="A&I Sheeting - Contact Us"
        width={700}
        height={875}
        className={classNames(
          `object-cover h-[450px] w-full ${
            freeQuote ? "hidden" : "hidden tabletLarge:block"
          }`,
          {
            "tabletLarge:h-[354px]": showName && !showMessage,
            "tabletLarge:h-[161px]": showMessage && showMessage,
          }
        )}
      />
    </div>
  );
};

export default ContactForm;
