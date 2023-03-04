import React from "react";

const SetListChat = ({ all, setAll }) => {
  return (
    <div className="mt-5 flex justify-between">
      <div
        className={
          all
            ? "bg-[#7E98DF] w-full py-2 text-center rounded-lg text-white font-semibold cursor-pointer transition duration-500"
            : "bg-white w-full py-2 text-center rounded-lg text-black font-semibold cursor-pointer transition duration-500"
        }
        onClick={() => setAll(true)}
      >
        <h1>All</h1>
      </div>
      <div
        className={
          all
            ? "bg-white w-full py-2 text-center rounded-lg text-black font-semibold cursor-pointer transition duration-500"
            : "bg-[#7E98DF] w-full py-2 text-center rounded-lg text-white font-semibold cursor-pointer transition duration-500"
        }
        onClick={() => setAll(false)}
      >
        <h1>Unread</h1>
      </div>
    </div>
  );
};

export default SetListChat;
