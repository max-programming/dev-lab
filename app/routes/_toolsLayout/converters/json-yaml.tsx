import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_toolsLayout/_route/converters/json-yaml")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/(tools)/converters/json-yaml"!</div>;
}
