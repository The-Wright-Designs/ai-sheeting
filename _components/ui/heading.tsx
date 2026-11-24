import classNames from "classnames";

type HeadingProps = {
  children: React.ReactNode;
  white?: boolean;
  cssClasses?: string;
};

const Heading = ({ children, white = false, cssClasses }: HeadingProps) => {
  return (
    <h2
      className={classNames(
        "border-b-2 pb-3 text-left uppercase",
        white ? "border-white text-white" : "border-blue",
        cssClasses,
      )}
    >
      {children}
    </h2>
  );
};

export default Heading;
