import { Configuration } from "@/components/tools/converters/json-yaml/configuration";
import { JsonYamlInputOutput } from "@/components/tools/converters/json-yaml/json-yaml-input-output";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_toolsLayout/converters/json-yaml")({
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
