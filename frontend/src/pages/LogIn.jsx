import MHeader from "../components/MHeader";
import MBackgroundIcon from "../components/MBackgroundIcon";
import MNavigation from "../components/MNavigation";
import MLogInInput from "../components/MLogInInput";

const LogIn = () => {
  return (
    <div className="relative h-[844px] w-full overflow-hidden bg-white">
      <MHeader />
      <MBackgroundIcon />
      <MLogInInput />
    </div>
  );
};

export default LogIn;
