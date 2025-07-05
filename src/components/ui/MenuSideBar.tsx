
interface SideMenuProps {
  onClose: () => void; // Prop para cerrar el menú
}

const SideMenu: React.FC<SideMenuProps> = ({ onClose }) => {
  return (
    <div className="min-h-screen flex">
        <div className="w-64 bg-primary-dark p-6 flex flex-col justify-between">
            <div>
                <div className="flex justify-between items-center mb-8">
                    <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-xl font-bold text-white">Osc</div>
                    <button className="text-white text-xl font-bold" onClick={onClose}>X</button>
                </div>
                <nav className="space-y-4">
                    <button className="block w-full text-left py-2 px-4 rounded-lg text-white hover:bg-accent-brown transition-colors duration-200">Perfil</button>
                    <button className="block w-full text-left py-2 px-4 rounded-lg text-white hover:bg-accent-brown transition-colors duration-200">Chats</button>
                    <button className="block w-full text-left py-2 px-4 rounded-lg text-white hover:bg-accent-brown transition-colors duration-200">Calendario</button>
                    <button className="block w-full text-left py-2 px-4 rounded-lg text-white hover:bg-accent-brown transition-colors duration-200">Organizadores</button>
                    <button className="block w-full text-left py-2 px-4 rounded-lg text-white hover:bg-accent-brown transition-colors duration-200">Notificaciones</button>
                    <button className="block w-full text-left py-2 px-4 rounded-lg text-white hover:bg-accent-brown transition-colors duration-200">Configuraciones</button>
                    <button className="block w-full text-left py-2 px-4 rounded-lg text-white hover:bg-accent-brown transition-colors duration-200">Estadísticas</button>
                    <button className="block w-full text-left py-2 px-4 rounded-lg text-white hover:bg-accent-brown transition-colors duration-200">Soporte</button>
                </nav>
            </div>
            <button className="block w-full text-left py-2 px-4 rounded-lg text-white bg-red-600 hover:bg-red-700 transition-colors duration-200">Cerrar sesión</button>
        </div>
        {/* Esto sería parte de un layout que envuelve el contenido principal */}
        <div className="flex-grow bg-gray-100"></div>
    </div>
  );
};

export default SideMenu;