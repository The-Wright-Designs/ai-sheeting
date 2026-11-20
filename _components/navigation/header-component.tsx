import DesktopHeader from "./header/desktop-header";
import MobileHeader from "./header/mobile-header";

interface Props {
  cssClasses?: string;
}

const Header = ({ cssClasses }: Props) => {
  return (
    <header
      className={`w-full sticky top-0  border-b-4 border-skyBlue shadow-sm mb-12 z-20 bg-blue ${cssClasses}`}
    >
      <div className="max-w-[1400px] h-full px-5 tabletLarge:px-10 desktop:mx-auto desktop:px-0">
        <MobileHeader cssClasses="desktop:hidden" />
        <DesktopHeader cssClasses="hidden desktop:flex" />
      </div>
    </header>
  );
};

export default Header;
