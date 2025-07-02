import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
<<<<<<< Updated upstream
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
=======
import App from './App'
import HomePage from './components/pages/HomePage'
import Acorde from './components/pages/Acorde'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Acorde />
>>>>>>> Stashed changes
  </StrictMode>,
)
