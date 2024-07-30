import MHeader from "../components/MHeader";
import MBackgroundIcon from "../components/MBackgroundIcon";
import MNavigation from "../components/MNavigation";
import MForgotPasswordForm from "../components/MForgotPasswordForm";

const ForgotPassword = () => {
  return (
    <div className="relative h-[844px] w-full overflow-hidden bg-white">
      <MHeader />
      <MBackgroundIcon />
      <MForgotPasswordForm />
    </div>
  );
};

export default ForgotPassword;
