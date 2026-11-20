import Image from "next/image";
import Link from "next/link";

import classNames from "classnames";

import navList from "@/_data/footer-navigation-data.json";

interface Props {
  cssClasses?: string;
}

const Footer = ({ cssClasses }: Props) => {
  return (
    <footer
      className={classNames(
        "border-t border-blue px-7 pt-10 pb-5 desktop:pt-[60px]",
        cssClasses,
      )}
    >
      <div className="flex flex-col items-center gap-5 w-full max-w-[1280px] mx-auto desktop:gap-3">
        <div className="flex items-center justify-between w-full desktop:gap-5">
          <nav className="hidden desktop:block">
            <ul className="list-none m-0 flex flex-col gap-[2px]">
              {navList.map(({ title, url }, index) => (
                <li key={index}>
                  <Link
                    href={url}
                    className={classNames("text-[12px] text-blue text-left", {
                      "font-light": title !== "Get A Free Roof Inspection",
                      "font-semibold": title === "Get A Free Roof Inspection",
                    })}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center justify-between w-full desktop:w-auto desktop:ml-auto desktop:gap-3">
            <Image
              src="/50-years-stamp-black.png"
              alt="Celebrating 50 years of roofing excellence"
              width={80}
              height={80}
            />
            <Image
              src="/logo/a&i-sheeting-logo-black.png"
              alt="A&I Sheeting logo"
              width={130}
              height={80}
              className="object-cover"
            />
          </div>
        </div>
        <hr className="m-0 h-px w-full border-0 bg-blue/25 desktop:w-[306px]" />
        <div className="text-center desktop:flex desktop:justify-center">
          <p className="text-[14px] font-light text-blue text-center">
            © A&I Sheeting
            <span className="hidden desktop:inline text-blue">&nbsp;|&nbsp;</span>
          </p>
          <Link
            href="https://www.roofrefurb.co.za"
            className="block text-[14px] font-light text-blue text-center"
          >
            www.roofrefurb.co.za
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
