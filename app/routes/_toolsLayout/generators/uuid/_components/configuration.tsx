import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useStore } from "exome/react";
import {
  CaseSensitive,
  ListOrdered,
  Minus,
  Settings2,
  Type,
} from "lucide-react";
import { uuidStore } from "../uuid.store";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

export function Configuration() {
  const { config, updateConfig } = useStore(uuidStore);

  return (
    <section>
      <h3 className="text-lg font-semibold">Configuration</h3>
      <div className="mt-2 flex flex-col space-y-2">
        <Card>
          <CardContent className="flex items-center space-x-4">
            <Minus size={24} />
            <div className="flex-1">
              <h4 className="font-semibold">Hyphens</h4>
            </div>
            <Switch
              checked={config.hyphens}
              onCheckedChange={checked => updateConfig({ hyphens: checked })}
            />
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center space-x-4">
            <CaseSensitive size={24} />
            <div className="flex-1">
              <h4 className="font-semibold">Uppercase</h4>
            </div>
            <Switch
              checked={config.uppercase}
              onCheckedChange={checked => updateConfig({ uppercase: checked })}
            />
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center space-x-4">
            <Settings2 size={24} />
            <div className="flex-1">
              <h4 className="font-semibold">Next scheduled dates</h4>
              <p>How many scheduled dates needs to be generated</p>
            </div>
            <Select
              value={String(config.uuidVersion)}
              onValueChange={value =>
                updateConfig({ uuidVersion: +value as 1 | 4 | 7 })
              }
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="4">4 (GUID)</SelectItem>
                <SelectItem value="7">7</SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
