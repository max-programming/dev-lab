import { useStore } from "exome/react";
import { ArrowRightLeft, Space } from "lucide-react";
import { jsonYamlStore } from "../json-yaml.store";
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
  const { config, updateConfig } = useStore(jsonYamlStore);

  return (
    <section>
      <h3 className="text-lg font-semibold">Configuration</h3>
      <div className="mt-2 flex flex-col space-y-2">
        <ConfigurationOption>
          <ConfigurationOptionContent>
            <ConfigurationOptionInfo
              title="Conversion"
              description="Select which conversion mode you want to use"
              Icon={ArrowRightLeft}
            />
            <ConfigurationOptionAction>
              <Select
                value={config.conversion}
                onValueChange={value =>
                  updateConfig({
                    conversion: value as typeof config.conversion,
                  })
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
            </ConfigurationOptionAction>
          </ConfigurationOptionContent>
        </ConfigurationOption>

        <ConfigurationOption>
          <ConfigurationOptionContent>
            <ConfigurationOptionInfo title="Indentation" Icon={Space} />
            <ConfigurationOptionAction>
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
            </ConfigurationOptionAction>
          </ConfigurationOptionContent>
        </ConfigurationOption>
      </div>
    </section>
  );
}
