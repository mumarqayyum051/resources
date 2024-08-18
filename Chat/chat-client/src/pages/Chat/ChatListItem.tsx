import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Chat } from "./types";
import { linkedinFormattedDate } from "@/utils/dateUtil";
import { truncateString } from "@/utils/textUtil";

interface ChatListItemProps {
  chat: Chat;
}
const ChatListItem = ({ chat }: ChatListItemProps) => {
  return (
    <>
      <div className="p-4 hover:bg-slate-100 hover:cursor-pointer">
        <div className="flex justify-between gap-4">
          <div className="flex gap-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src={chat.profilePhoto} />
              <AvatarFallback>{chat.firstName}</AvatarFallback>
            </Avatar>
            <div className="message-and-username flex flex-col">
              <div className="text-lg text-black font-semibold">
                {chat.firstName} {chat.lastName}
              </div>
              <div className="text-sm text-gray-500 truncate">
                {truncateString(chat.lastMessage)}
              </div>
            </div>
          </div>
          <div className="timestamp-and-seen">
            <div className="text-sm text-gray-500">
              {linkedinFormattedDate(chat.lastActivityAt)}
            </div>
            <div className="text-sm text-gray-500">👀</div>
          </div>
        </div>
      </div>
      <Separator />
    </>
  );
};

export default ChatListItem;
