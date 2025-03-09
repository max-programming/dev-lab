import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(tools)/converters/json-yaml-converter')(
  {
    component: RouteComponent,
  },
)

function RouteComponent() {
  return <div>Hello "/(tools)/converters/json-yaml-converter"!</div>
}
