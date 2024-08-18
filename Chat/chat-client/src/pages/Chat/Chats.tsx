import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Mail } from "lucide-react";
import ChatListItem from "./ChatListItem";
import { MOCK_CHATS } from "@/constants/MOCK_CHATS";
import { CHATS_ACTIONS_BAR_HEIGHT } from "@/constants/config";

const ChatsActions = () => {
  return (
    <>
      <div
        className={`action-bar flex items-center justify-center  py-5 px-5 ${CHATS_ACTIONS_BAR_HEIGHT}`}
      >
        <div className="flex w-full   items-center space-x-2">
          <Input type="text" placeholder="Search chats" />
          <Button>
            Create
            <Mail className="ml-2 h-4 w-4" />
          </Button>{" "}
        </div>
      </div>
      <Separator />
    </>
  );
};
const Chats = () => {
  return (
    <div className="flex flex-col h-screen">
      <ChatsActions />
      <div className="flex-grow overflow-y-auto">
        {MOCK_CHATS.map((chat, index) => (
          <ChatListItem key={index} chat={chat} />
        ))}
      </div>
    </div>
  );
};

export default Chats;
