import { createFileRoute, Link } from "@tanstack/react-router";
import { tools } from "@/lib/tools";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const Route = createFileRoute("/")({
  component: Home,
});

function getAllTools() {
  const allTools = Object.entries(tools).flatMap(([group, tools]) =>
    tools.map(tool => ({ group, tool }))
  );
  return allTools;
}

function Home() {
  const allTools = getAllTools();

  return (
    <div className="container mx-auto max-w-7xl my-6 space-y-6 px-4">
      <h1 className="text-4xl font-bold">Welcome to DevLab</h1>
      <p className="text-muted-foreground text-lg">
        A collection of useful tools for developers
      </p>

      <h2 className="text-2xl font-semibold mt-8">All Tools</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allTools.map(({ group, tool }) => (
          // @ts-expect-error
          <Link to={`/${group}/${tool.pathname}`}>
            <Card
              key={`${group}-${tool.pathname}`}
              className="flex flex-col h-full transition-all hover:shadow-md"
            >
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  {tool.icon && <tool.icon />}
                  {tool.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-base">
                  {tool.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <span className="text-sm capitalize text-muted-foreground">
                  {group}
                </span>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
