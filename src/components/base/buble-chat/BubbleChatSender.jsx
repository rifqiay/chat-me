import React from "react";
import img from "../../../assets/img/img.png";

const BubbleChatSender = () => {
  return (
    <div className="flex gap-3">
      <img src={img} alt="img" className="w-10 h-10 object-cover" />
      <div className="bg-[#7E98DF] text-white min-w-max p-5 flex items-center rounded-xl rounded-tl-none">
        <p className="max-w-[17rem]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
          optio ea magni omnis, laudantium maxime architecto quis provident
          earum pariatur tempora molestiae iusto qui inventore odit delectus at,
          nobis vel aliquid fugit non ab. Delectus magnam pariatur possimus
          illum, quo laboriosam molestiae vitae id. Quia consequuntur cum
          quisquam maiores aliquam.
        </p>
      </div>
    </div>
  );
};

export default BubbleChatSender;
