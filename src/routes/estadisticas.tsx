import { createFileRoute } from '@tanstack/react-router'
import EstadisticasPage from '../components/pages/EstadisticasPage'

export const Route = createFileRoute('/estadisticas')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/estadisticas"!</div>
}
