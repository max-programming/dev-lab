import { Exome } from "exome";
import jsonYaml from "js-yaml";

interface Config {
  conversion: "json-yaml" | "yaml-json";
  indentation: 2 | 4;
}

export class JsonYamlStore extends Exome {
  public code = "";
  public convertedCode = "";
  public config: Config = {
    indentation: 2,
    conversion: "json-yaml",
  };

  constructor() {
    super();
    this.convertCode();
  }

  public updateConfig(config: Partial<Config>) {
    if (config.conversion && config.conversion !== this.config.conversion) {
      const temp = this.code;
      this.code = this.convertedCode;
      this.convertedCode = temp;
    }
    this.config = { ...this.config, ...config };
    this.convertCode();
  }

  public setCode(code: string) {
    this.code = code;
    this.convertCode();
  }

  private convertCode() {
    this.convertedCode = "";
    if (!this.code) return;
    if (this.config.conversion === "json-yaml") {
      try {
        this.convertedCode = jsonYaml.dump(JSON.parse(this.code), {
          indent: this.config.indentation,
        });
      } catch (error) {
        this.convertedCode = "Invalid JSON";
      }
    } else {
      try {
        this.convertedCode = JSON.stringify(
          jsonYaml.load(this.code),
          null,
          this.config.indentation
        );
      } catch (e) {
        this.convertedCode = "Invalid YAML";
      }
    }
  }
}

export const jsonYamlStore = new JsonYamlStore();
