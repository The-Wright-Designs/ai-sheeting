"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import navList from "@/_data/navigation-data.json";

import classNames from "classnames";

interface Props {
  cssClasses?: string;
}

const DesktopHeader = ({ cssClasses }: Props) => {
  const pathName = usePathname();

  return (
    <div
      className={classNames(
        "items-end gap-5 w-full max-w-[1280px] mx-auto pt-6 pb-7",
        cssClasses,
      )}
    >
      <div className="flex flex-1 items-center gap-5">
        <Link
          href="/"
          className="shrink-0 hover:opacity-95 ease-in-out duration-300"
        >
          <Image
            src="/logo/a&i-sheeting-logo-white.png"
            alt="A&I Sheeting logo"
            width={122}
            height={80}
            priority
          />
        </Link>
        <div className="w-[145px] text-left">
          <h2 className="text-[22px] flex flex-col font-semibold text-white text-left leading-6.5">
            50 Years
            <span className="text-[18px] font-light text-white text-left">
              Of Successful Roofing Solutions
            </span>
          </h2>
        </div>
      </div>
      <nav>
        <ul className="list-none m-0 flex items-center gap-4">
          {navList.map(({ title, url }, index) => (
            <li key={index}>
              <Link
                href={url}
                className={classNames("whitespace-nowrap", {
                  "bg-white px-3 py-2 rounded-xl text-blue font-semibold block desktop:hover:cursor-pointer desktop:hover:bg-skyBlue ease-in-out duration-300 delay-100":
                    title === "Get A Free Roof Inspection",
                  "text-white relative after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-full after:bg-white after:scale-x-0 after:origin-center after:transition-transform after:duration-300 after:delay-100 desktop:hover:after:scale-x-100":
                    title !== "Get A Free Roof Inspection",
                  "font-semibold after:scale-x-100":
                    pathName === url && title !== "Get A Free Roof Inspection",
                })}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default DesktopHeader;
