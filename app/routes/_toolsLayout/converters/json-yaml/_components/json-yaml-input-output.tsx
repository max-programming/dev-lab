import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useStore } from "exome/react";
import { ClipboardPaste, Expand } from "lucide-react";
import { jsonYamlStore } from "../json-yaml.store";
import { CopyButton } from "@/components/buttons/copy-button";
import { ClearButton } from "@/components/buttons/clear-button";
import { OpenFileButton } from "@/components/buttons/open-file-button";
import { SaveFileButton } from "@/components/buttons/save-file-button";
import { PasteButton } from "@/components/buttons/paste-button";

export function JsonYamlInputOutput() {
  const { code, setCode, convertedCode, config } = useStore(jsonYamlStore);

  return (
    <section className="flex gap-5">
      <div className="space-y-2 w-full">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Input</h3>
          <div className="flex space-x-2">
            <PasteButton onClipboardPaste={setCode} />
            <OpenFileButton onOpenFile={setCode} />
            <ClearButton onClear={() => setCode("")} />
          </div>
        </div>
        <Textarea
          className="font-geist-mono h-80"
          value={code}
          onChange={e => setCode(e.target.value)}
        />
      </div>
      <div className="space-y-2 w-full">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Output</h3>
          <div className="flex space-x-2">
            <SaveFileButton
              fileType={config.conversion === "json-yaml" ? "yaml" : "json"}
              content={convertedCode}
            />
            <CopyButton value={convertedCode} />
            <Button variant="outline" size="icon" title="Expand">
              <Expand />
            </Button>
          </div>
        </div>
        <Textarea
          className="font-geist-mono h-80"
          value={convertedCode}
          readOnly
        />
      </div>
    </section>
  );
}
