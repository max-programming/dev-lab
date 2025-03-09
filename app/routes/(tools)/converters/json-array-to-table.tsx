import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(tools)/converters/json-array-to-table')(
  {
    component: RouteComponent,
  },
)

function RouteComponent() {
  return <div>Hello "/(tools)/converters/json-array-to-table"!</div>
}
