import React from "react";
import BubbleChatReceiver from "../../base/buble-chat/BubbleChatReceiver";
import BubbleChatSender from "../../base/buble-chat/BubbleChatSender";

const ListChats = () => {
  return (
    <div className="h-[33rem] mb-1 p-2  overflow-auto">
      <div>
        <div className="flex justify-start">
          <BubbleChatSender />
        </div>
        <div className="flex justify-end">
          <BubbleChatReceiver />
        </div>
      </div>
      {/* 2 */}
      <div>
        <div className="flex justify-start">
          <BubbleChatSender />
        </div>
        <div className="flex justify-end">
          <BubbleChatReceiver />
        </div>
      </div>
      {/* 2 */}
      <div>
        <div className="flex justify-start">
          <BubbleChatSender />
        </div>
        <div className="flex justify-end">
          <BubbleChatReceiver />
        </div>
      </div>
      {/* 2 */}
      <div>
        <div className="flex justify-start">
          <BubbleChatSender />
        </div>
        <div className="flex justify-end">
          <BubbleChatReceiver />
        </div>
      </div>
      {/* 2 */}
      <div>
        <div className="flex justify-start">
          <BubbleChatSender />
        </div>
        <div className="flex justify-end">
          <BubbleChatReceiver />
        </div>
      </div>
      {/* 2 */}
      <div>
        <div className="flex justify-start">
          <BubbleChatSender />
        </div>
        <div className="flex justify-end">
          <BubbleChatReceiver />
        </div>
      </div>
      {/* 2 */}
      <div>
        <div className="flex justify-start">
          <BubbleChatSender />
        </div>
        <div className="flex justify-end">
          <BubbleChatReceiver />
        </div>
      </div>
      {/* 2 */}
      <div>
        <div className="flex justify-start">
          <BubbleChatSender />
        </div>
        <div className="flex justify-end">
          <BubbleChatReceiver />
        </div>
      </div>
    </div>
  );
};

export default ListChats;
