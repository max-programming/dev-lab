/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as toolsLayoutRouteImport } from './routes/_toolsLayout/route'
import { Route as toolsLayoutConvertersCronParserRouteImport } from './routes/_toolsLayout/converters/cron-parser/route'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const toolsLayoutRouteRoute = toolsLayoutRouteImport.update({
  id: '/_toolsLayout/_route',
  getParentRoute: () => rootRoute,
} as any)

const toolsLayoutConvertersCronParserRouteRoute =
  toolsLayoutConvertersCronParserRouteImport.update({
    id: '/converters/cron-parser',
    path: '/converters/cron-parser',
    getParentRoute: () => toolsLayoutRouteRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_toolsLayout/_route': {
      id: '/_toolsLayout/_route'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof toolsLayoutRouteImport
      parentRoute: typeof rootRoute
    }
    '/_toolsLayout/_route/converters/cron-parser': {
      id: '/_toolsLayout/_route/converters/cron-parser'
      path: '/converters/cron-parser'
      fullPath: '/converters/cron-parser'
      preLoaderRoute: typeof toolsLayoutConvertersCronParserRouteImport
      parentRoute: typeof toolsLayoutRouteImport
    }
  }
}

// Create and export the route tree

interface toolsLayoutRouteRouteChildren {
  toolsLayoutConvertersCronParserRouteRoute: typeof toolsLayoutConvertersCronParserRouteRoute
}

const toolsLayoutRouteRouteChildren: toolsLayoutRouteRouteChildren = {
  toolsLayoutConvertersCronParserRouteRoute:
    toolsLayoutConvertersCronParserRouteRoute,
}

const toolsLayoutRouteRouteWithChildren =
  toolsLayoutRouteRoute._addFileChildren(toolsLayoutRouteRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '': typeof toolsLayoutRouteRouteWithChildren
  '/converters/cron-parser': typeof toolsLayoutConvertersCronParserRouteRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '': typeof toolsLayoutRouteRouteWithChildren
  '/converters/cron-parser': typeof toolsLayoutConvertersCronParserRouteRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/_toolsLayout/_route': typeof toolsLayoutRouteRouteWithChildren
  '/_toolsLayout/_route/converters/cron-parser': typeof toolsLayoutConvertersCronParserRouteRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '' | '/converters/cron-parser'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '' | '/converters/cron-parser'
  id:
    | '__root__'
    | '/'
    | '/_toolsLayout/_route'
    | '/_toolsLayout/_route/converters/cron-parser'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  toolsLayoutRouteRoute: typeof toolsLayoutRouteRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  toolsLayoutRouteRoute: toolsLayoutRouteRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_toolsLayout/_route"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_toolsLayout/_route": {
      "filePath": "_toolsLayout/route.tsx",
      "children": [
        "/_toolsLayout/_route/converters/cron-parser"
      ]
    },
    "/_toolsLayout/_route/converters/cron-parser": {
      "filePath": "_toolsLayout/converters/cron-parser/route.tsx",
      "parent": "/_toolsLayout/_route"
    }
  }
}
ROUTE_MANIFEST_END */
