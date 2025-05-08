import ButtonMain from "./ButtonMain";
import { InputSearch } from "./InputSearch";
import { RadioButton } from "./RadioButton";
interface Iprops {
    name: string;
    selectedIndex: number | null;
    handleRadioChange: (index: number) => void;
    setFilterWord: React.Dispatch<React.SetStateAction<string>>
}
export const NavbarMain: React.FC<Iprops> = ({
    name,
    selectedIndex,
    handleRadioChange,
    setFilterWord,
}) => {
    const options = ["Rastreados", "Outros"];
    return (
        <nav className="bg-primary text-black py-4 border-b border-blue-30 justify-center items-center">
            <div className="w-full max-w-[1108px] mx-auto flex justify-between items-center px-4">
                <h1 className="text-xl font-bold">{name}</h1>
                <div className="flex items-center gap-[20px]">
                    <div className="flex flex-row gap-[10px] items-center">
                        {options.map((option, index) => (
                            <RadioButton
                                key={index}
                                index={index}
                                isChecked={selectedIndex === index}
                                handleRadioChange={handleRadioChange}
                                option={option}
                            />
                        ))}
                    </div>
                    <div className="flex flex-row gap-[20px] items-center">
                        <InputSearch
                            label={""}
                            placeholder={"Buscar por placa ou frota"}
                            onChange={(e)=>{
                                setFilterWord(e.target.value)
                            }}
                        />
                        <ButtonMain label={"Novo"} variant="secondary" />
                    </div>
                </div>
            </div>
        </nav>
    );
};
