import React from "react";
import Account from "../../base/account/Account";
import HeaderProfile from "../../base/header-profile/HeaderProfile";
import Info from "../../base/info/Info";
import PreviewProfile from "../../base/preview-profile/PreviewProfile";
import { useSelector } from "react-redux";

const Profile = ({ setProfile }) => {
  const { myProfile } = useSelector((state) => state.user);

  let myImg;
  if (myProfile.photo) {
    const img = myProfile.photo.split(",");
    myImg = img[1];
  }
  return (
    <>
      <div>
        <HeaderProfile
          setProfile={setProfile}
          title={myProfile.username && `@${myProfile.username}`}
        />
      </div>
      <div className="mt-3">
        <PreviewProfile
          photo={myImg}
          name={myProfile.name}
          username={myProfile.username}
        />
      </div>
      <div>
        <Account number={myProfile.phone} />
      </div>
      <hr className="my-2" />
      <div>
        <Info
          title={myProfile.username && `@${myProfile.username}`}
          name="Username"
        />
      </div>
      <hr className="my-2" />
      <div>
        <Info title={myProfile.bio && myProfile.bio} name="Bio" />
      </div>
    </>
  );
};

export default Profile;
