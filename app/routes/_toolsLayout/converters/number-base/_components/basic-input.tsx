import { ClearButton } from "@/components/buttons/clear-button";
import { CopyButton } from "@/components/buttons/copy-button";
import { OpenFileButton } from "@/components/buttons/open-file-button";
import { PasteButton } from "@/components/buttons/paste-button";
import { SaveFileButton } from "@/components/buttons/save-file-button";
import { Input } from "@/components/ui/input";
import { Separator } from "@radix-ui/react-separator";
import { numberBaseStore, type BasicModeState } from "../number-base.store";
import { useStore } from "exome/react";

interface BasicInputProps extends React.ComponentProps<"input"> {
  stateKey: keyof BasicModeState;
}

export function BasicInput({ stateKey, ...props }: BasicInputProps) {
  const { basicModeState, setBasicModeStateByKey, resetBasicModeState } =
    useStore(numberBaseStore);

  function setInputState(value: string) {
    setBasicModeStateByKey(stateKey, value);
  }

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold capitalize">{stateKey}</h3>
        <div className="flex space-x-2">
          <PasteButton onClipboardPaste={v => setInputState(v)} />
          <OpenFileButton onOpenFile={v => setInputState(v)} />
          <ClearButton onClear={resetBasicModeState} />
          <Separator orientation="vertical" />
          <SaveFileButton fileType="txt" content={String(props.value)} />
          <CopyButton value={String(props.value)} />
        </div>
      </div>
      <Input
        {...props}
        value={basicModeState[stateKey]}
        onChange={e => setInputState(e.target.value)}
      />
    </div>
  );
}
