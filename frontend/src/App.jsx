import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import CreateAccount from "./pages/CreateAccount";
import LogIn from "./pages/LogIn";
import ForgotPassword from "./pages/ForgotPassword";
import Help from "./pages/Help";
import Profile from "./pages/Profile";
import Question from "./pages/Question";
import Home from "./pages/Home";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "My App"; // Default title
    let metaDescription = "Default description"; // Default meta description

    switch (pathname) {
      case "/create-account":
        title = "Create Account - My App";
        metaDescription = "Create an Account is you do not have one.";
        break;
      case "/":
        title = "Log In - My App";
        metaDescription = "Log in to access your account.";
        break;
      case "/forgot-password":
        title = "Forgot Password - My App";
        metaDescription = "Recover your password here.";
        break;
      case "/help":
        title = "Help - My App";
        metaDescription = "Get help and support.";
        break;
      case "/profile":
        title = "Profile - My App";
        metaDescription = "View and edit your profile.";
        break;
      case "/question":
        title = "Question - My App";
        metaDescription = "View and ask questions.";
        break;
      case "/home":
        title = "Home - My App";
        metaDescription = "Welcome to the home page of My App.";
        break;
      default:
        title = "My App";
        metaDescription = "Default description for My App.";
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]',
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LogIn />} />
      <Route path="/create-account" element={<CreateAccount />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/help" element={<Help />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/question" element={<Question />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
