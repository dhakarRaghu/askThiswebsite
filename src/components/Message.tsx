import { cn } from "./utils";
import { User, Bot } from 'lucide-react';

interface MessageProps {
  content: string;
  isUserMessage: boolean;
}

export const Message = ({ content, isUserMessage }: MessageProps) => {
  return (
    <div
      className={cn("rounded-lg p-4", {
        "bg-blue-600 ml-auto": isUserMessage,
        "bg-zinc-700": !isUserMessage,
      })}
    >
      <div className="flex items-start gap-4 max-w-3xl mx-auto">
        <div
          className={cn(
            "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center",
            {
              "bg-blue-700": isUserMessage,
              "bg-zinc-600": !isUserMessage,
            }
          )}
        >
          {isUserMessage ? (
            <User className="w-5 h-5 text-white" />
          ) : (
            <Bot className="w-5 h-5 text-white" />
          )}
        </div>
        <div className="flex-1 overflow-hidden">
          <p className="text-sm font-semibold text-white mb-1">
            {isUserMessage ? "You" : "Website"}
          </p>
          <p className="text-white whitespace-pre-wrap break-words">{content}</p>
        </div>
      </div>
    </div>
  );
};

