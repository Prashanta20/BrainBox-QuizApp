import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const MForgotPasswordForm = ({ className = "" }) => {
  const navigate = useNavigate();

  const pathChange = (path) => {
    navigate(path);
  };

  // CONTINUE WITH ADDING IT SO THE INPUT CHANGES AND THEN WORK ON SUBMITING IT

  const [formData, setFormData] = useState({
    animal: "",
    newPassword: "",
    email: "",
    conPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.newPassword !== formData.conPassword) {
      document.getElementById("reset-text").textContent =
        "Passwords Do Not Match";
      document.getElementById("reset-text").style.color = "red";
      document.getElementById("reset-text").style.fontWeight = "bold";
      return;
    }

    try {
      // Verify security question
      const verifyResponse = await fetch(
        "http://localhost:5000/api/verify-security-question",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            animal: formData.animal,
          }),
        },
      );
      if (verifyResponse.ok) {
        // Reset password
        const resetResponse = await fetch(
          "http://localhost:5000/api/reset-password",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: formData.email,
              animal: formData.animal,
              newPassword: formData.newPassword,
            }),
          },
        );

        const data = await resetResponse.json();

        if (resetResponse.ok) {
          document.getElementById("reset-text").textContent =
            "Password Successfully Changed";
          document.getElementById("reset-text").style.color = "green";
          document.getElementById("reset-text").style.fontWeight = "bold";
        } else {
          document.getElementById("reset-text").textContent = data.message;
          document.getElementById("reset-text").style.color = "red";
          document.getElementById("reset-text").style.fontWeight = "bold";
        }
      } else {
        const data = await verifyResponse.json();
        document.getElementById("reset-text").textContent = data.message;
        document.getElementById("reset-text").style.color = "red";
        document.getElementById("reset-text").style.fontWeight = "bold";
      }
    } catch (error) {
      document.getElementById("reset-text").textContent =
        "Error Changing Passwords";
      document.getElementById("reset-text").style.color = "red";
      document.getElementById("reset-text").style.fontWeight = "bold";
    }
  };

  return (
    <div
      className={`font-small-text absolute left-[31px] top-[265px] flex w-[327px] flex-col items-center justify-center gap-[31px] text-center text-sm text-black ${className}`}>
      <div className="flex flex-col items-center justify-start gap-[2px] text-lg">
        <div className="relative font-semibold leading-[150%]">
          Forgot Password
        </div>
        <div id="reset-text" className="relative text-sm leading-[150%]">
          Enter your email & answer your security question
        </div>
      </div>
      <input
        className="font-small-text text-gray border-gainsboro-200 box-border flex h-10 flex-row items-center justify-start self-stretch rounded-lg border-[1px] border-solid bg-white px-4 py-2 text-sm [outline:none]"
        placeholder="email@domain.com"
        type="text"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        className="font-small-text text-gray border-gainsboro-200 box-border flex h-10 flex-row items-center justify-start self-stretch rounded-lg border-[1px] border-solid bg-white px-4 py-2 text-sm [outline:none]"
        placeholder="Favourite animal"
        type="text"
        name="animal"
        value={formData.animal}
        onChange={handleChange}
      />
      <div className="relative leading-[150%]">Enter New Password</div>
      <input
        className="font-small-text text-gray border-gainsboro-200 box-border flex h-10 flex-row items-center justify-start self-stretch rounded-lg border-[1px] border-solid bg-white px-4 py-2 text-sm [outline:none]"
        placeholder="New Password"
        type="password"
        name="newPassword"
        value={formData.newPassword}
        onChange={handleChange}
      />
      <input
        className="font-small-text text-gray border-gainsboro-200 box-border flex h-10 flex-row items-center justify-start self-stretch rounded-lg border-[1px] border-solid bg-white px-4 py-2 text-sm [outline:none]"
        placeholder="Confirm Password"
        type="password"
        name="conPassword"
        value={formData.conPassword}
        onChange={handleChange}
      />
      <div
        onClick={handleSubmit}
        className="box-border flex h-10 cursor-pointer flex-row items-center justify-center self-stretch rounded-lg bg-black px-4 py-0 text-left text-white hover:opacity-80">
        <div className="relative font-medium leading-[140%]">
          Change Password
        </div>
      </div>
      <div
        onClick={() => pathChange("/")}
        className="box-border flex h-10 cursor-pointer flex-row items-center justify-center self-stretch rounded-lg bg-black px-4 py-0 text-left text-white hover:opacity-80">
        <div className="relative font-medium leading-[140%]">Back</div>
      </div>
    </div>
  );
};

MForgotPasswordForm.propTypes = {
  className: PropTypes.string,
};

export default MForgotPasswordForm;
