import { tools } from "@/lib/tools";
import {
  route,
  defineVirtualSubtreeConfig,
} from "@tanstack/virtual-file-routes";

export default defineVirtualSubtreeConfig([
  ...Object.entries(tools).flatMap(([group, tools]) =>
    tools.map(tool =>
      route(`/${group}/${tool.pathname}`, `/${group}/${tool.pathname}.tsx`)
    )
  ),
]);
