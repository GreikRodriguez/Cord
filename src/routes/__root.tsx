import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import SideMenu from '../components/navigation/SideMenu'
import App from '../App'
import ProfilePage from '../components/pages/ProfilePage'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <React.Fragment>
      <App />
    </React.Fragment>
  )
}
