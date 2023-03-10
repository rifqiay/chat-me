import React from "react";
import ModalBio from "../modals/ModalBio";

const Bio = ({ title, name, id, loading, setLoading }) => {
  return (
    <>
      <h3 className="font-medium">{title}</h3>
      <ModalBio
        header="Change Bio"
        className="bg-white p-3 border shadow-md rounded-lg absolute left-2 top-52"
        classNameChildren="text-gray-400 cursor-pointer hover:underline transition-all"
        id={id}
        loading={loading}
        setLoading={setLoading}
        oldBio={title}
      >
        {name}
      </ModalBio>
    </>
  );
};

export default Bio;
