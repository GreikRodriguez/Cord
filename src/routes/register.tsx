import { createFileRoute } from '@tanstack/react-router'
import RegistroPage from '../components/pages/RegistroPage'

export const Route = createFileRoute('/register')({
  component: RouteComponent,
})

function RouteComponent() {
  return <RegistroPage />
}
