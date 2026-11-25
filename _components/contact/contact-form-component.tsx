"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

import ButtonType from "../ui/buttons/button-type";
import { sendEmail } from "@/_actions/send-email-actions";

interface Props {
  cssClasses?: string;
  freeQuote?: boolean;
}

const fieldClasses =
  "w-full rounded-md bg-skyBlue px-4 italic text-blue placeholder:text-blue/50";

const ContactForm = ({ cssClasses, freeQuote }: Props) => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [showEmailSubmitted, setShowEmailSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showEmailSubmitted) {
      cardRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [showEmailSubmitted]);

  return (
    <div className={classNames("flex flex-col gap-5", cssClasses)}>
      <div
        ref={cardRef}
        className={classNames(
          "flex flex-col gap-5 rounded-2xl p-5 min-[1000px]:p-7",
          showEmailSubmitted
            ? "min-h-[400px] items-center justify-center bg-skyBlue text-center"
            : "bg-white",
        )}
      >
        {showEmailSubmitted ? (
          <>
            <h3 className="text-[24px] font-semibold text-blue">
              Thank you for your message!
            </h3>
            <p className="text-blue">
              We will get back to you as soon as possible.
            </p>
          </>
        ) : (
          <>
            <h3 className="text-[24px] font-semibold text-blue">
              Get In Touch
            </h3>
            <form
              className="flex flex-col gap-5"
              action={async (formData) => {
                try {
                  setError(null);
                  setIsSubmitting(true);

                  if (!executeRecaptcha) {
                    await new Promise((resolve) => setTimeout(resolve, 1000));
                    if (!executeRecaptcha) {
                      setError(
                        "Security verification unavailable. Please refresh the page and try again.",
                      );
                      return;
                    }
                  }

                  const recaptchaToken = await executeRecaptcha("contact_form");
                  formData.append("recaptchaToken", recaptchaToken);

                  const result = await sendEmail(formData);

                  if (result.success) {
                    setShowEmailSubmitted(true);
                  } else {
                    setError(
                      result.error ||
                        "Failed to send message. Please try again.",
                    );
                  }
                } catch (err) {
                  setError("An unexpected error occurred. Please try again.");
                  console.error("Contact form error:", err);
                } finally {
                  setIsSubmitting(false);
                }
              }}
            >
              <input type="hidden" name="_honey" className="hidden" />

              <label htmlFor="emailAddress" className="flex flex-col gap-2">
                <span className="text-blue">Email:</span>
                <input
                  type="email"
                  id="emailAddress"
                  name="email"
                  placeholder="Email address"
                  className={classNames(fieldClasses, "h-12")}
                  autoComplete="email"
                  required
                />
              </label>

              <label htmlFor="fullName" className="flex flex-col gap-2">
                <span className="text-blue">Name:</span>
                <input
                  type="text"
                  id="fullName"
                  name="name"
                  placeholder="Full name"
                  className={classNames(fieldClasses, "h-12")}
                  autoComplete="name"
                  required
                />
              </label>

              <label htmlFor="message" className="flex flex-col gap-2">
                <span className="text-blue">Message:</span>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Type your message here..."
                  className={classNames(fieldClasses, "py-4")}
                  required
                  rows={3}
                />
              </label>

              {error && (
                <div className="rounded-md border border-[#B42318]/50 bg-[#B42318]/10 p-3">
                  <p className="text-[14px] text-[#B42318]">{error}</p>
                </div>
              )}

              <div className="flex flex-col gap-2">
                <ButtonType
                  disabled={isSubmitting}
                  primaryButton
                  cssClasses="mb-2 desktop:w-[240px]"
                >
                  Submit
                </ButtonType>

                <p className="text-center text-[12px] text-blue desktop:text-left">
                  This site is protected by reCAPTCHA and the Google{" "}
                  <Link
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    className="text-[12px] underline"
                  >
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="https://policies.google.com/terms"
                    target="_blank"
                    className="text-[12px] underline"
                  >
                    Terms of Service
                  </Link>{" "}
                  apply.
                </p>
              </div>
            </form>
          </>
        )}
      </div>
      <Image
        src="/images/projects/old-website/20180720_113017.jpg"
        alt="A&I Sheeting - Contact Us"
        width={700}
        height={875}
        className={classNames(
          "h-[450px] w-full rounded-2xl object-cover",
          freeQuote ? "hidden" : "hidden tablet:block",
        )}
      />
    </div>
  );
};

export default ContactForm;
