import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { AlertCircle, ClipboardPaste, File } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useStore } from "exome/react";
import { CopyButton } from "@/components/buttons/copy-button";
import { ClearButton } from "@/components/buttons/clear-button";
import { SaveFileButton } from "@/components/buttons/save-file-button";
import { OpenFileButton } from "@/components/buttons/open-file-button";
import { PasteButton } from "@/components/buttons/paste-button";
import { cronParserStore } from "@/stores/converters/cron-parser.store";

export function CronInput() {
  const { cronExpression, setCronExpression, cronExpressionError } =
    useStore(cronParserStore);

  return (
    <section>
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">CRON Expression to parse</h3>
        <div className="flex space-x-2">
          <PasteButton onClipboardPaste={setCronExpression} />
          <OpenFileButton onOpenFile={setCronExpression} />
          <ClearButton onClear={() => setCronExpression("")} />
          <Separator orientation="vertical" />
          <SaveFileButton fileType="txt" content={cronExpression} />
          <CopyButton value={cronExpression} />
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
