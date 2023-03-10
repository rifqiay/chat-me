import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { editPhoto } from "../../../config/features/user/userSlice";

const ModalPhoto = ({
  children,
  header,
  className,
  classNameChildren,
  img,
  id,
  loading,
  setLoading,
}) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [prevImg, setPrevImg] = useState(null);
  const [photo, setphoto] = useState(img);

  const handlePhoto = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    setphoto(file);
    reader.onloadend = () => {
      setPrevImg(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleClose = () => {
    setphoto(img);
    setShow(false);
  };

  const formData = new FormData();

  const handleSave = () => {
    formData.append("photo", photo);
    formData.append("id", id);
    setLoading(true);
    dispatch(editPhoto({ formData, setLoading, toast, setShow }));
  };
  return (
    <>
      <div onClick={() => setShow(true)} className={classNameChildren}>
        {children}
      </div>
      {show && (
        <div className="fixed inset-0  flex justify-center h-screen items-center">
          <div className={className}>
            <div className="my-3">
              <p>{header}</p>
            </div>
            <div>
              <label htmlFor="photo">
                <img
                  src={prevImg ? prevImg : img}
                  alt="preview"
                  className="w-24 h-24 object-cover rounded-xl cursor-pointer"
                />
              </label>
              <input
                type="file"
                name="photo"
                id="photo"
                className="border p-2 rounded-md focus:outline-none border-gray-300 hidden"
                onChange={handlePhoto}
              />
            </div>
            <div className="mt-8 flex gap-3 justify-end">
              <button
                className="bg-red-600 py-1 px-4 text-white rounded-lg transition-all hover:bg-red-500"
                onClick={handleClose}
              >
                Cancel
              </button>
              {loading ? (
                <div className="bg-[#8F9AE1] py-1 px-4 text-white rounded-lg transition-all hover:bg-[#a3aef5] flex justify-center items-center gap-2">
                  <p>Save</p>
                  <div className="h-5 w-5 border-2 rounded-full border-l-0 border-b-0 animate-spin"></div>
                </div>
              ) : (
                <button
                  className="bg-[#8F9AE1] py-1 px-4 text-white rounded-lg transition-all hover:bg-[#a3aef5]"
                  onClick={handleSave}
                >
                  Save
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalPhoto;
