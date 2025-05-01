import { format } from "date-fns";
import { SparklesIcon, User } from "lucide-react";
import { es } from "date-fns/locale";

// Type for the message data
type Message = {
  id: string;
  content: string;
  fromUser: boolean;
  timestamp: Date;
};

interface ChatMessageProps {
  message: Message;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.fromUser;
  const formattedTime = format(
    new Date(message.timestamp),
    "HH:mm",
    { locale: es }
  );

  return (
    <div
      className={`flex ${
        isUser ? "justify-end" : "justify-start"
      } mb-4`}
    >
      <div
        className={`flex max-w-[80%] ${
          isUser ? "flex-row-reverse" : "flex-row"
        }`}
      >
        {/* Avatar */}
        <div
          className={`h-8 w-8 rounded-full flex items-center justify-center ${
            isUser
              ? "bg-primary/20 text-primary ml-2"
              : "bg-secondary/80 text-foreground mr-2"
          }`}
        >
          {isUser ? <User size={14} /> : <SparklesIcon size={14} />}
        </div>

        {/* Message content */}
        <div>
          <div
            className={`rounded-lg px-4 py-2 break-words ${
              isUser
                ? "bg-primary text-primary-foreground"
                : "bg-card border border-border"
            }`}
          >
            <p className="text-sm">{message.content}</p>
          </div>
          <div
            className={`text-xs text-muted-foreground mt-1 ${
              isUser ? "text-right" : "text-left"
            }`}
          >
            {formattedTime}
          </div>
        </div>
      </div>
    </div>
  );
}