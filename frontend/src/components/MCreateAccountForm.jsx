import PropTypes, { element } from "prop-types";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const MCreateAccountForm = ({ className = "" }) => {
  const navigate = useNavigate();

  const pathChange = (path) => {
    navigate(path);
  };

  // complete

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    animal: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        console.log("User registered:", data);
        navigate("/"); // Redirect to some path on success
      } else {
        console.error("Error registering user:", data.message);
        document.getElementById("account-text").textContent =
          "User Already Exists, Please Try Again";
        document.getElementById("account-text").style.color = "red";
        document.getElementById("account-text").style.fontWeight = "bold";
      }
    } catch (error) {
      console.error("Network error:", error);
    }

    // set the session variable to the email
    const { email } = formData;
    sessionStorage.setItem("email", email);
  };

  return (
    <div
      className={`font-small-text absolute left-[32px] top-[215px] flex h-[506px] w-[327px] flex-col items-center justify-center gap-[20px] text-center text-sm text-black ${className}`}>
      <div className="flex flex-col items-center justify-start gap-[2px] text-lg">
        <div className="relative font-semibold leading-[150%]">
          Create Account
        </div>
        <div id="account-text" className="relative text-sm leading-[150%]">
          Enter your email and password to Create Account
        </div>
      </div>
      <input
        className="font-small-text text-gray border-gainsboro-200 box-border flex h-10 flex-row items-center justify-start self-stretch rounded-lg border-[1px] border-solid bg-white px-4 py-2 text-sm [outline:none]"
        placeholder="email@domain.com"
        type="email"
        id="email"
        value={formData.email}
        onChange={handleChange}
        required
        name="email"
      />
      <input
        className="font-small-text text-gray border-gainsboro-200 box-border flex h-10 flex-row items-center justify-start self-stretch rounded-lg border-[1px] border-solid bg-white px-4 py-2 text-sm [outline:none]"
        placeholder="Password"
        type="password"
        id="password"
        value={formData.password}
        onChange={handleChange}
        required
        name="password"
      />
      <input
        className="font-small-text text-gray border-gainsboro-200 box-border flex h-10 flex-row items-center justify-start self-stretch rounded-lg border-[1px] border-solid bg-white px-4 py-2 text-sm [outline:none]"
        placeholder="Name"
        type="text"
        id="username"
        value={formData.username}
        onChange={handleChange}
        required
        name="username"
      />
      <div className="bg-whitesmoke text-gray flex w-[327px] flex-row items-center justify-center gap-[8px]">
        <div className="bg-gainsboro-100 relative h-px flex-1" />
        <div className="relative leading-[140%]">{`Security Question `}</div>
        <div className="bg-gainsboro-100 relative h-px flex-1" />
      </div>
      <input
        className="font-small-text text-gray border-gainsboro-200 box-border flex h-10 flex-row items-center justify-start self-stretch rounded-lg border-[1px] border-solid bg-white px-4 py-2 text-sm [outline:none]"
        placeholder="Favourite Animal"
        type="text"
        id="animal"
        value={formData.animal}
        onChange={handleChange}
        required
        name="animal"
      />
      <div
        onClick={handleSubmit}
        className="box-border flex h-10 cursor-pointer flex-row items-center justify-center self-stretch rounded-lg bg-black px-4 py-0 text-left text-white hover:opacity-80">
        <div className="relative font-medium leading-[140%]">
          Create Account
        </div>
      </div>
      <div
        onClick={() => pathChange("/")}
        className="mt-8 box-border flex h-10 cursor-pointer flex-row items-center justify-center self-stretch rounded-lg bg-black px-4 py-0 text-left text-white hover:opacity-80">
        <div className="relative font-medium leading-[140%]">Back</div>
      </div>
    </div>
  );
};

MCreateAccountForm.propTypes = {
  className: PropTypes.string,
};

export default MCreateAccountForm;
