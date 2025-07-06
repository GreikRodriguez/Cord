import TextInput from "../common/TextInput"; 
import Button from "../common/Button";
import { useNavigate } from '@tanstack/react-router';

export default function CreateEventPage() {

    const navigate = useNavigate();
        
          const handleAnyClick = () => {
            // Redirige al usuario a la página de registro
            navigate({ to: '/home' });
          };

    return (
<div className="min-h-screen bg-[#F1EEF9] p-4">
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-[#3B3D5E] text-xl font-semibold mb-4">Detalles del Evento</h2>
        <p className="text-gray-600 mb-6">Por favor añada detalles cruciales adecuadamente.</p>

        <TextInput id="event-name" text="Nombre" inputType="text" style="mb-4" />

        <TextInput id="event-start-date" text="Fecha de inicio" inputType="date" style="mb-6" />

        <div className="mb-6">
            <p className="text-gray-700 text-sm font-semibold mb-2">Opcional</p>
            <div className="flex space-x-4">
                <Button style="flex-1 bg-[#B99F7B] hover:bg-[#A38D6D] text-white font-bold py-2 px-4 rounded-full" text="Fecha de finalización"/>

                <Button style="flex-1 bg-[#B99F7B] hover:bg-[#A38D6D] text-white font-bold py-2 px-4 rounded-full" text="Duracion aproximada"/>
            </div>
        </div>

        <div className="mb-6">
            <div className="h-32 bg-[#F1EEF9] rounded-lg border border-dashed border-gray-300 flex items-center justify-center text-gray-500">
            </div>
            <Button style="mt-4 w-full bg-[#B99F7B] hover:bg-[#A38D6D] text-white font-bold py-2 px-4 rounded-full" text="Subir imagen"/>
        </div>

        <div className="mb-6 flex items-center">
            <div className="w-10 h-10 bg-[#F1EEF9] rounded-full mr-3"></div> <div>
                <p className="text-gray-800 font-semibold">Privacidad</p>
                <p className="text-sm text-gray-500">Escoje la privacidad del evento</p>
            </div>
        </div>

        <div className="mb-6">
            <label htmlFor="event-description" className="block text-gray-700 text-sm font-semibold mb-2">Descripcion</label>
            <p className="text-gray-600 mb-2">Por favor añada todos los detalles adecuadamente.</p>
           <TextInput id="event-description" text="Descripcion" inputType="textarea" style="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#F1EEF9]"/>
        </div>

        <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2">Puedes añadir fotos</label>
            <div className="w-32 h-32 bg-[#F1EEF9] rounded-lg border border-dashed border-gray-300 flex items-center justify-center text-gray-500">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-4 4 4 4-4v4zM7 8a1 1 0 11-2 0 1 1 0 012 0zm7-2a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"></path>
                </svg>
                <span className="ml-2">Fotos</span>
            </div>
        </div>

        <div className="mb-6">
            <p className="text-gray-700 text-sm font-semibold mb-2">Invitados</p>
            <p className="text-gray-600 mb-2">Cuantos invitados espera?</p>
            <div className="flex space-x-4">
                 <TextInput id="event-max-inv" text="Max Inv" inputType="number" style="flex-1 shadow-sm appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#F1EEF9]"/>
                <TextInput id="event-min-inv" text="Min Inv" inputType="number" style="flex-1 shadow-sm appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#F1EEF9]"/>
            </div>
        </div>
    </div>

    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-[#3B3D5E] text-xl font-semibold mb-4">Ubicacion</h2>
        <p className="text-gray-600 mb-6">Por favor añada la locacion exacta para sus invitados</p>
        <div className="flex items-center bg-[#F1EEF9] p-3 rounded-lg mb-6">
            <svg className="w-6 h-6 mr-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
            </svg>
            <TextInput id="event-location" text="Ubicacion" inputType="text" style="flex-1 shadow-sm appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#F1EEF9]"/>
        </div>
        <p className="text-gray-600 mb-4">Quieres añadir un link externo?</p>
       <Button style="w-full bg-[#B99F7B] hover:bg-[#A38D6D] text-white font-bold py-2 px-4 rounded-full" text="Añadir link externo"/>
    </div>

    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-[#3B3D5E] text-xl font-semibold mb-4">Categoria</h2>
        <p className="text-gray-600 mb-6">Por favor añada etiquetas o categorías en las cuales su evento se encuentra</p>
        <Button style="w-full bg-[#B99F7B] hover:bg-[#A38D6D] text-white font-bold py-2 px-4 rounded-full" text="Agregar categoria"/>
    </div>

    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-[#3B3D5E] text-xl font-semibold mb-4">Inf. Contacto</h2>
        <p className="text-gray-600 mb-6">Es importante que añadas un numero de telefono asignado para el evento y diferentes medios.</p>
        <div className="space-y-4">
            <div className="flex items-center">
                <svg className="w-6 h-6 mr-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                <input type="text" placeholder="Numero" className="flex-1 shadow-sm appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#F1EEF9]"/>
            </div>
            <div className="flex items-center">
                <svg className="w-6 h-6 mr-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.577c0-2.533 1.554-3.922 3.777-3.922 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.56V10h2.773l-.443 2.89h-2.33V20C16.343 19.128 20 14.991 20 10z" clipRule="evenodd"></path>
                </svg>
                <input type="text" placeholder="Facebook" className="flex-1 shadow-sm appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#F1EEF9]"/>
            </div>
            <div className="flex items-center">
                <svg className="w-6 h-6 mr-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C6.914 0 3.864 1.144 1.464 3.543S0 8.086 0 11.171c0 3.085 1.144 6.136 3.543 8.536S8.086 22.342 11.171 22.342c3.085 0 6.136-1.144 8.536-3.543S22.342 11.171 22.342 8.086c0-3.085-1.144-6.136-3.543-8.536S11.171 0 10 0zm0 4.095c2.474 0 4.484 2.01 4.484 4.484S12.474 13.063 10 13.063 5.516 11.053 5.516 8.579 7.526 4.095 10 4.095zM4 18.25c-.276-.021-.55-.042-.821-.061C2.39 17.925 1.657 17.378 1.13 16.634c-.5-.73-.832-1.572-.991-2.434-.145-.765-.175-1.536-.175-2.308 0-4.072 3.308-7.379 7.379-7.379 4.072 0 7.379 3.308 7.379 7.379 0 .772-.03 1.543-.175 2.308-.159.862-.491 1.704-.991 2.434-.527.744-1.26 1.291-2.049 1.555-.271.019-.545.04-.821.061-2.062.146-4.124.146-6.186 0z" clipRule="evenodd"></path>
                </svg>
                <input type="text" placeholder="Instagram" className="flex-1 shadow-sm appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#F1EEF9]"/>
            </div>
            <div className="flex items-center">
                <svg className="w-6 h-6 mr-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0h8v12H6V4zm2 10a1 1 0 100-2 1 1 0 000 2zm3-3a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
                </svg>
                <input type="text" placeholder="Web" className="flex-1 shadow-sm appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#F1EEF9]"/>
            </div>
        </div>
    </div>

    <div className="flex justify-between mt-8">
        <Button style="bg-gray-500 hover:bg-[#A38D6D] text-white font-bold py-3 px-6 rounded-lg text-lg" text="Salir "/>
        <Button style="bg-[#B99F7B] hover:bg-[#A38D6D] text-white font-bold py-3 px-6 rounded-lg text-lg" text="Terminar" onClick={handleAnyClick}/>
    </div>
</div>


    );
}