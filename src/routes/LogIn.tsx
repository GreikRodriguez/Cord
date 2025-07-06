import { createFileRoute } from '@tanstack/react-router'
import LogInPage from '../components/pages/LogInPage'

export const Route = createFileRoute('/LogIn')({
  component: RouteComponent,
})

function RouteComponent() {
  return <LogInPage />
}
