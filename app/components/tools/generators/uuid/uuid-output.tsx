import { Textarea } from "@/components/ui/textarea";
import { useStore } from "exome/react";
import { CopyButton } from "@/components/buttons/copy-button";
import { SaveFileButton } from "@/components/buttons/save-file-button";
import { uuidStore } from "@/stores/generators/uuid.store";

export function UUIDOutput() {
  const { uuids } = useStore(uuidStore);

  return (
    <section className="flex flex-col">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">UUID(s)</h3>
        <div className="flex space-x-2">
          <SaveFileButton fileType="txt" content={uuids} />
          <CopyButton value={uuids} />
        </div>
      </div>
      <Textarea className="mt-2 font-geist-mono" value={uuids} readOnly />
    </section>
  );
}
