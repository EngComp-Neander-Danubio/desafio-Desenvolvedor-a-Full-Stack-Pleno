interface ButtonProps {
    label: string;
    onClick?: () => void;
}
export default function ButtonMain({ label, onClick }: ButtonProps) {
    return (
        <button
            id="button"
            onClick={onClick}
            className={`bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-900 h-[45px] w-[149px] items-center text-center border rounded-[8px]`}
        >
            {label}
        </button>
    );
}
