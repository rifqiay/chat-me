import React from "react";
import chatMenu from "../../../assets/icon/chat-menu.svg";
import img from "../../../assets/img/img.png";
import ComingSoon from "../coming-soon/ComingSoon";

const HeaderSender = () => {
  return (
    <div className="flex justify-between items-center border-b pb-1 shadow-sm">
      <div className="flex gap-4 items-center">
        <img src={img} alt="img-sender" className="w-10 h-10 object-cover" />
        <div>
          <h3 className="text-lg font-medium">Jhonson</h3>
          <p className="text-gray-400 text-sm">Online</p>
        </div>
      </div>
      <ComingSoon
        className="border bg-white p-3 absolute right-12 top-4"
        header="Chat menu"
      >
        <img
          src={chatMenu}
          alt="icon-menu-chat"
          className="cursor-pointer transition-all "
          title="menu chats"
        />
      </ComingSoon>
    </div>
  );
};

export default HeaderSender;
