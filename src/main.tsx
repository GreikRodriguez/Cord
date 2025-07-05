import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createRouter } from '@tanstack/react-router'
// Import the generated route tree
import { routeTree } from './routeTree.gen'

// Create a new router instance
const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}


import App from './App'
import HomePage from './components/pages/HomePage'
import CreateEventPage from './components/pages/CreateEventPage'
import AcordePage from './components/pages/AcordePage'
import NavBar from './components/common/NavBar'
import CategoriesPage from './components/pages/CategoriesPage'
import EventPrivacy from './components/ui/EventPrivacy'
import RegistroPage from './components/pages/RegistroPage'
import PerfilPage from './components/pages/ProfilePage'
import PerfilChats from './components/pages/PersonalChatsPage'
import PerfilEvents from './components/pages/EventsChatsPage'
import CalendarPage from './components/pages/CalendarPage'
import OrgPage from './components/pages/OrganizerPage'
import Notifications from './components/pages/NotificationsPage'



createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <RouterProvider router={router} />

  </StrictMode>,
);