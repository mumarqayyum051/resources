import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import React from "react";

const ChatListItem = () => {
  return (
    <>
      <div className="p-4 hover:bg-slate-100 hover:cursor-pointer">
        <div className="flex justify-between gap-4">
          <div className="flex gap-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>UM</AvatarFallback>
            </Avatar>
            <div className="message-and-username flex flex-col">
              <div className="text-lg text-black font-semibold">
                M Umar Qayyum
              </div>
              <div className="text-sm text-gray-500">
                Hey, how are you doing?
              </div>
            </div>
          </div>
          <div className="timestamp-and-seen">
            <div className="text-sm text-gray-500">12:30 PM</div>
            <div className="text-sm text-gray-500">👀</div>
          </div>
        </div>
      </div>
      <Separator />
    </>
  );
};

export default ChatListItem;
