import { Exome } from "exome";
import CronExpressionParser from "cron-parser";
import Cronstrue from "cronstrue";

import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";

dayjs.extend(advancedFormat);

interface Configuration {
  includeSeconds: boolean;
  numberOfDates: number;
  outputFormat: string;
}

export class CronParserStore extends Exome {
  public cronExpression = "* * * * * *";
  public cronDescription = "";
  public nextScheduledDates = "";
  public config: Configuration = {
    includeSeconds: true,
    numberOfDates: 5,
    outputFormat: "YYYY-MM-DD HH:mm:ss",
  };

  public cronExpressionError: string | undefined;

  constructor() {
    super();
    this.parseCronExpression();
  }

  public updateConfig(config: Partial<Configuration>) {
    this.config = { ...this.config, ...config };
    this.parseCronExpression();
  }

  public setCronExpression(cronExpression: string) {
    this.cronExpression = cronExpression;
    this.parseCronExpression();
  }

  private parseCronExpression() {
    try {
      this.cronExpressionError = undefined;
      this.nextScheduledDates = "";
      this.cronDescription = "";

      const parsedCron = CronExpressionParser.parse(this.cronExpression, {
        tz: Intl.DateTimeFormat().resolvedOptions().timeZone,
      });

      this.cronDescription = Cronstrue.toString(this.cronExpression);
      this.nextScheduledDates = parsedCron
        .take(this.config.numberOfDates)
        .map(cd => dayjs(cd.toDate()).format(this.config.outputFormat))
        .join("\n");
    } catch (error) {
      this.cronExpressionError = "CRON Expression is not valid";
    }
  }
}

export const cronParserStore = new CronParserStore();
