import React from "react";
import ModalUsername from "../modals/ModalUsername";

const Info = ({ title, name, id, loading, setLoading }) => {
  return (
    <>
      <h3 className="font-medium">{title}</h3>
      <ModalUsername
        header="Change username"
        className="bg-white p-3 border shadow-md rounded-lg absolute left-2 top-40"
        classNameChildren="text-gray-400 cursor-pointer hover:underline transition-all"
        id={id}
        loading={loading}
        setLoading={setLoading}
        oldUsername={title}
      >
        {name}
      </ModalUsername>
    </>
  );
};

export default Info;
