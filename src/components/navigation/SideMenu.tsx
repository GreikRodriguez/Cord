import { defineHandlerCallback } from "@tanstack/react-router/ssr/server";
import Button from "../common/Button";
import { Link } from "@tanstack/react-router";

interface SideMenuProps {
  isOpen: boolean; // Controla si el menú está visible
  onClose: () => void; // Función para cerrar el menú
  
}

export default function SideMenu(props: SideMenuProps) {
  // Clases para controlar la visibilidad y animación del menú
  const menuPositionClass = props.isOpen ? 'translate-x-0' : '-translate-x-full';
  const overlayClasses = props.isOpen ? 'fixed inset-0 bg-gray-900 bg-opacity-50 z-40' : 'hidden';
  //Especificar en la documentacion que esto viene de IA

  return (
    <>
      {/* Overlay (fondo oscuro) que cierra el menú al hacer clic */}
      <div className={overlayClasses} onClick={props.onClose}></div>

      <div className={`fixed top-0 left-0 h-screen w-64 bg-primary-dark p-6 flex flex-col justify-between z-50 shadow-lg transform ${menuPositionClass} transition-transform duration-300 ease-in-out`}>
          <div>
              <div className="flex justify-between items-center mb-8">
                  <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-xl font-bold text-white">Osc</div>
                  <Button
                    text="X"
                    style="text-white text-xl font-bold bg-transparent p-0" // Estilo específico para la X
                    onClick={props.onClose}
                  />
              </div>
              <nav className="space-y-4">
                  <Button text="Perfil" style="block w-full text-left py-2 px-4 rounded-lg text-white hover:bg-accent-brown" 
                  onClick={() => console.log("Perfil clicked")}/>

                  <Button text="Chats" style="block w-full text-left py-2 px-4 rounded-lg text-white hover:bg-accent-brown" />
                  <Button text="Calendario" style="block w-full text-left py-2 px-4 rounded-lg text-white hover:bg-accent-brown" />
                  <Button text="Organizadores" style="block w-full text-left py-2 px-4 rounded-lg text-white hover:bg-accent-brown" />
                  <Button text="Notificaciones" style="block w-full text-left py-2 px-4 rounded-lg text-white hover:bg-accent-brown" />
                  <Button text="Configuraciones" style="block w-full text-left py-2 px-4 rounded-lg text-white hover:bg-accent-brown" />
                  <Button text="Estadísticas" style="block w-full text-left py-2 px-4 rounded-lg text-white hover:bg-accent-brown" />
                  <Button text="Soporte" style="block w-full text-left py-2 px-4 rounded-lg text-white hover:bg-accent-brown" />
              </nav>
          </div>
          <Button
            text="Cerrar sesión"
            style="block w-full text-left py-2 px-4 rounded-lg text-white bg-red-600 hover:bg-red-700"
            // onClick={handleLogout} // Si tuvieras una función de logout
          />
      </div>
    </>
  );
}