import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const MLogInInput = ({ className = "" }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    password: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleClick = (path) => {
    navigate(path);
  };

  const fetchUserInfo = async () => {
    if (formData.email) {
      try {
        const response = await fetch("http://localhost:5000/api/profile", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: formData.email }), // Pass the email in the body
        });

        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new TypeError("Invalid JSON response");
        }

        const data = await response.json();
        if (response.ok) {
          sessionStorage.setItem("profile", JSON.stringify(data)); // Store the entire response
        } else {
          console.error("Error:", data.msg);
        }
      } catch (err) {
        console.error("Error fetching user info:", err);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        console.log("Logged In:", data);

        // get the full user and store them to the session storage
        await fetchUserInfo();

        navigate("/home"); // Redirect to some path on success
      } else {
        console.error("Error registering user:", data.message);
        document.getElementById("login-text").textContent =
          "Incorrect email or password";
        document.getElementById("login-text").style.color = "red";
        document.getElementById("login-text").style.fontWeight = "bold";
      }
      console.log(data); // Handle the response data as needed
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div
      className={`font-small-text absolute left-[32px] top-[267px] flex w-[327px] flex-col items-center justify-start gap-[16px] text-left text-sm text-white ${className}`}>
      <div className="flex flex-col items-center justify-start gap-[2px] text-center text-lg text-black">
        <div className="relative font-semibold leading-[150%]">Log in</div>
        <div id="login-text" className="relative text-sm leading-[150%]">
          Enter your email and password to log in
        </div>
      </div>
      <input
        className="font-small-text text-gray border-gainsboro-200 box-border flex h-10 flex-row items-center justify-start self-stretch rounded-lg border-[1px] border-solid bg-white px-4 py-2 text-sm [outline:none]"
        placeholder="email@domain.com"
        type="text"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        className="font-small-text text-gray border-gainsboro-200 box-border flex h-10 flex-row items-center justify-start self-stretch rounded-lg border-[1px] border-solid bg-white px-4 py-2 text-sm [outline:none]"
        placeholder="Password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <div
        onClick={() => handleClick("/forgot-password")}
        className="box-border flex h-[26px] w-[157px] cursor-pointer flex-row items-center justify-center rounded-lg bg-black px-4 py-0 hover:opacity-80">
        <div className="relative font-medium leading-[140%]">
          Forgot Password?
        </div>
      </div>

      <div
        onClick={handleSubmit}
        className="box-border flex h-10 cursor-pointer flex-row items-center justify-center self-stretch rounded-lg bg-black px-4 py-0 hover:opacity-80">
        <div className="relative font-medium leading-[140%]">Log in</div>
      </div>
      <div className="bg-whitesmoke text-gray flex w-[327px] flex-row items-center justify-center gap-[8px] text-center">
        <div className="bg-gainsboro-100 relative h-px flex-1" />
        <div className="relative leading-[140%]">{`or Create an Account `}</div>
        <div className="bg-gainsboro-100 relative h-px flex-1" />
      </div>
      <div
        onClick={() => handleClick("/create-account")}
        className="box-border flex h-10 cursor-pointer flex-row items-center justify-center self-stretch rounded-lg bg-black px-4 py-0 hover:opacity-80">
        <div className="relative font-medium leading-[140%]">
          Create Account
        </div>
      </div>
    </div>
  );
};

MLogInInput.propTypes = {
  className: PropTypes.string,
};

export default MLogInInput;
