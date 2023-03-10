import React, { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { editUsername } from "../../../config/features/user/userSlice";

const ModalUsername = ({
  children,
  header,
  className,
  classNameChildren,
  oldUsername,
  id,
  loading,
  setLoading,
}) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState(oldUsername);

  const handleClose = () => {
    setUsername(oldUsername);
    setShow(false);
  };

  const values = {
    username,
    id,
  };
  const handleSave = () => {
    setLoading(true);
    dispatch(editUsername({ values, setLoading, toast, setShow }));
  };
  return (
    <>
      <button onClick={() => setShow(true)} className={classNameChildren}>
        {children}
      </button>
      {show && (
        <div className="fixed inset-0  flex justify-center h-screen items-center">
          <div className={className}>
            <div className="my-3">
              <p>{header}</p>
            </div>
            <div>
              <input
                type="text"
                name="username"
                id="username"
                className="border p-2 rounded-md focus:outline-none border-gray-300"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mt-5 flex gap-3 justify-end">
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

export default ModalUsername;
