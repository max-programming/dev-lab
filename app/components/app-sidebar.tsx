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
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { Link, useLocation } from "@tanstack/react-router";
import { tools, type ToolName } from "@/lib/tools";
import { ChevronDown } from "lucide-react";

const sidebarGroups = Object.keys(tools) as ToolName[];

export function AppSidebar() {
  const pathname = useLocation({ select: l => l.pathname });

  return (
    <Sidebar>
      <SidebarHeader>
        <h1 className="text-xl font-bold px-4 py-2">DevLab</h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/"}>
                  <Link to="/">All Tools</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        {sidebarGroups.map(group => (
          <Collapsible defaultOpen className="group/collapsible">
            <SidebarGroup key={group}>
              <SidebarGroupLabel asChild className="capitalize">
                <CollapsibleTrigger>
                  {group}
                  <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {tools[group].map(tool => {
                      const toPath = `/${group}/${tool.pathname}`;
                      return (
                        <SidebarMenuItem key={tool.pathname}>
                          <SidebarMenuButton
                            asChild
                            isActive={toPath === pathname}
                          >
                            <Link to={toPath}>{tool.shortTitle}</Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      );
                    })}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        ))}
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
