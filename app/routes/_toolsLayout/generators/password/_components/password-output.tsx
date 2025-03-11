import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useStore } from "exome/react";
import { passwordStore } from "../password.store";
import { CopyButton } from "@/components/buttons/copy-button";
import { SaveFileButton } from "@/components/buttons/save-file-button";

export function PasswordOutput() {
  const { passwords } = useStore(passwordStore);

  return (
    <section className="flex flex-col">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Password(s)</h3>
        <div className="flex space-x-2">
          <SaveFileButton fileType="txt" content={passwords} />
          <CopyButton value={passwords} />
        </div>
      </div>
      <Textarea className="mt-2 font-geist-mono" value={passwords} readOnly />
    </section>
  );
}
