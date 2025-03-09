import { createFileRoute } from "@tanstack/react-router";
import { Configuration } from "./_components/configuration";
import { CronInput } from "./_components/cron-input";
import { CronOutput } from "./_components/cron-output";

export const Route = createFileRoute(
  "/_toolsLayout/_route/converters/cron-parser"
)({
  component: CronParserPage,
});

function CronParserPage() {
  return (
    <div id="cron-parser" className="flex flex-col gap-y-5 h-full">
      <Configuration />
      <CronInput />
      <CronOutput />
    </div>
  );
}
