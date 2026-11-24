import DesktopHeader from "./header/desktop-header";
import MobileHeader from "./header/mobile-header";

interface Props {
  cssClasses?: string;
}

const Header = ({ cssClasses }: Props) => {
  return (
    <header
      className={`w-full sticky top-0  border-b-4 border-skyBlue shadow-sm z-20 bg-blue ${cssClasses}`}
    >
      <div className="max-w-[1280px] h-full px-7 mx-auto min-[1360px]:px-0">
        <MobileHeader cssClasses="desktop:hidden" />
        <DesktopHeader cssClasses="hidden desktop:flex" />
      </div>
    </header>
  );
};

export default Header;
