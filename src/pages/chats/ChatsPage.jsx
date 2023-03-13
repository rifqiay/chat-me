import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlankChat from "../../components/base/blank-chat/BlankChat";
import Header from "../../components/base/header/Header";
import PreviewProfile from "../../components/base/preview-profile/PreviewProfile";
import SearchFriends from "../../components/base/search-friends/SearchFriends";
import SetListChat from "../../components/base/set-list-chat/SetListChat";
import ListFriends from "../../components/module/list-friends/ListFriends";
import LiveChats from "../../components/module/live-chat/LiveChats";
import Profile from "../../components/module/profile/Profile";
import { getProfile } from "../../config/features/user/userSlice";
import "./scrollbar.css";
import jwt_decode from "jwt-decode";

const ChatsPage = ({ socket }) => {
  const dispatch = useDispatch();
  const [all, setAll] = useState(true);
  const [profile, setProfile] = useState(false);
  const [activeChat, setActiveChat] = useState(false);

  const isChatPage = true;

  const token = localStorage.getItem("token");
  const { id } = jwt_decode(token);

  const { myProfile } = useSelector((state) => state.user);

  let myImg;
  if (myProfile?.photo) {
    const img = myProfile.photo.split(",");
    myImg = img[1];
  }

  useEffect(() => {
    dispatch(getProfile(id));
  }, [id, dispatch]);

  useEffect(() => {
    socket.on("send-message", (msg) => {
      console.log(msg);
    });
  }, []);

  const onSend = () => {
    socket.emit("send-message", "hello world");
    console.log("kirim");
  };

  return (
    <div className="h-screen overflow-hidden">
      <div className="grid grid-cols-12">
        <div className="col-span-3 px-3">
          {profile ? (
            <Profile setProfile={setProfile} id={id} />
          ) : (
            <>
              <div className="mt-5">
                <Header setProfile={setProfile} />
              </div>
              <div>
                <PreviewProfile
                  photo={myImg}
                  name={myProfile?.name}
                  username={myProfile?.username}
                  isChatPage={isChatPage}
                />
              </div>
              <div>
                <SearchFriends />
              </div>
              <div>
                <SetListChat all={all} setAll={setAll} />
              </div>
              <div className="mt-5 h-72 overflow-auto">
                <ListFriends setActiveChat={setActiveChat} />
              </div>
            </>
          )}
        </div>
        <div className="col-span-9 py-2">
          {activeChat ? <LiveChats onSend={onSend} /> : <BlankChat />}
        </div>
      </div>
    </div>
  );
};

export default ChatsPage;
