import { tools, type ToolName } from "@/lib/tools";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import { Link } from "@tanstack/react-router";

const sidebarGroups = Object.keys(tools) as ToolName[];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        {sidebarGroups.map(group => (
          <SidebarGroup key={group}>
            <SidebarGroupLabel className="capitalize">
              {group}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {tools[group].map(tool => (
                  <SidebarMenuItem key={tool.pathname}>
                    <SidebarMenuButton asChild>
                      <Link to={`/${group}/${tool.pathname}`}>
                        {tool.title}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
