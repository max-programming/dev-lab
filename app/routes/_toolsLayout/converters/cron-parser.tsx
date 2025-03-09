import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/_toolsLayout/_route/converters/cron-parser"
)({
  component: RouteComponent,
});

function RouteComponent() {
  return <div></div>;
}
