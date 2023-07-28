"use client";

import { useChat } from "ai/react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
  });

  return (
    <div className="flex flex-col mx-24 justify-center">
      <form onSubmit={handleSubmit} className="text-center">
        <label>
          Top 10...
          <input
            value={input}
            placeholder="anime, filmler, yemekler..."
            onChange={handleInputChange}
            className="p-1 rounded"
          />
        </label>
        <button
          className="bg-slate-300 p-1 rounded hover:bg-slate-400"
          type="submit"
        >
          Gönder
        </button>
      </form>

      <ul>
        {messages.map((m, index) => (
          <li key={index}>
            {m.role === "user" ? "Sen: " : "AI: "}
            {m.content}
          </li>
        ))}
      </ul>
    </div>
  );
}
