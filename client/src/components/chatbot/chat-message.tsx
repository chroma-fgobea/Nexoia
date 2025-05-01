import { Message } from "@shared/schema";
import { format } from "date-fns";

interface ChatMessageProps {
  message: Message;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const formattedTime = format(new Date(message.createdAt), "HH:mm");
  
  return (
    <div className={`${message.fromUser ? "" : "bg-secondary rounded-lg p-4"}`}>
      <div className="flex items-center text-xs text-muted-foreground mb-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 mr-1">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
        <span>{formattedTime}</span>
      </div>
      <p className={`${message.fromUser ? "text-gray-800 dark:text-gray-200" : "text-secondary-foreground"}`}>
        {message.content}
      </p>
    </div>
  );
}
