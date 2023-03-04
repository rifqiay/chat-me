import React from "react";
import google from "../../../assets/icon/google.svg";

const ButtonGoogle = () => {
  return (
    <>
      <div className="p-3 rounded-full border border-[#7E98DF] w-full text-[#7E98DF] font-medium text-lg flex justify-center gap-5 cursor-pointer transition-all hover:bg-gray-100">
        <img src={google} alt="google" className="w-5" /> Google
      </div>
    </>
  );
};

export default ButtonGoogle;
