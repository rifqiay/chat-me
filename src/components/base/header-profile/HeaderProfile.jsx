import React from "react";
import back from "../../../assets/icon/back.svg";

const HeaderProfile = ({ setProfile, title }) => {
  return (
    <div className="flex justify-center mt-3 relative">
      <img
        src={back}
        alt="back-icon"
        title="back"
        className="absolute left-0 top-1 cursor-pointer transition-all "
        onClick={() => setProfile(false)}
      />
      <h3 className="text-[#7E98DF] text-xl font-semibold">{title}</h3>
    </div>
  );
};

export default HeaderProfile;
