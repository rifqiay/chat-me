import React, { useEffect, useState } from "react";
import Account from "../../base/account/Account";
import HeaderProfile from "../../base/header-profile/HeaderProfile";
import Info from "../../base/info/Info";
import PreviewProfile from "../../base/preview-profile/PreviewProfile";
import { useDispatch, useSelector } from "react-redux";
import Bio from "../../base/bio/Bio";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getProfile } from "../../../config/features/user/userSlice";
import { useNavigate } from "react-router-dom";

const Profile = ({ setProfile, id }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { myProfile } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getProfile(id));
  }, [loading, id, dispatch]);

  let myImg;
  if (myProfile?.photo) {
    const img = myProfile.photo.split(",");
    myImg = img[1];
  }

  const handleLogut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <>
      <ToastContainer autoClose={3000} />
      <div>
        <HeaderProfile
          setProfile={setProfile}
          title={myProfile?.username && `@${myProfile?.username}`}
        />
      </div>
      <div className="mt-3">
        <PreviewProfile
          photo={myImg}
          name={myProfile?.name}
          username={myProfile?.username}
          id={id}
          loading={loading}
          setLoading={setLoading}
        />
      </div>
      <div>
        <Account
          number={myProfile?.phone}
          id={id}
          loading={loading}
          setLoading={setLoading}
        />
      </div>
      <hr className="my-2" />
      <div>
        <Info
          title={myProfile?.username && `@${myProfile?.username}`}
          name="Username"
          id={id}
          loading={loading}
          setLoading={setLoading}
        />
      </div>
      <hr className="my-2" />
      <div>
        <Bio
          title={myProfile?.bio && myProfile?.bio}
          name="Bio"
          id={id}
          loading={loading}
          setLoading={setLoading}
        />
      </div>
      <button
        className="text-red-500 hover:underline transition-all font-medium text-lg mt-5"
        onClick={handleLogut}
      >
        Log out
      </button>
    </>
  );
};

export default Profile;
