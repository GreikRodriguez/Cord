import Button from "../common/Button";
import TextInput from "../common/TextInput";
import LogoAcorde from "../common/LogoAcorde";
import LetrasAcorde from "../common/LetrasAcorde";
import { useNavigate } from '@tanstack/react-router';

export default function LogInPage() {

const navigate = useNavigate();

  const handleHome = () => {
    // Redirige al usuario a la página de registro
    navigate({ to: '/home' });
  };

    return (
        <div className="flex max-w-screen h-screen items-center justify-center bg-[#F1EEF9]">
            <div className="max-w-screen-xl max-h-screen">
                <div className="text-center mb-20">
                    <LogoAcorde style="mx-auto my-auto max-w-60 max-h-60 mb-4" src="src/assets/imgs/LogoAcordeAzul.png"/>
                    <LetrasAcorde style="text-3xl font-bold text-[#2C558D]" text="Bienvenido"/>
                </div>
                <div>
                    <form>
                        <div className="mb-4">
                            <TextInput id="event-name" text="Dijiste su nombre" inputType="text" style="mb-4" />
                        </div>
                        <div className="mb-6">
                            <TextInput id="event-name" text="Password" inputType="text" style="mb-4" />
                        </div>
                        <div className="flex items-center justify-center">
                            <Button style="w-full bg-[#D3B382] hover:bg-[#E4C581] text-zinc-800 hover:text-zinc-600 font-bold py-3 rounded-lg text-lg mb-6" text="Iniciar Sesion" onClick={handleHome} />
                        </div>
                        <label className="text-center block text-gray-700 text-sm font-semibold mb-2">¿No tienes una cuenta? <a href="/register" className="text-[#B99F7B] hover:text-[#A38D6D]">Registrate</a></label>

                    </form>
                </div>
            </div>
        </div>
    );
}
//El label funciona como un "a" que redicreciona a registro porque tiene un "a" con una hiper referencia a registro