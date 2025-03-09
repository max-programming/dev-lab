import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { AlertCircle, ClipboardPaste, Copy, File, Save, X } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useStore } from "exome/react";
import { cronParserStore } from "../cron-parser.store";

export function CronInput() {
  const { cronExpression, setCronExpression, cronExpressionError } =
    useStore(cronParserStore);

  return (
    <section>
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">CRON Expression to parse</h3>
        <div className="flex space-x-2">
          <Button variant="outline">
            <ClipboardPaste /> Paste
          </Button>
          <Button size="icon" variant="outline" title="Open a text document">
            <File />
          </Button>
          <Button
            size="icon"
            variant="outline"
            title="Clear"
            onClick={() => setCronExpression("")}
          >
            <X />
          </Button>
          <Separator orientation="vertical" />
          <Button variant="outline" size="icon" title="Save as">
            <Save />
          </Button>
          <Button variant="outline">
            <Copy /> Copy
          </Button>
        </div>
      </div>
      <Input
        className="mt-2 font-geist-mono"
        value={cronExpression}
        onChange={e => setCronExpression(e.target.value)}
      />
      {cronExpressionError && (
        <Alert className="mt-2" variant="destructive">
          <AlertCircle size={16} />
          <AlertTitle>Invalid CRON Expression</AlertTitle>
          <AlertDescription>{cronExpressionError}</AlertDescription>
        </Alert>
      )}
    </section>
  );
}
