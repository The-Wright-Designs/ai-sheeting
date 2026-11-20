import Image from "next/image";

interface Props {
  src: string;
  alt?: string;
  phoneWidth?: number;
  tabletWidth?: number;
  desktopWidth: number;
  cssClasses?: string;
  pictureCssClasses?: string;
  eager?: boolean;
  onClick?: React.MouseEventHandler<HTMLImageElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLImageElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLImageElement>;
}

const ImageContainer = ({
  src,
  alt,
  desktopWidth,
  cssClasses,
  pictureCssClasses,
  eager,
  onMouseEnter,
  onMouseLeave,
  onClick,
}: Props) => {
  return (
    <picture className={pictureCssClasses}>
      <Image
        alt={alt || "A&I Sheeting"}
        src={src}
        width={desktopWidth}
        height={desktopWidth * 1.25}
        quality={75}
        loading={eager ? "eager" : "lazy"}
        className={cssClasses}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
    </picture>
  );
};

export default ImageContainer;
