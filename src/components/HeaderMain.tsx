interface Iprops {
    name: string;
}
export const HeaderMain: React.FC<Iprops> = ({ name }) => {
    return (
        <nav className="flex text-white bg-[#001E2E] h-[49px] items-center justify-center">
            <div className="w-full max-w-[1700px] mx-auto px-4 flex justify-between items-center">
                <h1 id="h1-header-main" className="text-xl font-bold">
                    {name}
                </h1>
            </div>
        </nav>
    );
};
