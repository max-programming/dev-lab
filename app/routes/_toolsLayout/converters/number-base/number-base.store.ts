import { Exome } from "exome";

interface Config {
  formatNumber: boolean;
  // advancedMode: boolean;
}

export interface BasicModeState {
  hexadecimal: string;
  decimal: string;
  octal: string;
  binary: string;
}

export class NumberBaseStore extends Exome {
  public config: Config = {
    formatNumber: true,
    // advancedMode: false,
  };

  public basicModeState: BasicModeState = {
    hexadecimal: "",
    decimal: "",
    octal: "",
    binary: "",
  };

  public updateConfig(newConfig: Partial<Config>) {
    this.config = { ...this.config, ...newConfig };
  }

  public setBasicModeStateByKey(key: keyof BasicModeState, value: string) {
    this.basicModeState[key] = value;
    this.convertNumberBase(value, key);
  }

  public resetBasicModeState() {
    this.basicModeState = {
      hexadecimal: "",
      decimal: "",
      octal: "",
      binary: "",
    };
  }

  public convertNumberBase(value: string, fromBase: keyof BasicModeState) {
    if (this.config.formatNumber)
      value = value.replace(/,/g, "").replace(/ /g, "");

    const number = parseInt(value, this.getBase(fromBase));
    if (isNaN(number)) {
      this.resetBasicModeState();
      return;
    }

    const hexString = number.toString(16).toUpperCase();
    const decString = number.toString(10);
    const octString = number.toString(8);
    const binString = number.toString(2);

    this.basicModeState.hexadecimal = this.formatNumbers(
      "hexadecimal",
      hexString
    );
    this.basicModeState.decimal = this.formatNumbers("decimal", decString);
    this.basicModeState.octal = this.formatNumbers("octal", octString);
    this.basicModeState.binary = this.formatNumbers("binary", binString);
  }

  private formatNumbers(key: keyof BasicModeState, value: string): string {
    if (!this.config.formatNumber) return value;
    const base = this.getBase(key);
    const separator = base === 10 ? "," : " ";
    const digits = base === 10 ? 3 : base === 2 ? 4 : 3;
    const regex = new RegExp(`\\B(?=(\\d{${digits}})+\\b)`, "g");
    return value.replace(regex, separator);
  }

  private getBase(base: keyof BasicModeState): number {
    switch (base) {
      case "hexadecimal":
        return 16;
      case "decimal":
        return 10;
      case "octal":
        return 8;
      case "binary":
        return 2;
      default:
        return 10;
    }
  }
}

export const numberBaseStore = new NumberBaseStore();
