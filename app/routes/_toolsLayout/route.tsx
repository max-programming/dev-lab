import { tools, type ToolName } from "@/lib/tools";
import { createFileRoute, notFound, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_toolsLayout/_route")({
  component: ToolsLayoutComponent,
  loader(ctx) {
    const toolGroup = ctx.location.pathname.split("/").at(-2) as ToolName;
    const toolPathname = ctx.location.pathname.split("/").at(-1);
    const tool = tools[toolGroup].find(tool => tool.pathname === toolPathname);
    if (!tool) throw notFound();
    return { tool };
  },
  head(ctx) {
    const { tool } = ctx.loaderData;
    return {
      meta: [
        {
          title: `${tool.title} | DevLab`,
          description: tool.description,
        },
      ],
    };
  },
});

function ToolsLayoutComponent() {
  const { tool } = Route.useLoaderData();

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mt-2">{tool.title}</h1>
      <div className="flex flex-col gap-y-5 h-full mt-5">
        <Outlet />
      </div>
    </div>
  );
}
