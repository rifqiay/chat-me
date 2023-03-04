import React from "react";
import searchIcon from "../../../assets/icon/Search.svg";
import plus from "../../../assets/icon/Plus.svg";

const SearchFriends = () => {
  return (
    <div className="flex justify-between gap-3">
      <div className="flex bg-gray-50 px-3 rounded-lg ">
        <img src={searchIcon} alt="search-icon" className="" />
        <input
          type="text"
          placeholder="Search your friends..."
          className="p-2 w-full bg-inherit focus:outline-none"
        />
      </div>
      <img
        src={plus}
        alt="plus-icon"
        className="cursor-pointer transition-all"
      />
    </div>
  );
};

export default SearchFriends;
