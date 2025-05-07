export const InputSearch = () => {
    return (
            <div className="flex items-center w-[279px] h-[40px] gap-2 border-[1px] border-[#89919B] rounded-[8px] p-[10px] bg-white">
                <input
                    type="text"
                    name="price"
                    id="price"
                    className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm"
                    placeholder="0.00"
                />
            </div>
    );
};
