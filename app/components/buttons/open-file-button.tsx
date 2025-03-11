import { FileIcon } from "lucide-react";
import { useFilePicker } from "use-file-picker";
import { Button, type buttonVariants } from "../ui/button";
import type { VariantProps } from "class-variance-authority";
import type { SelectedFiles } from "node_modules/use-file-picker/dist/interfaces";

interface OpenFileButtonProps extends VariantProps<typeof buttonVariants> {
  onOpenFile(fileContent: string): void;
}

export function OpenFileButton({
  onOpenFile,
  ...props
}: React.ComponentProps<"button"> & OpenFileButtonProps) {
  const { openFilePicker } = useFilePicker({
    accept: ".txt, .json, .yaml, .yml",
    multiple: false,
    onFilesSelected({ filesContent: [fileContent] }: SelectedFiles<string>) {
      onOpenFile(fileContent.content);
    },
  });

  return (
    <Button
      variant="outline"
      size="icon"
      title="Open a text document"
      onClick={openFilePicker}
      {...props}
    >
      <FileIcon />
    </Button>
  );
}
