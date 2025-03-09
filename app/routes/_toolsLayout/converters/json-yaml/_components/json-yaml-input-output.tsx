import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useStore } from "exome/react";
import { ClipboardPaste, Copy, Expand, File, Save, X } from "lucide-react";
import { jsonYamlStore } from "../json-yaml.store";

export function JsonYamlInputOutput() {
  const { code, setCode, convertedCode } = useStore(jsonYamlStore);

  return (
    <section className="flex gap-5">
      <div className="space-y-2 w-full">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Input</h3>
          <div className="flex space-x-2">
            <Button variant="outline">
              <ClipboardPaste /> Paste
            </Button>
            <Button variant="outline" size="icon" title="Open a text document">
              <File />
            </Button>
            <Button variant="outline" size="icon" title="Clear">
              <X />
            </Button>
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
            <Button variant="outline" size="icon" title="Save as...">
              <Save />
            </Button>
            <Button variant="outline">
              <Copy /> Copy
            </Button>
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
