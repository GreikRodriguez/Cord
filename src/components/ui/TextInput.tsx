interface TextInputProps {
    style: string;
    text: string;
    id: string;
    inputType: string; 
}

export default function TextInput(props: TextInputProps) {
    return (
        <div className="mb-4">
            <label htmlFor={props.id} className="block text-gray-700 text-sm font-semibold mb-2">{props.text}</label>
            <input type={props.inputType} id={props.id} className={`shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none 
            focus:shadow-outline bg-[#F1EEF9] ${props.style}`} />
        </div>
    );
}