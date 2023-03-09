import React from "react";

const Account = ({ number }) => {
  return (
    <>
      <h3 className="text-xl font-medium">Account</h3>
      <p className="mt-2">{number}</p>
      <p className="text-[#7E98DF] cursor-pointer hover:underline hover:text-[#6b82c2] transition-all">
        Tap to change phone number
      </p>
    </>
  );
};

export default Account;
