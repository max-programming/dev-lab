import { Clock, FileSliders, RectangleEllipsis, Hash } from "lucide-react";

export type ToolName = "converters" | "generators";

export const tools = {
  converters: [
    {
      icon: Clock,
      shortTitle: "CRON Parser",
      title: "CRON Expression Parser",
      pathname: "cron-parser",
      description: "Parse cron expressions to get scheduled dates",
    },
    // {
    //   shortTitle: "Date",
    //   title: "Date Converter",
    //   pathname: "date",
    //   description: "Convert date to human-readable date and vice versa",
    // },
    // {
    //   shortTitle: "JSON > Table",
    //   title: "JSON Array to Table",
    //   pathname: "json-array-to-table",
    //   description:
    //     "Convert a JSON array to tabular format, export to CSV or TSV",
    // },
    {
      icon: FileSliders,
      shortTitle: "JSON <> YAML",
      title: "JSON <> YAML Converter",
      pathname: "json-yaml",
      description: "Convert JSON data to YAML and vice versa",
    },
    // {
    //   shortTitle: "Number Base",
    //   title: "Number Base Converter",
    //   pathname: "number-base",
    //   description: "Convert numbers from one base to another",
    // },
  ],
  generators: [
    {
      icon: RectangleEllipsis,
      shortTitle: "Password",
      title: "Password Generator",
      pathname: "password",
      description: "Generate random passwords",
    },
    {
      icon: Hash,
      shortTitle: "UUID",
      title: "UUID Generator",
      pathname: "uuid",
      description: "Generate UUIDs versions 1, 4 (GUID) and 7",
    },
  ],
} as const;
