import React from "react";

const Input = ({ type, name, onChange, id }) => {
  return (
    <>
      <input
        type={type}
        name={name}
        id={id}
        className="border-b border-gray-900 p-2 w-full focus:border-b-2 focus:outline-none"
        onChange={onChange}
      />
    </>
  );
};

export default Input;
