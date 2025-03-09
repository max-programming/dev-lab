import { Exome } from "exome";
import { v1, v4, v7 } from "uuid";

interface Config {
  hyphens: boolean;
  uppercase: boolean;
  uuidVersion: 1 | 4 | 7;
}

export class UUIDStore extends Exome {
  public uuids = "";
  public uuidCount = 1;
  public config: Config = {
    hyphens: true,
    uppercase: false,
    uuidVersion: 4,
  };

  public setUUIDCount(uuidCount: number) {
    this.uuidCount = uuidCount;
    this.generateUUIDs();
  }

  public updateConfig(config: Partial<Config>) {
    this.config = { ...this.config, ...config };
    this.generateUUIDs();
  }

  public generateUUIDs() {
    const uuids = Array.from({ length: this.uuidCount }, () =>
      this.generateUUID()
    );
    this.uuids = uuids.join("\n");
    if (this.config.uppercase) {
      this.uuids = this.uuids.toUpperCase();
    }
    if (!this.config.hyphens) {
      this.uuids = this.uuids.replace(/-/g, "");
    }
    this.uuids = this.uuids.trim();
  }

  private generateUUID(): string {
    switch (this.config.uuidVersion) {
      case 1:
        return v1();
      case 4:
        return v4();
      case 7:
        return v7();
      default:
        return "";
    }
  }
}

export const uuidStore = new UUIDStore();
