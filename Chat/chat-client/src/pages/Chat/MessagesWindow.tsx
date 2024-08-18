import { MESSAGES } from "@/constants/MOCK_CHATS";
import { formattedDate, linkedinFormattedDate } from "@/utils/dateUtil";

const MessagesWindow = () => {
  return (
    <div className="messages-window flex-grow overflow-y-auto ">
      <div className="flex flex-col gap-4 p-4">
        {MESSAGES.map((message, index) => (
          <div
            className={`message p-2 rounded-md   whitespace-nowrap max-w-fit ${
              index % 2 === 0
                ? "self-start bg-gray-200 "
                : "self-end bg-blue-600 text-white"
            }`}
            key={index}
          >
            <div className="flex flex-col">
              <span>{message.content}</span>
              <span
                className={`text-xs ${
                  index % 2 === 0 ? "self-end  " : "self-start  "
                } `}
              >
                {formattedDate(+new Date(message.sentAt))}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessagesWindow;
