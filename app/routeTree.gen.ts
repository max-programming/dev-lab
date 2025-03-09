/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as toolsConvertersNumberBaseConverterImport } from './routes/(tools)/converters/number-base-converter'
import { Route as toolsConvertersJsonYamlConverterImport } from './routes/(tools)/converters/json-yaml-converter'
import { Route as toolsConvertersJsonArrayToTableImport } from './routes/(tools)/converters/json-array-to-table'
import { Route as toolsConvertersDateConverterImport } from './routes/(tools)/converters/date-converter'
import { Route as toolsConvertersCronExpressionParserImport } from './routes/(tools)/converters/cron-expression-parser'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const toolsConvertersNumberBaseConverterRoute =
  toolsConvertersNumberBaseConverterImport.update({
    id: '/(tools)/converters/number-base-converter',
    path: '/converters/number-base-converter',
    getParentRoute: () => rootRoute,
  } as any)

const toolsConvertersJsonYamlConverterRoute =
  toolsConvertersJsonYamlConverterImport.update({
    id: '/(tools)/converters/json-yaml-converter',
    path: '/converters/json-yaml-converter',
    getParentRoute: () => rootRoute,
  } as any)

const toolsConvertersJsonArrayToTableRoute =
  toolsConvertersJsonArrayToTableImport.update({
    id: '/(tools)/converters/json-array-to-table',
    path: '/converters/json-array-to-table',
    getParentRoute: () => rootRoute,
  } as any)

const toolsConvertersDateConverterRoute =
  toolsConvertersDateConverterImport.update({
    id: '/(tools)/converters/date-converter',
    path: '/converters/date-converter',
    getParentRoute: () => rootRoute,
  } as any)

const toolsConvertersCronExpressionParserRoute =
  toolsConvertersCronExpressionParserImport.update({
    id: '/(tools)/converters/cron-expression-parser',
    path: '/converters/cron-expression-parser',
    getParentRoute: () => rootRoute,
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
    '/(tools)/converters/cron-expression-parser': {
      id: '/(tools)/converters/cron-expression-parser'
      path: '/converters/cron-expression-parser'
      fullPath: '/converters/cron-expression-parser'
      preLoaderRoute: typeof toolsConvertersCronExpressionParserImport
      parentRoute: typeof rootRoute
    }
    '/(tools)/converters/date-converter': {
      id: '/(tools)/converters/date-converter'
      path: '/converters/date-converter'
      fullPath: '/converters/date-converter'
      preLoaderRoute: typeof toolsConvertersDateConverterImport
      parentRoute: typeof rootRoute
    }
    '/(tools)/converters/json-array-to-table': {
      id: '/(tools)/converters/json-array-to-table'
      path: '/converters/json-array-to-table'
      fullPath: '/converters/json-array-to-table'
      preLoaderRoute: typeof toolsConvertersJsonArrayToTableImport
      parentRoute: typeof rootRoute
    }
    '/(tools)/converters/json-yaml-converter': {
      id: '/(tools)/converters/json-yaml-converter'
      path: '/converters/json-yaml-converter'
      fullPath: '/converters/json-yaml-converter'
      preLoaderRoute: typeof toolsConvertersJsonYamlConverterImport
      parentRoute: typeof rootRoute
    }
    '/(tools)/converters/number-base-converter': {
      id: '/(tools)/converters/number-base-converter'
      path: '/converters/number-base-converter'
      fullPath: '/converters/number-base-converter'
      preLoaderRoute: typeof toolsConvertersNumberBaseConverterImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/converters/cron-expression-parser': typeof toolsConvertersCronExpressionParserRoute
  '/converters/date-converter': typeof toolsConvertersDateConverterRoute
  '/converters/json-array-to-table': typeof toolsConvertersJsonArrayToTableRoute
  '/converters/json-yaml-converter': typeof toolsConvertersJsonYamlConverterRoute
  '/converters/number-base-converter': typeof toolsConvertersNumberBaseConverterRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/converters/cron-expression-parser': typeof toolsConvertersCronExpressionParserRoute
  '/converters/date-converter': typeof toolsConvertersDateConverterRoute
  '/converters/json-array-to-table': typeof toolsConvertersJsonArrayToTableRoute
  '/converters/json-yaml-converter': typeof toolsConvertersJsonYamlConverterRoute
  '/converters/number-base-converter': typeof toolsConvertersNumberBaseConverterRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/(tools)/converters/cron-expression-parser': typeof toolsConvertersCronExpressionParserRoute
  '/(tools)/converters/date-converter': typeof toolsConvertersDateConverterRoute
  '/(tools)/converters/json-array-to-table': typeof toolsConvertersJsonArrayToTableRoute
  '/(tools)/converters/json-yaml-converter': typeof toolsConvertersJsonYamlConverterRoute
  '/(tools)/converters/number-base-converter': typeof toolsConvertersNumberBaseConverterRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/converters/cron-expression-parser'
    | '/converters/date-converter'
    | '/converters/json-array-to-table'
    | '/converters/json-yaml-converter'
    | '/converters/number-base-converter'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/converters/cron-expression-parser'
    | '/converters/date-converter'
    | '/converters/json-array-to-table'
    | '/converters/json-yaml-converter'
    | '/converters/number-base-converter'
  id:
    | '__root__'
    | '/'
    | '/(tools)/converters/cron-expression-parser'
    | '/(tools)/converters/date-converter'
    | '/(tools)/converters/json-array-to-table'
    | '/(tools)/converters/json-yaml-converter'
    | '/(tools)/converters/number-base-converter'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  toolsConvertersCronExpressionParserRoute: typeof toolsConvertersCronExpressionParserRoute
  toolsConvertersDateConverterRoute: typeof toolsConvertersDateConverterRoute
  toolsConvertersJsonArrayToTableRoute: typeof toolsConvertersJsonArrayToTableRoute
  toolsConvertersJsonYamlConverterRoute: typeof toolsConvertersJsonYamlConverterRoute
  toolsConvertersNumberBaseConverterRoute: typeof toolsConvertersNumberBaseConverterRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  toolsConvertersCronExpressionParserRoute:
    toolsConvertersCronExpressionParserRoute,
  toolsConvertersDateConverterRoute: toolsConvertersDateConverterRoute,
  toolsConvertersJsonArrayToTableRoute: toolsConvertersJsonArrayToTableRoute,
  toolsConvertersJsonYamlConverterRoute: toolsConvertersJsonYamlConverterRoute,
  toolsConvertersNumberBaseConverterRoute:
    toolsConvertersNumberBaseConverterRoute,
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
        "/(tools)/converters/cron-expression-parser",
        "/(tools)/converters/date-converter",
        "/(tools)/converters/json-array-to-table",
        "/(tools)/converters/json-yaml-converter",
        "/(tools)/converters/number-base-converter"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/(tools)/converters/cron-expression-parser": {
      "filePath": "(tools)/converters/cron-expression-parser.tsx"
    },
    "/(tools)/converters/date-converter": {
      "filePath": "(tools)/converters/date-converter.tsx"
    },
    "/(tools)/converters/json-array-to-table": {
      "filePath": "(tools)/converters/json-array-to-table.tsx"
    },
    "/(tools)/converters/json-yaml-converter": {
      "filePath": "(tools)/converters/json-yaml-converter.tsx"
    },
    "/(tools)/converters/number-base-converter": {
      "filePath": "(tools)/converters/number-base-converter.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
