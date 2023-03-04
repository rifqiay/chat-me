import React from "react";
import img from "../../../assets/img/img.png";

const CardFriends = () => {
  return (
    <>
      <div className="flex justify-between items-center h-20">
        <img src={img} alt="profile-img" className="w-12 h-12 object-cover" />
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold">Theresa web</h3>
          <p className="text-[#7E98DF]">why did you do that?</p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <p>15.20</p>
          <div className="bg-[#7E98DF] text-white rounded-full px-1.5 text-sm">
            2
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default CardFriends;
