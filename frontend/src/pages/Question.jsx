import MHeader from "../components/MHeader";
import MBackgroundIcon from "../components/MBackgroundIcon";
import MNavigation from "../components/MNavigation";
import MHomeNavigation from "../components/MHomeNavigation";

const Question = () => {
  return (
    <div className="relative h-[844px] w-full overflow-hidden bg-white">
      <MHeader />
      <MBackgroundIcon />
      <MNavigation
        frame1="/frame-1.svg"
        frameIconWidth="15.89%"
        frameIconLeft="84.11%"
      />
      <div className="absolute left-[55px] top-[215px] h-[507px] w-[279px]">
        <MHomeNavigation
          option1="Option 1:"
          option2="Option 2:"
          option3="Option 3:"
          option4="Option 4:"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nulla libero, consectetur ac porttitor ut, rutrum ac nulla. "
          showButton2
          showButton3
          showButton4
          homeNavigationPosition="absolute"
          homeNavigationTop="0%"
          homeNavigationLeft="0%"
          homeNavigationWidth="100%"
          homeNavigationHeight="100%"
          homeNavigationRight="0%"
          homeNavigationBottom="0%"
        />
      </div>
    </div>
  );
};

export default Question;
