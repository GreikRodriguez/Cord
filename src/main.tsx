import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import HomePage from './components/pages/HomePage'
import CreateEventPage from './components/pages/CreateEventPage'
import AcordePage from './components/pages/AcordePage'
import NavBar from './components/ui/NavBar'

import CategoriesPage from './components/ui/CategoriesPage'
import EventPrivacy from './components/ui/EventPrivacy'

import RegistroPage from './components/pages/RegistroPage'



createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <EventPrivacy/>

    <AcordePage />

  </StrictMode>,
)
