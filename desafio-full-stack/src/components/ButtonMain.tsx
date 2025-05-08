interface ButtonProps {
    label: string;
    variant?: "primary" | "secondary";
    onClick?: () => void;
    className?: string;
}

export default function ButtonMain({
    label,
    variant = "secondary",
    onClick,
    className = ""
}: ButtonProps) {
    const styles = {
        primary: "bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-900",
        secondary: "bg-gray-600 text-white px-6 py-3 rounded hover:bg-gray-700"
    };

    return (
        <button
            id="button"
            onClick={onClick}
            className={`${styles[variant]} ${className} h-[45px] w-[149px] items-center text-center border rounded-[8px]`}
        >
            {label}
        </button>
    );
}
