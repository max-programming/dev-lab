import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useStore } from "exome/react";
import { Save, Copy } from "lucide-react";
import { cronParserStore } from "../cron-parser.store";

export function CronOutput() {
  const { cronDescription, nextScheduledDates } = useStore(cronParserStore);

  return (
    <>
      <section>
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">CRON Description</h3>
          <div className="flex space-x-2">
            <Button variant="outline" size="icon" title="Save as">
              <Save />
            </Button>
            <Button variant="outline">
              <Copy /> Copy
            </Button>
          </div>
        </div>
        <Input
          className="mt-2 font-geist-mono"
          value={cronDescription}
          readOnly
        />
      </section>
      <section className="flex flex-col">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Next scheduled dates</h3>
          <div className="flex space-x-2">
            <Button variant="outline" size="icon" title="Save as">
              <Save />
            </Button>
            <Button variant="outline">
              <Copy /> Copy
            </Button>
          </div>
        </div>
        <Textarea
          className="mt-2 font-geist-mono"
          value={nextScheduledDates}
          readOnly
        />
      </section>
    </>
  );
}
