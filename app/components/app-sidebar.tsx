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
import { Link, useLocation } from "@tanstack/react-router";

const sidebarGroups = Object.keys(tools) as ToolName[];

export function AppSidebar() {
  const pathname = useLocation({ select: l => l.pathname });

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
                {tools[group].map(tool => {
                  const toPath = `/${group}/${tool.pathname}`;
                  return (
                    <SidebarMenuItem key={tool.pathname}>
                      <SidebarMenuButton asChild isActive={toPath === pathname}>
                        <Link to={toPath}>{tool.shortTitle}</Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
