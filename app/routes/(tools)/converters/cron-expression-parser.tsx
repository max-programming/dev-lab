import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/(tools)/converters/cron-expression-parser',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(tools)/converters/cron-expression-parser"!</div>
}
