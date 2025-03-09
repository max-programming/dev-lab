import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useStore } from "exome/react";
import { ListOrdered, Type } from "lucide-react";
import { cronParserStore } from "../cron-parser.store";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function Configuration() {
  const { config, updateConfig } = useStore(cronParserStore);

  return (
    <section>
      <h3 className="text-lg font-semibold">Configuration</h3>
      <div className="mt-2 flex flex-col space-y-2">
        <Card>
          <CardContent className="flex items-center space-x-4">
            <ListOrdered size={24} />
            <div className="flex-1">
              <h4 className="font-semibold">Next scheduled dates</h4>
              <p>How many scheduled dates needs to be generated</p>
            </div>
            <Select
              value={String(config.numberOfDates)}
              onValueChange={value => updateConfig({ numberOfDates: +value })}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="5">5</SelectItem>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="25">25</SelectItem>
                <SelectItem value="50">50</SelectItem>
                <SelectItem value="100">100</SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center space-x-4">
            <Type size={24} />
            <div className="flex-1">
              <h4 className="font-semibold">Output format</h4>
              <p>Date time format of upcoming dates</p>
            </div>
            <Input
              className="w-fit font-geist-mono"
              value={config.outputFormat}
              onChange={e => updateConfig({ outputFormat: e.target.value })}
            />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
