interface Ipros {
    children: React.ReactNode;
}

export const CardMain: React.FC<Ipros> = ({ children }) => {
    return (
        <div className="flex flex-row w-full top-[173px] left-[44px] bg-customBackground border-[1px] border-customBorder rounded-[16px]">
            {children}
        </div>
    );
};
