import { useStore } from "exome/react";
import { Brain, CaseSensitive } from "lucide-react";
import { numberBaseStore } from "@/stores/converters/number-base.store";
import {
  ConfigurationOption,
  ConfigurationOptionAction,
  ConfigurationOptionContent,
  ConfigurationOptionInfo,
} from "@/components/configuration-option";
import { Switch } from "@/components/ui/switch";

export function Configuration() {
  const { config, updateConfig } = useStore(numberBaseStore);

  return (
    <section>
      <h3 className="text-lg font-semibold">Configuration</h3>
      <div className="mt-2 flex flex-col space-y-2">
        <ConfigurationOption>
          <ConfigurationOptionContent>
            <ConfigurationOptionInfo
              title="Format number"
              Icon={CaseSensitive}
            />
            <ConfigurationOptionAction>
              <Switch
                checked={config.formatNumber}
                onCheckedChange={checked =>
                  updateConfig({ formatNumber: checked })
                }
              />
            </ConfigurationOptionAction>
          </ConfigurationOptionContent>
        </ConfigurationOption>

        {/* <ConfigurationOption>
          <ConfigurationOptionContent>
            <ConfigurationOptionInfo
              title="Advanced mode"
              Icon={Brain}
            />
            <ConfigurationOptionAction>
              <Switch
                checked={config.advancedMode}
                onCheckedChange={checked =>
                  updateConfig({ advancedMode: checked })
                }
              />
            </ConfigurationOptionAction>
          </ConfigurationOptionContent>
        </ConfigurationOption> */}
      </div>
    </section>
  );
}
