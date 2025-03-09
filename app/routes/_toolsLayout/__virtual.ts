import { tools } from "@/lib/tools";
import {
  route,
  defineVirtualSubtreeConfig,
  layout,
} from "@tanstack/virtual-file-routes";

export default defineVirtualSubtreeConfig([
  layout(
    "route.tsx",
    Object.entries(tools).flatMap(([group, tools]) =>
      tools.map(tool =>
        route(
          `/${group}/${tool.pathname}`,
          `/${group}/${tool.pathname}/route.tsx`
        )
      )
    )
  ),
]);
