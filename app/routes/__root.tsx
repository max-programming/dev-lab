import type { PropsWithChildren } from "react";
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import appCss from "@/styles/app.css?url";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "DevLab",
      },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
    scripts: [
      {
        defer: true,
        src: "https://cloud.umami.is/script.js",
        "data-website-id": "df87b939-9d54-4876-ac35-30f13db81960",
      },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: PropsWithChildren) {
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body>
        <SidebarProvider>
          <AppSidebar />
          <main className="w-full">
            {/* <SidebarTrigger /> */}
            {children}
          </main>
          <Scripts />
        </SidebarProvider>
      </body>
    </html>
  );
}
