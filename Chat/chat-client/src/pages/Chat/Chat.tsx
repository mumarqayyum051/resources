import ChatBody from "./ChatBody";
import ChatToolbar from "./ChatToolbar";
import Chats from "./Chats";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

const Chat = () => {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="  rounded-lg border  h-screen"
    >
      <ResizablePanel defaultSize={25}>
        <Chats />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={75}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={20}>
            <ChatToolbar />
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={80}>
            <ChatBody />
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default Chat;
