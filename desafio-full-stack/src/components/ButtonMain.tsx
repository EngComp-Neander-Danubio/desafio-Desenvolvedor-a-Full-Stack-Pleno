interface ButtonProps {
    label: string;
    variant?: "primary" | "secondary";
    onClick?: () => void; // Adicionado para tornar o botão mais reutilizável
    className?: string; // Para permitir customização adicional
}

export default function ButtonMain({
    label,
    variant = "secondary",
    onClick,
    className = ""
}: ButtonProps) {
    const styles = {
        primary: "bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700",
        secondary: "bg-gray-600 text-white px-6 py-3 rounded hover:bg-gray-700"
    };

    return (
        <button
            onClick={onClick}
            className={`${styles[variant]} ${className} h-[45px] w-[149px] items-center text-center border rounded-[8px]`}
        >
            {label}
        </button>
    );
}
