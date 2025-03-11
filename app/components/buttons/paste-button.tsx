import { Button, type buttonVariants } from "@/components/ui/button";
import { ClipboardPasteIcon } from "lucide-react";
import type { VariantProps } from "class-variance-authority";

interface PasteButtonProps extends VariantProps<typeof buttonVariants> {
  onClipboardPaste(value: string): void;
}

export function PasteButton({
  onClipboardPaste,
  ...props
}: React.ComponentProps<"button"> & PasteButtonProps) {
  async function handlePaste() {
    const clipboardText = await navigator.clipboard.readText();
    if (clipboardText) {
      onClipboardPaste(clipboardText);
    } else {
      console.error("Failed to paste");
    }
  }

  return (
    <Button onClick={handlePaste} variant="outline" {...props}>
      <ClipboardPasteIcon className="mr-2 h-4 w-4" /> Paste
    </Button>
  );
}
