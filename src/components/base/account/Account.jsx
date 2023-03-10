import React from "react";
import ModalPhone from "../modals/ModalPhone";

const Account = ({ number, id, loading, setLoading }) => {
  return (
    <>
      <h3 className="text-xl font-medium">Account</h3>
      <p className="mt-2">{number}</p>
      <ModalPhone
        header="Change phone number"
        className="bg-white p-3 border shadow-md rounded-lg absolute left-2 top-32"
        classNameChildren="text-[#7E98DF] cursor-pointer hover:underline hover:text-[#6b82c2] transition-all"
        oldPhone={number}
        id={id}
        loading={loading}
        setLoading={setLoading}
      >
        Tap to change phone number
      </ModalPhone>
    </>
  );
};

export default Account;
