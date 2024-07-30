import PropTypes from "prop-types";

const MBackgroundIcon = ({ className = "" }) => {
  return (
    <img
      className={`absolute top-[130px] left-[-35px] w-[446px] h-[705px] ${className}`}
      alt=""
      src="/background.svg"
    />
  );
};

MBackgroundIcon.propTypes = {
  className: PropTypes.string,
};

export default MBackgroundIcon;
