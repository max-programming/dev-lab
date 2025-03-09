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
});

function ToolsLayoutComponent() {
  const { tool } = Route.useLoaderData();

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">{tool.title}</h1>
      <div className="mt-4">
        <Outlet />
      </div>
    </div>
  );
}
