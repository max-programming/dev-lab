import { tools } from "@/lib/tools";
import { createFileRoute, notFound, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_toolsLayout/_route")({
  component: ToolsLayoutComponent,
  loader(ctx) {
    const toolPathname = ctx.location.pathname.split("/").at(-1);
    const tool = tools.converters.find(tool => tool.pathname === toolPathname);
    if (!tool) throw notFound();
    return { tool };
  },
});

function ToolsLayoutComponent() {
  const { tool } = Route.useLoaderData();

  return (
    <div>
      <h1>{tool.title}</h1>
      <p>{tool.description || "Details about the tool can go here."}</p>
      <Outlet />
    </div>
  );
}
