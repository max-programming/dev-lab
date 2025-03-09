import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useStore } from "exome/react";
import { Copy, Save } from "lucide-react";
import { uuidStore } from "../uuid.store";

export function UUIDOutput() {
  const { uuids } = useStore(uuidStore);

  return (
    <section className="flex flex-col">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">UUID(s)</h3>
        <div className="flex space-x-2">
          <Button variant="outline" size="icon" title="Save as">
            <Save />
          </Button>
          <Button variant="outline">
            <Copy /> Copy
          </Button>
        </div>
      </div>
      <Textarea className="mt-2 font-geist-mono" value={uuids} readOnly />
    </section>
  );
}
