import React from "react";
import { Input } from "@/components/ui/input";

const MessageInput = () => {
  return (
    <div className="message-input  h-16 flex-shrink-0">
      {/* <!-- Input content --> */}
      <div className="flex h-full">
        {/* <!-- Input field --> */}
        <Input
          className="flex-1 h-16 rounded-none"
          placeholder="Type and send message "
        />

        {/* <!-- Send button --> */}
        <button className="px-4 bg-blue-500 text-white">Send</button>
      </div>
    </div>
  );
};

export default MessageInput;
