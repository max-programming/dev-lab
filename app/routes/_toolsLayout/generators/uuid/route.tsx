import { createFileRoute } from "@tanstack/react-router";
import { Configuration } from "./_components/configuration";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useStore } from "exome/react";
import { uuidStore } from "./uuid.store";
import { UUIDOutput } from "./_components/uuid-output";

export const Route = createFileRoute("/_toolsLayout/_route/generators/uuid")({
  component: UUIDGeneratorPage,
});

function UUIDGeneratorPage() {
  const { uuidCount, generateUUIDs, setUUIDCount } = useStore(uuidStore);

  return (
    <div id="uuid-generator" className="flex flex-col gap-y-5 h-full">
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
    </div>
  );
}
