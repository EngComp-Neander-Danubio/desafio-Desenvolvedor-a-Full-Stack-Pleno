import ButtonMain from './ButtonMain';
import { InputSearch } from './InputSearch';
import { RadioButton } from './RadioButton';
interface Iprops {
    name: string;
    selectedIndex: number | null;
    handleRadioChange: (index: number) => void;
    setFilterWord: React.Dispatch<React.SetStateAction<string>>;
}
export const NavbarMain: React.FC<Iprops> = ({
    name,
    selectedIndex,
    handleRadioChange,
    setFilterWord,
}) => {
    const options = ['Rastreados', 'Todos'];
    return (
        <nav
            id="nav-navbar"
            className="bg-primary h-[49px] text-white border-blue-30"
        >
            <div className="w-full max-w-[1700px] mx-auto px-4 flex flex-col lg:flex-row justify-between items-center lg:items-center gap-4 lg:gap-0">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:gap-[100px] w-full lg:w-auto">
                    <h1 className="text-xl font-bold">{name}</h1>
                    <div className="flex flex-wrap gap-4">
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
                </div>
                <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-center w-full lg:w-auto sm:justify-between">
                    <InputSearch
                        label=""
                        placeholder="Buscar por placa ou frota"
                        onChange={e => setFilterWord(e.target.value)}
                    />
                    <ButtonMain label="Novo" />
                </div>
            </div>
        </nav>
    );
};
