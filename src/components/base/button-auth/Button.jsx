import React from "react";

export default function Button({ name, onClick, type }) {
  return (
    <div>
      <button
        className="w-full p-3 bg-[#7E98DF] rounded-full font-medium text-white text-lg hover:bg-[#9ab3f8] transition-all"
        onClick={onClick}
        type={type}
      >
        {name}
      </button>
    </div>
  );
}
