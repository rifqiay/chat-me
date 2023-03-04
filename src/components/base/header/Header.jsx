import React from "react";
import menu from "../../../assets/icon/Menu.svg";

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-3xl font-bold text-[#7E98DF]">Chatme</h1>
      <img
        src={menu}
        alt="menu"
        title="menu"
        className="cursor-pointer transition-all"
      />
    </div>
  );
};

export default Header;
