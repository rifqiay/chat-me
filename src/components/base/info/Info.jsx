import React from "react";

const Info = ({ title, name }) => {
  return (
    <>
      <h3 className="font-medium">{title}</h3>
      <p className="text-gray-400 cursor-pointer hover:underline transition-all">
        {name}
      </p>
    </>
  );
};

export default Info;
