import React, { useState } from "react";
import BlankChat from "../../components/base/blank-chat/BlankChat";
import Header from "../../components/base/header/Header";
import PreviewProfile from "../../components/base/preview-profile/PreviewProfile";
import SearchFriends from "../../components/base/search-friends/SearchFriends";
import SetListChat from "../../components/base/set-list-chat/SetListChat";
import ListFriends from "../../components/module/list-friends/ListFriends";
import LiveChats from "../../components/module/live-chat/LiveChats";
import "./scrollbar.css";

const ChatsPage = () => {
  const [all, setAll] = useState(true);
  return (
    <div className="h-screen overflow-hidden">
      <div className="grid grid-cols-12">
        <div className="col-span-3 px-3">
          <div className="mt-5">
            <Header />
          </div>
          <div>
            <PreviewProfile />
          </div>
          <div>
            <SearchFriends />
          </div>
          <div>
            <SetListChat all={all} setAll={setAll} />
          </div>
          <div className="mt-5 h-72 overflow-auto">
            <ListFriends />
          </div>
        </div>
        <div className="col-span-9 py-2">
          {/* <BlankChat /> */}
          <LiveChats />
        </div>
      </div>
    </div>
  );
};

export default ChatsPage;
