import { createFileRoute } from '@tanstack/react-router'
import ConfiguracionesPage from '../components/pages/ConfiguracionesPage'

export const Route = createFileRoute('/configuraciones')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/configuraciones"!</div>
}
