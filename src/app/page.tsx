import Chat from "./chat";

export const runtime = "edge";

export default function Page() {
  return (
    <main className="min-h-screen mt-10 flex flex-col items-center">
      <Chat />
    </main>
  );
}
