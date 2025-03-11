import { Button, type buttonVariants } from "@/components/ui/button";
import { ExpandIcon } from "lucide-react";
import type { VariantProps } from "class-variance-authority";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ExpandButtonProps extends VariantProps<typeof buttonVariants> {
  content: string;
}

export function ExpandButton({
  content,
  ...props
}: React.ComponentProps<"button"> & ExpandButtonProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="icon" variant="outline" title="Expand content" {...props}>
          <ExpandIcon />
        </Button>
      </DialogTrigger>
      <DialogContent className="p-6 sm:max-w-[95vw] w-[80vw] h-[80vh]">
        <textarea
          className="font-geist-mono w-full h-[calc(100%-2rem)] p-4 resize-none focus:outline-none bg-background border-none"
          readOnly
          value={content}
        />
        <DialogClose className="absolute right-4 top-4" />
      </DialogContent>
    </Dialog>
  );
}
