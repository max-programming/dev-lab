import { createFileRoute } from "@tanstack/react-router";
import { Configuration } from "./_components/configuration";
import { BasicModeForm } from "./_components/basic-mode-form";

export const Route = createFileRoute(
  "/_toolsLayout/_route/converters/number-base"
)({
  component: CronParserPage,
});

function CronParserPage() {
  return (
    <>
      <Configuration />
      <BasicModeForm />
    </>
  );
}
