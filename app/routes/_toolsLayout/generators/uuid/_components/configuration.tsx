import { useStore } from "exome/react";
import { CaseSensitive, Minus, Settings2 } from "lucide-react";
import { uuidStore } from "../uuid.store";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ConfigurationOption,
  ConfigurationOptionAction,
  ConfigurationOptionContent,
  ConfigurationOptionInfo,
} from "@/components/configuration-option";

export function Configuration() {
  const { config, updateConfig } = useStore(uuidStore);

  return (
    <section>
      <h3 className="text-lg font-semibold">Configuration</h3>
      <div className="mt-2 flex flex-col space-y-2">
        <ConfigurationOption>
          <ConfigurationOptionContent>
            <ConfigurationOptionInfo title="Hyphens" Icon={Minus} />
            <ConfigurationOptionAction>
              <Switch
                checked={config.hyphens}
                onCheckedChange={checked => updateConfig({ hyphens: checked })}
              />
            </ConfigurationOptionAction>
          </ConfigurationOptionContent>
        </ConfigurationOption>

        <ConfigurationOption>
          <ConfigurationOptionContent>
            <ConfigurationOptionInfo title="Uppercase" Icon={CaseSensitive} />
            <ConfigurationOptionAction>
              <Switch
                checked={config.uppercase}
                onCheckedChange={checked =>
                  updateConfig({ uppercase: checked })
                }
              />
            </ConfigurationOptionAction>
          </ConfigurationOptionContent>
        </ConfigurationOption>

        <ConfigurationOption>
          <ConfigurationOptionContent>
            <ConfigurationOptionInfo
              title="UUID Version"
              description="Choose the version of UUID to generate"
              Icon={Settings2}
            />
            <ConfigurationOptionAction>
              <Select
                value={String(config.uuidVersion)}
                onValueChange={value =>
                  updateConfig({
                    uuidVersion: +value as typeof config.uuidVersion,
                  })
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
            </ConfigurationOptionAction>
          </ConfigurationOptionContent>
        </ConfigurationOption>
      </div>
    </section>
  );
}
