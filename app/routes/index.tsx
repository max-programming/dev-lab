import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="container mx-auto max-w-7xl my-3 space-y-2">
      <h1 className="text-4xl font-bold">Welcome to DevLab</h1>
      <h3 className="text-xl font-semibold">All tools</h3>
      <div className="grid grid-cols-3 gap-4"></div>
    </div>
  );
}
