import { Exome } from "exome";

interface Config {
  length: number;
  lowercase: boolean;
  uppercase: boolean;
  digits: boolean;
  special: boolean;
  excludedChars: string;
}

export class PasswordStore extends Exome {
  public passwords = "";
  public passwordCount = 1;
  public config: Config = {
    length: 30,
    lowercase: true,
    uppercase: true,
    digits: true,
    special: true,
    excludedChars: "",
  };

  public optionsDescription = "";
  public passwordError: string | undefined;

  constructor() {
    super();
    this.generatePasswords();
  }

  public setPasswordCount(passwordCount: number) {
    this.passwordCount = passwordCount;
    this.generatePasswords();
  }

  public updateConfig(config: Partial<Config>) {
    this.config = { ...this.config, ...config };
    this.generatePasswords();
  }

  private updateOptionsDescription() {
    const { lowercase, uppercase, digits, special, excludedChars } =
      this.config;
    const options = [];
    if (lowercase) options.push("Lowercase");
    if (uppercase) options.push("Uppercase");
    if (digits) options.push("Digits");
    if (special) options.push("Special Characters");
    if (excludedChars) options.push(`Excluded: ${excludedChars}`);
    this.optionsDescription = options.join(", ");
  }

  public generatePasswords() {
    this.updateOptionsDescription();
    this.passwords = Array.from({ length: this.passwordCount }, () =>
      this.generatePassword()
    )
      .join("\n")
      .trim();
  }

  private generatePassword(): string {
    const { length, lowercase, uppercase, digits, special, excludedChars } =
      this.config;
    const chars = [];
    if (lowercase) chars.push("abcdefghijklmnopqrstuvwxyz");
    if (uppercase) chars.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    if (digits) chars.push("0123456789");
    if (special) chars.push("!@#$%^&*()_+[]{}|;:,.<>?");
    if (excludedChars.trim().length > 0) {
      const excluded = [
        ...new Set(
          excludedChars
            .split("")
            .map(c => c.trim())
            .filter(Boolean)
        ),
      ];
      chars.forEach((charSet, index) => {
        chars[index] = charSet
          .split("")
          .filter(char => !excluded.includes(char))
          .join("");
      });
    }

    const allChars = chars.join("");

    if (!allChars) {
      this.passwordError = "Please turn on at least one option";
      return "";
    }
    this.passwordError = undefined;

    let password = "";
    for (let i = 0; i < length; i++) {
      password += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }
    return password;
  }
}

export const passwordStore = new PasswordStore();
