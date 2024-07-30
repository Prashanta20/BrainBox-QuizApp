import { useMemo } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const MNavigation = ({
  className = "",
  frame1,
  frameIconWidth,
  frameIconLeft,
}) => {
  const navigate = useNavigate();
  const frameIconStyle = useMemo(() => {
    return {
      width: frameIconWidth,
      left: frameIconLeft,
    };
  }, [frameIconWidth, frameIconLeft]);

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div
      className={`absolute left-[5px] top-[791px] h-[53px] w-[392px] ${className}`}>
      <div className="absolute bottom-[0%] left-[0%] right-[0%] top-[0%] h-full w-full">
        <img
          onClick={() => handleClick("/profile")}
          className="absolute bottom-[22.83%] left-[84.11%] right-[0%] top-[22.64%] h-[54.53%] max-h-full w-[15.89%] max-w-full cursor-pointer overflow-hidden"
          alt=""
          src={frame1}
          style={frameIconStyle}
        />
        <div className="absolute bottom-[0%] left-[0%] right-[49.67%] top-[0%] box-border flex h-full w-[50.33%] flex-row items-start justify-start px-[26px] pb-2 pt-3">
          <img
            onClick={() => handleClick("/home")}
            className="relative h-6 w-6 shrink-0 cursor-pointer overflow-hidden"
            alt=""
            src="/home.svg"
          />
        </div>
      </div>
    </div>
  );
};

MNavigation.propTypes = {
  className: PropTypes.string,
  frame1: PropTypes.string,

  /** Style props */
  frameIconWidth: PropTypes.any,
  frameIconLeft: PropTypes.any,
};

export default MNavigation;
