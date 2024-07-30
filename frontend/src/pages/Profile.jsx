import MHeader from "../components/MHeader";
import MBackgroundIcon from "../components/MBackgroundIcon";
import MNavigation from "../components/MNavigation";
import { useEffect } from "react";

const Profile = () => {
  const profileSet = (data) => {
    document.getElementById("name").textContent = data.user.username;
    document.getElementById("email").textContent = data.user.email;
  };

  useEffect(() => {
    const storedData = sessionStorage.getItem("profile");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      if (parsedData && parsedData.user) {
        profileSet(parsedData);
      }
    }
  }, []);

  return (
    <div className="font-small-text relative h-[844px] w-full overflow-hidden bg-white text-left text-sm text-black">
      <MHeader />
      <MBackgroundIcon />
      <MNavigation
        frame1="/frame-1.svg"
        frameIconWidth="15.89%"
        frameIconLeft="84.11%"
      />
      <div className="absolute left-[13px] top-[156px] h-[190px] w-[375px]">
        <div className="absolute bottom-[0%] left-[0%] right-[0%] top-[0%] h-full w-full">
          <div className="absolute bottom-[0%] left-[0%] right-[0%] top-[57.53%] flex h-[42.47%] w-full flex-col items-start justify-start">
            <div className="box-border flex w-[375px] flex-row items-start justify-start gap-[12px] overflow-hidden px-4 py-3.5">
              <div className="relative inline-block w-[100px] shrink-0 font-medium leading-[140%]">
                Name
              </div>
              <div className="flex flex-1 flex-row items-center justify-end">
                <div
                  id="name"
                  className="relative inline-block w-[211px] shrink-0 leading-[140%]">
                  Username
                </div>
                <img
                  className="relative h-5 w-5 shrink-0 overflow-hidden opacity-[0.5]"
                  alt=""
                  src="/iconchevron-right.svg"
                />
              </div>
            </div>
            <div className="box-border flex w-[375px] flex-row items-start justify-start gap-[12px] overflow-hidden px-4 py-3.5">
              <div className="relative inline-block w-[100px] shrink-0 font-medium leading-[140%]">
                Email
              </div>
              <div className="flex flex-1 flex-row items-center justify-end">
                <div
                  id="email"
                  className="relative inline-block w-[211px] shrink-0 leading-[140%]">
                  Email
                </div>
                <img
                  className="relative h-5 w-5 shrink-0 overflow-hidden opacity-[0.5]"
                  alt=""
                  src="/iconchevron-right.svg"
                />
              </div>
            </div>
          </div>
          <div className="text-dodgerblue absolute bottom-[57.53%] left-[34.4%] right-[34.13%] top-[0%] hidden h-[42.47%] w-[31.47%] flex-col items-center justify-center gap-[12px] text-center">
            <img
              className="rounded-981xl relative h-16 w-16 shrink-0 overflow-hidden object-cover"
              alt=""
              src="/avatar@2x.png"
            />
            <div className="flex flex-col items-start justify-start">
              <div className="relative self-stretch overflow-hidden text-ellipsis whitespace-nowrap font-semibold leading-[140%]">
                Edit profile image
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
