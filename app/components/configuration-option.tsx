import { cn } from "@/lib/utils";
import { Card, CardContent } from "./ui/card";
import type { LucideIcon, LucideProps } from "lucide-react";

interface ConfigurationOptionInfoProps {
  title: string;
  description?: string;
  Icon?: LucideIcon;
  iconProps?: LucideProps;
}

function ConfigurationOption(props: React.ComponentProps<"div">) {
  return <Card {...props} />;
}

function ConfigurationOptionContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <CardContent
      className={cn("flex items-center space-x-4", className)}
      {...props}
    />
  );
}

function ConfigurationOptionInfo({
  title,
  description,
  Icon,
  iconProps,
}: ConfigurationOptionInfoProps) {
  return (
    <>
      {Icon && <Icon size={24} {...iconProps} />}
      <div className="flex-1">
        <h4 className="font-semibold">{title}</h4>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>
    </>
  );
}

function ConfigurationOptionAction({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div className={cn("flex items-center", className)} {...props} />;
}

export {
  ConfigurationOption,
  ConfigurationOptionContent,
  ConfigurationOptionInfo,
  ConfigurationOptionAction,
};
