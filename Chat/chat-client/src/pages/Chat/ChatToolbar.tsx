import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CHAT_TOOLBAR_HEIGHT } from "@/constants/config";
import { EllipsisVertical } from "lucide-react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

const ChatToolbar = () => {
  return (
    <div className={`chat-toolbar flex-shrink-0  ${CHAT_TOOLBAR_HEIGHT}`}>
      <div className="flex items-center justify-between px-2.5 py-4 ">
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>{" "}
          <div className="name-and-online flex flex-col">
            <div className="text-lg text-black font-semibold">John Doe</div>
            <div className="text-sm text-gray-500">Online</div>
          </div>
        </div>
        <div className="tool-bar-actions flex items-center gap-2">
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>
                <EllipsisVertical className="cursor-pointer " />
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>New Window</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Share</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Print</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      </div>
    </div>
  );
};

export default ChatToolbar;
