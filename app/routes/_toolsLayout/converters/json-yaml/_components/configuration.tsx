import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useStore } from "exome/react";
import { ArrowRightLeft, ListOrdered, Space, Type } from "lucide-react";
import { jsonYamlStore } from "../json-yaml.store";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function Configuration() {
  const { config, updateConfig } = useStore(jsonYamlStore);

  return (
    <section>
      <h3 className="text-lg font-semibold">Configuration</h3>
      <div className="mt-2 flex flex-col space-y-2">
        <Card>
          <CardContent className="flex items-center space-x-4">
            <ArrowRightLeft size={24} />
            <div className="flex-1">
              <h4 className="font-semibold">Conversion</h4>
              <p>Select which conversion mode you want to use</p>
            </div>
            <Select
              value={config.conversion}
              onValueChange={value =>
                updateConfig({ conversion: value as typeof config.conversion })
              }
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="json-yaml">JSON to YAML</SelectItem>
                <SelectItem value="yaml-json">YAML to JSON</SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center space-x-4">
            <Space size={24} />
            <div className="flex-1">
              <h4 className="font-semibold">Indentation</h4>
            </div>
            <Select
              value={String(config.indentation)}
              onValueChange={value =>
                updateConfig({
                  indentation: +value as typeof config.indentation,
                })
              }
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2">2 spaces</SelectItem>
                <SelectItem value="4">4 spaces</SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
