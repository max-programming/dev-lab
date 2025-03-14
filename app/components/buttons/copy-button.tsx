import { useState } from "react";
import { Button, type buttonVariants } from "@/components/ui/button";
import { CopyIcon } from "lucide-react";
import { useCopyToClipboard } from "usehooks-ts";
import type { VariantProps } from "class-variance-authority";

interface CopyButtonProps extends VariantProps<typeof buttonVariants> {
  value: string;
}

export function CopyButton({
  value,
  ...props
}: React.ComponentProps<"button"> & CopyButtonProps) {
  const [, copy] = useCopyToClipboard();
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    const success = await copy(value);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } else {
      console.error("Failed to copy");
    }
  }

  return (
    <Button onClick={handleCopy} variant="outline" {...props}>
      <CopyIcon className="mr-2 h-4 w-4" /> {copied ? "Copied!" : "Copy"}
    </Button>
  );
}
