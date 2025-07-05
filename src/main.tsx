import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import HomePage from './components/pages/HomePage'
import CreateEventPage from './components/pages/CreateEventPage'
import AcordePage from './components/pages/AcordePage'
<<<<<<< Updated upstream
import NavBar from './components/ui/NavBar'
=======
import NavBar from './components/common/NavBar'
import CategoriesPage from './components/pages/CategoriesPage'
import EventPrivacy from './components/ui/EventPrivacy'
>>>>>>> Stashed changes
import RegistroPage from './components/pages/RegistroPage'
import PerfilPage from './components/pages/ProfilePage'
import PerfilChats from './components/pages/PersonalChatsPage'
import PerfilEvents from './components/pages/EventsChatsPage'
import CalendarPage from './components/pages/CalednarPage'
import OrgPage from './components/pages/OrganizerPage'
import Notifications from './components/pages/NotificationsPage'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
<<<<<<< Updated upstream
    <AcordePage />
=======

    <App />

>>>>>>> Stashed changes
  </StrictMode>,
)
