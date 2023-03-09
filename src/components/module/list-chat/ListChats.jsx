import React, { useEffect, useRef } from "react";
import BubbleChatReceiver from "../../base/buble-chat/BubbleChatReceiver";
import BubbleChatSender from "../../base/buble-chat/BubbleChatSender";

const ListChats = () => {
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, []);

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
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ListChats;
