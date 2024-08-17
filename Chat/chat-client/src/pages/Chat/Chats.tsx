import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Mail } from "lucide-react";
import ChatListItem from "./ChatListItem";

const ChatsActions = () => {
  return (
    <>
      <div className="action-bar flex items-center justify-center  ">
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input type="text" placeholder="Search chats" />
          <Button>
            <Mail className="mr-2 h-4 w-4" /> Create
          </Button>{" "}
        </div>
      </div>
      <Separator />
    </>
  );
};
const Chats = () => {
  return (
    <div className="flex flex-col w-full  h-full gap-6">
      <ChatsActions />
      <div>
        {[0, 0, 0, 0, 0, 0, 0].map((index) => (
          <ChatListItem key={index} />
        ))}
      </div>
    </div>
  );
};

export default Chats;
