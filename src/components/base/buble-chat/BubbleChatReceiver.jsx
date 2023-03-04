import React from "react";
import img from "../../../assets/img/img.png";

const BubbleChatReceiver = () => {
  return (
    <div className="flex gap-3">
      <div className="bg-white text-slate-900 border shadow-md min-w-max px-5 flex items-center rounded-xl rounded-tr-none">
        <p className="max-w-[17rem]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
          nulla maxime iste pariatur labore. Accusantium magni provident
          doloremque expedita sequi?
        </p>
      </div>
      <img src={img} alt="img" className="w-10 h-10 object-cover" />
    </div>
  );
};

export default BubbleChatReceiver;
