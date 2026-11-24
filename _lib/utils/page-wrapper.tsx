import classNames from "classnames";

interface PageWrapperProps {
  children: React.ReactNode;
  cssClasses?: string;
}

const PageWrapper = ({ children, cssClasses }: PageWrapperProps) => {
  return (
    <div className="max-w-[1280px] mx-auto">
      <div className={classNames("px-7 min-[1360px]:px-0", cssClasses)}>
        {children}
      </div>
    </div>
  );
};

export default PageWrapper;
