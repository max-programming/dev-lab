import { createFileRoute } from "@tanstack/react-router";
import { Configuration } from "./_components/configuration";
import { JsonYamlInputOutput } from "./_components/json-yaml-input-output";

export const Route = createFileRoute(
  "/_toolsLayout/_route/converters/json-yaml"
)({
  component: JsonYamlPage,
});

function JsonYamlPage() {
  return (
    <>
      <Configuration />
      <JsonYamlInputOutput />
    </>
  );
}
