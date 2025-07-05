import LogoAcorde from "../common/LogoAcorde";
import LetrasAcorde from "../ui/LetrasAcorde";

export default function AcordePage() {
    return (
    <div className="min-h-screen min-w-screen flex items-center justify-center bg-[#EBEAFC]">
        <div className="text-center">
            <LogoAcorde style="mx-auto my-auto max-w-60 max-h-60 mb-4" src="src/assets/imgs/LogoAcordeAzul.png"/>
            <LetrasAcorde style="text-6xl font-bold text-[#2C558D]" text="ACORDE"/>
        </div>
    </div>
    );
}