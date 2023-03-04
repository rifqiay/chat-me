import React from "react";
import img from "../../../assets/img/img.png";

const PreviewProfile = () => {
  return (
    <div className="flex justify-center items-center h-48">
      <div className="flex flex-col items-center">
        <img
          src={img}
          alt="my-profile-img"
          className="w-24 h-24 object-cover rounded-xl"
        />
        <h2 className="mt-3 text-2xl font-medium">Gloria Mckinne</h2>
        <p className="text-gray-400">@wdlam</p>
      </div>
    </div>
  );
};

export default PreviewProfile;
