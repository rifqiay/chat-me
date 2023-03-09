import React from "react";
import img from "../../../assets/icon/default.png";

const PreviewProfile = ({ photo, name, username }) => {
  return (
    <div className="flex justify-center items-center h-48">
      <div className="flex flex-col items-center">
        <img
          src={photo ? photo : img}
          alt="my-profile-img"
          className="w-24 h-24 object-cover rounded-xl"
        />
        <h2 className="mt-3 text-2xl font-medium">{name}</h2>
        <p className="text-gray-400">{username && `@${username}`}</p>
      </div>
    </div>
  );
};

export default PreviewProfile;
