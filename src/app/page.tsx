import Chat from "./chat";
import { PiGithubLogoDuotone } from "react-icons/pi";

export const runtime = "edge";

export default function Page() {
  return (
    <main className="min-h-screen mt-10 flex flex-col items-center">
      <h1 className="text-4xl font-bold">Top 10 Generator</h1>
      <em>Generate top 10 list on any topic, using OpenAI</em>
      <a href="https://github.com/naphteine/top10">
        <PiGithubLogoDuotone className="mb-5 hover:text-yellow-300" size={32} />
      </a>
      <Chat />
    </main>
  );
}
