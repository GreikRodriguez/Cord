import Button from "../common/Button";
import NavBar from "../common/NavBar";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-[#F1EEF9]">
            <NavBar/>

            <div className="p-4">
                <Button style="w-full bg-[#B99F7B] hover:bg-[#A38D6D] text-white font-bold py-3 rounded-lg text-lg mb-6" text="Crear nuevo evento" />


                <div className="mb-6">
                    <h2 className="text-[#3B3D5E] text-xl font-semibold mb-3">Eventos activos</h2>
                    <div className="space-y-3">
                        <div className="bg-white rounded-lg p-4 shadow-md h-24"></div>
                        <div className="bg-white rounded-lg p-4 shadow-md h-24"></div>
                        <div className="bg-white rounded-lg p-4 shadow-md h-24"></div>
                    </div>
                </div>

                <div>
                    <h2 className="text-[#3B3D5E] text-xl font-semibold mb-3">Eventos pasados</h2>
                    <div className="space-y-3">
                        <div className="bg-white rounded-lg p-4 shadow-md h-24"></div>
                        <div className="bg-white rounded-lg p-4 shadow-md h-24"></div>
                        <div className="bg-white rounded-lg p-4 shadow-md h-24"></div>
                    </div>
                </div>
            </div>
        </div>

    );
}