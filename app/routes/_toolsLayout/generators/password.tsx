import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useStore } from "exome/react";
import { passwordStore } from "@/stores/generators/password.store";
import { PasswordOutput } from "@/components/tools/generators/password/password-output";
import { Configuration } from "@/components/tools/generators/password/configuration";

export const Route = createFileRoute("/_toolsLayout/generators/password")({
  component: PasswordGeneratorPage,
});

function PasswordGeneratorPage() {
  const { passwordCount, generatePasswords, setPasswordCount } =
    useStore(passwordStore);

  return (
    <>
      <Configuration />
      <section>
        <h3 className="text-lg font-semibold">Generate</h3>
        <div className="flex space-x-2 mt-2">
          <Button onClick={generatePasswords}>Generate Password(s)</Button>
          <span className="text-2xl">&times;</span>
          <Input
            type="number"
            placeholder="Count"
            className="w-24"
            value={passwordCount}
            onChange={e => setPasswordCount(e.target.valueAsNumber)}
          />
        </div>
      </section>
      <PasswordOutput />
    </>
  );
}
