import { Input } from "@/components/ui/input";
import { useStore } from "exome/react";
import { ListOrdered, Type } from "lucide-react";
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
import { cronParserStore } from "@/stores/converters/cron-parser.store";

export function Configuration() {
  const { config, updateConfig } = useStore(cronParserStore);

  return (
    <section>
      <h3 className="text-lg font-semibold">Configuration</h3>
      <div className="mt-2 flex flex-col space-y-2">
        <ConfigurationOption>
          <ConfigurationOptionContent>
            <ConfigurationOptionInfo
              title="Next scheduled dates"
              description="How many scheduled dates needs to be generated"
              Icon={ListOrdered}
            />
            <ConfigurationOptionAction>
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
            </ConfigurationOptionAction>
          </ConfigurationOptionContent>
        </ConfigurationOption>

        <ConfigurationOption>
          <ConfigurationOptionContent>
            <ConfigurationOptionInfo
              title="Output format"
              description="Date time format of upcoming dates"
              Icon={Type}
            />
            <ConfigurationOptionAction>
              <Input
                className="w-fit font-geist-mono"
                value={config.outputFormat}
                onChange={e => updateConfig({ outputFormat: e.target.value })}
              />
            </ConfigurationOptionAction>
          </ConfigurationOptionContent>
        </ConfigurationOption>
      </div>
    </section>
  );
}
