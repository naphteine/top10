import Chat from "./chat";

export const runtime = "edge";

export default function Page() {
  return (
    <main className="min-h-screen">
      <h1 className="text-center text-slate-700 text-4xl my-4">Top Ten App</h1>
      <Chat />
    </main>
  );
}
