import MHeader from "../components/MHeader";
import MBackgroundIcon from "../components/MBackgroundIcon";
import MNavigation from "../components/MNavigation";
import MHomeNavigation from "../components/MHomeNavigation";

const Home = () => {
  return (
    <div className="relative h-[844px] w-full overflow-hidden bg-white">
      <MHeader />
      <MBackgroundIcon />
      <MNavigation frame1="/frame-1.svg" />
      <MHomeNavigation
        option1="Practice"
        option2="Help"
        option3="Log out"
        option4=""
        text="Welcome to Brain Box, your anything practice questions"
        showButton2
        showButton3
        showButton4={false}
        homeNavigationPosition="absolute"
        homeNavigationTop="201px"
        homeNavigationLeft="55px"
        homeNavigationWidth="279px"
        homeNavigationHeight="507px"
        homeNavigationRight="unset"
        homeNavigationBottom="unset"
      />
    </div>
  );
};

export default Home;
