import Chat from "./chat";

export const runtime = "edge";

export default function Page() {
  return (
    <main className="min-h-screen mt-10 flex flex-col items-center">
      <h1 className="text-4xl font-bold">Top 10 Generator</h1>
      <em className="mb-5">Generate top 10 list on any topic, using OpenAI</em>
      <Chat />
    </main>
  );
}
