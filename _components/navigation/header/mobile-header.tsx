"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TextAlignJustifyEnd, X } from "lucide-react";

import ButtonLink from "@/_components/ui/buttons/button-link";

import navList from "@/_data/navigation-data.json";

import classNames from "classnames";

interface Props {
  cssClasses?: string;
}

const MobileHeader = ({ cssClasses }: Props) => {
  const [menuToggle, setMenuToggle] = useState(false);

  const pathName = usePathname();

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutSideClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setMenuToggle(false);
      }
    };

    window.addEventListener("mousedown", handleOutSideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [ref]);

  useEffect(() => {
    if (menuToggle) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [menuToggle]);

  return (
    <div ref={ref} className={cssClasses}>
      <div className="flex gap-7 items-center justify-between w-full pt-4 pb-5">
        <div className="flex gap-3 items-center flex-1">
          <Link href="/" className="shrink-0">
            <Image
              src="/logo/a&i-sheeting-logo-white.png"
              alt="A&I Sheeting logo"
              width={79}
              height={52}
              priority
            />
          </Link>
          <h2 className="w-[137px] font-light max-w-[160px] flex-1 text-left text-[13px] text-white leading-4.5">
            <span className="font-semibold text-white">50 Years</span> Of
            Successful Roofing Solutions
          </h2>
        </div>
        <button
          type="button"
          onClick={() => setMenuToggle((prev) => !prev)}
          aria-label={menuToggle ? "Close menu" : "Open menu"}
          aria-expanded={menuToggle}
          className="relative z-50 grid p-4 -m-4 desktop:hover:cursor-pointer"
        >
          <TextAlignJustifyEnd
            size={28}
            strokeWidth={2.5}
            color="#FFFFFF"
            className={classNames(
              "col-start-1 row-start-1 transition-all duration-300 ease-in-out",
              menuToggle ? "opacity-0 rotate-90 scale-75" : "opacity-100",
            )}
          />
          <X
            size={28}
            color="#FFFFFF"
            strokeWidth={2.5}
            className={classNames(
              "col-start-1 row-start-1 transition-all duration-300 ease-in-out",
              menuToggle ? "opacity-100" : "opacity-0 -rotate-90 scale-75",
            )}
          />
        </button>
      </div>
      <nav
        inert={!menuToggle}
        aria-hidden={!menuToggle}
        className={classNames(
          "fixed top-0 right-0 z-40 h-screen w-3/4 phone:w-3/5 bg-blue overflow-hidden transition-transform duration-500 ease-in-out",
          menuToggle ? "translate-x-0" : "translate-x-full",
        )}
      >
        <ul className="list-none m-0 grid gap-7 px-8 pt-24">
          {navList.map(({ title, url }, index) => (
            <li key={index} className="text-left">
              {title === "Get A Free Roof Inspection" ? (
                <ButtonLink
                  href={url}
                  onClick={() => setMenuToggle(false)}
                  cssClasses="w-full"
                >
                  {title}
                </ButtonLink>
              ) : (
                <Link
                  href={url}
                  className={classNames("text-[20px] font-light text-white", {
                    "underline underline-offset-8 decoration-2 font-semibold":
                      pathName === url,
                  })}
                  onClick={() => setMenuToggle(false)}
                >
                  {title}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobileHeader;
