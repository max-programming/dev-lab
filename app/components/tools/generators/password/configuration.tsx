import { useStore } from "exome/react";
import { AlertCircle, ChevronDown, ChevronUp, Hash } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import {
  ConfigurationOption,
  ConfigurationOptionAction,
  ConfigurationOptionContent,
  ConfigurationOptionInfo,
} from "@/components/configuration-option";
import { Input } from "@/components/ui/input";
import { Alert, AlertTitle } from "@/components/ui/alert";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";
import { passwordStore } from "@/stores/generators/password.store";

export function Configuration() {
  const { config, updateConfig, passwordError, optionsDescription } =
    useStore(passwordStore);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section>
      <h3 className="text-lg font-semibold">Configuration</h3>
      <div className="mt-2 flex flex-col space-y-2">
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger asChild>
            <ConfigurationOption className="cursor-pointer hover:bg-muted/50">
              <ConfigurationOptionContent>
                <ConfigurationOptionInfo
                  title="Length"
                  description={optionsDescription}
                  Icon={Hash}
                />
                <ConfigurationOptionAction>
                  <div className="flex items-center">
                    <Input
                      type="number"
                      className="w-20"
                      value={config.length}
                      min={1}
                      max={100}
                      step={1}
                      onClick={e => e.stopPropagation()}
                      onChange={e =>
                        updateConfig({ length: e.target.valueAsNumber })
                      }
                    />
                    <div className="ml-2">
                      {isOpen ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </div>
                  </div>
                </ConfigurationOptionAction>
              </ConfigurationOptionContent>
            </ConfigurationOption>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="pl-3 pt-2 flex flex-col space-y-2">
              <ConfigurationOption className="p-0">
                <ConfigurationOptionContent className="p-4">
                  <ConfigurationOptionInfo
                    title="Lowercase characters"
                    description="Include lowercase letters (abcdefghijklmnopqrstuvwxyz)"
                  />
                  <ConfigurationOptionAction>
                    <Switch
                      checked={config.lowercase}
                      onCheckedChange={checked =>
                        updateConfig({ lowercase: checked })
                      }
                    />
                  </ConfigurationOptionAction>
                </ConfigurationOptionContent>
              </ConfigurationOption>

              <ConfigurationOption className="p-0">
                <ConfigurationOptionContent className="p-4">
                  <ConfigurationOptionInfo
                    title="Uppercase characters"
                    description="Include uppercase letters (ABCDEFGHIJKLMNOPQRSTUVWXYZ)"
                  />
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

              <ConfigurationOption className="p-0">
                <ConfigurationOptionContent className="p-4">
                  <ConfigurationOptionInfo
                    title="Digit characters"
                    description="Include digit characters (0123456789)"
                  />
                  <ConfigurationOptionAction>
                    <Switch
                      checked={config.digits}
                      onCheckedChange={checked =>
                        updateConfig({ digits: checked })
                      }
                    />
                  </ConfigurationOptionAction>
                </ConfigurationOptionContent>
              </ConfigurationOption>

              <ConfigurationOption className="p-0">
                <ConfigurationOptionContent className="p-4">
                  <ConfigurationOptionInfo
                    title="Special characters"
                    description="Include special characters (!@#$%^&*()_+[]{}|;:,.<>?)"
                  />
                  <ConfigurationOptionAction>
                    <Switch
                      checked={config.special}
                      onCheckedChange={checked =>
                        updateConfig({ special: checked })
                      }
                    />
                  </ConfigurationOptionAction>
                </ConfigurationOptionContent>
              </ConfigurationOption>

              <ConfigurationOption className="p-0">
                <ConfigurationOptionContent className="p-4">
                  <ConfigurationOptionInfo
                    title="Excluded characters"
                    description="Characters to exclude from the password"
                  />
                  <ConfigurationOptionAction>
                    <Input
                      type="text"
                      className="w-40"
                      value={config.excludedChars}
                      onChange={e =>
                        updateConfig({ excludedChars: e.target.value })
                      }
                      placeholder="e.g. 0oO1iIl"
                    />
                  </ConfigurationOptionAction>
                </ConfigurationOptionContent>
              </ConfigurationOption>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
      {passwordError && (
        <Alert className="mt-2" variant="destructive">
          <AlertCircle size={16} />
          <AlertTitle>{passwordError}</AlertTitle>
        </Alert>
      )}
    </section>
  );
}
