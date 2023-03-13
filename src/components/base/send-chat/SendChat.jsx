import React from "react";
import plus from "../../../assets/icon/Plus.svg";
import emoticon from "../../../assets/icon/emoticon.svg";
import iconsend from "../../../assets/icon/sent.png";
import ComingSoon from "../coming-soon/ComingSoon";

const SendChat = ({ onSend }) => {
  return (
    <div className="flex gap-5 px-3 items-center">
      <div className="w-full ">
        <input
          type="text"
          className="border w-full p-2 rounded-lg border-gray-300 focus:outline-none"
          placeholder="send your message..."
        />
      </div>
      <div className="flex gap-3">
        <ComingSoon
          header="send file"
          className="border bg-white p-3 absolute right-20 bottom-6"
        >
          <img
            src={plus}
            alt="plus"
            className="w-5 h-5 cursor-pointer transition-all"
          />
        </ComingSoon>
        <ComingSoon
          header="Emoticon"
          className="border bg-white p-3 absolute right-20 bottom-6"
        >
          <img
            src={emoticon}
            alt="emoticon"
            className="w-6 h-6 cursor-pointer transition-all"
          />
        </ComingSoon>
        <div onClick={onSend}>
          <img
            src={iconsend}
            alt="sendIcon"
            className="w-10 cursor-pointer transition-all"
          />
        </div>
      </div>
    </div>
  );
};

export default SendChat;
