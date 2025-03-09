import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(tools)/converters/number-base")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/(tools)/converters/number-base"!</div>;
}
