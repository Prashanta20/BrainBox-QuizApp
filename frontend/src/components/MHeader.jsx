import PropTypes from "prop-types";

const MHeader = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[14px] left-[0px] rounded-8xs box-border w-[390px] h-[187px] overflow-hidden text-center text-45xl text-black font-jejuhallasan border-[1px] border-dashed border-white ${className}`}
    >
      <div className="absolute top-[23px] left-[0px] w-[390px] h-[157px]">
        <img
          className="absolute h-[59.24%] w-[26.67%] top-[0%] right-[73.33%] bottom-[40.76%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/transparent-20240514t201456-1@2x.png"
        />
        <img
          className="absolute h-[59.24%] w-[26.67%] top-[0%] right-[0%] bottom-[40.76%] left-[73.33%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/transparent-20240514t201456-1@2x.png"
        />
        <div className="absolute h-[81.53%] w-[42.56%] top-[18.47%] left-[28.72%] inline-block">
          Brain Box
        </div>
      </div>
    </div>
  );
};

MHeader.propTypes = {
  className: PropTypes.string,
};

export default MHeader;
