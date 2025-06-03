import { BasicModeForm } from "@/components/tools/converters/number-base/basic-mode-form";
import { Configuration } from "@/components/tools/converters/number-base/configuration";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_toolsLayout/converters/number-base")({
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
