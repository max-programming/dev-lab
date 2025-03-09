export type ToolName = "converters";
export interface Tool {
  title: string;
  pathname: string;
  description: string;
}

export const tools = {
  converters: [
    {
      title: "CRON Expression Parser",
      pathname: "cron-expression-parser",
      description: "Parse cron expressions to get scheduled dates",
    },
    {
      title: "Date Converter",
      pathname: "date-converter",
      description: "Convert date to human-readable date and vice versa",
    },
    {
      title: "JSON Array to Table",
      pathname: "json-array-to-table",
      description:
        "Convert a JSON array to tabular format, export to CSV or TSV",
    },
    {
      title: "JSON <> YAML Converter",
      pathname: "json-yaml-converter",
      description: "Convert JSON data to YAML and vice versa",
    },
    {
      title: "Number Base Converter",
      pathname: "number-base-converter",
      description: "Convert numbers from one base to another",
    },
  ],
} as const;
