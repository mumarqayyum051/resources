import ChatBody from "./ChatBody";
import ChatToolbar from "./ChatToolbar";
import Chats from "./Chats";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import MessagesWindow from "./MessagesWindow";
import MessageInput from "./MessageInput";
import { Separator } from "@/components/ui/separator";

const Chat = () => {
  return (
    <ResizablePanelGroup direction="horizontal" className="  rounded-lg border">
      <ResizablePanel defaultSize={25}>
        <Chats />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={75}>
        <div className="flex flex-col h-dvh ">
          {/* <!-- Chat Toolbar --> */}

          <ChatToolbar />
          <Separator />

          {/* <!-- Messages Window --> */}
          <MessagesWindow />
          <Separator />

          {/* <!-- Message Input --> */}
          <MessageInput />
        </div>

        <ChatBody />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default Chat;
