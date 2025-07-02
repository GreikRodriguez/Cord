import Button from "./Button";


export default function NavBar() {
  return (
    <div className="bg-[#3B3D5E] p-4 flex justify-between items-center rounded-b-lg">
        <Button style="text-white text-lg font-semibold bg-[#B99F7B] rounded-full px-4 py-2" text="Menú"/>
    </div>
  );
}