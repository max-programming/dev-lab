import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useStore } from "exome/react";
import { uuidStore } from "@/stores/generators/uuid.store";
import { UUIDOutput } from "@/components/tools/generators/uuid/uuid-output";
import { Configuration } from "@/components/tools/generators/uuid/configuration";

export const Route = createFileRoute("/_toolsLayout/generators/uuid")({
  component: UUIDGeneratorPage,
});

function UUIDGeneratorPage() {
  const { uuidCount, generateUUIDs, setUUIDCount } = useStore(uuidStore);

  return (
    <>
      <Configuration />
      <section>
        <h3 className="text-lg font-semibold">Generate</h3>
        <div className="flex space-x-2 mt-2">
          <Button onClick={generateUUIDs}>Generate UUID(s)</Button>
          <span className="text-2xl">&times;</span>
          <Input
            type="number"
            placeholder="Count"
            className="w-24"
            value={uuidCount}
            onChange={e => setUUIDCount(e.target.valueAsNumber)}
          />
        </div>
      </section>
      <UUIDOutput />
    </>
  );
}
