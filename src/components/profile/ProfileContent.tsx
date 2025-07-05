import Button from "../common/Button";


export default function ProfileContent() {
  return (
    <div className="p-6 text-center">
        <div className="w-32 h-32 rounded-full bg-light-bg border-4 border-accent-brown mx-auto mb-4 flex items-center justify-center">
            {/* Placeholder para la imagen de perfil */}
            {/* <img src="/images/profile_avatar.png" alt="Profile Avatar" className="w-full h-full rounded-full object-cover" /> */}
            <span className="text-gray-500 text-sm">Foto de Perfil</span>
        </div>
        <p className="text-2xl font-bold text-primary-dark mb-4">Nombre Usuario</p>
        <div className="flex justify-center space-x-6 mb-8">
            <div>
                <p className="text-xl font-bold text-primary-dark">0</p>
                <p className="text-gray-600">amigos</p>
            </div>
            <div>
                <p className="text-xl font-bold text-primary-dark">0</p>
                <p className="text-gray-600">Publicaciones</p>
            </div>
            <div>
                <p className="text-xl font-bold text-primary-dark">0</p>
                <p className="text-gray-600">Organizaciones</p>
            </div>
        </div>

        <div className="space-y-4">
            {/* Usando el componente Button */}
            <Button
              text="Información personal"
              style="w-full bg-accent-brown hover:bg-[#A38D6D] text-white py-3 rounded-full shadow-md"
            />
            <Button
              text="Información de contacto"
              style="w-full bg-accent-brown hover:bg-[#A38D6D] text-white py-3 rounded-full shadow-md"
            />
            <Button
              text="Logros"
              style="w-full bg-accent-brown hover:bg-[#A38D6D] text-white py-3 rounded-full shadow-md"
            />
        </div>
    </div>
  );
}