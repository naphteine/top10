import Chat from "./chat";
import { PiGithubLogoDuotone, PiPillDuotone } from "react-icons/pi";

export const runtime = "edge";

export default function Page() {
  return (
    <main className="min-h-screen mt-10 flex flex-col items-center">
      <h1 className="text-4xl font-bold">Top 10 Generator</h1>
      <em>Generate top 10 list on any topic, using OpenAI</em>

      <div className="flex mb-5">
        <a href="https://github.com/naphteine/top10">
          <PiGithubLogoDuotone className="hover:text-yellow-300" size={32} />
        </a>
        <a href="https://gokaygultekin.dev">
          <PiPillDuotone className="hover:text-yellow-300" size={32} />
        </a>
      </div>

      <Chat />
    </main>
  );
}
