import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(tools)/converters/date")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/(tools)/converters/date"!</div>;
}
