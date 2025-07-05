//clase usada como simulador de router 
import React, { useState } from 'react';
// Importa las páginas que quieras alternar para pruebas
// Asumo que estas páginas ya existen o las crearás con su contenido

import AcordePage from './components/pages/AcordePage';
import RegistroPage from './components/pages/RegistroPage';
import HomePage from './components/pages/HomePage';
import NewEventPage from './components/pages/NewEventPage';
import CreateEventPage from './components/pages/CreateEventPage'; 

// Importa las nuevas páginas del menú
import ProfilePage from './components/pages/ProfilePage';
import CalendarPage from './components/pages/CalendarPage';
import OrganizersPage from './components/pages/OrganizerPage';
import NotificationsPage from './components/pages/NotificationsPage';
import PersonalChatsPage from './components/pages/PersonalChatsPage';
import EventChatsPage from './components/pages/EventsChatsPage';

import Button from './components/common/Button'; // Importa tu componente Button

export default function App() {
  // Puedes cambiar esto manualmente para ver diferentes páginas
  const [currentPage, setCurrentPage] = useState('welcome'); // 'welcome', 'login', 'register', 'home', 'profile', 'calendar', 'organizers', 'notifications', 'personal-chats', 'event-chats', 'new-event'

  // Función de ejemplo para cambiar de página (en una app real usarías un router como React Router DOM)
  const renderPage = () => {
    switch (currentPage) {
      case 'welcome': return <HomePage />;
      case 'acorde': return <AcordePage />;
      case 'login': return <RegistroPage />;
      case 'register': return <RegistroPage />;
      case 'home': return <HomePage />;
      case 'profile': return <ProfilePage />;
      case 'calendar': return <CalendarPage />;
      case 'organizers': return <OrganizersPage />;
      case 'notifications': return <NotificationsPage />;
      case 'personal-chats': return <PersonalChatsPage />;
      case 'event-chats': return <EventChatsPage />;
      case 'new-event': return <NewEventPage />;
      case 'event-creation': return <CreateEventPage />;
      default: return <HomePage />; // Página por defecto
    }
  };

  return (
    <>
      {/* Botones de navegación temporal para desarrollo */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-gray-800 p-2 rounded-lg z-[100] flex flex-wrap gap-2 max-w-full overflow-x-auto">
        <Button text="Welcome" style="bg-blue-500 text-white text-sm px-3 py-1 rounded" onClick={() => setCurrentPage('welcome')} />
        <Button text="Login" style="bg-blue-500 text-white text-sm px-3 py-1 rounded" onClick={() => setCurrentPage('login')} />
        <Button text="Register" style="bg-blue-500 text-white text-sm px-3 py-1 rounded" onClick={() => setCurrentPage('register')} />
        <Button text="Home" style="bg-blue-500 text-white text-sm px-3 py-1 rounded" onClick={() => setCurrentPage('home')} />
        <Button text="New Event" style="bg-purple-500 text-white text-sm px-3 py-1 rounded" onClick={() => setCurrentPage('new-event')} />
        <Button text="Profile" style="bg-green-500 text-white text-sm px-3 py-1 rounded" onClick={() => setCurrentPage('profile')} />
        <Button text="Calendar" style="bg-green-500 text-white text-sm px-3 py-1 rounded" onClick={() => setCurrentPage('calendar')} />
        <Button text="Organizers" style="bg-green-500 text-white text-sm px-3 py-1 rounded" onClick={() => setCurrentPage('organizers')} />
        <Button text="Notifications" style="bg-green-500 text-white text-sm px-3 py-1 rounded" onClick={() => setCurrentPage('notifications')} />
        <Button text="Personal Chats" style="bg-green-500 text-white text-sm px-3 py-1 rounded" onClick={() => setCurrentPage('personal-chats')} />
        <Button text="Event Chats" style="bg-green-500 text-white text-sm px-3 py-1 rounded" onClick={() => setCurrentPage('event-chats')} />
        <Button text="Acorde" style="bg-green-500 text-white text-sm px-3 py-1 rounded" onClick={() => setCurrentPage('acorde')} />
        <Button text="Event Creation" style="bg-green-500 text-white text-sm px-3 py-1 rounded" onClick={() => setCurrentPage('event-creation')} />
      </div>

      {renderPage()}
    </>
  );
}