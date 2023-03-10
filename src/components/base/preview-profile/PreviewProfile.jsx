import React from "react";
import img from "../../../assets/icon/default.png";
import ModalPhoto from "../modals/ModalPhoto";
import ModalName from "../modals/ModalName";

const PreviewProfile = ({
  photo,
  name,
  username,
  id,
  loading,
  setLoading,
  isChatPage,
}) => {
  return (
    <div className="flex justify-center items-center h-48">
      {!isChatPage ? (
        <div className="flex flex-col items-center">
          <ModalPhoto
            header="Change photo"
            className="bg-white px-5 py-2 w-72 border shadow-md rounded-lg absolute left-2 top-4"
            img={photo ? photo : img}
            id={id}
            loading={loading}
            setLoading={setLoading}
          >
            <img
              src={photo ? photo : img}
              alt="my-profile-img"
              className="w-24 h-24 object-cover rounded-xl cursor-pointer"
            />
          </ModalPhoto>
          <ModalName
            header="Change Name"
            className="bg-white p-3 border shadow-md rounded-lg absolute left-2 top-32"
            classNameChildren="mt-3 text-2xl font-medium"
            oldName={name}
            id={id}
            loading={loading}
            setLoading={setLoading}
          >
            {name}
          </ModalName>
          <p className="text-gray-400">{username && `@${username}`}</p>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <img
            src={photo ? photo : img}
            alt="my-profile-img"
            className="w-24 h-24 object-cover rounded-xl cursor-pointer"
          />
          <p className="mt-3 text-2xl font-medium">{name}</p>
          <p className="text-gray-400">{username && `@${username}`}</p>
        </div>
      )}
    </div>
  );
};

export default PreviewProfile;
