import { cn } from "./utils";
import { type Message as TMessage } from "ai/react";
import { Message } from "./Message";
import { MessageSquare } from 'lucide-react';

interface MessagesProps {
  messages: TMessage[];
}

export const Messages = ({ messages }: MessagesProps) => {
  return (
    <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
      {messages.length ? (
        messages.map((message, i) => (
          <Message key={i} content={message.content} isUserMessage={message.role === "user"} />
        ))
      ) : (
        <div className="flex flex-col items-center justify-center h-full text-center">
          <MessageSquare className="w-16 h-16 text-blue-500 mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2">You're all set!</h3>
          <p className="text-zinc-400">Ask your first question to get started.</p>
        </div>
      )}
    </div>
  );
};

