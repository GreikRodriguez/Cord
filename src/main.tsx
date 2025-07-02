import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

import HomePage from './components/pages/HomePage'
import CreateEventPage from './components/pages/CreateEventPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CreateEventPage />
  </StrictMode>,
)
