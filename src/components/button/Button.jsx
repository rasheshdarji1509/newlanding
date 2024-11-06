import { useState } from "react";
import { Marker } from "../marker/Marker";

const Button = ({
  icon,
  children,
  href,
  containerClassName,
  onClick,
  markerFill,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const buttonClassName = `relative p-0.5 g5 rounded-2xl shadow-500 group ${containerClassName} ${isHovered ? "hovered-class" : ""}`;

  const Inner = () => (
    <>
      <span className="relative flex items-center min-h-[60px] px-4 g4 rounded-2xl inner-before overflow-hidden">
        <span className="absolute -left-[1px]">
          <Marker markerFill={markerFill} />
        </span>

        {icon && (
          <img
            src={icon}
            alt="icon"
            className="size-10 mr-5 object-contain z-10"
          />
        )}

        <span className="relative z-2 font-poppins base-bold text-p1 uppercase">
          {children}
        </span>
      </span>

      <span className="glow-before glow-after" />
    </>
  );

  return href ? (
    <a
      className={buttonClassName}
      href={href}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Inner />
    </a>
  ) : (
    <button
      className={buttonClassName}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Inner />
    </button>
  );
};

export default Button;
