import { XIcon } from "lucide-react";
import { Button, type buttonVariants } from "../ui/button";
import type { VariantProps } from "class-variance-authority";

interface ClearButtonProps extends VariantProps<typeof buttonVariants> {
  onClear(): void;
}

export function ClearButton({
  onClear,
  ...props
}: React.ComponentProps<"button"> & ClearButtonProps) {
  return (
    <Button
      size="icon"
      variant="outline"
      title="Clear"
      onClick={onClear}
      {...props}
    >
      <XIcon />
    </Button>
  );
}
