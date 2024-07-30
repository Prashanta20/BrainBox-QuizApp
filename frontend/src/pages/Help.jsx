import MHeader from "../components/MHeader";
import MBackgroundIcon from "../components/MBackgroundIcon";
import MNavigation from "../components/MNavigation";
import MHomeNavigation from "../components/MHomeNavigation";

const Help = () => {
  return (
    <div className="relative h-[844px] w-full overflow-hidden bg-white">
      <MHeader />
      <MBackgroundIcon />
      <MNavigation
        frame1="/frame-1.svg"
        frameIconWidth="15.89%"
        frameIconLeft="84.11%"
      />
      <div className="absolute left-[61px] top-[220px] h-[507px] w-[279px]">
        <MHomeNavigation
          option1="I Understand"
          option2="Help"
          option3="Log out"
          text="To start practising, simply click on the Questions button. Read the question carefully and select one of the multiple choice answers"
          showButton2={false}
          showButton3={false}
          showButton4={false}
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

export default Help;
