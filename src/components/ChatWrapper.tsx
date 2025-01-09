"use client";

import { useChat } from "ai/react";
import { Messages } from "./Messages";
import { SendHorizontal } from 'lucide-react';

export const ChatWrapper = ({ sessionId }: { sessionId: string }) => {
  const { messages, handleInputChange, handleSubmit, input } = useChat({
    api: "/api/chat-stream",
    body: { sessionId },
  });

  return (
    <div className="relative min-h-full bg-zinc-900 flex flex-col">
      <div className="flex-1 overflow-hidden">
        <Messages messages={messages} />
      </div>
      <div className="border-t border-zinc-700 p-4">
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <input
            className="flex-1 bg-zinc-800 text-white rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={input}
            onChange={handleInputChange}
            placeholder="Type your message..."
          />
          <button
            type="submit"
            className="bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700 transition-colors"
          >
            <SendHorizontal className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
};

