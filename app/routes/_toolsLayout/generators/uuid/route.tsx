import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_toolsLayout/_route/generators/uuid")({
  component: UUIDGeneratorPage,
});

function UUIDGeneratorPage() {
  return (
    <div id="uuid-generator" className="flex flex-col gap-y-5 h-full">
      <h1>UUID Generator</h1>
    </div>
  );
}
