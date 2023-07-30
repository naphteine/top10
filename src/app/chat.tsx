"use client";

import { useChat } from "ai/react";
import ReactMarkdown from "react-markdown";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
  });

  // Find the last response message in the messages array
  const getLastResponse = () => {
    for (let i = messages.length - 1; i >= 0; i--) {
      if (messages[i]?.role === "assistant") {
        return messages[i]?.content;
      }
    }
    return "";
  };

  return (
    <div className="flex flex-col justify-center">
      <form onSubmit={handleSubmit} className="text-center">
        <input
          value={input}
          placeholder="anime, movies, toys..."
          onChange={handleInputChange}
          className="p-2 rounded-l-xl bg-white dark:bg-slate-600"
        />
        <button
          className="bg-slate-300 p-2 rounded-r-xl hover:bg-slate-400 dark:bg-slate-600 dark:hover:bg-slate-500 transition"
          type="submit"
        >
          Submit
        </button>
      </form>

      <div className="flex flex-col items-center text-center mt-10 markdown-container prose lg:prose-xl dark:prose-invert">
        <ReactMarkdown>{getLastResponse()}</ReactMarkdown>
      </div>
    </div>
  );
}
