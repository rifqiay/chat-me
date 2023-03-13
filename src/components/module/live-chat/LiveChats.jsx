import React from "react";
import HeaderSender from "../../base/header-sender/HeaderSender";
import SendChat from "../../base/send-chat/SendChat";
import ListChats from "../list-chat/ListChats";

const LiveChats = ({ onSend }) => {
  return (
    <div className="px-3">
      <HeaderSender />
      <ListChats />
      <SendChat onSend={onSend} />
    </div>
  );
};

export default LiveChats;
