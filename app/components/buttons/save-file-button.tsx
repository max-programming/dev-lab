import { SaveIcon } from "lucide-react";
import { useFilePicker } from "use-file-picker";
import { Button, type buttonVariants } from "../ui/button";
import type { VariantProps } from "class-variance-authority";
import type { SelectedFiles } from "node_modules/use-file-picker/dist/interfaces";
import { downloadFile } from "@/lib/utils";

interface SaveFileButtonProps extends VariantProps<typeof buttonVariants> {
  fileType: string;
  content: string;
}

export function SaveFileButton({
  fileType,
  content,
  ...props
}: React.ComponentProps<"button"> & SaveFileButtonProps) {
  return (
    <Button
      variant="outline"
      size="icon"
      title="Save file"
      onClick={() => downloadFile(fileType, content)}
      {...props}
    >
      <SaveIcon />
    </Button>
  );
}
