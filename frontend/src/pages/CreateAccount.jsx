import MHeader from "../components/MHeader";
import MBackgroundIcon from "../components/MBackgroundIcon";
import MCreateAccountForm from "../components/MCreateAccountForm";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
  // const navigate = useNavigate();

  // const titleClick = () => {
  //   navigate("/login");
  // };
  return (
    <div className="relative h-[844px] w-full overflow-hidden bg-white">
      <MHeader />
      <MBackgroundIcon />
      <MCreateAccountForm />
    </div>
  );
};

export default CreateAccount;
