import { useStore } from "exome/react";
import { numberBaseStore } from "../number-base.store";
import { BasicInput } from "./basic-input";

export function BasicModeForm() {
  const { basicModeState } = useStore(numberBaseStore);

  return (
    <section>
      <div className="mt-2 flex flex-col space-y-4">
        {Object.keys(basicModeState).map(k => (
          <BasicInput stateKey={k as keyof typeof basicModeState} />
        ))}
      </div>
    </section>
  );
}
