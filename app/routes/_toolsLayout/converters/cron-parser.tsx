import { Configuration } from "@/components/tools/converters/cron-parser/configuration";
import { CronInput } from "@/components/tools/converters/cron-parser/cron-input";
import { CronOutput } from "@/components/tools/converters/cron-parser/cron-output";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_toolsLayout/converters/cron-parser")({
  component: CronParserPage,
});

function CronParserPage() {
  return (
    <>
      <Configuration />
      <CronInput />
      <CronOutput />
    </>
  );
}
