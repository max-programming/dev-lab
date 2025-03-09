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
    <div id="json-yaml-converter" className="flex flex-col gap-y-5 h-full">
      <Configuration />
      <JsonYamlInputOutput />
    </div>
  );
}
